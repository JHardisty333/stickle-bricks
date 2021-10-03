import React from 'react';


const Landing = () => {
  
  return (
  <div className="landing-body" style={{"minHeight": "80vh"}}>
    <section className="landing">
      <div className="greeting">
        <div className="greeting-text">
          <span>Welcome to StickleBrick’s!
            <br />We strive to offer all fans of <br />LEGO© both young and old
            <br />a quality place to find all the greatest sets, <br />minifigs, and
            even the last piece<br />needed to finish your MOC!</span>
        </div>
        {/* <button className="landingButton" type="button" id="Deals">Shop Now</button> */}
      </div>
    </section>
  </div>
  );

};

export default Landing;