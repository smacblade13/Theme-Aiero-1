"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const brands = [
  { src: "/assets/images/brand/brand1.png", width: 170, height: 53 },
  { src: "/assets/images/brand/brand2.png", width: 162, height: 60 },
  { src: "/assets/images/brand/brand3.png", width: 131, height: 72 },
  { src: "/assets/images/brand/brand4.png", width: 183, height: 44 },
];

const brandSlides = [...brands, ...brands];

export default function Brands({
  parentClass = "neural-playground ibt-section-gap",
}: {
  parentClass?: string;
}) {
  return (
    <section className={parentClass}>
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-2">
            <div className="neural-img">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/layers/layer.png"
                width={455}
                height={642}
              />
            </div>
          </div>
          <div className="col-lg-10 col-md-10">
            <div className="neural-content p-0">
              <h2 className="gradient-title">
                Tinker with a <span>Neural Network right here</span> in your
                browser. Don&apos;t worry, you can&apos;t break it. We Promise.
              </h2>
              <Swiper
                className="brand"
                modules={[Autoplay]}
                loop
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                slidesPerView={4}
                spaceBetween={20}
                breakpoints={{
                  1920: { slidesPerView: 4, spaceBetween: 30 },
                  1440: { slidesPerView: 4, spaceBetween: 30 },
                  1366: { slidesPerView: 4, spaceBetween: 30 },
                  1201: { slidesPerView: 4, spaceBetween: 30 },
                  769: { slidesPerView: 3, spaceBetween: 30 },
                  480: { slidesPerView: 2, spaceBetween: 20 },
                  375: { slidesPerView: 2, spaceBetween: 20 },
                }}
              >
                {brandSlides.map((brand, i) => (
                  <SwiperSlide key={i}>
                    <a href="#" title="">
                      <Image
                        alt="AI Agency & Technology HTML Template"
                        src={brand.src}
                        width={brand.width}
                        height={brand.height}
                      />
                    </a>
                  </SwiperSlide>
                ))}
                <div className="swiper-pagination sbp" />
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
