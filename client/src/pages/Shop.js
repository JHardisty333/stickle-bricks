import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card, Container, Row, Col } from 'reactstrap';

const Shop = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (

      <>
        <Container>
        <Row>
            <Col sm={3}>
                {/* search bar goes hear */}
            </Col>
    
        </Row>
        <Row>
            <Col sm={4}>
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
            </Col>
        </Row>
    
    </Container>

    </>
    );
}

export default Shop;
