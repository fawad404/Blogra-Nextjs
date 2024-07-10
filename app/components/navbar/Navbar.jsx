"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
export default function Navbar() {
   const session = useSession(); 
   const user = session.data?.user
  // console.log(session);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/category");
        const data = await res.json();
        if (res.ok) {
          setCategories(data);
        } else {
          throw new Error("Failed");
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Sorry! Failed to send your message');
      }
    };
    getData();
  }, []);

 
  return (
    <>
  {categories ? (
    <section>
      <nav className="relative py-6 bg-transparent mb-5 md:mb-8 z-50">
        <div className="container px-4 mx-auto">
          <div className="flex items-center">
            <a className="inline-block text-lg font-bold" href="/">
              <img className="h-10" src="https://static.shuffle.dev/components/preview/c6283f8f-6793-47ac-b2f0-908cc21b4d11/assets/public/saturn-assets/logos/logo-saturn-dark.svg" alt="" width="auto" />
            </a>
            <div className="lg:hidden ml-auto">
              <button
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                className="flex w-12 h-12 items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-md transition duration-200"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M3 6H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
            </div>
            <ul className="hidden lg:flex ml-14 lg:w-auto lg:space-x-12">
              <li className="group relative">
                <Link className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium" href="/blog/fashion">Categories</Link>
                <div className="hidden group-hover:block absolute top-full left-0 min-w-max max-w-xs p-4 z-50">
                  <div className="-mb-2 ml-8 w-4 h-4 rounded-sm bg-white border-l border-t border-gray-200 transform rotate-45"></div>
                  <div className="w-full max-w-xs bg-white border border-gray-100 rounded-3xl pt-4 pb-4 px-4">
                    <div className="pb-3 mb-3 border-b border-gray-100">
                        {categories.map((cat) => (
                      <Link className="block py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg" href={`/blog/${cat.category}`} key={cat.id}>{cat.category}</Link>
                        ))}    
                   </div>
                    
                  </div>
                </div>
              </li>
              <li><Link className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium" href="/blog">Blog</Link></li>
              <li><Link className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium" href="/contact">Contact</Link></li>
            </ul>
            
               <div className="hidden lg:block ml-auto">
               <div className="flex items-center">
                 {!user && (
                     <Link className="relative group inline-block py-3 px-4 text-sm font-semibold text-orange-900 hover:text-white border border-gray-200 rounded-md overflow-hidden transition duration-300" href="/login">
                    <div className="absolute top-0 right-full w-full h-full bg-orange-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                    <span className="relative"
                     
                    >Sign In</span>
                  </Link>
                 )}
                {user && 
                <Link className="inline-block mr-9 text-sm font-semibold text-orange-900 hover:text-gray-900" href="/editor">Write</Link>
                }
                {user && (
                 <a className="relative group inline-block py-3 px-4 text-sm font-semibold text-orange-900 hover:text-white border border-gray-200 rounded-md overflow-hidden transition duration-300" href="#">
                   <div className="absolute top-0 right-full w-full h-full bg-orange-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                   <span className="relative"
                    onClick={signOut}
                   >Sign Out</span>
                 </a>

                )}
               
               </div>
             </div>
          </div>
        </div>
      </nav>
      <div className={`fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50 ${mobileNavOpen ? 'block' : 'hidden'}`}>
        <div onClick={() => setMobileNavOpen(!mobileNavOpen)} className="fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="relative flex flex-col py-6 px-10 w-full h-full bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-16">
            <a className="mr-auto text-2xl font-medium leading-none" href="/">
              <img className="h-10" src="https://static.shuffle.dev/components/preview/c6283f8f-6793-47ac-b2f0-908cc21b4d11/assets/public/saturn-assets/logos/logo-saturn-dark.svg" alt="" width="auto" />
            </a>
            <button onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <svg className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div>
            <ul className="mb-2">
              
              <li><Link className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="/blog">Blog</Link></li>
              <li><Link className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="/fashion">Categories</Link></li>
              <li><Link className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="/contact">Contact</Link></li>
            </ul>
            <div className="py-6 px-5">
              <Link className="block w-full py-4 px-6 mb-3 text-sm font-semibold text-orange-900 hover:text-white border border-gray-200 hover:bg-orange-900 rounded-md transition duration-200" href="/login"> Sign In</Link>
              
            </div>
          </div>
        </nav>
      </div>
    </section>
  ):(
    <section>
  <nav className="relative py-6 bg-transparent mb-5 md:mb-8 z-50">
    <div className="container px-4 mx-auto">
      <div className="flex items-center">
        <div className="inline-block text-lg font-bold">
          <div className="h-10 w-32 bg-gray-300 animate-pulse"></div>
        </div>
        <div className="lg:hidden ml-auto">
          <div className="flex w-12 h-12 items-center justify-center bg-gray-100 rounded-md">
            <div className="w-6 h-6 bg-gray-300 animate-pulse"></div>
          </div>
        </div>
        <ul className="hidden lg:flex ml-14 lg:w-auto lg:space-x-12">
          <li className="group relative">
            <div className="inline-block text-sm bg-gray-300 animate-pulse w-24 h-6"></div>
            <div className="hidden group-hover:block absolute top-full left-0 min-w-max max-w-xs p-4 z-50">
              <div className="-mb-2 ml-8 w-4 h-4 bg-gray-300"></div>
              <div className="w-full max-w-xs bg-gray-100 rounded-3xl pt-4 pb-4 px-4">
                <div className="pb-3 mb-3 border-b border-gray-100">
                  <div className="block py-3 px-4 text-sm bg-gray-300 animate-pulse w-full h-6 mb-2"></div>
                  <div className="block py-3 px-4 text-sm bg-gray-300 animate-pulse w-full h-6 mb-2"></div>
                  <div className="block py-3 px-4 text-sm bg-gray-300 animate-pulse w-full h-6"></div>
                </div>
              </div>
            </div>
          </li>
          <li><div className="inline-block text-sm bg-gray-300 animate-pulse w-24 h-6"></div></li>
          <li><div className="inline-block text-sm bg-gray-300 animate-pulse w-24 h-6"></div></li>
        </ul>
        <div className="hidden lg:block ml-auto">
          <div className="flex items-center">
            <div className="relative group inline-block py-3 px-4 text-sm font-semibold bg-gray-300 animate-pulse w-24 h-10 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div className={`fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50 ${mobileNavOpen ? 'block' : 'hidden'}`}>
    <div className="fixed inset-0 bg-gray-800 opacity-25"></div>
    <nav className="relative flex flex-col py-6 px-10 w-full h-full bg-white border-r overflow-y-auto">
      <div className="flex items-center mb-16">
        <div className="mr-auto text-2xl font-medium leading-none">
          <div className="h-10 w-32 bg-gray-300 animate-pulse"></div>
        </div>
        <div className="h-6 w-6 bg-gray-300 animate-pulse"></div>
      </div>
      <div>
        <ul className="mb-2">
          <li><div className="block py-4 px-5 bg-gray-300 animate-pulse w-full h-10 rounded-lg"></div></li>
          <li><div className="block py-4 px-5 bg-gray-300 animate-pulse w-full h-10 rounded-lg"></div></li>
          <li><div className="block py-4 px-5 bg-gray-300 animate-pulse w-full h-10 rounded-lg"></div></li>
        </ul>
        <div className="py-6 px-5">
          <div className="block w-full py-4 px-6 mb-3 bg-gray-300 animate-pulse h-10 rounded-md"></div>
        </div>
      </div>
    </nav>
  </div>
</section>

  )}
    </>
  );
}



