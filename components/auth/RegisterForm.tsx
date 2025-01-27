'use client'

import {Form, FormField, FormLabel, FormItem, FormControl, FormMessage} from '@/components/ui/form';
import {z} from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {RegisterUserSchema} from '@/schemas/auth';
import {registerUser} from '@/actions/auth/registerUser';
import {useState} from 'react';

const RegisterForm = () => {
    const form = useForm<z.infer<typeof RegisterUserSchema>>({
        resolver: zodResolver(RegisterUserSchema),
        mode: 'onBlur',
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: ""
        }
    });
    const formState = form.formState;
    const [error, setError] = useState("");

    const onSubmit = async (data: z.infer<typeof RegisterUserSchema>) => {
        registerUser(data).then((res) => {
            if(res.error) {
                setError(res.error);
            }
            if(res.success) {
                setError("");
            }
        });
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" >
                <FormField
                    name={"email"}
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    type={"email"}
                                />
                            </FormControl>
                            <FormMessage className={"min-h-2"}/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name={"password"}
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    type={'password'}
                                />
                            </FormControl>
                            <FormMessage className={"min-h-2"}/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name={"confirmPassword"}
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    type={'password'}
                                />
                            </FormControl>
                            <FormMessage className={"min-h-[20px]"}/>
                        </FormItem>
                    )}
                />
                <Button className={"w-full"} disabled={formState.isSubmitting || !formState.isValid} type={"submit"}>
                    {form.formState.isSubmitting ? "Loading ..." : "Register"}
                </Button>
                {error&& (
                    <p className={"text-red-700"}>{error}</p>
                )}
            </form>
        </Form>
    );
};

export default RegisterForm;