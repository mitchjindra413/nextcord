import Link from 'next/link';
import LoginForm from '@/components/auth/LoginForm';
import GoogleOAuth from '@/components/auth/GoogleOAuth';

const LoginPage = () => {

    return (
        <section className={"w-full max-w-md rounded-lg p-8 shadow-lg bg-white space-y-3"}>
            <div className="text-center space-y-2 p-2">
                <h1 className="font-bold text-4xl">Login</h1>
                <p className={"font-thin text-sm"}>Login to Account</p>
            </div>
            <LoginForm/>
            <Link className={"text-xs underline"} href={"/register"}>
                Want to register an account?
            </Link>
            <div className="flex items-center pb-2">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-gray-300">or</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <GoogleOAuth/>
        </section>
    )
}

export default LoginPage;