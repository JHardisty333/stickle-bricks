import React from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Cart = () => {
    return (
        <div className="cart-body">
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