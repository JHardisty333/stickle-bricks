import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { itemApi } from "../utils/api";


const Shop = (props) => {
    const {
        className
      } = props;
    async function fetchData() {
        const response = await itemApi()
        if (!response.ok) alert('an error has occurred')
        const items = await response.json()
        setTotalItems(items)
        const page = items.slice(0, 50);
        setItems(page.map((item, index) => (
            <div key={item.productId} data-index={index} id={item.productId} onClick={productClick}>
                <img src={item.image[0]}  style={{}}/>
                <p>{item.productName}</p>
                <p>{item.condition}</p>
                <p>{parseFloat(item.price)}</p>
            </div>
        )))
    }
    
      const [modal, setModal] = useState(false);
    
      const toggle = () => setModal(!modal);
      const [totalItems, setTotalItems] = useState([])
    const [Items, setItems] = useState((<div>Loading</div>));
    const [modalItem, setModalItem] = useState({});

    useEffect(() => {
        fetchData();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [])

    const productClick = (event) => {
        console.log(event.target)
        setModalItem(Items[event.target])
        toggle()
    }

    return (
        <div>
            <p>Loaded</p>
            {Items}

            <div>
                <Modal isOpen={modal} toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle}>{modalItem.productName}</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle}>Add to Cart</Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    )
}

export default Shop;
