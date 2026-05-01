import { Button } from "@heroui/react";
import Marquee from "react-fast-marquee";

const Marqee = () => {
    return (
          <div className="max-w-7xl mx-auto mt-6 ">
             <div className='flex items-center gap-3 mb-6 bg-gray-200 py-1 px-2 '>
              <Button className="rounded-lg" variant="danger">Browse</Button>
            <Marquee className="flex rounded-xl " pauseOnHover={true} speed ={150}>
                
              Browse a wide range of tiles to bring your ideas to life and transform every corner of your home, office, or any living space with stunning designs, rich textures, modern patterns, and timeless elegance that perfectly blend beauty, durability, and style to create a truly inspiring environment..
            </Marquee>
        </div>
        </div>
    );
};

export default Marqee; 