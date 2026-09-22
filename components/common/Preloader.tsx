"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    });
  }, []);
  if (!isLoading) return null;
  return (
    <>
      <div id="preloader">
        <div className="loader">
          <Image
            alt="Loading..."
            src="/assets/images/preloader-dark.png"
            width={100}
            height={100}
          />
        </div>
      </div>
    </>
  );
}
