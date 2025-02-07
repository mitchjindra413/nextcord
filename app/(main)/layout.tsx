import ServersSideBar from '@/components/nav/server/ServersSideBar';


const ChannelsLayout = ({children}: {children: React.ReactNode}) => {

    return (
        <div className={"flex"}>
            <ServersSideBar/>
            <section className={"w-full h-screen"}>
                {children}
            </section>
        </div>
    );
};

export default ChannelsLayout;