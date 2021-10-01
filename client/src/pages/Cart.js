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
// div className="about-body">
//       <section className="about"> 
//         <div className="aboutus">
//           <div className="about_us">
//             <span className>
//               <h1>About Us</h1>
//               StickleBrick's first began their journey in August 2006. It was an old childhood Lego set missing a few key pieces that started the internet search for replacements which first brought us to Bricklink.
//               It wasn't long before the AFOL passion kicked in to high gear and buying missing pieces turned in to a mission to return the favor and the StickleBrick's BrickLink Lego store was opened for business.
//               StickleBrick's is a genuine one stop shop specializing in themed sets, unusual finds, and bulk brick purchases.
//               </span>
//           </div>
//         </div>
//       </section>
//     </div>

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