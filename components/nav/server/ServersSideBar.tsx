import {
    Sidebar,
    SidebarContent, SidebarFooter,
    SidebarGroup, SidebarProvider,
    SidebarSeparator
} from '@/components/ui/sidebar';
import CreateServerModal from '@/components/modals/CreateServerModal';
import {ModeToggle} from '@/components/nav/ModeToggle';
import fetchServers from '@/actions/server/fetchServers';
import ServerOption from '@/components/nav/server/ServerOption';


const ServersSideBar = async () => {
    const serverResult = await fetchServers();
    const servers = serverResult.servers ?? [];

    return (
        <Sidebar>
            <SidebarGroup className={"flex items-center"}>
                <CreateServerModal/>
            </SidebarGroup>
            <SidebarSeparator/>

            <SidebarContent className={"flex items-center mt-2"}>
                {servers.map( (server) => (
                    <ServerOption
                        key={server.id}
                        name={server.name}
                        imageUrl={server.imageUrl || ""}
                        id={server.id}
                    />
                ))}
            </SidebarContent>

            <SidebarFooter>
                <ModeToggle/>
            </SidebarFooter>
        </Sidebar>
    );
};

export default ServersSideBar;