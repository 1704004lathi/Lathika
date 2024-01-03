import React from 'react';
import './HomePage.css';
import veg2 from '../images/veg2.jpg'; 
import fru1 from '../images/fru1.jpg';
import blu1 from '../images/bul1.jpg';

const HomePage2 = () => {
  return (
    <div className="home-container">
    
          <h2 className="kee">Your Trusted Partner for your deliveries</h2>
          <br></br>
          <p className='para'>Experience hassle-free delivery right at your doorstep.</p>
          <br></br>
          <br></br>
          <a href="#services" className="cta-button">
            Explore Our Items
          </a>
        
    <br></br>
    <br></br>
        <h2 className="jee">Our Available Items</h2>
      <section id="services" className="services">
        <div className="service-card">
          <img src={veg2} alt="" className='veg2'/>
          <h3>Vegetables</h3>
          <p className="hoo">Fresh and Healthy vegetables</p>
        </div>
        <div className="service-card">
        <img src={fru1} alt="" className='fru1'/>
          <h3>Fruits</h3>
          <p className="goo">Fresh and Healthy fruits</p>
        </div>
        <div className="service-card">
        <img src={blu1} alt="" className='blu1'/>
          <h3>Groceries</h3>
          <p className="lee">Fresh Groceries</p>
        </div>
        {/* Add more service cards as needed */}
      </section>
      <section id="promotions" className="promotions">
        <h2>Current Promotions</h2>
        <div className="promotion-card">
          <h3>First-Time Customers</h3>
          <p className="loo">Get 10% off on your first delivery with us!</p>
          <p className="too">Use Promocode:Welcome10</p>
        </div>
        {/* Add more promotion cards as needed */}
      </section>
  
    </div>
  );
};

export default HomePage2;