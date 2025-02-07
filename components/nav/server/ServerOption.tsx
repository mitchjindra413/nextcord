"use client";

import NavToolTip from '@/components/nav/server/NavToolTip';
import {Button} from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import {cn} from '@/lib/utils';
import {useParams} from 'next/navigation';

const ServerOption = ({name, imageUrl, id}: {name: string, imageUrl: string, id: string}) => {
    const params = useParams();

    return (
        <Link href={`/servers/${id}`} className={"group"}>
            <NavToolTip message={name} side={"right"} align={"center"}>
                <div className={"relative flex justify-center items-center"}>
                    <div className={cn(
                        "absolute left-0 rounded-r-full bg-sidebar-accent-foreground transition-all w-[4px]",
                        params?.serverId !== id && "group-hover:h-[20px]",
                        params?.serverId === id ? "h-[36px]" : "h-[8px]"
                    )}/>
                    <Button type={"button"} className={cn("navbar-server-button hover:bg-indigo-600",
                        params?.serverId === id ? "rounded-[16px]" : "rounded-full"
                    )}>
                        {imageUrl == "" ?
                            <p>{name.at(0)?.toUpperCase()}</p> :
                            <Image className={"w-full h-full"} src={imageUrl} alt={name + " image"}/>
                        }
                    </Button>
                </div>
            </NavToolTip>
        </Link>
    );
};

export default ServerOption;