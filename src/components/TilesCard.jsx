// "use client"

import { Button, Card, Chip, Separator } from "@heroui/react";
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
           <div className="space-y-2">
             <h2>{tile.title}</h2>
            <p>{tile.description}</p>
         </div>
          
          <Link href="">
            <Button className="" variant="danger" >View Gallery</Button>
          </Link>
        
        </Card>
    );
};

export default TilesCard; 