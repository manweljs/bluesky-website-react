// import HomeTest from "@/components/HomeTest";

import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Wrapper from "./Wrapper";
import About from "@/components/About";

const Home = dynamic(() => import("@/components/Home"), { ssr: false });

export default function page() {
  return (
    <Wrapper>
      <Navbar />
      <Home />
      <About />
    </Wrapper>

  );
}
