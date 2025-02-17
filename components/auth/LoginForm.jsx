'use client';

import * as z from 'zod';
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { 
    FormField, 
    FormItem, 
    FormLabel, 
    FormControl, 
    FormMessage 
} from '@/components/ui/form';
import { 
    Card, 
    CardContent, 
    CardDescription, 
    CardHeader, 
    CardTitle 
} from "../ui/card";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import PropTypes from 'prop-types';
import { useRouter } from "next/navigation";

// Define the schema properly
const formSchema = z.object({
    email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Please enter a valid Email' }),
    password: z.string().min(1, { message: 'Password is required' }),
});

const LoginForm = ({ params }) => {
    const router = useRouter();
    const [post, setPost] = useState(null);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    useEffect(() => {
        const fetchParams = async () => {
            if (!params?.id) return;
            // Make sure posts is defined or fetched
            const response = await fetch(`/api/posts/${params.id}`);
            const foundPost = await response.json();

            if (foundPost) {
                setPost(foundPost);
                form.reset({
                    email: foundPost.email || '',
                    password: foundPost.password || '',
                });
            }
        };

        fetchParams();
    }, [params, form]);

    const handleSubmit = (data) => {
        console.log("Form Submitted:", data);
        router.push('/');
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Enter your email and password to login</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <FormProvider {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
                                        Email
                                    </FormLabel>
                                    <FormControl>
                                        <Input 
                                            className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0' 
                                            placeholder='Enter Email' 
                                            {...field} 
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
                                        Password
                                    </FormLabel>
                                    <FormControl>
                                        <Input 
                                            type="password"
                                            className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0' 
                                            placeholder='Enter Password' 
                                            {...field} 
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full">Login</Button>
                    </form>
                </FormProvider>
            </CardContent>
        </Card>
    );
};

LoginForm.propTypes = {
    params: PropTypes.shape({
        id: PropTypes.string.isRequired,
    }).isRequired,
};

export default LoginForm;
