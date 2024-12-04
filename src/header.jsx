import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate=useNavigate();
  const [isSticky,setIsSticky]=useState(false);

  React.useEffect(()=>{
   const handleScroll = () => {
       if (window.scrollY > 50) {
         setIsSticky(true);
       } else {
         setIsSticky(false);
       }
     };
 
     window.addEventListener("scroll", handleScroll);
     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
  },[]);
  return (
    <div  className={`header-container ${isSticky ? "sticky" : ""}`}>
      <div className="logo">
        <img src="/public/image/logo.png" width={250} height={80} onClick={()=>{navigate('/')}}/>
      </div>
      <div className="menu">
          <ul>
            
           
            <Link to='/about-us' style={{textDecoration:'none'}}><li>ABOUT US</li></Link>
            <Link to='/capabilities' style={{textDecoration:'none'}}><li>CAPABLITIES</li></Link>
            <Link to='/careers' style={{textDecoration:'none'}}><li>CAREERS</li></Link>
          <div class="learn-more">
          <li>LEARN MORE</li>
          <div class="dropdown">
            <ul>
             <Link to='/emergency-service' style={{textDecoration:'none'}}><li>EMERGENCY SERVICE</li></Link>
             <Link to='/customer-care' style={{textDecoration:'none'}}><li>CUSTOMER CARE</li></Link>
            </ul>
          </div>
          </div>
            
            {/* with drop down of emergency services and customer care */}
          </ul>
      </div>
      <div className="contact">
          <div className="contact-button">
            <Link to='/contact-us' style={{textDecoration:'none',color:'#1a1a1a'}}>CONTACT US</Link>
          </div>
      </div>
    </div>
  )
}

export default Header