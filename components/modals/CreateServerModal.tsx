'use client';

import {Dialog, DialogContent, DialogHeader, DialogTitle} from '@/components/ui/dialog';
import {useForm} from 'react-hook-form';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form';
import {z} from "zod";
import {CreateServerSchema} from '@/schemas/server';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import createServer from '@/actions/server/createServer';
import CreateServerTrigger from '@/components/modals/CreateServerTrigger';
import {useState} from 'react';
import ResponseFormError from '@/components/error/ResponseFormError';
import {zodResolver} from '@hookform/resolvers/zod';

const CreateServerModal = () => {
    const form = useForm<z.infer<typeof CreateServerSchema>>({
        defaultValues: {
            name: "",
            image: undefined
        },
        resolver: zodResolver(CreateServerSchema),
        mode: 'onBlur'
    });
    const formState = form.formState;
    const [error, setError] = useState("");

    const onSubmit = async (data: z.infer<typeof CreateServerSchema>) => {
       createServer(data).then((res) => {
           if(res.status === "error") {
               setError(res.message);
           } else {
               setError("");
           }
       })
    };

    console.log(formState.errors)
    return (
        <Dialog>
            <CreateServerTrigger />
            <DialogContent>
                <DialogHeader className={"items-center"}>
                    <DialogTitle>
                        Create a Server
                    </DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        <FormField
                            name={"name"}
                            control={form.control}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Server Name</FormLabel>
                                    <FormControl>
                                        <Input {...field}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name={"image"}
                            control={form.control}
                            render={({ field: { value, onChange, ...fieldProps } }) => (
                                <FormItem>
                                    <FormLabel>Server Image</FormLabel>
                                    <FormControl>
                                        <Input
                                            type={'file'}
                                            accept={"image"}
                                            {...fieldProps}
                                            onChange={(event) =>
                                                onChange(event.target.files && event.target.files[0])
                                            }
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button disabled={formState.isSubmitting} className={"w-100"}>
                            {formState.isSubmitting ? "Loading..." : "Create"}
                        </Button>
                        {
                            error&& <ResponseFormError errorMessage={error} />
                        }
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default CreateServerModal;