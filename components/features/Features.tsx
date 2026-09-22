import Image from "next/image";

import { featureItems } from "@/data/features";

export default function Features() {
  return (
    <>
      {featureItems.map((item) => (
        <div key={item.id} className="col-lg-3 col-md-6 col-sm-6">
          <div className={item.cardClassName ?? "feature-card"}>
            <Image
              alt="AI Agency & Technology HTML Template"
              src={item.iconSrc}
              width={item.iconWidth}
              height={item.iconHeight}
              className="image-auto"
            />
            <h4 className="title">{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}
