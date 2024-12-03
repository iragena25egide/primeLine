import React, { useRef } from 'react'
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

import slide1 from '../public/image/slide1.jpg';
import slide2 from '../public/image/slide2.jpg';
import slide3 from '../public/image/slide3.png';
import slide4 from '../public/image/slide4.jpg';
import slide5 from '../public/image/slide5.jpg';
import slide6 from '../public/image/slide6.webp';

const Explore = () => {

    const imageContainerRef=useRef(null);

    const images=[slide1,slide2,slide3,slide4,slide5,slide6];

    const prev=()=>imageContainerRef.current.scrollLeft -= 250;
    const next=()=>imageContainerRef.current.scrollLeft += 250;
  return (
    <div className="explore-container">
        <div className="explore-top">
            <div className="left-explore-top">
                <h4>Explore More</h4>
            </div>
            <div className="right-explore-top">
                <div className="icon" onClick={prev}>
                    <GrLinkPrevious />
                </div>
                <div className="icon" onClick={next}>
                    <GrLinkNext  />
                </div>
            </div>
        </div>
        <div className="explore-content">
                <div className="content">
                    <div className="slide-panel" ref={imageContainerRef}>
                    {images.map((image)=>(
                        <img src={image} alt="Image Not Found" />
                    ))}
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Explore