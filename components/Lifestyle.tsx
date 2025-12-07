import React from 'react';
import { ArrowRight } from 'lucide-react';

const Lifestyle: React.FC = () => {
  const cards = [
    { id: 1, image: "https://picsum.photos/400/500?random=20", title: "Snacking" },
    { id: 2, image: "https://picsum.photos/400/500?random=21", title: "Party Time" },
    { id: 3, image: "https://picsum.photos/400/500?random=22", title: "On the Go" },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-brand-brown">Taste the good stuff .</h2>
          <a href="#" className="text-brand-red font-medium flex items-center gap-1 hover:underline text-sm">
            Shop all <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.id} className="relative group">
              <div className="h-[400px] rounded-t-[3rem] rounded-b-[2rem] overflow-hidden relative">
                 <img 
                   src={card.image} 
                   alt={card.title} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/80 to-transparent opacity-60"></div>
                 
                 <div className="absolute bottom-20 left-0 w-full text-center">
                    <h3 className="text-white font-bold text-xl">{card.title}</h3>
                 </div>
              </div>

              {/* Overlapping Button */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[80%]">
                 <button className="w-full bg-brand-yellow hover:bg-brand-yellowDark text-brand-brown font-semibold py-3 px-6 rounded-full flex items-center justify-between shadow-lg transition-all group-hover:shadow-xl">
                    <span className="text-sm">Shop now</span>
                    <ArrowRight size={16} />
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;