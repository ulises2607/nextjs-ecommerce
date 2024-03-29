import React from 'react'
import Slider from "react-slick";

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
    <div>Hero</div>
  )
}

export default Hero