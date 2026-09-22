"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const testimonials = [
  {
    quote:
      "Working with Aiero has been a game-changer for our business. Their AI solutions have revolutionized our operations, enabling us to automate repetitive tasks and make data-driven decisions with ease. We couldn&apos;t be happier with the results.\"",
    author: "- John Anderson, CEO of XYZ Company",
  },
  {
    quote:
      "Working with Aiero has been a game-changer for our business. Their AI solutions have revolutionized our operations, enabling us to automate repetitive tasks and make data-driven decisions with ease. We couldn&apos;t be happier with the results.\"",
    author: "- John Anderson, CEO of XYZ Company",
  },
];

export default function Testimonials1() {
  return (
    <Swiper
      className="testi-slider"
      modules={[Autoplay, Navigation]}
      loop
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      slidesPerView={1}
      spaceBetween={200}
      pagination={{ el: ".swiper-pagination", clickable: true }}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
    >
      {testimonials.map((item, i) => (
        <SwiperSlide key={i}>
          <Image
            alt="AI Agency & Technology HTML Template"
            src="/assets/images/icon/comas.svg"
            width={47}
            height={41}
          />
          <p>{item.quote}</p>
          <span>{item.author}</span>
        </SwiperSlide>
      ))}
      <div className="slider-btn">
        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />
      </div>
    </Swiper>
  );
}
