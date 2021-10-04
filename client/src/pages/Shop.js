import React, { useState, useEffect } from 'react';
import noImage from '../utils/noImageFound.jpg';
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
   
} from 'reactstrap';
import {
    itemsApi,
    itemApi,
    addCartApi,
    searchItemsApi,
    categoryApiCall,
    allItemTypesApi,
    itemAllColorsApi
} from "../utils/api";

const Shop = () => {
    //modal controls




    const [totalItems, setTotalItems] = useState([]) //current array of items 
    const [Items, setItems] = useState((<Spinner color="dark" className="my-5 p-4 mx-auto" />)); // current items displayed on page
    const [maxIndex, setMaxIndex] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0)
    const [searchTerm, setSearchTerm] = useState(null);
    const [colorFilter, setColorFilter] = useState(null);
    const [categoryFilter, setCategoryFilter] = useState(null);
    const [typeFilter, setTypeFilter] = useState(null);
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

    useEffect(() => {
        let pageItems;
        if (currentIndex === maxIndex) {
            pageItems = totalItems.slice(0 + (60 * currentIndex), maxIndex);
        }
        pageItems = totalItems.slice(0 + (60 * currentIndex), 60 + (60 * currentIndex));
        setItems(pageItems.map((item) => ( //STYLE ME
            <Col sm={4} key={item._id} className='itemStyle'>
                <img src={item.image[0]} alt={item.productName} id={item._id} onClick={productClick} onError={(e) => { e.target.onerror = null; e.target.src = noImage }} style={{ "maxWidth": "100%", "height": "50%" }} />
                <p>{item.productName}</p>
                <p>{item.condition}</p>
                <p>{parseFloat(item.price.$numberDecimal)}</p>
            </Col>
        )))
    }, [currentIndex])



    // ADD TO CART FUNCTION
    const history = useHistory()
    const [quantity, setQuantity] = useState(1)

    const handleAddCart = async (event) => {
        const jwt = localStorage.getItem('stickleBrick-jwt');
        if (jwt) {
            const response = await addCartApi(jwt, event.target.id, quantity);
            if (!response.ok) {
                if (response.status === 401) {
                    localStorage.removeItem('stickleBrick-jwt');
                    history.push('/login');
                    return;
                } else return alert('an error has occurred');
            }
            toggle()
            alert(event.target.value + ' has been added to your cart!')
        } else {
            history.push('/login');
        }
    }

    // MODAL POPOUT FOR ITEMVIEW
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const productClick = async (event) => { // to open modal
        const response = await itemApi(event.target.id)
        if (!response.ok) return alert('an error has occurred')
        const item = await response.json();
        setModalItem(item)// this should reference the item index
        toggle()
    }

    async function runSearch() {
        let search = {}
        if (searchTerm) {
            search.search = searchTerm;
        } if (categoryFilter) {
            search.category = categoryFilter;
        } if (colorFilter) {
            search.color = colorFilter;
        } if (typeFilter) {
            search.type = typeFilter.toUpperCase();
        }
        console.log(search)
        
            const response = await searchItemsApi(search);
            if (!response.ok) return alert('An error has occurred attempting to search!')
            const items = await response.json();
            console.log(items === [])
            if (items.length === 0) {
                setItems((
                    <div><h1>
                        Uh Oh! <br />
                        Nothing Found!
                    </h1></div>
                ))
                setTotalItems([])
                setCurrentIndex(0)
                setMaxIndex(0)
            } else {

                loadItems(items);
            }
        
    }

    function loadItems(items) {
        setTotalItems(items);
        setMaxIndex((Math.ceil(items.length / 60) - 1));
        setCurrentIndex(0);
        const pageItems = items.slice(0, items.length < 60 ? items.length : 60);
        setItems(pageItems.map((item) => (  //STYLE ME
            <Col sm={4} key={item._id} className='itemStyle'>
                <img src={item.image[0]} alt={item.productName} id={item._id} onClick={productClick} onError={(e) => { e.target.onerror = null; e.target.src = noImage }} style={{ "maxWidth": "100%", "height": "50%" }} />
                <p>{item.productName}</p>
                <p>{item.condition}</p>
                <p>{parseFloat(item.price.$numberDecimal)}</p>
            </Col>
        )))
    }

    async function fetchData() {
        const response = await itemsApi();
        if (!response.ok) alert('an error has occurred');
        const items = await response.json();
        loadItems(items);
    }


    //    CATEGORY DROP DOWN
    const [catDropdown, catSetDropdown] = useState(false);
    const [category, setCategory] = useState()

    async function fetchCategories() {
        const response = await categoryApiCall();
        if (!response.ok) alert('error has occurred')
        const categories = await response.json();
        setCategory(categories.map((category) => (
            <option key={category.categoryId} value={category.categoryId}>{category.categoryName}</option>
        )))

        catSetDropdown(categories);
    }

    // TYPES DROP DOWN
    const [typeDropdown, typeSetDropdown] = useState(false);
    const [type, setType] = useState()

    async function fetchAllTypes() {
        const response = await allItemTypesApi();
        if (!response.ok) alert('An error has occurred!')
        const types = await response.json();
        setType(types.map((type) => (
            <option key={type.itemType} value={type.itemType}>{type.itemType}</option>
        )))
        typeSetDropdown(types)
    }

    const [colorDropdown, colorSetDropdown] = useState(false)
    const colorToggle = () => colorSetDropdown(!colorDropdown)
    const [color, setColor] = useState()

    async function fetchAllColors() {
        const response = await itemAllColorsApi();
        if (!response.ok) alert('An error has occurred')
        const colors = await response.json();
        setColor(colors.map((color) => (
            <option key={color.color_id} value={color.color_id}>{color.color_name}</option>
        )))

        colorSetDropdown(colors)
    }


    useEffect(() => {
        fetchData();
        fetchCategories();
        fetchAllTypes();
        fetchAllColors();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
        [])

    return ( //STYLE ME
        <Container fluid className="shop-body" style={{ "minHeight": "80vh" }}>
            <div style={{"minHeight": "5vh"}}></div>
            <Container className="shop-contain">
                <Row id="top">
                    <input className="form-control pb-3" type="text" id="searchbar" placeholder="Search by color, name, or lego part #" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
                    <button type='button' id="search" onClick={(e) => runSearch(e.target.id)}>Search</button>
                    {/* searchbar and sort options */}
                </Row>

                {/* categories search options */}
                <Row>
                    <Col sm={3} style={{ 'color': 'black' }}>
                        {/* categories and types search options */}
                        <div>
                            <select value={categoryFilter} onChange={(e) => e.target.value === 'All Categories' ? setCategoryFilter(null) : setCategoryFilter(e.target.value)}>
                                <option key={'All Categories'} value={'All Categories'}>All Categories</option>
                                {category}
                            </select>
                        </div>

                        <div>
                            <select value={typeFilter} onChange={(e) => e.target.value === 'All Types' ? setTypeFilter(null) : setTypeFilter(e.target.value)}>
                                <option key={'All Types'} value={'All Types'}>All Types</option>
                                {type}
                            </select>
                        </div>

                        <div>
                            <select value={colorFilter} onChange={(e) => e.target.value === 'All Colors' ? setColorFilter(null) : setColorFilter(e.target.value)}>
                                <option key={'All Colors'} value={'All Colors'}>All Colors</option>
                                {color}
                            </select>
                        </div>
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
                            <Button color="primary" id={modalItem._id} value={modalItem.productName} onClick={(e) => handleAddCart(e)}>Add to Cart</Button>{' '}
                            {/* Change onclick to new function that will add to cart */}
                        </ModalFooter>
                    </Modal>
                </div>

                <Row className="d-flex">
                    <a href="#top">
                        <button id='start' onClick={(e) => setCurrentIndex(0)} disabled={currentIndex === 0}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="3em" id='start' fill="currentColor" className="" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                <path fillRule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                            </svg>
                        </button>
                    </a>
                    <a href="#top">
                        <button id='minus' onClick={(e) => setCurrentIndex(currentIndex - 1)} disabled={currentIndex === 0}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="3em" fill="currentColor" id='minus' className="" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                            </svg>
                        </button>
                    </a>
                    <a href="#top">
                        <button id='plus' onClick={(e) => setCurrentIndex(currentIndex + 1)} disabled={currentIndex === maxIndex}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="3em" fill="currentColor" id='plus' className="" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </a>
                    <a href="#top">
                        <button id='end' onClick={(e) => setCurrentIndex(maxIndex)} disabled={currentIndex === maxIndex}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="3em" id='end' fill="currentColor" className="" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                                <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </a>
                </Row>
            </Container>
            <div style={{ "minHeight": "3vh" }}></div>
        </Container>
    )
}

export default Shop;
