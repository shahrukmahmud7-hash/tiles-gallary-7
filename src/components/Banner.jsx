"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import Link from "next/link";

const images = [
  
  "/images/house-tiles.webp",
  "/images/banner-eternal.avif",
  "/images/banner-ts.jpg",
];

const Banner = () => {

  const [isImage, isSetImage] = useState(0);

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      isSetImage((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

   return (
     <div className="max-w-7xl mx-auto px-4 mt-6 flex items-center justify-center">
      <div
        className="relative h-[40vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] 
        w-full bg-cover bg-center flex items-center 
        rounded-lg shadow-2xl transition-all duration-500  "
        style={{
          backgroundImage: `url(${images[isImage]})`,
        }}
      >

   <div className="absolute inset-0 flex items-end md:items-end md:justify-start justify-center z-10 p-3 sm:p-4">
  <div className="bg-white/10 backdrop-blur-md border border-white/20 
    text-white w-[92%] sm:w-[80%] md:max-w-sm 
    p-3 sm:p-4 rounded-lg shadow-lg">

    <h1 className="text-base sm:text-lg md:text-4xl font-semibold leading-snug text-center md:text-left">
      Browse a wide range of tiles..
    </h1>

    <p className="text-[11px] sm:text-xs mt-1 opacity-90 text-center md:text-xl md:text-left">
      Explore unique patterns and textures for your space.
    </p>

    <div className="flex flex-col sm:flex-row gap-2 mt-3">
      <Link href="#" className="w-full sm:w-auto">
        <Button className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto text-sm py-1.5">
          Discover Now
        </Button>
      </Link>

      <Link href="/#" className="w-full sm:w-auto">
        <Button variant="outline" className="text-white w-full sm:w-auto border-white/40 text-sm py-1.5">
         View Gallery
        </Button>
      </Link>
    </div>

  </div>
</div>
      </div>
    </div>
  );
};

export default Banner; 