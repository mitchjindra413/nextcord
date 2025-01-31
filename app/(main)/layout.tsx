import {SidebarProvider} from '@/components/ui/sidebar';
import NavBar from '@/components/nav/NavBar';

const ChannelsLayout = ({children}: {children: React.ReactNode}) => {

    return (
        <SidebarProvider>
            <NavBar/>
            <main>
                {children}
            </main>
        </SidebarProvider>
    );
};

export default ChannelsLayout;