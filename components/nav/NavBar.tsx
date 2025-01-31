import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarHeader,
    SidebarProvider,
    SidebarSeparator
} from '@/components/ui/sidebar';
import CreateServerModal from '@/components/modals/CreateServerModal';
import {ModeToggle} from '@/components/nav/ModeToggle';
import fetchServers from '@/actions/server/fetchServers';


const NavBar = async () => {
    const serverResult = await fetchServers();

    return (
        <SidebarProvider
            style={{
                "--sidebar-width": "72px",
                "--sidebar-width-mobile": "72px",
            }}
        >
            <Sidebar>
                <SidebarGroup className={"flex items-center"}>
                    <CreateServerModal/>
                </SidebarGroup>
                <SidebarSeparator/>

                <SidebarContent>
                    {/*{serverResult.servers?.map(*/}
                    {/*    <CreateServerTrigger />*/}
                    {/*)}*/}
                </SidebarContent>
                <ModeToggle/>
            </Sidebar>
        </SidebarProvider>
    );
};

export default NavBar;