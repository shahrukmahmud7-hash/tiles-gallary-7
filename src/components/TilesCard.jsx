

import { Button, Card, SeparatorRoot } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";


const TilesCard = ({ tile }) => {
    return (
        <Card className="border rounded-xl mt-6 ">
            <div className="relative w-full aspect-square">
            <Image
                src={tile?.image}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={tile?.image}
                className="object-cover rounded-xl"
                />
               
           </div>
           <div className="space-y-2 text-center"> 
             <h2 className="text-2xl font-bold text-gray-800" >{tile.title}</h2>
    
            <h2 className="text-2xl font-bold text-gray-800" >
              <span className=" hover:text-red-500 text-green-500 cursor-pointer 
              "> InStock : </span>
              {tile.inStock}</h2>
              <SeparatorRoot orientation="horizontal"/>
            <p className="text-lg font-semibold text-gray-400" >{tile.description}</p>
         </div>
          
          <Link href={`/all-tiles/${tile.id}`}
          className="flex items-center justify-center" >
            <Button className="w-full" variant="danger" >View Details</Button>
          </Link>
        
        </Card>
    );
};

export default TilesCard; 