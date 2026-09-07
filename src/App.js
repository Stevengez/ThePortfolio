import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import BackgroundWrapper from "./components/reactbits/BackgroundWrapper";

function App() {
  return (
    <div className="relative min-h-screen bg-bodyColor text-lightText overflow-x-hidden w-full max-w-full">
      <BackgroundWrapper />
      <Navbar />
      <div className="relative z-10 w-full pt-20 px-3 sm:px-6 md:px-8 max-w-full">
        <main className="max-w-screen-xl mx-auto w-full">
          <Banner />
          <Features />
          <Projects />
          <Resume />
          <Contact />
          <Footer />
          <FooterBottom />
        </main>
      </div>
    </div>
  );
}

export default App;
