import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, HelpCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-bgRed text-white pt-16 pb-8 px-6 rounded-t-[3rem] mt-[-3rem] relative z-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16 border-b border-white/20 pb-12">
          
          <div className="col-span-2 lg:col-span-2 pr-8">
            <div className="flex items-center gap-2 mb-6">
               <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden">
                 <img src="https://picsum.photos/40/40" alt="Logo" className="w-full h-full object-cover" />
               </div>
               <span className="font-bold text-2xl">Lay's</span>
            </div>
            <p className="text-sm text-red-100 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet consectetur. Morbi aenean gravida id pharetra tristique nibh. Felis sit lobortis molestie tristique facilisi aenean phasellus vel.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-xs text-red-100">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Works</a></li>
              <li><a href="#" className="hover:text-white">Career</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Help</h4>
            <ul className="space-y-4 text-xs text-red-100">
              <li><a href="#" className="hover:text-white">Customer Support</a></li>
              <li><a href="#" className="hover:text-white">Delivery Details</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Resources</h4>
             <ul className="space-y-4 text-xs text-red-100">
              <li><a href="#" className="hover:text-white">Free eBooks</a></li>
              <li><a href="#" className="hover:text-white">Development Tutorial</a></li>
              <li><a href="#" className="hover:text-white">How to - Blog</a></li>
              <li><a href="#" className="hover:text-white">Youtube Playlist</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-red-200">© Copyright 2022, All Rights Reserved by ClarityUI</p>
          
          <div className="flex gap-4">
             <a href="#" className="w-8 h-8 rounded-full bg-white text-brand-red flex items-center justify-center hover:bg-brand-yellow transition-colors"><Twitter size={14} /></a>
             <a href="#" className="w-8 h-8 rounded-full bg-white text-brand-red flex items-center justify-center hover:bg-brand-yellow transition-colors"><Facebook size={14} /></a>
             <a href="#" className="w-8 h-8 rounded-full bg-white text-brand-red flex items-center justify-center hover:bg-brand-yellow transition-colors"><Instagram size={14} /></a>
             <a href="#" className="w-8 h-8 rounded-full bg-white text-brand-red flex items-center justify-center hover:bg-brand-yellow transition-colors"><Youtube size={14} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;