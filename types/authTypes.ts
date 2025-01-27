import {IconType} from 'react-icons';

export type OauthOption = {
    logo: IconType,
    company: string,
    action: () => Promise<{ error: string; } | undefined>,
};

export type AuthResponse = {
    error?: string;
    success?: string;
};