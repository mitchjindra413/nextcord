import NavToolTip from '@/components/nav/server/NavToolTip';
import {Plus} from 'lucide-react'
import {DialogTrigger} from '@/components/ui/dialog';

const CreateServerTrigger = () => {

    return (
        <div>
            <NavToolTip message={"add a server"} side={"right"} align={"center"}>
                <DialogTrigger className={"navbar-server-button rounded-full"}>
                    <div >
                        <Plus/>
                    </div>
                </DialogTrigger>
            </NavToolTip>
        </div>
    );
};

export default CreateServerTrigger;