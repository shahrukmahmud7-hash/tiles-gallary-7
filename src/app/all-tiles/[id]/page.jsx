import Image from "next/image";
import Link from "next/link"
import data from '../../../../public/data.json'

const TilesDetailsPage = async ({ params }) => {
    const {id} = await params;

  // const res = await fetch('https://tiles-gallary-7.vercel.app/data.json')
  // const tiles = await res.json();
  const tile = data.find(t => t.id == id)

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">   
            <div className="grid lg:grid-cols-2 gap-10 items-center">

        <div className="relative group">
          <div className="relative w-full h-[450px] rounded-2xl 
           overflow-hidden shadow-xl
           ">
            <Image
              src={tile?.image}
              fill
              alt={tile?.image}
              className="object-cover group-hover:scale-110 
              transition duration-700"
            />
    
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent">

           </div>

        
            <span className="absolute top-4 left-4 bg-white/80 
             backdrop-blur px-3 py-1 rounded-full text-sm">
              {tile?.category}
            </span>

            <span className={`absolute top-4 right-4 px-3 py-1 
              rounded-full text-sm text-white 
              ${tile?.inStock ? "bg-green-500" : "bg-red-500"}`}>
              {tile?.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          <div className="absolute -bottom-6 left-6 bg-white 
           shadow-lg rounded-xl px-5 py-3 flex gap-6">
            <div>
              <p className="text-xs text-gray-500"
              >Price
              </p>
              <p className="font-semibold"
              >
                {tile?.price} {tile?.currency}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500
              ">
                Size
                </p>
              <p className="font-semibold
              ">
                {tile?.dimensions}
                </p>
            </div>
          </div>
        </div>

        <div className="space-y-5 mt-10 lg:mt-0">

          <h1 className="text-3xl md:text-4xl 
          font-bold text-gray-800
          ">
            {tile?.title}
          </h1>
          <p className="text-gray-600 
            leading-relaxed
            ">
            {tile?.description}
          </p>
   
          <div className="bg-gray-200 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Material</p>
            <p className="font-semibold text-lg">{tile?.material}</p>
          </div>


          <div className="flex gap-4 pt-4">
            <button className="px-6 py-3 rounded-md text-white 
            bg-gradient-to-r from-stone-800 via-gray-700 to-stone-600 
            hover:scale-105 transition">
              Order Now
            </button>

            <Link href="/">
              <button className="px-6 py-3 border rounded-md hover:bg-gray-100 transition">
                Back to Gallery
              </button>
            </Link>

          </div>

        </div>

      </div>
    </div>
    );
};

export default TilesDetailsPage; 