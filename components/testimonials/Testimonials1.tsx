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
            alt="Testimonial quote mark"
            src="https://picsum.photos/seed/aiero-comas/47/41"
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
