'use client';
import {Sidebar} from '@/components/ui/sidebar';
import ServersSideBar from '@/components/nav/server/ServersSideBar';

const NavBar = () => {
    return (
        <Sidebar>
            <ServersSideBar/>

        </Sidebar>
    );
};

export default NavBar;