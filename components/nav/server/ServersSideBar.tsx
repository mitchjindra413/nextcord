
import CreateServerModal from '@/components/modals/CreateServerModal';
import {ModeToggle} from '@/components/nav/ModeToggle';
import fetchServers from '@/actions/server/fetchServers';
import ServerOption from '@/components/nav/server/ServerOption';
import {Separator} from '@/components/ui/separator';
import {ScrollArea, ScrollBar} from '@/components/ui/scroll-area';



const ServersSideBar = async () => {
    const serverResult = await fetchServers();
    const servers = serverResult.servers ?? [];

    return (
        // <Sidebar>
        //     <SidebarGroup className={"flex items-center"}>
        //         <CreateServerModal/>
        //     </SidebarGroup>
        //     <SidebarSeparator/>
        //
        //     <SidebarContent className={"flex items-center mt-2"}>
        //         {servers.map( (server) => (
        //             <ServerOption
        //                 key={server.id}
        //                 name={server.name}
        //                 imageUrl={server.imageUrl || ""}
        //                 id={server.id}
        //             />
        //         ))}
        //     </SidebarContent>
        //
        //     <SidebarFooter>
        //         <ModeToggle/>
        //     </SidebarFooter>
        // </Sidebar>
        <nav className={"flex flex-col items-center w-[74px] h-screen bg-sidebar-server py-2 space-y-2"}>
            <CreateServerModal/>
            <Separator className={"bg-sidebar-accent h-[3px] w-[40px]"}/>

            <ScrollArea className={"flex-1 w-full"}>
                {servers.map( (server) => (
                    <div key={server.id} className={"py-1"}>
                        <ServerOption
                            name={server.name}
                            imageUrl={server.imageUrl || ""}
                            id={server.id}
                        />
                    </div>
                ))}
            </ScrollArea>
            <div className={"mt-auto"}>
                <ModeToggle/>
            </div>
        </nav>
    );
};

export default ServersSideBar;