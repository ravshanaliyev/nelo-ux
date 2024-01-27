import { Navbar } from "./components/Navbar";
import { Features } from "./components/features";
import { Hero } from "./components/hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
        <Features />
      </div>
    </>
  );
}
