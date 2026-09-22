import Image from "next/image";
import Link from "next/link";

import { serviceSec6Cards } from "@/data/services";

export default function Services2() {
  const [card0, card1, card2, card3, card4] = serviceSec6Cards;

  return (
    <>
      <div className="col-xl-3 col-lg-6 col-md-6">
        <div className={card0.cardClassName ?? "ser-card"}>
          <Image
            alt="AI Agency & Technology HTML Template"
            src={card0.imageSrc!}
            width={card0.imageWidth!}
            height={card0.imageHeight!}
          />
          <div className={`ser-content ${card0.contentClassName ?? ""}`.trim()}>
            <h4 className="title">
              <a href="#" title="">
                {card0.title}
              </a>
            </h4>
            <p>{card0.description}</p>
          </div>
          <a href="#" className="ser-btn">
            <i className="icon fontello icon-button-arrow" />
            <i className="icon2 fontello icon-button-arrow" />
          </a>
        </div>
      </div>
      <div className="col-xl-3 col-lg-6 col-md-6">
        <div className={card1.cardClassName ?? "ser-card"}>
          <Image
            alt="AI Agency & Technology HTML Template"
            src={card1.imageSrc!}
            width={card1.imageWidth!}
            height={card1.imageHeight!}
          />
          <div className={`ser-content ${card1.contentClassName ?? ""}`.trim()}>
            <h4 className="title">
              <a href="#" title="">
                {card1.title}
              </a>
            </h4>
            <p>{card1.description}</p>
          </div>
          <a href="#" className="ser-btn">
            <i className="icon fontello icon-button-arrow" />
            <i className="icon2 fontello icon-button-arrow" />
          </a>
        </div>
      </div>
      <div className="col-xl-3 col-lg-6 col-md-6">
        <div className={card2.cardClassName ?? "ser-card"}>
          <Image
            alt="AI Agency & Technology HTML Template"
            src={card2.imageSrc!}
            width={card2.imageWidth!}
            height={card2.imageHeight!}
          />
          <h3 className="title">
            <Link href="#">{card2.title}</Link>
          </h3>
        </div>
        <div className={card3.cardClassName ?? "ser-card"}>
          <div className="ser-content">
            <Image
              alt="AI Agency & Technology HTML Template"
              src={card3.iconSrc!}
              width={card3.iconWidth!}
              height={card3.iconHeight!}
            />
            <h4 className="title">
              <a href="#" title="">
                {card3.title}
              </a>
            </h4>
            <p>{card3.description}</p>
          </div>
          <a href="#" className="ser-btn">
            <i className="icon fontello icon-button-arrow" />
            <i className="icon2 fontello icon-button-arrow" />
          </a>
        </div>
      </div>
      <div className="col-xl-3 col-lg-6 col-md-6">
        <div className={card4.cardClassName ?? "ser-card"}>
          <Image
            alt="AI Agency & Technology HTML Template"
            src={card4.imageSrc!}
            width={card4.imageWidth!}
            height={card4.imageHeight!}
          />
          <div className={`ser-content ${card4.contentClassName ?? ""}`.trim()}>
            <h4 className="title">
              <a href="#" title="">
                {card4.title}
              </a>
            </h4>
            <p>{card4.description}</p>
          </div>
          <a href="#" className="ser-btn">
            <i className="icon fontello icon-button-arrow" />
            <i className="icon2 fontello icon-button-arrow" />
          </a>
        </div>
      </div>
    </>
  );
}
