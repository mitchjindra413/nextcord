import NavToolTip from '@/components/nav/server/NavToolTip';
import {Button} from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const ServerOption = ({name, imageUrl, id}: {name: string, imageUrl: string, id: string}) => {

    return (
        <Link href={`/app/(main)/servers/${id}`}>
            <NavToolTip message={name} side={"right"} align={"center"}>
                <Button className={"navbar-server-button hover:bg-indigo-600"}>
                    {imageUrl == "" ?
                        <p className={"text-2xl text-white"}>{name.at(0)?.toUpperCase()}</p> :
                        <Image className={"w-full h-full"} src={imageUrl} alt={name + " image"}/>
                    }
                </Button>
            </NavToolTip>
        </Link>
    );
};

export default ServerOption;