"use client"
import { useState } from 'react';

const Nav = ({ category }) => {
    
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
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
                <a className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium" href="#">Categories</a>
                <div className="hidden group-hover:block absolute top-full left-0 min-w-max max-w-xs p-4 z-50">
                  <div className="-mb-2 ml-8 w-4 h-4 rounded-sm bg-white border-l border-t border-gray-200 transform rotate-45"></div>
                  <div className="w-full max-w-xs bg-white border border-gray-100 rounded-3xl pt-4 pb-4 px-4">
                    <div className="pb-3 mb-3 border-b border-gray-100">
                        {category.map((cat) => (
                      <a className="block py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg" href={`/posts${cat.slug}`} key={cat.id}>{cat.category}</a>
                        ))}
                      
                    </div>
                    {/* <div className="pb-3 mb-3 border-b border-gray-100">
                      <a className="flex mb-2 items-center py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg" href="#">
                        <img src="saturn-assets/images/headers/icon-download.svg" alt="" />
                        <span className="ml-3">Download</span>
                      </a>
                      <a className="flex mb-2 items-center py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg" href="#">
                        <img src="saturn-assets/images/headers/icon-slack.svg" alt="" />
                        <span className="ml-3">Community</span>
                      </a>
                      <a className="flex mb-2 items-center py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg" href="#">
                        <img src="saturn-assets/images/headers/icon-help.svg" alt="" />
                        <span className="ml-3">Help</span>
                      </a>
                    </div> */}
                    <div className="flex items-center pb-3 mb-3 border-b border-gray-100">
                      <a className="inline-block px-4 py-3 mr-6 text-sm font-semibold text-orange-900 hover:text-gray-900" href="#">Sign In</a>
                      <a className="inline-block py-3 px-4 text-sm font-semibold text-orange-900 hover:text-white border border-gray-200 hover:border-orange-600 hover:bg-orange-900 rounded-md transition duration-200" href="#">Create an account</a>
                    </div>
                    {/* <div className="flex items-center">
                      <div className="flex w-10 h-10 items-center justify-center bg-orange-50 rounded-full">
                        <img src="saturn-assets/images/headers/icon-email-me.svg" alt="" />
                      </div>
                      <div className="ml-3">
                        <span className="block text-xs text-gray-500">Drop us a line</span>
                        <a className="text-sm font-semibold text-black hover:text-orange-900" href="#">
                          <span className="__cf_email__" data-cfemail="aec6cbc2c2c1eeddc6dbc8c8c2cb80cacbd8">[email protected]</span>
                        </a>
                      </div>
                    </div> */}
                  </div>
                </div>
              </li>
              <li><a className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium" href="/blog">Blog</a></li>
              <li><a className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium" href="/about">About</a></li>
              <li><a className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium" href="/contact">Contact</a></li>
            </ul>
            <div className="hidden lg:block ml-auto">
              <div className="flex items-center">
                <a className="inline-block mr-9 text-sm font-semibold text-orange-900 hover:text-gray-900" href="/login">Sign In</a>
                <a className="relative group inline-block py-3 px-4 text-sm font-semibold text-orange-900 hover:text-white border border-gray-200 rounded-md overflow-hidden transition duration-300" href="#">
                  <div className="absolute top-0 right-full w-full h-full bg-orange-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                  <span className="relative">Create an account</span>
                </a>
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
              <li><a className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="/about">About Us</a></li>
              <li><a className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="/blog">Blog</a></li>
              <li><a className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="#">Categories</a></li>
              <li><a className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="/contact">Contact</a></li>
            </ul>
            {/* <div className="py-8 px-6 mb-6 border-t border-b border-gray-200">
              <a className="flex items-center text-sm font-semibold text-orange-900 hover:text-orange-600" href="#">
                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.3337 6.05833C17.2811 5.9059 17.1854 5.77209 17.0582 5.67301C16.9311 5.57392 16.7773 5.5144 16.6167 5.50333H14.075C13.7878 5.50333 13.5113 5.38154 13.3113 5.16649C13.1113 4.95144 13.0038 4.66264 13.0167 4.36667V1.825C13.0167 1.6646 12.9572 1.51081 12.8581 1.38367C12.759 1.25653 12.6252 1.16087 12.4727 1.10833C12.3203 1.0558 12.1552 1.04931 12.0007 1.08958C11.8462 1.12985 11.7096 1.21452 11.6083 1.33167L6.89166 6.04833C6.73851 6.19928 6.65616 6.40747 6.65616 6.625C6.65616 6.84252 6.73851 7.05071 6.89166 7.20167L11.6083 11.9183C11.7048 12.025 11.8257 12.1037 11.9606 12.1472C12.0955 12.1908 12.2394 12.1978 12.3777 12.1674C12.516 12.137 12.6444 12.0705 12.75 11.9755C12.8556 11.8805 12.9342 11.7603 12.975 11.625H13.0167V9.08333C13.0167 8.79493 13.1382 8.51755 13.353 8.31754C13.5679 8.11753 13.8557 8.01002 14.15 8.01002H16.625C16.8314 8.01002 17.0336 7.93701 17.1911 7.80456C17.3485 7.67211 17.4514 7.48874 17.4844 7.29045C17.5174 7.09215 17.4785 6.89013 17.3757 6.71928C17.2728 6.54843 17.1125 6.41863 16.9257 6.35333L17.3337 6.05833Z" fill="#F97316"></path>
                </svg>
                <span className="ml-3">Sign In</span>
              </a>
            </div> */}
            <div className="py-6 px-5">
              <a className="block w-full py-4 px-6 mb-3 text-sm font-semibold text-orange-900 hover:text-white border border-gray-200 hover:bg-orange-900 rounded-md transition duration-200" href=".">Create an account</a>
              <a className="inline-block py-4 px-6 text-sm font-semibold text-orange-900 hover:text-white border border-gray-200 hover:bg-orange-900 rounded-md transition duration-200" href="/login">Sign In</a>
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}

export default Nav