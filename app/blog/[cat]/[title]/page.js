import Footer from '@/app/components/footer/Footer';
import Navbar from '@/app/components/navbar/Navbar';
import styles from './blogPage.module.css'
import Cldimage from '@/app/components/cldImage/CldImage';
import UpdateButton from '@/app/components/updateButton/UpdateButton';
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/test/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
  
  return res.json();
};

const Page = async({ params }) => {
  const slug = params.title;

  let data;
  try {
    const response = await getData(slug);
    if (!response.success) {
      throw new Error(response.message || "Post not found");
    }
    data = response.result[0]; // Assuming result is an array and you want the first item
  } catch (error) {
    return (
      <>
        <Navbar />
        <section className="bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="py-16 px-8 bg-white rounded-3xl text-center">
              <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-900 font-black tracking-tight">
                Post Not Found
              </h2>
              <p className="text-lg text-gray-700">{error.message}</p>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
  
  const hasHeadings = /<(h1|h2|h3|h4|a|p)[^>]*>/.test(data.desc);
  return (
    <>
      <Navbar />
      <section className="bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mb-5 py-8 px-8 bg-white rounded-3xl">
          
            <UpdateButton category={data.category} title={data.title} id={data._id} />
            <div className="max-w-7xl mx-auto">
              <div className="mt-12 mb-8 md:max-w-md mx-auto">
              <Cldimage imgSource={data.img} />
              </div>
              <div className="mb-12 md:max-w-4xl mx-auto text-center">
                <span className="inline-block mb-4 text-sm text-blue-500 font-bold uppercase tracking-widest">{data.category}</span>
                <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-900 font-black tracking-tight">{data.title}</h2>
              </div>
              <div className={`content ${hasHeadings ? styles.dataDesc : ''}`}  dangerouslySetInnerHTML={{ __html: data.desc }} />
              
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Page;
