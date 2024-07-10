"use client"
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import PopularBlog from '../components/popularBlog/popularBlog';
import Link from 'next/link';
import { CldImage } from "next-cloudinary";
const page = () => {
  const { data: session } = useSession(); 
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); 

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await fetch(`/api/test?page=${page}&limit=2`);
      const data = await res.json();
      
      if (data.posts.length === 0) {
        setHasMore(false); 
      } else {
        setPosts((prevPosts) => {
         
            const newPosts = data.posts.filter(post => 
              !prevPosts.some(prevPost => prevPost._id === post._id)
            );
            return [...prevPosts, ...newPosts];
          });
      }

      setLoading(false);
    };

    fetchPosts();
  }, [page]);

  
  // Function to extract first 50 words from HTML string
  const extractFirst50Words = (htmlString) => {
      // Remove HTML tags using regex
      const plainText = htmlString.replace(/<[^>]+>/g, '')
                              .replace(/&nbsp;/g, ' ');

  // Split text into words and slice the first 50 words
  const words = plainText.trim().split(/\s+/);
  const truncatedText = words.slice(0, 50).join(' ');
      
      return truncatedText;
    };
    
  
    const loadMorePosts = () => {
      setPage(prevPage => prevPage + 1);
    };

    const deletePost =  async(postId) => {
      try {
        const res = await fetch(`http://localhost:3000/api/post/${postId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (res.status === 200) {
          // Remove the deleted post from state
          setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
          alert('Post deleted successfully!');
        } else {
          alert('Failed to delete post.');
        }
      } catch (error) {
        console.error('Error deleting post:', error);
        alert('Failed to delete post. Please try again later.');
      }
    }
    return (
      <>
      {posts.length > 0 ? (
        <>

      <Navbar />
      <section className="bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="py-16 px-8 bg-white rounded-3xl">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12 md:max-w-4xl mx-auto text-center">
                <span className="inline-block mb-4 text-sm text-blue-500 font-bold uppercase tracking-widest">Blog</span>
                <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-900 font-black tracking-tight">Resources and stories center</h2>
                <p className="md:max-w-md mx-auto text-gray-500 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada tellus vestibulum, commodo pulvinar.</p>
              </div>
              <div className="max-w-5xl mx-auto">
                <div className="flex flex-wrap -m-5 mb-10">
                  {posts.map((item) => {
                    
                    const truncatedDesc = extractFirst50Words(item.desc);

                    return (
                      <div className="w-full p-5" key={item._id}>
                        <div className="flex flex-wrap h-full bg-gray-100 overflow-hidden rounded-3xl">
                          <div className="w-full md:w-1/2">
                            <div className="w-full h-full object-cover">
                            <CldImage
                        width="960"
                        height="600"
                        src={item.img}
                        sizes="100vw"
                        alt="Description of my image"
                      />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="md:max-w-lg p-10 h-full">
                              <div className="flex flex-col justify-between h-full">
                                <div className="flex-initial mb-8">
                                  <p className="mb-3 text-sm text-gray-500 font-bold"> • 4 min read</p>
                                  <Link className="group inline-block mb-4" href={`/blog/${item.category}/${item.slug}`}>
                                    <h3 className="font-heading text-2xl text-gray-900 hover:text-gray-700 group-hover:underline font-black">{item.title}</h3>
                                  </Link>
                                  <p className="text-gray-500 font-bold">{truncatedDesc}</p>
                                </div>
                                <div className="flex-initial">
                                  <div className="flex flex-wrap -m-2">
                                    <div className="w-full md:w-auto p-2">
                                      <Link className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-600 rounded-full" href={`/blog/${item.category}/${item.slug}`}>Read More</Link>
                                    </div>
                                    {session && 
                                    <>
                                    <div className="w-full md:w-auto p-2">
                                      <Link className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-green-900 hover:bg-green-800 focus:ring-4 focus:ring-green-600 rounded-full" href={`/blog/${item.category}/${item.slug}/${item._id}`}>Update</Link>
                                    </div>
                                    <div className="w-full md:w-auto p-2">
                                    <button
                                     className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-green-900 hover:bg-green-800 focus:ring-4 focus:ring-green-600 rounded-full"
                                     onClick={() => {
                                      if (window.confirm('Are you sure you want to delete this post?')) {
                                        deletePost(item._id);
                                      }
                                    }}
                                     >
                                      Delete
                                     </button>
                                  </div>
                                    </>
                                    }
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-wrap md:justify-center -m-2">
                {!loading && hasMore && (
                <div className="w-full md:w-auto p-2"
                onClick={loadMorePosts}
                >
                  <a 
                  className="block w-full px-12 py-3.5 text-lg text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                  
                  >
                    Show More
                  </a>
                </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <PopularBlog />
      <Footer />
      </>
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

export default page;
