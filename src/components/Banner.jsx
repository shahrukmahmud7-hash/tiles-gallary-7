"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import Link from "next/link";

const images = [
  "/images/banner-eternal.avif",
  "/images/banner-ts.jpg",
  "/images/tiles-showroom.avif",
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
     <div className="max-w-7xl mx-auto px-4 mt-6">
      <div
        className="relative h-[40vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] 
        w-full bg-cover bg-center flex items-center 
        rounded-lg shadow-2xl transition-all duration-500"
        style={{
          backgroundImage: `url(${images[isImage]})`,
        }}
      >

        <div className="absolute inset-0
         bg-black/50 rounded-lg" 
         />
        <div className="absolute bottom-4 left-4 
        md:bottom-6 md:left-6 z-10
        ">
          <div className="bg-white/10 backdrop-blur-md
            border border-white/20 p-5 rounded-xl 
            shadow-lg text-white max-w-md
          ">

            <h1 className="text-xl md:text-2xl font-bold">
              Browse a wide range of tiles To bring your ideas to life.
            </h1>
            <p className="text-gray-200 text-sm mt-2">
              To bring your ideas to life. Explore unique patterns and textures that bring life and character to your space.
            </p>

            <div className="flex gap-3 mt-4">
              <Link href="#">
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  Discover Now
                </Button>
              </Link>

              <Link href="/#">
                <Button variant="outline" className="text-white">
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