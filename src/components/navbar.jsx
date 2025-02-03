import React, { useState } from 'react';
import { Menu, Phone, Mail, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);
 const location = useLocation();
 const [activeItem, setActiveItem] = useState('Home');

 const menuItems = [
   { name: 'Home', path: '/' },
   { name: 'History', path: '/history' },
   { name: 'Magazine', path: '/magazine' },
   { name: 'Gallery', path: '/gallery' },
   { name: 'Contact Us', path: '/contact' }
 ];

 return (
   <nav className="w-full bg-gradient-to-b from-green-100 to-green-50 border-b border-green-200 shadow-md">
     {/* Top contact bar */}
     <div className="hidden md:flex justify-end items-center px-6 py-1.5 bg-gradient-to-r from-green-700 to-green-800 text-white">
       <div className="flex items-center space-x-4">
         <span className="flex items-center">
           <Phone size={16} className="mr-2" />
           <a href="tel:+919876543210" className="hover:text-green-100 transition-colors">+91 98765 43210</a>
         </span>
         <span className="flex items-center">
           <Mail size={16} className="mr-2" />
           <a href="mailto:info@chennaikongu.org" className="hover:text-green-100 transition-colors">info@chennaikongu.org</a>
         </span>
       </div>
     </div>

     {/* Main navbar */}
     <div className="container mx-auto px-4 bg-white/80 backdrop-blur-sm">
       {/* Desktop View */}
       <div className="hidden md:block">
         <div className="flex justify-center items-center py-4 border-b border-green-100">
           <div className="flex items-center justify-center gap-8">
             <Link to="/">
               <img
                 src="/Images/logo1.png"
                 alt="Left Logo"
                 className="h-28 w-auto transform hover:scale-105 transition-transform duration-300"
               />
             </Link>
             
             <div className="text-center px-4">
               <h1 className="text-2xl font-bold text-green-900">சென்னை கொங்கு நண்பர்கள் சங்கம்</h1>
               <p className="text-green-700">Chennai Kongu Friends Association</p>
             </div>

             <Link to="/">
               <img
                 src="/Images/logo1.png"
                 alt="Right Logo"
                 className="h-28 w-auto transform hover:scale-105 transition-transform duration-300"
               />
             </Link>
           </div>
         </div>

         {/* Desktop Navigation Menu */}
         <div className="flex justify-center py-4 bg-green-50/50">
           <div className="flex space-x-8">
             {menuItems.map((item) => (
               <div key={item.name} className="relative group">
                 <Link
                   to={item.path}
                   onClick={() => setActiveItem(item.name)}
                   className={`px-3 py-2 text-sm font-medium transition-colors ${
                     location.pathname === item.path 
                       ? 'text-green-700 font-semibold' 
                       : 'text-green-600 hover:text-green-700'
                   }`}
                 >
                   {item.name}
                   <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                 </Link>
               </div>
             ))}
           </div>
         </div>
       </div>

       {/* Mobile View Header */}
       <div className="md:hidden flex items-center justify-between py-4">
         <div className="flex items-center space-x-2">
           <Link to="/">
             <img
               src="/Images/logo1.png"
               alt="Left Logo"
               className="h-16 w-auto"
             />
           </Link>
           <div className="text-center">
             <h1 className="text-lg font-bold text-green-900">சென்னை கொங்கு நண்பர்கள் சங்கம்</h1>
             <p className="text-sm text-green-700">Chennai Kongu Friends Association</p>
           </div>
         </div>
         <button
           onClick={() => setIsOpen(!isOpen)}
           className="p-2 rounded-md text-green-900 hover:bg-green-100 transition-colors"
         >
           {isOpen ? <X size={24} /> : <Menu size={24} />}
         </button>
       </div>

       {/* Mobile Navigation */}
       <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
         <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
           {menuItems.map((item) => (
             <Link
               key={item.name}
               to={item.path}
               onClick={() => {
                 setActiveItem(item.name);
                 setIsOpen(false);
               }}
               className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                 location.pathname === item.path
                   ? 'bg-green-100 text-green-700 font-semibold'
                   : 'text-green-600 hover:bg-green-50 hover:text-green-700'
               }`}
             >
               {item.name}
             </Link>
           ))}
           {/* Mobile contact information */}
           <div className="mt-4 space-y-2 border-t border-green-100 pt-2">
             <a href="tel:+919876543210" className="flex items-center text-green-700 px-3 py-2 hover:bg-green-50 rounded-md transition-colors">
               <Phone size={16} className="mr-2" />
               +91 98765 43210
             </a>
             <a href="mailto:info@chennaikongu.org" className="flex items-center text-green-700 px-3 py-2 hover:bg-green-50 rounded-md transition-colors">
               <Mail size={16} className="mr-2" />
               info@chennaikongu.org
             </a>
           </div>
         </div>
       </div>
     </div>
   </nav>
 );
};

export default Navbar;