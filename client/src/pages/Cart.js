import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Alert, Spinner } from 'reactstrap';
import { checkCartApi, deleteCartApi  } from '../utils/api'
import noImage from '../utils/noImageFound.jpg';

// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Cart = () => {

    function removeItem(itemId) {
       if(confirm('Are you sure you want to remove this item?')) {
        const jwt = localStorage.getItem('stickelbricks-jwt');
        const response = await deleteCartApi(jwt, itemId);
        if (!response.ok) {
            if (response.status === 401) {
                localStorage.removeItem('stickleBrick-jwt');
                history.push('/login');
                return;
            } else return alert('an error has occurred');
        }
    }
        
    }



    const [cart, setCart] = useState();
    const [checkCart, setCheckCart] = useState((<Spinner color="dark" className="my-5 p-4 mx-auto" />))
    const [visible, setVisible] = useState(true)
    const history = useHistory();

    const onDismiss = () => setVisible(false)

    async function fetchData(props) {
        const jwt = localStorage.getItem('stickelbricks-jwt');
        const response = await checkCartApi(jwt);
        const data = await response.json();
        console.log(data);
        if (!response.ok) {
            if (response.status === 409) {
                const cartData = await response.json();
                setCheckCart(cartData.cartErrors.map((error) => (
                    <div>
                        <Alert color="info" isOpen={visible} toggle={onDismiss}>
                            <h1>{error.issue}</h1>
                        </Alert>
                    </div>
                )))
                setCart(cartData.cart.map((item) => (
                    <div>
                        <img src={item.image} alt={item.productName} id={item.itemId} onError={(e) => { e.target.onerror = null; e.target.src = noImage }} style={{ "maxWidth": "100%", "height": "50%" }} />
                        <p>{item.productName}</p>
                        <p>{item.quantity}</p>
                        <p>{parseFloat(item.price.$numberDecimal)}</p>
                    </div>
                )))
            } else if (response.status === 401) {
                localStorage.removeItem('sticklebricks-jwt');
                history.push('/login');
            } else return alert('An error has occurred');
        }
        const cartData = await response.json();
        setCart(cartData.cart.map((item) => {
            return (
                <div>
                    <img src={item.image} alt={item.productName} id={item.itemId} style={{ "maxWidth": "100%", "height": "50%" }} />
                    <p>{item.productName}</p>
                    <p>{item.quanity}</p>
                    <p>{parseFloat(item.priceTotal.$numberDecimal)}</p>
                    <button type="button" id={item.itemId} onClick={(e) => removeItem(e.target.id)}>Remove</button>
                </div>
            )

        }))


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
                            <h1>Shopping Cart</h1>


                            {checkCart}

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