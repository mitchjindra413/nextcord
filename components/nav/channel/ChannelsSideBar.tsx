import {Channel} from '@prisma/client';

const ChannelsSideBar = ({channels, serverName}: {channels: Channel[], serverName: string}) => {
    const textChannels: Channel[] = [];
    const audioChannels: Channel[] = [];
    const videoChannels: Channel[] = [];

    return (
        <nav className={"h-screen w-[238px] bg-sidebar p-2"}>
            <div>
                <h2>{serverName}</h2>
            </div>
        </nav>
    );
};

export default ChannelsSideBar;