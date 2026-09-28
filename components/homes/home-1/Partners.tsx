"use client";
import Image from "next/image";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

import { partnersContent } from "@/data/home1/partners";

const partnerSlides = [...partnersContent.logos, ...partnersContent.logos];

export default function Partners() {
  const { eyebrow, title } = partnersContent;
  return (
    <section className="partners-sec ibt-section-gapBottom">
      <div className="container">
        <div className="sec-title">
          <SubTitleWrapper>{eyebrow}</SubTitleWrapper>
          <TitleSplitWrapper tag="h2" className="title animated-heading">
            {title}
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
              <SwiperSlide key={`${partner.src}-${i}`}>
                <a href="#">
                  <Image
                    alt={partner.alt}
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
