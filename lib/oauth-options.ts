import {OauthOption} from '@/types/authTypes';
import { FcGoogle } from "react-icons/fc";
import {googleLogin} from '@/actions/auth/googleLogin';

export const oauthOptions: OauthOption[] = [
    {
        action: googleLogin,
        logo: FcGoogle,
        company: "Google",
    },
];