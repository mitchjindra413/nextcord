import RegisterForm from '@/components/auth/RegisterForm';
import {oauthOptions} from '@/lib/oauth-options';
import OauthOption from '@/components/auth/OauthOption';
import Link from 'next/link';

const RegisterPage = () => {
    return (
        <section className={"w-full max-w-md rounded-lg p-8 shadow-lg bg-white space-y-3"}>
            <div className="text-center space-y-2 p-2">
                <h1 className="font-bold text-4xl">Register</h1>
                <p className={"font-thin text-sm"}>Create an Account</p>
            </div>
            <RegisterForm/>
            <Link className={"text-xs underline"} href={"/login"}>
                Already have an account?
            </Link>
            <div className="flex items-center pb-2">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-gray-300">or</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>
            {oauthOptions.map((option, index) => (
                <OauthOption key={index} {...option} />
            ))}
        </section>
    );
};

export default RegisterPage;