import React from 'react';
import {addCartApi, itemApi} from '../utils/api'


function Login() {
    function addToCart() {
        //get item info from dom,
        const JWT = localStorage.JWT
        addCartApi(JWT, ItemId, Quantity)
    }
    const items = await itemApi()
    return (
        <>
        <button type="button" onClick={addToCart}>
        </button>
        {{items.map(item => (
            <div id={item._id}></div>
        ))}}
        </>
    );
}

export default Login;