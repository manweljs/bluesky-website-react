
import React from "react";
import Wrapper from "./Wrapper";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';
import 'swiper/css/effect-cards';
import "bsblog/dist/style.css";
import Home from "./Home";


export default function page() {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}
