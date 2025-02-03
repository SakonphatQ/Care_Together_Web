'use client';

import * as z from 'zod';
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import PropTypes from 'prop-types';
import { Description } from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";

const formSchema = z.object({
    Email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Please enter a valid Email' }),
    password: z.string().min(1, { message: 'Password is required' }),
});

const LoginForm = ({ params }) => {
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    useEffect(() => {
        const fetchParams = async () => {
            const resolvedParams = await params;
            const foundPost = posts.find((post) => post.id === resolvedParams.id);
            setPost(foundPost);
            if (foundPost) {
                form.reset({
                    email: foundPost.email,
                    password: foundPost.password,
                });
            }
        };

        fetchParams();
    }, [params, form]);

    const handleSubmit = (data) => {
        router.push('/');
    };

    return (
        <card>
            <cardHeader>
                <cardTitle>Login</cardTitle>
                <cardDescription>Enter your email and password to login</cardDescription>
            </cardHeader>
            <CardContent className="space-y-2">
                <Form {...from}>
                    <from onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
                                        Email
                                    </FormLabel>
                                    <FormControl>
                                        <Input className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible: ring-0 text-black focus-visible: ring-offset-0' placeholder='Enter Email' {...field} />
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
                                        <Input className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible: ring-0 text-black focus-visible: ring-offset-0' placeholder='Enter Password' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <button className="w-full">Login</button>
                    </from>
                </Form>
            </CardContent>
        </card>
    );
};

LoginForm.propTypes = {
    params: PropTypes.shape({
        id: PropTypes.string.isRequired,
    }).isRequired,
};

export default LoginForm;