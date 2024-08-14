// import HomeTest from "@/components/HomeTest";

import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Wrapper from "./Wrapper";
import About from "@/components/About";
import Collaboration from "@/components/Collaboration";
import Contact from "@/components/Contact";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";

const Home = dynamic(() => import("@/components/Home"), { ssr: false });

export default function page() {
  return (
    <Wrapper>
      <Navbar />
      <Home />
      <About />
      <Collaboration />
      <Products />
      <Blog />
      <Contact />
      <Footer />
    </Wrapper>

  );
}
