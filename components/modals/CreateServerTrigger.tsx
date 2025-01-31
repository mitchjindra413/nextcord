import NavToolTip from '@/components/nav/NavToolTip';
import {Plus} from 'lucide-react'
import {DialogTrigger} from '@/components/ui/dialog';

const CreateServerTrigger = () => {

    return (
        <NavToolTip message={"add a server"} side={"right"} align={"center"}>
            <DialogTrigger className={"flex h-[48px] w-[48px] rounded-full hover:rounded-[16px] transition overflow-hidden items-center justify-center bg-neutral-700 hover:bg-indigo-600"}>
                <div >
                    <Plus className={"text-white"}/>
                </div>
            </DialogTrigger>
        </NavToolTip>
    );
};

export default CreateServerTrigger;