import Image from "next/image";
import Hero from "./components/Hero";
import Newest from "./components/Newest";
import Footer from "./components/Footer";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="bg-white relative">
      <Hero />
      <Newest />
    </div>
  );
}
