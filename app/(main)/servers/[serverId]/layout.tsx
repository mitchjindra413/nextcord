import ChannelsSideBar from '@/components/nav/channel/ChannelsSideBar';

const ServerIdLayout = ({children}: {children: React.ReactNode}) => {

    return (
        <section>
            <ChannelsSideBar/>
            {children}
        </section>
    );
};

export default ServerIdLayout;