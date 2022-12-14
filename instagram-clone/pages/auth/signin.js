import React from 'react';
import { getProviders, signIn } from 'next-auth/react';
import Header from '../../components/Header';

const SignIn = ({ providers }) => {
    return (
        <React.Fragment>
            <Header />
            <div className='flex flex-col items-center justify-center min-h-screen py-2 -mt-20 text-center'>
                <img
                    src="https://links.papareact.com/ocw"
                    alt="logo_instagram"
                    className='w-80'
                />
                <p>
                    This is not a real app, it is built for educational purposes only
                </p>
                <div className='mt-40'>
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <button
                                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                                className='p-3 bg-blue-500 rounded-lg text-white'
                            >
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
};

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers,
        }
    }
}

export default SignIn;