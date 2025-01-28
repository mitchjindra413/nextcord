import {auth} from '@/auth';

const ChannelsPage = async () => {
    const session = await auth();
    return (
        <section>
            <h1>{session?.user?.email}</h1>
        </section>
    );
};

export default ChannelsPage;