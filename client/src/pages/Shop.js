import React, { useState, useEffect } from 'react';
import noImage from '../utils/noImageFound.jpg'
import { useHistory } from 'react-router-dom';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Container,
    Spinner,
    Col,
    Row,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle
} from 'reactstrap';
import { itemsApi, itemApi, addCartApi, searchItemsApi } from "../utils/api";

const Shop = () => {
    //modal controls
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [catDropdown, catSetDropdown] = useState(false);
    const catToggle = () => catSetDropdown(!catDropdown)

    const [totalItems, setTotalItems] = useState([]) //current array of items 
    const [Items, setItems] = useState((<Spinner color="dark" className="my-5 p-4 mx-auto" />)); // current items displayed on page
    const [maxIndex, setMaxIndex] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0)
    const [searchTerm, setSearchTerm] = useState();
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
    }

    useEffect(() => {
        let pageItems;
        if (currentIndex === maxIndex) {
            pageItems = totalItems.slice(0 + (50 * currentIndex), maxIndex);
        }
        pageItems = totalItems.slice(0 + (50 * currentIndex), 49 + (50 * currentIndex));
        setItems(pageItems.map((item) => (
            <Col sm={4} key={item._id} className='itemStyle'>
                <img src={item.image[0]} alt={item.productName} id={item._id} onClick={productClick} onError={(e) => { e.target.onerror = null; e.target.src = noImage }} style={{ "maxWidth": "100%", "height": "50%" }} />
                <p>{item.productName}</p>
                <p>{item.condition}</p>
                <p>{parseFloat(item.price.$numberDecimal)}</p>
            </Col>
        )))
    }, [currentIndex])

    const history = useHistory()
    const [quantity, setQuantity] = useState(1)

    const handleAddCart = async (event) => {
        const jwt = localStorage.getItem('jwt')

        console.log(jwt, event.target.id, quantity)
        if (jwt) {
            const response = await addCartApi(jwt, event.target.id, quantity)
            if (!response.ok) return alert('an error has occurred')
            localStorage.removeItem('jwt')
        } else {
            history.push('/login')
        }
    }

    const productClick = async (event) => { // to open modal
        const response = await itemApi(event.target.id)
        if (!response.ok) return alert('an error has occurred')
        const item = await response.json();
        setModalItem(item)// this should reference the item index
        toggle()
    }

    async function runSearch(id) {
        let items;
        if (id === "search") {
            const data = searchItemsApi(searchTerm)
        } else if (id === 'categories') {

        } else if (id === 'types') {

        }
    }

    async function fetchData() {
        const response = await itemsApi()
        if (!response.ok) alert('an error has occurred')
        const items = await response.json();
        setTotalItems(items);
        setMaxIndex((Math.ceil(items.length / 50) - 1))
        const pageItems = items.slice(0, items.length < 49 ? items.length : 49);
        setItems(pageItems.map((item) => (
            <Col sm={4} key={item._id} className='itemStyle'>
                <img src={item.image[0]} alt={item.productName} id={item._id} onClick={productClick} onError={(e) => { e.target.onerror = null; e.target.src = noImage }} style={{ "maxWidth": "100%", "height": "50%" }} />
                <p>{item.productName}</p>
                <p>{item.condition}</p>
                <p>{parseFloat(item.price.$numberDecimal)}</p>
            </Col>
        )))
    }

    const [category, setCategory] = useState((<DropdownItem disabled>Categories</DropdownItem>))

    async function fetchCategories() {
        const response = await categoryApiCall();
        if (!response.ok) alert('error has occurred')
        const categories = await response.json();
        console.log(categories)
        setCategory(categories.map((category) => (
            <DropdownItem key={category.categoryId} id={category.categoryId} value={category.categoryName}>{category.categoryName}</DropdownItem>
        )))

        catSetDropdown(categories);
        catToggle();
    }

    useEffect(() => {
        fetchData();
        fetchCategories();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
        [])

    return (
        <Container>
            <Row id="top">
                <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
                <button type='button' id="search" onClick={(e) => runSearch(e.target.id)}>Search</button>
                {/* searchbar and sort options */}
            </Row>
            <Row>
                <Col sm={3} style={{'color': 'black'}}>
                    {/* categories and types search options */}
                    <Dropdown isOpen={catDropdown} toggle={catToggle}>
                        <DropdownToggle caret>
                            Categories
                        </DropdownToggle>
                        <DropdownMenu>
                            {category}
                        </DropdownMenu>
                    </Dropdown>
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
                        <img src={modalItem.image[0]} alt={modalItem.productName} onError={(e) => { e.target.onerror = null; e.target.src = noImage }} style={{ "width": "100%" }} />
                        <p>{modalItem.productName}</p>
                        <p>{modalItem.condition}</p>
                        <p>{parseFloat(modalItem.price.$numberDecimal)}</p>
                    </ModalBody>
                    <ModalFooter>
                        <input type="number" defaultValue={1} min={1} max={modalItem.quantity} value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                        <Button color="primary" id={modalItem._id} onClick={(e) => handleAddCart(e)}>Add to Cart</Button>{' '}
                        {/* Change onclick to new function that will add to cart */}
                    </ModalFooter>
                </Modal>
            </div>

            <Row className="d-flex">
                <a href="#top">
                    <button id='start' onClick={(e) => { setCurrentIndex(0); pagination(e) }} disabled={currentIndex === 0}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="3em" id='start' fill="currentColor" className="" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                            <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </button>
                </a>
                <a href="#top">
                    <button id='minus' onClick={(e) => { setCurrentIndex(currentIndex - 1); pagination(e) }} disabled={currentIndex === 0}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="3em" fill="currentColor" id='minus' className="" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </button>
                </a>
                <a href="#top">
                    <button id='plus' onClick={(e) => { setCurrentIndex(currentIndex + 1); pagination(e) }} disabled={currentIndex === maxIndex}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="3em" fill="currentColor" id='plus' className="" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                </a>
                <a href="#top">
                    <button id='end' onClick={(e) => { setCurrentIndex(maxIndex); pagination(e) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="3em" id='end' fill="currentColor" className="" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                            <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
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
