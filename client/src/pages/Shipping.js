import React from 'react';

const Shipping = () => {
    return (
        <div className="shipping-body">
            <div className="shipping-body-pic">
                <section className="shipping">
                    <div className="shippingBox">
                        <div className="shipping-text">
                            <h1>Shipping</h1>
                            <h2>StickleBrick's offers shipping to all countries worldwide! Please take a moment to review the policies for domestic and international shipping below.</h2>
                        </div>
                    </div>
                </section>
                <section className="shipping">
                    <div className="shippingDom">
                        <h1>Domestic Shipping</h1>
                        <h3><ul>
                            <li>Minimum shipping charge is $4.50USD.</li>
                            <li>Minimum charge covers cost of handling, packaging and actual shipping cost up to 3 ounces.</li>
                            <li>All items shipped USPS First Class unless other arrangements are requested.</li>
                            <li>Insurance is available upon request at buyer's expense.</li>
                            
                        </ul></h3>
                    </div>

                </section>
                <section className="shipping">
                    <div className="shippingInt">
                        <h1>International Shipping</h1>
                        <h2>Most international shipments are significantly higher in cost than the minimum charge! It is strongly suggested that you review USPS shipping costs to your location prior to order placement.</h2>
                        <h3><ul>
                            <li>Minimum shipping charge is $4.50USD.</li>
                            <li>Minimum charge covers cost of handling, packaging and actual shipping cost.</li>
                            <li>All packages will be sent via USPS First Class International Mail unless requested otherwise by buyer.</li>
                            <li>Insurance is available (and highly recommended) upon request at buyer's expense.</li>
                            <li>Customs forms will be marked as 'Other' with the appropriate item value.</li>
                        </ul></h3>
                    </div>

                </section>
            </div>
        </div>
    );
};

export default Shipping;