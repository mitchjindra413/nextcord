import {auth} from '@/auth';
import SignOutButton from '@/components/auth/SignOutButton';
import {SidebarProvider} from '@/components/ui/sidebar';
import ChannelsSideBar from '@/components/nav/channel/ChannelsSideBar';

const ChannelsPage = () => {

    return (
        <section>
            <h1>Hello</h1>
            <SignOutButton/>
        </section>
    );
};

export default ChannelsPage;