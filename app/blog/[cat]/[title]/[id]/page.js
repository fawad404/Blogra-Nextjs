"use client"
import { useSession } from 'next-auth/react';
import React, { useState, useRef, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import { useRouter } from 'next/navigation';
import { CldUploadWidget } from 'next-cloudinary';
import Link from 'next/link';
import Navbar from '@/app/components/navbar/Navbar';
import Footer from '@/app/components/footer/Footer';

const page = ({ params }) => {
    const router = useRouter();
    const { data: session } = useSession(); 
      const [title, setTitle] = useState('');
      const [media, setMedia] = useState('');
      const [metaTitle, setMetaTitle] = useState('');
      const [metaDesc, setMetaDesc] = useState('');
      const [category, setCategory] = useState('');
      const [slug, setSlug] = useState('');
      const editor = useRef(null);
  
      useEffect(() => {
          const fetchData = async () => {
              try {
                  const response = await fetch(`http://localhost:3000/api/posts/${params.id}`);
                  const result = await response.json();
                  if (response.ok) {
                      setTitle(result.result.title);
                      setMedia(result.result.img);
                      setMetaTitle(result.result.metaTitle);
                      setMetaDesc(result.result.metaDesc);
                      setCategory(result.result.category);
                      setSlug(result.result.slug);
                      setContent(result.result.desc); // Assuming 'desc' is your content field
                  } else {
                      throw new Error(result.error || 'Failed to fetch data');
                  }
              } catch (error) {
                  console.error('Error:', error);
                  alert('Sorry! Failed to fetch data');
              }
          };
  
          fetchData();
      }, [params.id]);
  
      const handleContentChange = (newContent) => {
          setContent(newContent); // Update content state with editor's content
      };
      
   
    const [content, setContent] = useState('');
  
    const generateSlug = (text) => {
      const parts = text.split(/[^\w\s]/).filter(part => part.trim() !== ''); // Split by non-word characters and filter out empty parts
      if (parts.length === 0) {
        return ''; // Return an empty string if there are no valid parts
      }
      return parts[parts.length - 1].trim().toLowerCase().replace(/\s+/g, '-'); // Take the last part, trim spaces, and replace spaces with hyphens
    };
    const handleTitleChange = (e) => {
      const newTitle = e.target.value;
      setTitle(newTitle);
      setSlug(generateSlug(newTitle));
    };
  
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if(media =='' && title =='' && metaTitle =='' && metaDesc == '' || category == '' || slug == ''){
        alert("Fill all the details")
      }else{
      // Validate the slug
      const slugPattern = /^[a-zA-Z0-9-]+$/; // Pattern to allow only alphanumeric characters and hyphens
      if (!slugPattern.test(slug)) {
        alert('The slug should not contain any spaces or special characters.');
        return; // Exit the function if validation fails
      }
    
      try {
        const response = await fetch(`http://localhost:3000/api/post/${params.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title,
            desc: content,
            img: media,
            metaTitle,
            metaDesc,
            category,
            slug
          })
        });
        const result = await response.json();
        if (response.ok) {
          router.replace(`/blog/${category}/${slug}`);
        } else {
          alert(result.error);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Sorry! Failed to send your message');
      }
    }
    };
    //console.log(title, category);
    return (
      
      <>
        <Navbar />
        {session ? (
        <section className="bg-coolGray-50 py-4">
          <div className="container px-4 mx-auto">
            
              <div className="flex flex-wrap">
                <div className="w-full p-3">
                  <div className="p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard">
                    <div className="flex flex-wrap pb-3 -m-3">
                      <div className="w-full p-3">
                        <p className="mb-1.5 font-medium text-base text-coolGray-800">Title</p>
                        <input
                          className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                          type="text"
                          name="title"
                          value={title}
                          onChange={handleTitleChange}
                          
                        />
                      </div>
                      
                      <div className="w-full md:w-1/2 p-3">
                        <p className="mb-1.5 font-medium text-base text-coolGray-800">Category</p>
                        <input
                          className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                          type="text"
                          name="category"
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                        />
                      </div>
                      <div className="w-full md:w-1/2 p-3">
                        <p className="mb-1.5 font-medium text-base text-coolGray-800">Slug</p>
                        <input
                          className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                          type="text"
                          name="slug"
                          value={slug}
                         onChange={(e) => setSlug(e.target.value)}
                        />
                      </div>
                      <div className="w-full p-3">
                        <p className="mb-1.5 font-medium text-base text-coolGray-800">Meta Title</p>
                        <input
                          className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                          type="text"
                          name="metaTitle"
                          value={metaTitle}
                          onChange={(e) => setMetaTitle(e.target.value)}
                        />
                      </div>
                      <div className="w-full p-3">
                        <p className="mb-1.5 font-medium text-base text-coolGray-800">Meta Description</p>
                        <input
                          className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                          type="text"
                          name="metaDesc"
                          value={metaDesc}
                          onChange={(e) => setMetaDesc(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="py-3">
        <div className="w-full">
          <div className="flex flex-wrap -m-3">
            <div className="w-full p-3">
              <p className="mb-1.5 font-medium text-coolGray-800 text-base">Featured Image</p>
              <div className="relative flex flex-col items-center justify-center mb-6 p-6 h-44 text-center text-green-500 focus-within:border-green-500 border border-dashed border-coolGray-200 rounded-lg">
                
              <CldUploadWidget
      signatureEndpoint="/api/sign-cloudinary-params"
      onSuccess={(result, { widget }) => {
        setMedia(result?.info.public_id); // { public_id, secure_url, etc }
       
      }}
    >
      {({ open }) => {
        function handleOnClick() {
          setMedia(undefined);
          open();
        }
        return (
          <button onClick={handleOnClick}>
            Upload an Image
          </button>
        );
      }}
    </CldUploadWidget>
              </div>
  
            </div>
          </div>
        </div>
      </div>
                    <div className="py-3">
                      <div className="w-full">
                        <div className="flex flex-wrap">
                          <div className="w-full">
                            <p className="mb-1 text-sm text-coolGray-800 font-semibold">Bio</p>
                            <JoditEditor
                              ref={editor}
                              value={content}
                              onChange={handleContentChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="py-3">
                      <div className="w-full">
                        <div className="flex flex-wrap -m-3">
                          <button 
                          onClick={handleSubmit}
                          className="flex flex-wrap justify-center w-full md:w-auto md:ml-auto px-4 py-2 bg-green-500 hover:bg-green-600 font-medium text-sm text-white border border-green-500 rounded-md shadow-button">
                            <p>Save</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
          </div>
        </section>
        ): (
          <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
              <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500"></h1>
              <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Loading..</p>
          </div>   
      </div>
  </section>
        )}
      
        <Footer />
        </>
  )
}

export default page