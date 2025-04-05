import React from 'react';
import GridMotion from '../components/GridMotion';

import img1 from '../assets/GRID/1.webp';
import img2 from '../assets/GRID/2.webp';
import img3 from '../assets/GRID/3.webp';
import img4 from '../assets/GRID/4.webp';
import img5 from '../assets/GRID/5.webp';
import img6 from '../assets/GRID/6.webp';
import img7 from '../assets/GRID/7.webp';
import img8 from '../assets/GRID/8.webp';
import img9 from '../assets/GRID/9.webp';
import img10 from '../assets/GRID/10.webp';
import img11 from '../assets/GRID/11.webp';
import img12 from '../assets/GRID/12.webp';
import img13 from '../assets/GRID/13.webp';
import img14 from '../assets/GRID/14.webp';
import img15 from '../assets/GRID/15.webp';
import img16 from '../assets/GRID/16.webp';
import img17 from '../assets/GRID/17.webp';
import img18 from '../assets/GRID/18.webp';
import img19 from '../assets/GRID/19.webp';
import img20 from '../assets/GRID/20.webp';

const items = [
  <img src={img1} alt="1" className="w-full h-full object-cover" />,
  <img src={img2} alt="2" className="w-full h-full object-cover" />,
  <img src={img3} alt="3" className="w-full h-full object-cover" />,
  <img src={img4} alt="4" className="w-full h-full object-cover" />,
  <img src={img5} alt="5" className="w-full h-full object-cover" />,
  <img src={img6} alt="6" className="w-full h-full object-cover" />,
  <img src={img7} alt="7" className="w-full h-full object-cover" />,
  <img src={img8} alt="8" className="w-full h-full object-cover" />,
  <img src={img9} alt="9" className="w-full h-full object-cover" />,
  <img src={img10} alt="10" className="w-full h-full object-cover" />,
  <img src={img11} alt="11" className="w-full h-full object-cover" />,
  <img src={img12} alt="12" className="w-full h-full object-cover" />,
  <img src={img13} alt="13" className="w-full h-full object-cover" />,
  <img src={img14} alt="14" className="w-full h-full object-cover" />,
  <img src={img15} alt="15" className="w-full h-full object-cover" />,
  <img src={img16} alt="16" className="w-full h-full object-cover" />,
  <img src={img17} alt="17" className="w-full h-full object-cover" />,
  <img src={img18} alt="18" className="w-full h-full object-cover" />,
  <img src={img19} alt="19" className="w-full h-full object-cover" />,
  <img src={img20} alt="20" className="w-full h-full object-cover" />,
  <img src={img5} alt="21" className="w-full h-full object-cover" />,
  <img src={img3} alt="22" className="w-full h-full object-cover" />,
  <img src={img8} alt="23" className="w-full h-full object-cover" />,
  <img src={img12} alt="24" className="w-full h-full object-cover" />,
  <img src={img16} alt="25" className="w-full h-full object-cover" />,
  <img src={img9} alt="26" className="w-full h-full object-cover" />,
  <img src={img7} alt="27" className="w-full h-full object-cover" />,
  <img src={img14} alt="28" className="w-full h-full object-cover" />,
];

function Gallery() {
  return (
    <div className="w-full bg-black text-white px-4 sm:px-6 lg:px-10 py-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-blue-500 text-center mb-8">
        Gallery
      </h1>
      <div className="max-w-7xl mx-auto overflow-hidden">
        <GridMotion items={items} />
      </div>
    </div>
  );
}

export default Gallery;
