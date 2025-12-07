import React from 'react';
import { ArrowRight } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section className="bg-white pb-20 px-6">
      <div className="container mx-auto">
        <div className="bg-brand-brown rounded-[3rem] p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Decorative Chips Stack */}
          <div className="absolute -left-10 bottom-0 opacity-20 md:opacity-100 pointer-events-none">
             <div className="flex flex-col -space-y-12 transform rotate-12">
                <div className="w-32 h-32 bg-brand-yellow rounded-full blur-md"></div>
                <div className="w-32 h-32 bg-brand-red rounded-full blur-md"></div>
             </div>
          </div>

          <div className="relative z-10 md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Sign up to receive exclusive <br/>
              offers and discounts.
            </h2>
          </div>

          <div className="relative z-10 w-full md:w-1/2 max-w-md">
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your e-mail address" 
                className="w-full bg-white rounded-full py-4 pl-6 pr-16 text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-yellow shadow-inner"
              />
              <button className="absolute right-2 top-2 bottom-2 w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center text-brand-brown hover:bg-yellow-400 transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;