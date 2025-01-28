import {auth} from '@/auth';
import SignOutButton from '@/components/auth/SignOutButton';

const ChannelsPage = async () => {
    const session = await auth();
    return (
        <section>
            <h1>{session?.user?.email}</h1>
            <SignOutButton/>
        </section>
    );
};

export default ChannelsPage;