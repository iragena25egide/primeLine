import React, { useRef } from 'react'
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";


import slide1 from '../public/image/ex1.png';
import slide2 from '../public/image/ex2.jpg';
import slide3 from '../public/image/ex3.webp';
import slide4 from '../public/image/ex4.jpg';
import slide5 from '../public/image/ex5.jpg';
import slide6 from '../public/image/ex6.jpg';
import slide7 from '../public/image/ex7.jpg';
import slide8 from '../public/image/ex8.jpg';
import slide9 from '../public/image/ex9.jpg';
const Explore = () => {
  const imageContainerRef = useRef(null);

  const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9];

  const prev = () => imageContainerRef.current.scrollLeft -= 250;
  const next = () => imageContainerRef.current.scrollLeft += 250;

  return (
    <div className="bg-gray-50 py-8 px-4">
      <div className="flex justify-between items-center px-4 mb-6">
        <div className="w-1/2">
          <h4 className="text-3xl font-medium text-gray-800">Explore More</h4>
        </div>
        <div className="flex space-x-4 w-1/4 justify-end">
          <div className="w-12 h-12 rounded-full border-2 border-gray-800 flex items-center justify-center cursor-pointer" onClick={prev}>
            <GrLinkPrevious />
          </div>
          <div className="w-12 h-12 rounded-full border-2 border-gray-800 flex items-center justify-center cursor-pointer" onClick={next}>
            <GrLinkNext />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-full lg:w-3/4 xl:w-2/3">
          <div ref={imageContainerRef} className="flex overflow-x-auto space-x-4 snap-x snap-mandatory scroll-smooth pb-12">
            {images.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-full sm:w-80 md:w-96 lg:w-112 xl:w-1/2">
                <img src={image} alt="Slide" className="w-full h-60 object-cover rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
