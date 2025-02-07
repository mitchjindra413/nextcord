import ChannelsSideBar from '@/components/nav/channel/ChannelsSideBar';
import fetchServer from '@/actions/server/fetchServer';
import {notFound} from 'next/navigation';

const ServerIdLayout = async ({children, params}: {children: React.ReactNode, params: {serverId: string}}) => {
    const server = await fetchServer(params.serverId);

    if(!server) {
        throw notFound();
    }

    return (
        <section className={"flex"}>
            <ChannelsSideBar channels={server.channels} serverName={server.name}/>
            {children}
        </section>
    );
};

export default ServerIdLayout;