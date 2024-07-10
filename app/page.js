import Article from "./components/articles/Article";
import Categories from "./components/categories/Categories";
import Featured from "./components/featured/Featured";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Newsletter from "./components/newsletter/Newsletter";

export default function Home() {
  return (
    <>
   <Navbar />
   <Featured />
   <Categories />
   <Article />
   <Newsletter />
   <Footer />
    </>
  );
}


