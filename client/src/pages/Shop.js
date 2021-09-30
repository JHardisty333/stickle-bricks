import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const Shop = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (

      <>
        <div class="container-fluid">
        <div className="row">
            <div className='col-3'>
                {/* search bar goes hear */}
            </div>
    
        </div>
        <div className="row">
            <div className="col-4">
                <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
                <Collapse isOpen={isOpen}>
                    <Card>
                        <CardBody>
                            Anim pariatur cliche reprehenderit,
                            enim eiusmod high life accusamus terry richardson ad squid. Nihil
                            anim keffiyeh helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident.
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        </div>
    
    </div>

    </>
    );
}

export default Shop;
