import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
// import About from "../components/About";
// import Experience from "../components/Experience";
// import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        {/* <About /> */}
        {/* <Experience /> */}
        {/* <Projects /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
