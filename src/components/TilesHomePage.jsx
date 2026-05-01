import TilesCard from "./TilesCard";



const TilesHomePage = async() => {

  const res = await fetch('https://tiles-gallary-7.vercel.app/data.json')
  const tiles = await res.json();
  console.log(tiles , 'tiles');

    return (
        <div className="mt-6 max-w-7xl mx-auto ">
           <h1 className="text-3xl font-bold text-gray-800"
            > 
             Timeless Tiles for Modern Living
        </h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tiles.map(tile => <TilesCard key={tile.id} tile={tile} ></TilesCard> 
               
               )}
          </div>
            
        </div>
    );
};

export default TilesHomePage; 