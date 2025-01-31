'use client';

import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from '@/components/ui/dialog';
import {useForm} from 'react-hook-form';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form';
import {z} from "zod";
import {CreateServerSchema} from '@/schemas/server';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import createServer from '@/actions/server/createServer';
import { FiPlus } from "react-icons/fi";
import CreateServerTrigger from '@/components/modals/CreateServerTrigger';

const CreateServerModal = () => {
    const form = useForm<z.infer<typeof CreateServerSchema>>({
        defaultValues: {
            name: "",
            image: undefined
        }
    });
    const formState = form.formState;

    const onSubmit = async (data: z.infer<typeof CreateServerSchema>) => {
        await createServer(data);
    };

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
                        <Button className={"w-100"}>
                            {formState.isSubmitting ? "Loading..." : "Create"}
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default CreateServerModal;