import { FaRegStar, FaStar, FaStarHalfAlt, FaUsers } from "react-icons/fa";
import data from '../../public/data.json'

const PepopleOnipion = () => {

    const renderStars = (rating) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push("full");
    } else if (rating >= i - 0.5) {
      stars.push("half");
    } else {
      stars.push("empty");
    }
  }

  return stars;
};

    return (
        <div className="max-w-7xl mx-auto px-6 py-16">

      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What People Say About Us <p className="
          flex items-center text-center justify-center
          "> <FaUsers /></p>
        </h2>
        <p className="text-gray-500 mt-2">
          Real feedback from our happy customers 
         
        </p>
      </div>

      <div className=" grid md:grid-cols-3 gap-6">

       {data.map(tile => <div className=" relative bg-gray-100 p-6 
          rounded-xl hover:shadow-lg transition"
          key={tile.id} >
           <div className="bg-gray-100 p-6 rounded-xl 
           hover:shadow-lg transition">
          <div className="flex gap-1 text-yellow-500 mb-3">
        <div className="flex items-center text-center 
         justify-center text-yellow-500">
    
         <p className="flex text-xl gap-2 text-center 
         items-center justify-center 
         ">Review : </p>
          {renderStars(tile.rating).map((type, index) => {
          if (type === "full") return <FaStar key={index} />;
           if (type === "half") return <FaStarHalfAlt 
           className="flex text-sm gap-2 " key={index} />;
           return <FaRegStar key={index} />;
           })}

           </div>
          </div>
          <p className="text-gray-600 text-sm">
            {tile.review}
          </p>
          <h4 className="mt-4 text-xl font-bold">{tile.name}</h4>
          <h4 className="mt-2 font-semibold">{tile.email}</h4>
        </div>
         
         <div className="absolute top-2 right-2 text-xs bg-[#244d3f96] rounded-lg text-white px-3 py-2">
          <button>Edit</button>
         </div>
          </div>) }

      </div>
    </div>
    );
};

export default PepopleOnipion; 


