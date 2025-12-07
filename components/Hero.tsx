import React from 'react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] bg-gradient-to-br from-brand-red to-[#C7161F] overflow-hidden flex items-center pt-20">
      
      {/* Decorative Background Circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-yellow opacity-10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="text-white space-y-6 md:pl-8">
          <div className="inline-block px-4 py-1 border border-white/30 rounded-full text-sm backdrop-blur-sm bg-white/10 mb-2">
            New Flavors Available
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            The Best <br />
            <span className="text-brand-yellow">Snack</span> For You
          </h1>
          <p className="text-lg md:text-xl text-red-100 max-w-md leading-relaxed">
            Potato Chips are the most eaten and popular crispy snack items. Demand for potato chips is rising.
          </p>
          <div className="pt-4">
             <Button>Shop Now</Button>
          </div>
        </div>

        {/* Hero Image / Composition */}
        <div className="relative h-[500px] flex items-center justify-center">
            {/* Abstract representation of floating chips and bags */}
            
            {/* Main Center Bag */}
            <div className="relative z-20 transform hover:scale-105 transition-transform duration-500 cursor-pointer">
              <img 
                src="https://picsum.photos/400/550" 
                alt="Main Chip Bag" 
                className="w-64 md:w-80 h-auto object-cover rounded-[3rem] shadow-2xl rotate-[-5deg] border-4 border-white/20"
              />
            </div>

            {/* Floating Background Bag Left */}
            <div className="absolute top-10 left-0 md:left-10 z-10 transform -rotate-12 animate-pulse" style={{ animationDuration: '4s' }}>
                <img 
                    src="https://picsum.photos/200/300" 
                    alt="Chip Bag 2" 
                    className="w-32 md:w-40 h-auto object-cover rounded-3xl opacity-80 shadow-lg blur-[1px]"
                />
            </div>

            {/* Floating Background Bag Right */}
            <div className="absolute bottom-10 right-0 md:right-10 z-30 transform rotate-12" >
                <img 
                    src="https://picsum.photos/210/310" 
                    alt="Chip Bag 3" 
                    className="w-36 md:w-44 h-auto object-cover rounded-3xl shadow-xl border-2 border-brand-yellow"
                />
            </div>
            
            {/* Floating Chips (Circles for abstraction) */}
            <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-brand-yellow rounded-full shadow-lg opacity-80 animate-bounce" style={{ animationDuration: '3s' }}></div>
            <div className="absolute bottom-1/3 left-10 w-8 h-8 bg-brand-yellow rounded-full shadow-lg opacity-60 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>

        </div>
      </div>

      {/* Bottom Curve Divider */}
      <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="fill-white">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
        <button className="bg-brand-bgRed hover:bg-red-600 text-white p-4 rounded-full shadow-lg transition-transform hover:-translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;