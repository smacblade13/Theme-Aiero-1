"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import { testimonialsContent } from "@/data/home1/testimonials";

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
      {testimonialsContent.items.map((item) => (
        <SwiperSlide key={item.id}>
          <Image
            alt="Testimonial icon"
            src={item.icon}
            width={47}
            height={47}
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
