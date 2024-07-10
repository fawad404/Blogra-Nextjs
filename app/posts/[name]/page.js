import Footer from '@/app/components/footer/Footer'
import Navbar from '@/app/components/navbar/Navbar'
import React from 'react'

const getData = async (cat) => {
    const res = await fetch(`http://localhost:3000/api/post/${cat}`, {
      cache: "no-store",
    });
    
    if(res.message == "No posts found"){
        
    }
    if (!res.ok) {
      throw new Error("Failed");
    }
    
    return res.json();
  };
  
const page = async({params}) => {
    let data = await getData(params.name);
    data = data.posts;

    // console.log(data);
  return (
    <>
    <Navbar />
    <section className="py-10 bg-gray-50 overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="py-16 px-8 bg-white rounded-3xl">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:max-w-4xl mx-auto text-center">
            <span className="inline-block mb-4 text-sm text-blue-500 font-bold uppercase tracking-widest">{params.name}</span>
            <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-900 font-black tracking-tight">Resources and stories center</h2>
            <p className="md:max-w-md mx-auto text-gray-500 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada tellus vestibulum, commodo pulvinar.</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap -m-5 mb-10">
            {data.map((item)=> (
              <div className="w-full p-5" key={item.id}>
                <div className="flex flex-wrap h-full bg-gray-100 overflow-hidden rounded-3xl">
                  <div className="w-full md:w-1/2">
                    <img className="w-full h-full object-cover" src={item.img} alt="" />
                  </div>
                  <div className="flex-1">
                    <div className="md:max-w-lg p-10 h-full">
                      <div className="flex flex-col justify-between h-full">
                        <div className="flex-initial mb-8">
                          <p className="mb-3 text-sm text-gray-500 font-bold">{item.category} • 4 min read</p>
                          <a className="group inline-block mb-4" href="#">
                            <h3 className="font-heading text-2xl text-gray-900 hover:text-gray-700 group-hover:underline font-black">{item.title}</h3>
                          </a>
                          <p className="text-gray-500 font-bold">{item.desc}</p>
                        </div>
                        <div className="flex-initial">
                          <div className="flex flex-wrap -m-2">
                            <div className="w-full md:w-auto p-2">
                              <a className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-600 rounded-full" href="#">Read More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                ))}
            </div>
          </div>
         
            <div className="flex flex-wrap md:justify-center -m-2">
              <div className="w-full md:w-auto p-2">
                <a  className="block w-full px-12 py-3.5 text-lg text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full" href="#">Read more News</a>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  </section>
  <Footer />
  </>
  )
}

export default page