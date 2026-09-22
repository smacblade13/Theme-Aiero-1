"use client";
import Image from "next/image";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

const partners = [
  { src: "/assets/images/brand/brand1.png", width: 170, height: 53 },
  { src: "/assets/images/brand/brand2.png", width: 162, height: 60 },
  { src: "/assets/images/brand/brand3.png", width: 131, height: 72 },
  { src: "/assets/images/brand/brand4.png", width: 183, height: 44 },
  { src: "/assets/images/brand/brand6.png", width: 180, height: 53 },
  { src: "/assets/images/brand/brand5.png", width: 104, height: 92 },
];

const partnerSlides = [...partners, ...partners];

export default function Partners() {
  return (
    <section className="partners-sec ibt-section-gapBottom">
      <div className="container">
        <div className="sec-title">
          <SubTitleWrapper>partners</SubTitleWrapper>
          <TitleSplitWrapper tag="h2" className="title animated-heading">
            Our trusted collaborators in progress and success
          </TitleSplitWrapper>
        </div>
        <div className="brand-sec2">
          <Swiper
            className="brand2"
            modules={[Autoplay]}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={6}
            spaceBetween={20}
            breakpoints={{
              1920: { slidesPerView: 6, spaceBetween: 30 },
              1201: { slidesPerView: 5, spaceBetween: 30 },
              1025: { slidesPerView: 4, spaceBetween: 30 },
              769: { slidesPerView: 3, spaceBetween: 30 },
              577: { slidesPerView: 2, spaceBetween: 30 },
              480: { slidesPerView: 2, spaceBetween: 30 },
              375: { slidesPerView: 2, spaceBetween: 30 },
            }}
          >
            {partnerSlides.map((partner, i) => (
              <SwiperSlide key={i}>
                <a href="#" title="">
                  <Image
                    alt="AI Agency & Technology HTML Template"
                    src={partner.src}
                    width={partner.width}
                    height={partner.height}
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
