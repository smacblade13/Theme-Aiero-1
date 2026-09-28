"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { brandsContent } from "@/data/home1/brands";

const brandSlides = [...brandsContent.logos, ...brandsContent.logos];

export default function Brands({
  parentClass = "neural-playground ibt-section-gap",
}: {
  parentClass?: string;
}) {
  const { headline, layerImage } = brandsContent;
  return (
    <section className={parentClass}>
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-2">
            <div className="neural-img">
              <Image
                alt="Decorative layer"
                src={layerImage}
                width={455}
                height={642}
              />
            </div>
          </div>
          <div className="col-lg-10 col-md-10">
            <div className="neural-content p-0">
              <h2 className="gradient-title">
                {headline.lead}
                <span>{headline.highlight}</span>
                {headline.trail}
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
                  <SwiperSlide key={`${brand.src}-${i}`}>
                    <a href="#">
                      <Image
                        alt={brand.alt}
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
