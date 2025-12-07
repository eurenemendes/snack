import React from 'react';
import Button from './ui/Button';

const Feature: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto grid md:grid-cols-12 gap-8 items-center">
        
        {/* Left Grid of Chips */}
        <div className="md:col-span-7 grid grid-cols-3 gap-4 h-[500px] overflow-hidden rounded-[3rem]">
          {/* Creating a masonry-like feel with images */}
          <div className="col-span-1 space-y-4 pt-12">
            <img src="https://picsum.photos/300/400?random=10" className="w-full h-40 object-cover rounded-2xl" alt="Chip bag" />
            <img src="https://picsum.photos/300/400?random=11" className="w-full h-56 object-cover rounded-2xl" alt="Chip bag" />
          </div>
          <div className="col-span-1 space-y-4">
             <img src="https://picsum.photos/300/400?random=12" className="w-full h-56 object-cover rounded-2xl" alt="Chip bag" />
             <img src="https://picsum.photos/300/400?random=13" className="w-full h-40 object-cover rounded-2xl" alt="Chip bag" />
             <img src="https://picsum.photos/300/400?random=14" className="w-full h-32 object-cover rounded-2xl" alt="Chip bag" />
          </div>
          <div className="col-span-1 space-y-4 pt-8">
            <img src="https://picsum.photos/300/400?random=15" className="w-full h-48 object-cover rounded-2xl" alt="Chip bag" />
            <img src="https://picsum.photos/300/400?random=16" className="w-full h-48 object-cover rounded-2xl" alt="Chip bag" />
          </div>
        </div>

        {/* Right Info Card */}
        <div className="md:col-span-5 relative">
          <div className="bg-brand-brown text-white p-12 rounded-[3rem] shadow-2xl relative z-10 overflow-hidden">
             {/* Decorative blob */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>

             <h2 className="text-3xl font-bold mb-6 relative">
               Not just any <br/>
               chips.
               <span className="block w-12 h-1 bg-brand-yellow mt-4"></span>
             </h2>

             <p className="text-gray-300 leading-relaxed mb-8 text-sm">
               Potato Chips are the most eaten and popular crispy snack items. Demand for potato chips is increasing day by day as more and more people love to eat potato chips and of course, the item is easily available everywhere at many shops in a very short period.
             </p>

             <Button variant="primary">Shop now</Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Feature;