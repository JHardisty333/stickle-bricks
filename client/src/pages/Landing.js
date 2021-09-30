import React from 'react';

const Landing = () => {
  return (
    <div className="landing-body" >
      <section className="landing">
        <div className="greeting">
          <div className="greeting__text">
            <span className>Welcome to StickleBrick’s!
              <br />We strive to offer all fans of LEGO© <br />both young and old
              <br />a quality place to find all the greatest sets, <br />minifigs, and
              even the last piece<br />needed to finish your MOC!</span>
          </div>
          <button type="button" id="Deals">Deal of the Day</button>
        </div>
      </section>
    </div>
  );
};

export default Landing;