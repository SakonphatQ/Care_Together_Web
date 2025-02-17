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

// ✅ Fix: Schema field names must match form fields
const formSchema = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Please enter a valid Email' }),
    password: z.string().min(1, { message: 'Password is required' }),
    confirmPassword: z.string().min(1, { message: 'Confirm Password is required' }),
});

const RegisterForm = ({ params }) => {
    const router = useRouter();
    const [post, setPost] = useState(null);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    useEffect(() => {
        const fetchParams = async () => {
            if (!params?.id) return;

            // ✅ Fix: Define posts properly (Example API call)
            const response = await fetch(`/api/posts/${params.id}`);
            const foundPost = await response.json();

            if (foundPost) {
                setPost(foundPost);
                form.reset({
                    name: foundPost.name || '',
                    email: foundPost.email || '',
                    password: '',
                    confirmPassword: '',
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
                <CardTitle>Register</CardTitle>
                <CardDescription>Sign up by adding the info below</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <FormProvider {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
                                        Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0' placeholder='Enter Name' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
                                        Email
                                    </FormLabel>
                                    <FormControl>
                                        <Input className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0' placeholder='Enter Email' {...field} />
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
                                        <Input type="password" className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0' placeholder='Enter Password' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
                                        Confirm Password
                                    </FormLabel>
                                    <FormControl>
                                        <Input type="password" className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0' placeholder='Enter Confirm Password' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full">Register</Button>
                    </form>
                </FormProvider>
            </CardContent>
        </Card>
    );
};

RegisterForm.propTypes = {
    params: PropTypes.shape({
        id: PropTypes.string.isRequired,
    }).isRequired,
};

export default RegisterForm;
