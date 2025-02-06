import NavToolTip from '@/components/nav/server/NavToolTip';
import {Plus} from 'lucide-react'
import {DialogTrigger} from '@/components/ui/dialog';

const CreateServerTrigger = () => {

    return (
        <NavToolTip message={"add a server"} side={"right"} align={"center"}>
            <DialogTrigger className={"navbar-server-button"}>
                <div >
                    <Plus className={"text-white"}/>
                </div>
            </DialogTrigger>
        </NavToolTip>
    );
};

export default CreateServerTrigger;