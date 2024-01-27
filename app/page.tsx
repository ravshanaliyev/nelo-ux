import { Navbar } from "./components/Navbar";
import { Cta } from "./components/cta";
import { Faq } from "./components/faq";
import { Features } from "./components/features";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Pricing } from "./components/pricing";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
        <Features />
        <Faq />
        <Pricing />
        <Cta />
        <Footer />
      </div>
    </>
  );
}
