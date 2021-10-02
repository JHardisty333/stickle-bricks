import React, { useState, useEffect } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Container,
    Pagination,
    PaginationItem,
    PaginationLink,
    Spinner
} from 'reactstrap';
import { itemsApi } from "../utils/api";


const Shop = () => {
    //modal controls
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [totalItems, setTotalItems] = useState([]) //current array of items 
    const [Items, setItems] = useState((<Spinner color="dark" className="py-5 mx-auto" />)); // current items displayed on page
    const [pageIndex, setPageIndex] = useState([0, 49]);
    const [maxIndex, setMaxIndex] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(1)
    const [modalItem, setModalItem] = useState({});


    function pagination(e) {
        const indexType = e.target.value;
        console.log(e.target);
        if (indexType === 'start') {
            setCurrentIndex(1);
            setPageIndex([0, 49]);
        }

        if (indexType === 'plus') {
            if (currentIndex !== maxIndex) {
                let index = []
                for (let i = 0; i < pageIndex.length; i++) {
                    index.push(pageIndex[i] + 50);
                }
                setPageIndex(index)
                setCurrentIndex(currentIndex + 1)
            }
        }

        if (indexType === 'minus') {
            if (!pageIndex[0] === 0) {
                let index = [];
                for (let i = 0; i < pageIndex.length; i++) {
                    index.push(pageIndex[i] - 50);
                }
                setPageIndex(index);
                setCurrentIndex(currentIndex - 1)
            }
        }

        if (indexType === 'end') {
            setPageIndex([0, 49]);
            let index = [];
            index.push(pageIndex[0] + (50 * maxIndex));
            index.push(totalItems.length - 1);
            setPageIndex(index);
            setCurrentIndex(maxIndex);
        }

        const pageItems = totalItems.slice(pageIndex[0], pageIndex[1]);
        setItems(pageItems.map((item, index) => (
            <div key={item._id}  className='itemStyle'>
                <img src={item.image[0]} alt={item.productName} data-index={index} id={item._id} onClick={(e) => productClick(e)} style={{}} />
                <p>{item.productName}</p>
                <p>{item.condition}</p>
                <p>{parseFloat(item.price.$numberDecimal)}</p>
            </div>
        )))

    }



    const productClick = (event) => { // to open modal
        console.log(event.target)
        // setModalItem(Items[event.target])// this should refrence the item index
        // toggle()
    }



    async function fetchData() {
        const response = await itemsApi()
        if (!response.ok) alert('an error has occurred')
        const items = await response.json()

        setTotalItems(items)
        setMaxIndex((Math.ceil(totalItems.length / 50)))
        const pageItems = items.slice(pageIndex[0], pageIndex[1]);

        setItems(pageItems.map((item, index) => (
            <div key={item._id} className='itemStyle'>
                <img src={item.image[0]} alt={item.productName} data-index={index} id={item._id} onClick={productClick} style={{}} />
                <p>{item.productName}</p>
                <p>{item.condition}</p>
                <p>{parseFloat(item.price.$numberDecimal)}</p>
            </div>
        )))
    }
    useEffect(() => {
        fetchData();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
        [])

    return (
        <Container>
            {Items}

            <div>
                <Modal isOpen={modal} toggle={toggle} className='modalStyle'>
                    <ModalHeader toggle={toggle}>{modalItem.productName}</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle}>Add to Cart</Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
            <Pagination aria-label="Page navigation example">
                <PaginationItem>
                    <PaginationLink first value='start' onClick={(e) => pagination(e)} />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink previous value='plus' onClick={(e) => pagination(e)} />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink next value='minus' onClick={(e) => pagination(e)} />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink last value='end' onClick={(e) => pagination(e)} />
                </PaginationItem>
            </Pagination>
        </Container>
    )
}

export default Shop;
