import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto "> 
    <div className="bg-[url('https://i.ibb.co.com/jvMyP74r/tiles-showroom-design-3d-rendering-1001861-114.avif')] h-[40vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl lg: ">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-5xl text-gray-50 font-bold mb-4 max-w-2xl">
            Browse a wide range of tiles To bring your ideas to life.!
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            Explore unique patterns and textures that bring life and character to your space.
          </p>

          <div className="flex gap-4 ">
            <Link href="#">
             <Button className="bg-gradient-to-r from-red-500 via-red-800 to-red-950
              text-white font-semibold shadow-md hover:opacity-90 transition">
                   Discover Now
           </Button>
            </Link>

            <Link href="/all-tiles">
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