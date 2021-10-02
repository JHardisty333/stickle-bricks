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
    Spinner,
    Col,
    Row
} from 'reactstrap';
import { itemsApi } from "../utils/api";


const Shop = () => {
    //modal controls
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    let totalItems = []; //current array of items 
    const [Items, setItems] = useState((<Spinner color="dark" className="my-5 p-4 mx-auto" />)); // current items displayed on page
    const [pageIndex, setPageIndex] = useState([0, 49]);
    const [maxIndex, setMaxIndex] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(1)
    const [modalItem, setModalItem] = useState({
        "_id": "6157aeb54ed011c14c2ca42e",
        "productName": "Vehicle Tipper Bed Small",
        "productId": "2512",
        "colorId": 9,
        "colorName": "Light Gray",
        "colorCode": "9c9c9c",
        "itemType": "PART",
        "price": {
            "$numberDecimal": "0.16"
        },
        "quantity": 2,
        "image": [
            "//img.bricklink.com/PL/2512.jpg"
        ],
        "condition": "Used",
        "itemWeight": {
            "$numberDecimal": "3"
        },
        "active": true,
        "featured": false,
        "categoryId": 72,
        "date_added": "2021-10-02T00:58:29.119Z",
        "id": "6157aeb54ed011c14c2ca42e"
    });


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
            <div key={item._id} className='itemStyle'>
                <img src={item.image[0]} alt={item.productName} id={index} onClick={(e) => productClick(e)} style={{}} />
                <p>{item.productName}</p>
                <p>{item.condition}</p>
                <p>{parseFloat(item.price.$numberDecimal)}</p>
            </div>
        )))

    }



    const productClick = (event) => { // to open modal
        console.log(event.target)
        setModalItem(totalItems[event.target.id])// this should reference the item index
        console.log(event.target.id)
        console.log(totalItems)
        toggle()
    }



    async function fetchData() {
        const response = await itemsApi()
        if (!response.ok) alert('an error has occurred')
        const items = await response.json()

        totalItems = items;
        setMaxIndex((Math.ceil(items.length / 50)))
        const pageItems = items.slice(pageIndex[0], pageIndex[1]);
        console.log(items)
        setItems(pageItems.map((item, index) => (
            <Col sm={4} key={item._id} className='itemStyle'>
                <img src={item.image[0]} alt={item.productName} id={index} onClick={productClick} style={{"maxWidth":"100%", "height": "50%"}} />
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
            <Row>
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

            <Row>

            </Row>
            <button>
            
            </button>
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
