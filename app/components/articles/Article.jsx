"use client"
// Import necessary modules
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { CldImage } from "next-cloudinary";
const Article = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/test?page=1&limit=6", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await res.json();
        //console.log(result);
        setData(result.posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Function to extract first 50 words from HTML string
  const extractFirst50Words = (htmlString) => {
    const plainText = htmlString.replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ');

// Split text into words and slice the first 50 words
const words = plainText.trim().split(/\s+/);
const truncatedText = words.slice(0, 50).join(' ');

    return truncatedText;
  };
 // console.log(data);
  return (
    <>
      {data.length > 0 ? (
        <section className="overflow-hidden">
          <div className="bg-orange-500 pt-20 pb-80 px-10 relative">
         <div className="absolute left-1/2 top-0 transform -translate-x-1/2 flex gap-6">
           <div className="mt-20 rounded-3xl w-80 h-80" style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.10) 100%)' }}></div>
           <div className="rounded-3xl w-80 h-80" style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.10) 100%)' }}></div>
           <div className="rounded-3xl w-80 h-80" style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.10) 100%)' }}></div>
           <div className="mt-20 rounded-3xl w-80 h-80" style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.10) 100%)' }}></div>
         </div>
         <p className="uppercase text-center font-bold font-heading text-sm text-orange-50 mb-6">Blog</p>
         <h1 className="text-center text-white font-bold font-heading text-4xl lg:text-6xl max-w-md lg:max-w-4xl mx-auto pb-32 lg:pb-0">Discover the latest news, stories & insights</h1>
       </div>
       <div className="container px-4 mx-auto">
         <Link className="bg-white border border-gray-100 hover:border-orange-500 transition duration-200 shadow rounded-3xl transform -translate-y-1/2 flex flex-wrap" href="/blog">
           <div className="w-full lg:w-1/2 px-8 lg:px-16 py-8">
             <div className="flex flex-col justify-center items-start h-full">
               <div className="py-1 px-3 rounded-md border border-gray-100 mb-4 text-sm font-medium text-gray-700">Productivity</div>
               <h2 className="text-2xl lg:text-3xl font-bold font-heading mb-4 max-w-sm">How to Learn Anything Faster and Master It</h2>
               <div className="flex flex-wrap items-center gap-3">
                 <p className="text-gray-500 text-sm">20 Jul 2023</p>
                 <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none"><circle cx="2" cy="2" r="2" fill="#B8B8B8"></circle></svg>
                 <p className="text-gray-500 text-sm">4 min read</p>
               </div>
             </div>
           </div>
           <div className="w-full lg:w-1/2 relative">
             <div className="relative" style={{ height: '396px' }}>
               <div className="absolute top-0 left-0 z-10">
                 <svg xmlns="http://www.w3.org/2000/svg" width="155" height="154" viewBox="0 0 155 154" fill="none">
                   <path d="M-34 79.9324V153.361C-34 153.714 -33.7141 154 -33.3615 154H17.62C17.9724 154 18.2585 153.714 18.2585 153.361V94.299C18.2585 55.5087 56.5087 17.2585 95.299 17.2585H154.361C154.714 17.2585 155 16.9724 155 16.62V-34.3615C155 -34.7139 154.714 -35 154.361 -35H80.9324C17.4572 -35 -34 16.4572 -34 79.9324Z" fill="#FFF2D6"></path>
                 </svg>
               </div>
               <div className="absolute bottom-0 right-0 z-10">
                 <svg className="rounded-br-3xl" xmlns="http://www.w3.org/2000/svg" width="154" height="158" viewBox="0 0 154 158" fill="none">
                   <path d="M189 74.0676V0.638514C189 0.286054 188.714 0 188.361 0H137.38C137.028 0 136.742 0.286054 136.742 0.638514V59.701C136.742 98.4913 98.4914 136.742 59.701 136.742H0.638514C0.286054 136.742 0 137.028 0 137.38V188.361C0 188.714 0.286054 189 0.638514 189H74.0676C137.543 189 189 137.543 189 74.0676Z" fill="#FFF2D6"></path>
                 </svg>
               </div>
               <img className="absolute inset-0 w-full h-full object-cover lg:rounded-tr-3xl rounded-br-3xl rounded-bl-3xl lg:rounded-bl-none" src="https://static.shuffle.dev/components/preview/2ff3783f-e5ea-40ca-ad05-1d49e38cda36/assets/public/solstice-assets/images/blog/picture-large.png" alt="" />
             </div>
           </div>
         </Link>
         <div className="relative h-16 -mt-48 lg:-mt-20 mb-16">
           <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 h-px w-full"></div>
           <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 py-3 px-8 rounded-2xl bg-gray-50 border border-gray-200 text-lg lg:text-2xl font-bold font-heading whitespace-nowrap">Latest articles</div>
         </div>
            <div className="flex flex-wrap mb-8 -mx-4">
              {data.map((item) => {
                // Extract first 50 words from item.desc
                const truncatedDesc = extractFirst50Words(item.desc);
                
                return (
                  <div className="w-full md:w-1/2 lg:w-1/3 p-4" key={item._id}>
                    <Link href={`/blog/${item.category}/${item.slug}`}>
                      <div className="bg-white border border-gray-100 hover:border-orange-500 transition duration-200 rounded-2xl h-full">
                        <div className="relative" style={{ height: '240px' }}>
                          <div
                            className="absolute inset-0 w-full h-full object-cover rounded-t-2xl"
                            >
                              <CldImage
                        width="960"
                        height="600"
                        src={item.img}
                        sizes="100vw"
                        alt="Description of my image"
                      />
                            </div>
                          
                        </div>
                        <div className="p-6">
                          <div className="py-1 px-2 rounded-md border border-gray-100 text-xs font-medium text-gray-700 mb-3 inline-block">
                            {item.category}
                          </div>
                          <h2 className="font-bold font-heading mb-3">{item.title}</h2>
                          {/* Render truncatedDesc as plain text */}
                          <p className="text-gray-500 text-sm mb-9">
                            {truncatedDesc}
                          </p>
                          <div className="flex flex-wrap items-center gap-3">
                            <p className="text-gray-500 text-sm">{item.createdAt}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                              <circle cx="2" cy="2" r="2" fill="#B8B8B8"></circle>
                            </svg>
                            <p className="text-gray-500 text-sm">4 min read</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
            {/* Read more button */}
            <div className="flex justify-center">
            <Link href="/blog">
              <button className="text-sm font-semibold text-orange-50 py-4 px-6 bg-orange-900 rounded-md overflow-hidden"
              >
                Read More Blog
              </button>
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="py-16 px-8 bg-white rounded-3xl">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12 md:max-w-4xl mx-auto text-center">
                
                <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-900 font-black tracking-tight">Loading...</h2>
              
              </div>
              </div>
              </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Article;
