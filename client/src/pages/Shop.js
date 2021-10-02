import React, { useState, useEffect } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Container,
    Spinner,
    Col,
    Row
} from 'reactstrap';
import { itemsApi, itemApi } from "../utils/api";


const Shop = () => {
    //modal controls
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    // const timer = setInterval(() => console.log(pageIndex), 10000)

    const [totalItems, setTotalItems] = useState([]) //current array of items 
    const [Items, setItems] = useState((<Spinner color="dark" className="my-5 p-4 mx-auto" />)); // current items displayed on page
    const [pageIndex, setPageIndex] = useState([0, 49])
    const [maxIndex, setMaxIndex] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(1)
    const [modalItem, setModalItem] = useState({
        "_id": "",
        "productName": "",
        "productId": "",
        "colorId": 0,
        "colorName": "",
        "colorCode": "",
        "itemType": "",
        "price": {
            "$numberDecimal": "0.00"
        },
        "quantity": 0,
        "image": [
            ""
        ],
        "condition": "Used",
        "itemWeight": {
            "$numberDecimal": "0.00"
        },
        "active": true,
        "featured": false,
        "categoryId": 0,
        "date_added": "0",
        "id": ""
    });

    async function pagination(e) { 
        const indexType = e.target.id;
        setItems((<Spinner color="dark" className="my-5 p-4 mx-auto" />))
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
            if (pageIndex[0] !== 0) {
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
        console.log(pageIndex)
        const pageItems = totalItems.slice(pageIndex[0], pageIndex[1]);
        setItems(pageItems.map((item) => (
            <Col sm={4} key={item._id} className='itemStyle'>
                <img src={item.image[0]} alt={item.productName} id={item._id} onClick={productClick} style={{ "maxWidth": "100%", "height": "50%" }} />
                <p>{item.productName}</p>
                <p>{item.condition}</p>
                <p>{parseFloat(item.price.$numberDecimal)}</p>
            </Col>
        )))
    }



    const productClick = async (event) => { // to open modal
        const response = await itemApi(event.target.id)
        if (!response.ok) alert('an error has occurred')
        const item = await response.json();
        setModalItem(item)// this should reference the item index
        toggle()
    }



    async function fetchData() {
        const response = await itemsApi()
        if (!response.ok) alert('an error has occurred')
        const items = await response.json();
        setTotalItems(items);
        setMaxIndex((Math.ceil(items.length / 50)))
        const pageItems = items.slice(pageIndex[0], pageIndex[1]);
        setItems(pageItems.map((item) => (
            <Col sm={4} key={item._id} className='itemStyle'>
                <img src={item.image[0]} alt={item.productName} id={item._id} onClick={productClick} style={{"maxWidth":"100%", "height": "50%"}} />
                <p>{item.productName}</p>
                <p>{item.condition}</p>
                <p>{parseFloat(item.price.$numberDecimal)}</p>
            </Col>
        )))
    }
    useEffect(() => {
        fetchData();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
        [])

    return (
        <Container>
            <Row id="top">
                <input type="text"></input>
                {/* searchbar and sort options */}
            </Row>
            <Row>
                <Col sm={3}>
                    {/* categories and types search options */}
                </Col>
                <Col sm={9}>
                    <Row className="d-flex">
                        {Items}
                    </Row>
                </Col>
            </Row>

            <div>
                <Modal isOpen={modal} toggle={toggle} className='modalStyle'>
                    <ModalHeader toggle={toggle}>{modalItem.productName}</ModalHeader>
                    <ModalBody>
                        <img src={modalItem.image} alt={modalItem.productName} style={{"width": "100%"}} />
                        <p>{modalItem.productName}</p>
                        <p>{modalItem.condition}</p>
                        <p>{parseFloat(modalItem.price.$numberDecimal)}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" value={modalItem._id} onClick={toggle}>Add to Cart</Button>{' '}
                        {/* Change onclick to new function that will add to cart */}
                    </ModalFooter>
                </Modal>
            </div>

            <Row className="d-flex">
                <a href="#top">
                    <button id='start' onClick={(e) => pagination(e)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="3em" id='start' fill="currentColor" className="" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                            <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </button>
                </a>
                <a href="#top">
                    <button id='minus' onClick={(e) => pagination(e)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="3em" fill="currentColor" id='minus' className="" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </button>
                </a>
                <a href="#top">
                    <button id='plus' onClick={(e) => pagination(e)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="3em" fill="currentColor" id='plus' className="" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                </a>
            </Row>

            {/* <Pagination aria-label="Page navigation example">
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
            </Pagination> */}
        </Container>
    )
}

export default Shop;
