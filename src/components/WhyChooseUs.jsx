 import { FaGem, FaShippingFast, FaPaintBrush, FaTags } from "react-icons/fa";

const WhyChooseUs = () => {

    return (
           <div className="max-w-7xl mx-auto px-6 py-16 "> 
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-5xl font-bold
                 text-gray-800">
                  Why Choose Us
                </h2>
                <p className="text-gray-500 mt-2">
                  We provide premium tiles for modern and elegant spaces
                </p>
              </div>
        
              <div className="grid md:grid-cols-4 gap-6 ">
                <div className="bg-gray-100 p-6 rounded-xl
                 text-center ">
                  <FaGem className="text-3xl mx-auto text-gray-700 mb-3" />
                  <h3 className="font-semibold">Premium Quality</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    High quality tiles for long lasting beauty
                  </p>
                </div>
        
                <div className="bg-gray-100 p-6 rounded-xl 
                 text-center ">
                  <FaPaintBrush className="text-3xl mx-auto
                   text-gray-700 mb-3" />
                  <h3 className="font-semibold">Modern Designs</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    Stylish and creative tile patterns
                  </p>
                </div>
        
                <div className="bg-gray-100 p-6 rounded-xl 
                 text-center ">
                  <FaShippingFast className="text-3xl mx-auto 
                  text-gray-700 mb-3" />
                  <h3 className="font-semibold">Fast Delivery</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    Quick and safe delivery to your home
                  </p>
                </div>
        
                <div className="bg-gray-100 p-6 rounded-xl 
                text-center ">
                  <FaTags className="text-3xl mx-auto text-gray-700 mb-3" />
                  <h3 className="font-semibold">Best Price</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    Affordable pricing for every customer
                  </p>
                </div>
        
              </div>
            </div>
    );
};

export default WhyChooseUs;