"use client";
import Image from "next/image";
import Link from "next/link";
import { serviceSec6Cards } from "@/data/services";

export default function Services2() {
  const [card0, card1, card2, card3] = serviceSec6Cards;

  return (
    <>
      {/* Card 1 — sky blue + sphero */}
      <div className="col-xl-4 col-lg-6 col-md-6">
        <div className="ser-card ser-card--sky">
          <Image
            src="/assets/images/layers/sphero.png"
            alt="Sphero"
            width={400}
            height={400}
            className="ser-card__deco"
          />
          <div className="ser-content">
            <h4 className="title"><Link href="#">{card0.title}</Link></h4>
            <p>{card0.description}</p>
          </div>
          <a href="#" className="ser-btn">
            <i className="icon fontello icon-button-arrow" />
            <i className="icon2 fontello icon-button-arrow" />
          </a>
        </div>
      </div>

      {/* Card 2 — service6-2 as bg with dots */}
      <div className="col-xl-4 col-lg-6 col-md-6">
        <div className="ser-card ser-card--dots">
          <div className="ser-content">
            <h4 className="title"><Link href="#">{card1.title}</Link></h4>
            <p>{card1.description}</p>
          </div>
          <a href="#" className="ser-btn">
            <i className="icon fontello icon-button-arrow" />
            <i className="icon2 fontello icon-button-arrow" />
          </a>
        </div>
      </div>

      {/* Col 3 — card 3 (30%) + card 4 (70%) stacked */}
      <div className="col-xl-4 col-lg-6 col-md-6 d-flex flex-column gap-3">
        {/* Card 3 — neural / service6-3 */}
        <div className="ser-card ser-card--neural ser-card--half-sm">
          <div className="ser-content">
            <h4 className="title"><Link href="#">{card2.title}</Link></h4>
            <p>{card2.description}</p>
          </div>
          <a href="#" className="ser-btn">
            <i className="icon fontello icon-button-arrow" />
            <i className="icon2 fontello icon-button-arrow" />
          </a>
        </div>

        {/* Card 4 — picsum + blue overlay */}
        <div className="ser-card ser-card--blue ser-card--half-lg">
          <div className="ser-content">
            <h4 className="title"><Link href="#">{card3.title}</Link></h4>
            <p>{card3.description}</p>
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
