'use client'
import {Button} from '@/components/ui/button';
import ServerFormError from '@/components/auth/ServerFormError';
import {useActionState} from 'react';
import {FcGoogle} from 'react-icons/fc';
import {googleLogin} from '@/actions/auth/googleLogin';

const GoogleOAuth = () => {
    const [error, dispatchGoogle] = useActionState(googleLogin, undefined);

    return (
        <form action={dispatchGoogle}>
            <Button
                className="space-x-3 w-full"
                variant={'outline'}
            >
                <FcGoogle/>
                <span>Log in with Google</span>
            </Button>
            {
                error&& <ServerFormError errorMessage={error?.error} />
            }
        </form>
    );
};

export default GoogleOAuth;