import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BestSellers from './components/BestSellers';
import Feature from './components/Feature';
import Lifestyle from './components/Lifestyle';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden font-sans">
      <Header />
      <main>
        <Hero />
        <BestSellers />
        <Feature />
        <Lifestyle />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default App;