'use client';
import {Button} from '@/components/ui/button';
import {useActionState} from 'react';
import signOutUser from '@/actions/auth/signOutUser';

const SignOutButton = () => {
    const [error, dispatchSignOut] = useActionState(signOutUser, undefined);
    return (
        <form action={dispatchSignOut}>
            <Button>
                Sign Out
            </Button>
        </form>
    )
};

export default SignOutButton;