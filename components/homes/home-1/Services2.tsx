import Image from "next/image";

import { services2Items } from "@/data/home1/services2";

export default function Services2() {
  return (
    <section className="service-sec2">
      <div className="container">
        <div className="row">
          {services2Items.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6">
              <div className="ser-block2">
                <Image
                  alt={item.title}
                  src={item.iconSrc}
                  width={item.iconWidth}
                  height={item.iconHeight}
                />
                <h4 className="title">{item.title}</h4>
                <ul className="ser-list">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
