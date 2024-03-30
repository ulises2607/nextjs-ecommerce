"use client";

import React from 'react'
import Slider from "react-slick";
import Slide from "@/components/Slide"

const Hero = () => {

  let settings = {
    dots: true,
    infinite: true,
    autplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false
  };

  const slideData = [
    {
      id: 0,
      img: "/banner-1.jpg",
      title: "Trending Item",
      mainTitle: "WOMEN'S LATES FASHION SALE",
      price: "$20"
    },
    {
      id: 1,
      img: "/banner-2.jpg",
      mainTitle: "MODERN SUNGLASSES",
      price: "$15"
    },
    {
      id: 2,
      img: "/banner-3.jpg",
      mainTitle: "Sale Offer",
      mainTitle: "NEW FASHION SUMMER SALE",
      price: "$30"
    }
  ]

  return (
    <div>
      <div>
        <Slider {...settings} >
          {slideData.map((item) => {
            return <Slide 
            key={item.id}
            img={item.img}
            title={item.title}
            mainTitle={item.mainTitle}
            price={item.price}
              />
          })}
        </Slider>
      </div>
    </div>
  )
}

export default Hero