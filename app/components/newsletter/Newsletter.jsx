"use client"
import { useEffect, useState } from "react";


const Newsletter = () => {

  const [subEmail, setSubEmail] = useState('');
  const [message, setMessage] = useState('');

    
    const handleSubscribe = async (e) => {
      e.preventDefault();
      try {
        const res = await fetch('http://localhost:3000/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email : subEmail })
        });
        const result = await res.json();
        setMessage(result.message);
      } catch (error) {
        console.error('Error:', error);
      alert('Sorry! Failed to send your message');
      }
      
    }  
    

  return (
    <section className="relative py-5 md:py-24 overflow-hidden">
    {/* Absolute positioned image */}
    
    <div className="relative container px-4 mx-auto">
      <div className="relative max-w-7xl mx-auto  lg:py-14 px-8 md:px-14 rounded-3xl bg-white shadow-xl overflow-hidden">
        {/* Absolute positioned image */}
        
        <div className="flex flex-wrap -mx-4 items-center">
          <div className="w-full lg:w-1/2 px-4 order-last lg:order-first">
            {/* Image block */}
            <img src="https://static.shuffle.dev/components/preview/c4e6b06e-6b70-403f-92e9-fa62e0a96eef/assets/public/saturn-assets/images/newsletter/image-ghost-big-yellow.png" alt="" width={600} height={400} className="block w-full max-w-md lg:max-w-none mx-auto" />
          </div>

          <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
            <div className="relative z-10 max-w-md lg:max-w-lg mx-auto lg:ml-auto">
              <h4 className="font-heading text-4xl sm:text-5xl text-gray-900 font-bold mb-6">
                <span>Sign up for our</span>
                <span className="text-orange-900"> newsletter</span>
              </h4>
              <p className="max-w-xs text-lg font-semibold text-gray-400 mb-15">Stay in the loop with everything you need to know.</p>
              <form onSubmit={handleSubscribe}>
              <div className="sm:flex mb-2 items-center">
                <input 
                className="w-full mb-3 sm:mb-0 sm:mr-4 py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg" 
                type="email" 
                placeholder="pat@saturn.dev" 
                onChange={(e) => setSubEmail(e.target.value)}
                />
                <button className="relative group inline-block flex-shrink-0 w-full sm:w-auto py-3 px-5 text-sm font-semibold text-orange-50 bg-orange-900 rounded-md overflow-hidden" type="submit">
                  <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                  <div className="relative flex items-center justify-center">
                    <span 
                    className="mr-4"
                    
                    >Subscribe</span>
                    <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.83 5.04L2.59.8C2.497 0.706 2.386 0.632 2.265 0.581C2.143 0.53 2.012 0.504 1.88 0.504C1.748 0.504 1.617 0.53 1.495 0.581C1.374 0.631 1.263 0.706 1.17 0.8C0.984 0.987 0.879 1.241 0.879 1.505C0.879 1.769 0.984 2.023 1.17 2.21L4.71 5.75L1.17 9.29C0.984 9.477 0.879 9.731 0.879 9.995C0.879 10.259 0.984 10.513 1.17 10.7C1.263 10.793 1.374 10.866 1.496 10.916C1.618 10.966 1.748 10.991 1.88 10.99C2.012 10.991 2.142 10.966 2.264 10.916C2.386 10.866 2.497 10.793 2.59 10.7L6.83 6.46C6.924 6.367 6.998 6.256 7.049 6.135C7.1 6.013 7.126 5.882 7.126 5.75C7.126 5.618 7.1 5.487 7.049 5.365C6.998 5.244 6.924 5.133 6.83 5.04Z" fill="currentColor"/>
                    </svg>
                  </div>
                </button>
              </div>
              </form>
              {message ? (
                  <span className="block text-xs font-semibold text-gray-400">
                  <span>{message}</span>
                </span>
              ) : (
                <span className="block text-xs font-semibold text-gray-400">
                 <span>We care about your data in our</span>
                 <a className="inline-block hover:underline text-orange-900" href="#">privacy policy</a>
              </span>
              )}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Newsletter