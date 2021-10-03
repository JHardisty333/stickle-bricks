import React, {useEffect, useState} from 'react';
import {Alert} from 'reactstrap';
import {checkCartApi} from '../utils/api'
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Cart = () => {

    const [checkCart, setCheckCart] = useState()
    const [visible, setVisible] = useState(true)

    const onDismiss = () => setVisible(false)

    async function fetchData(props) {
        const jwt = localStorage.getItem('stickelbricks-jwt');
        const response = await checkCartApi(jwt);
        if (response.status(409)) {
            setCheckCart((
                <div>
                    <Alert color="info" isOpen={visible} toggle={onDismiss}>
                        Something in your cart has changed and been removed!
                    </Alert>
                </div>
            ))
        } 
        
    }
    
    useEffect(() => {
        fetchData();
    }, 
        [])


    return (
        <div className="cart-body" style={{"minHeight": "80vh"}}>
            <section className="cart">
                <div className="shop_cart">
                    <div className="cart">
                        <span className="cart">
                            <h1>Shopping Cart</h1>

                        </span>
                    </div>
                </div>
            </section>
        </div>)
}


// const ModalExample = (props) => {
//   const {
//     buttonLabel,
//     className
//   } = props;

//   const [modal, setModal] = useState(false);

//   const toggle = () => setModal(!modal);

//   return (
//     <div>
//       <Button color="Black" onClick={toggle}>{buttonLabel}</Button>
//       <Modal isOpen={modal} toggle={toggle} className={Cart}>
//         <ModalHeader toggle={toggle}>Shopping Cart</ModalHeader>
//         <ModalBody>
//          Shopping Cart Items
//         </ModalBody>
//         <ModalFooter>
//           <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
//           <Button color="secondary" onClick={toggle}>Cancel</Button>
//         </ModalFooter>
//       </Modal>
//     </div>
//   );
// }

export default Cart;