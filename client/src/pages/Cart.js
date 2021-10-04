import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UncontrolledAlert, Spinner } from 'reactstrap';
import { checkCartApi, deleteCartApi  } from '../utils/api';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Cart = () => {

    const [cart, setCart] = useState();
    const [checkCart, setCheckCart] = useState((<Spinner color="dark" className="my-5 p-4 mx-auto" />))
    const history = useHistory();

    function removeItem(e) {
        confirmAlert({
            title: 'Are you sure to remove ' + e.target.value + ' from your cart?',
            message: '',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => confirmRemove(e)
                },
                {
                    label: 'No',
                    onClick: () => {return} 
                }
            ]
        });
    }

    async function confirmRemove(e) {
        const itemId = e.target.id;
        const productName = e.target.value;
        const jwt = localStorage.getItem('stickleBrick-jwt');
        const response = await deleteCartApi(jwt, itemId);
        if (!response.ok) {
            if (response.status === 401) {
                localStorage.removeItem('stickleBrick-jwt');
                history.push('/login');
                return;
            } else return alert('an error has occurred');
        }
        alert(productName + 'has been deleted from your cart!')
        fetchData();
    }

    async function fetchData() {
        const jwt = localStorage.getItem('stickleBrick-jwt');
        const response = await checkCartApi(jwt);
        if (!response.ok) {
            if (response.status === 409) {
                const cartData = await response.json();
                setCheckCart(cartData.cartErrors.map((error) => (
                    <div>
                        <UncontrolledAlert color="info">
                            <p className="fs-1">{error.issue}</p>
                        </UncontrolledAlert>
                    </div>
                )))
                if (cartData.cart.length === 0) {
                    setCart((<div><h3>Your Cart is Empty!</h3></div>))
                } else {
                    setCart(cartData.cart.map((item) => (
                        <div>
                            <img src={item.image} alt={item.productName} id={item.itemId} style={{ "maxWidth": "100%", "height": "50%" }} />
                            <p>{item.productName}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: {parseFloat(item.priceTotal.$numberDecimal)}</p>
                            <button type="button" id={item.itemId} value={item.productName} onClick={(e) => removeItem(e)}>Remove From Cart</button>
                        </div>
                    )));
                }
                
            } else if (response.status === 401) {
                localStorage.removeItem('stickleBrick-jwt');
                history.push('/login');
            } else return alert('An error has occurred');
        } else {
            const cartData = await response.json();
            if (cartData.cart.length === 0) {
                setCart((<div className="mt-5"><h2>Your Cart is Empty!</h2></div>))
            } else {
                setCart(cartData.cart.map((item) => (
                    <div>
                        <img src={item.image} alt={item.productName} id={item.itemId} style={{ "maxWidth": "100%", "height": "50%" }} />
                        <p>{item.productName}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: {parseFloat(item.priceTotal.$numberDecimal)}</p>
                        <button type="button" id={item.itemId} value={item.productName} onClick={(e) => removeItem(e)}>Remove From Cart</button>
                    </div>
                )));
            }
            setCheckCart((<div></div>))


        }
        
    }

    useEffect(() => {
        fetchData();
    },
        [])


    return (
        <div className="cart-body" style={{ "minHeight": "80vh" }}>
            <section className="cart">
                <div className="shop_cart">
                    <div className="cart">
                        <span className="cart">
                            <div>
                                <h1>Shopping Cart</h1>
                            </div>
                            <div>
                                {checkCart}
                            </div>
                            <div>
                                {cart}
                            </div>
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