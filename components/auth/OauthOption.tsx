import {Button} from '@/components/ui/button';
import type {OauthOption} from '@/types/authTypes';

const OauthOption = ({ logo: Logo, company, action }: OauthOption) => {
    return (
        <Button
            className="space-x-3 w-full"
            onClick={action}
        >
            <Logo />
            <span>Login with {company}</span>
        </Button>
    );
};

export default OauthOption;