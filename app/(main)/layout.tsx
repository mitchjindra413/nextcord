import {SidebarProvider} from '@/components/ui/sidebar';
import ServersSideBar from '@/components/nav/server/ServersSideBar';

const ChannelsLayout = ({children}: {children: React.ReactNode}) => {

    return (
        <SidebarProvider>
            <section>
                {children}
            </section>
        </SidebarProvider>
    );
};

export default ChannelsLayout;