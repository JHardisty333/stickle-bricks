import React from 'react';
  
const Contact = () => {
 return (
    <div className="contact-body" style={{"minHeight": "80vh"}}>
      <div className="contact-body-pic">
      <section className="contact">
        <div className="contact-us">
          <div className="contactus-text">
            
              <h1>Contact Us</h1>
                <h2>the_stickles@hotmail.com</h2> 
                <h2>801-554-1852</h2>
            
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="contactspecial">
          <div className="contactus-text">
            
              <h1>Parts Request</h1>
                <h2>Don't see what you're looking for in the store? Send us an email request! New stock is always inbound so we may have what you need, just not yet on display.</h2> 
                <h3 className="partslist">Include the following information on request</h3>
                <ul className="termslist">
                  <li>Bricklink User Name</li>
                  <li>Part Number</li>
                  <li>Color</li>
                  <li>Quantity</li>
                  <li>Notes or Special Instructions</li>
                </ul>
            
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};
  
export default Contact;