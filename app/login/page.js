"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if(res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace('/');

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <section className="relative py-20 lg:py-10 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap -mx-4 xl:items-end">
              <div className="w-full lg:w-1/2 px-4 order-last lg:order-first">
                <div className="relative max-w-md mx-auto lg:mx-0 lg:max-w-2xl h-full">
                  <img
                    src="https://static.shuffle.dev/components/preview/c4e6b06e-6b70-403f-92e9-fa62e0a96eef/assets/public/saturn-assets/images/sign-up/image-yellow.png"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="block rounded-3xl"
                  />
                  <div className="absolute top-0 left-0 h-full w-full p-8 pb-16 xs:p-16">
                    <div className="flex flex-col h-full justify-between">
                      <div className="flex items-start justify-between">
                        <a className="inline-block mt-2" href="#">
                          <Image src="/saturn-assets/logos/logo-saturn-light.svg" alt="" height={8} width={8} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                <div className="max-w-md mx-auto lg:mr-0 lg:py-12 xl:py-0">
                  <h3 className="font-heading text-4xl text-gray-900 font-semibold mb-4">Sign in to your account</h3>
                  <p className="text-lg text-gray-500 mb-10">See our software in action with the demo version</p>
                  <form onSubmit={handleLogin}>
                    <div className="mb-5">
                      <input
                        className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-10">
                      <div className="relative">
                        <input
                          className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                          type="password"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <button type="button" className="absolute top-1/2 right-0 mr-3 transform -translate-y-1/2 inline-block hover:scale-110 transition duration-100">
                          <img src="/saturn-assets/images/sign-up/icon-eye.svg" alt="" />
                        </button>
                      </div>
                    </div>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <button
                      className="relative group block w-full mb-6 py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-orange-900 rounded-full overflow-hidden"
                      type="submit"
                    >
                      <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                      <span className="relative">Login</span>
                    </button>       
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Login;
