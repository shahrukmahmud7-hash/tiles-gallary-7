import TilesCard from "./TilesCard";
import data from '../../public/data.json'


const TilesHomePage = async() => {

  // const res = await fetch('')
  // const tiles = await res.json();

    return (
        <div className="mt-6 max-w-7xl mx-auto px-6 md:px-6 ">
           <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center md:text-left"
            > 
             Timeless Tiles for Modern Living
        </h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 ">
            {data.map(tile => <TilesCard key={tile.id} tile={tile} ></TilesCard> 
               
               )}
          </div>
            
        </div>
    );
};

export default TilesHomePage; 