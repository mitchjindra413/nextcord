'use client'

import {Form, FormField, FormLabel, FormItem, FormControl, FormMessage} from '@/components/ui/form';
import {z} from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {LoginUserSchema} from '@/schemas/auth';
import {useState} from 'react';
import {loginUser} from '@/actions/auth/loginUser';
import ResponseFormError from '@/components/error/ResponseFormError';

const LoginForm = () => {
    const form = useForm<z.infer<typeof LoginUserSchema>>({
        mode: 'onSubmit',
        resolver: zodResolver(LoginUserSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const formState = form.formState;
    const [error, setError] = useState("");

    const onSubmit = async(data: z.infer<typeof LoginUserSchema>) => {
        loginUser(data).then((res) => {
            if(res.error) {
                setError(res.error);
            }
            if(res.success) {
                setError("");
            }
        });
    }

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
                                    type={"password"}
                                />
                            </FormControl>
                            <FormMessage className={"min-h-2"}/>
                        </FormItem>
                    )}
                />
                <Button className={"w-full"} disabled={formState.isSubmitting} type={"submit"}>
                    {form.formState.isSubmitting ? "Loading ..." : "Log in"}
                </Button>
                {error&& (
                    <ResponseFormError errorMessage={error} />
                )}
            </form>
        </Form>
    );
};

export default LoginForm;