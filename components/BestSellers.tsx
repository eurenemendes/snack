import React from 'react';
import { Star, ArrowRight, Plus } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  rating: number;
  image: string;
  bgColor: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Cheddar & Sour Cream",
    price: "$44.99",
    rating: 5,
    image: "https://picsum.photos/300/400?random=1",
    bgColor: "bg-orange-100"
  },
  {
    id: 2,
    name: "Salt and Vinegar Flavour",
    price: "$63.99",
    rating: 5,
    image: "https://picsum.photos/300/400?random=2",
    bgColor: "bg-blue-100"
  },
  {
    id: 3,
    name: "Family Size Classic",
    price: "$24.99",
    rating: 5,
    image: "https://picsum.photos/300/400?random=3",
    bgColor: "bg-yellow-100"
  }
];

const BestSellers: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white relative z-10">
      <div className="container mx-auto">
        
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-brand-brown">Best sellers.</h2>
          <a href="#" className="text-brand-red font-medium flex items-center gap-1 hover:underline">
            Shop all <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className={`relative h-72 ${product.bgColor} rounded-[2rem] overflow-hidden mb-4 transition-transform duration-300 group-hover:-translate-y-2`}>
                 <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-110 transition-transform duration-500"
                 />
                 <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md text-brand-red opacity-0 group-hover:opacity-100 transition-opacity">
                    <Plus size={20} />
                 </button>
              </div>
              <div className="flex gap-1 text-brand-yellowDark mb-2">
                 {[...Array(product.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <h3 className="font-bold text-gray-800 text-lg leading-tight mb-1">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-2">Pack of 6</p>
              <div className="flex justify-between items-center">
                 <span className="font-bold text-brand-brown">{product.price}</span>
                 <button className="w-8 h-8 rounded-full bg-red-100 text-brand-red flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors">
                    <ArrowRight size={14} />
                 </button>
              </div>
            </div>
          ))}

          {/* Create Your Own Promo Card */}
          <div className="bg-brand-red rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-lg rounded-bl-lg p-8 flex flex-col justify-center items-start text-white relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
             
             <div className="mb-auto w-full flex justify-center">
                <img src="https://picsum.photos/200/250?random=4" alt="Custom Pack" className="w-32 h-40 object-cover rounded-xl transform rotate-6 group-hover:rotate-0 transition-transform duration-300" />
             </div>

             <h3 className="text-2xl font-bold mb-2">Create Your Own.</h3>
             <p className="text-sm text-red-100 mb-6">Explore all our bold flavors and create a wild mix.</p>
             
             <button className="bg-brand-yellow text-brand-brown px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-white transition-colors w-full justify-center">
               Get Started <ArrowRight size={16} />
             </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BestSellers;