import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { MainContent } from "./components/MainContent";
import { MomenSection } from "./components/MomentsSection";
import { ScrollVelocity } from "./components/ScrollVelocity/ScrollVelocity";
import { Articles } from "./components/Articles";
import { Footer } from "./components/Footer";
const ArticleRaw = [
  {
    gambar: "/assets/images/articles.jpg",
    judul:
      "Implementation of Agile SDLC in the Development of SIRUMA (Restaurant Information System)",
    deskripsi:
      "This study aims to develop SIRUMA (Restaurant Information System) to simplify the ordering and reservation process in restaurants, which still frequently experience manual errors in recording and payment. The Agile methodology is used due to its flexibility and efficiency in software development.",
    link: "https://ejournal.tsb.ac.id/index.php/inventor/article/view/2229",
    ket: "More Info",
  },
  {
    gambar: "/assets/images/vba.jpg",
    judul:
      "Development of a VBA Application for Small and Micro Business Inventory Management",
    deskripsi:
      "Small and micro businesses often face challenges in managing their inventory efficiently due to limited resources and manual record-keeping. To address this, a VBA (Visual Basic for Applications) application can be developed to automate inventory management, reducing errors and improving productivity.",
    link: "",
    ket: "Not available",
  },
  {
    gambar: "/assets/images/ecommerce.jpg",
    judul:
      "Developing an E-Commerce Website to Reduce Small Business Dependence on Fees",
    deskripsi:
      "Many small businesses rely on third-party e-commerce platforms, which often charge high transaction fees, reducing their profit margins. To address this issue, developing a dedicated e-commerce website can provide an affordable and sustainable alternative, allowing businesses to sell directly to customers with minimal fees.",
    link: "",
    ket: "Not available",
  },
];
function App() {
  const Article = ArticleRaw.map((item) => {
    return (
      <Articles
        gambar={item.gambar}
        judul={item.judul}
        deskripsi={item.deskripsi}
        link={item.link}
        ket={item.ket}
      />
    );
  });
  return (
    <div className="min-h-screen bg-white text-black overflow-hidden pt-[110px]">
      <Header />
      <HeroSection />
      <ScrollVelocity
        texts={["Vanneca's Here", "lets dive deeper"]}
        className="custom-scroll-text"
      />
      <MainContent />
      <div id="Moment">
        <MomenSection />
      </div>
      <div className="px-10 py-10 md:px-20 md:py-20 ">
        <h1 className="font-extrabold text-6xl">Article and Projects</h1>
        <div className="grid grid-cols-3 gap-5">{Article}</div>
      </div>
      <hr />
      <div className="px-10 py-10 md:px-20 md:py-10 ">
        <h1 className="font-extrabold text-6xl">Contact Me</h1>
        <Footer />
      </div>
    </div>
  );
}

export default App;
