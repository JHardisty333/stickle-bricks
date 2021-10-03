
// USER ROUTES
export const allUsersApi = (jwt) => {
    return fetch('/api/user/admin', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + jwt ,
            'Content-Type': 'application/json'
        }
    })
}

export const oneUserApi = (jwt) => { //includes cart and order data
    return fetch('/api/user', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + jwt,
            'Content-Type': 'application/json'
        }
    })
} 

export const loginUserApi = (email, password) => {
    return fetch('/api/user/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
          })
    })
}

export const signUpUserApi = (name, email, password) => {
    return fetch('/api/user/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
          })
    })
    
}

export const updateUserApi = (jwt, name, email, password) => {
    return fetch('/api/user/', {
        method: 'PUT',
        headers: {
            'Authorization': 'Bearer ' + jwt ,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        })
    })
    
}

export const deleteUserApi = (jwt) => {
    return fetch('/api/user/', {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + jwt ,
            'Content-Type': 'application/json'
        }
    })
   
}

export const guestCheckCart = (cart) => {
    return fetch('/api/order/guest', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cart: cart
        })
    })
    
}

export const checkCartApi = (jwt) => {
    return fetch('/api/user/cart', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + jwt ,
            'Content-Type': 'application/json'

        }
    })
   
}

export const addCartApi = (jwt, itemId, quantity) => {
    return fetch('/api/user/cart', {
        method: 'PUT',
        headers: {
            'Authorization': 'Bearer ' + jwt ,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            itemId: itemId,
            quantity: quantity
        })
    })
   
}

export const deleteCartApi = (jwt, itemId) => {
    return fetch('/api/user/cart', {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + jwt ,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            itemId: itemId,
        })
    })
   
}

export const addOrderApi = (jwt, address) => {
    return fetch('/api/user/order', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + jwt ,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            address: address,
            // total: total ? total : null
        })
    })
   
}

// ITEM ROUTES
export const itemsApi = () => { //Get All Items
    return fetch('/api/item', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
  

}

export const itemApi = (itemId) => { //Get One Item
    return fetch('/api/item/one/' + itemId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })


}

// /item/search -- search by name
export const searchItemsApi = (searchObject) => {
    return fetch('/api/item/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(searchObject)
    })
    
}

// /item/type -- all item types available
export const allItemTypesApi = () => {
    return fetch('/api/item/type', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
 
} 

// /item/color -- all colors
export const itemAllColorsApi = () => {
    return fetch('/api/item/color', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
   
}

// /item/featured
export const itemFeaturedApi = () => {
    return fetch('/api/item/featured', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    
}

export const addItemApi = (jwt, itemObject ) => {
    return fetch('/api/admin', {
        method: 'POST',
        header: {
            'Authorization': 'Bearer ' + jwt ,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            type: itemObject.type,
            productId: itemObject.productId,
            colorId: itemObject.colorId,
            price: itemObject.price,
            quantity: itemObject.quantity,
            active: itemObject.active
    
        })
    })
    
}

export const updateItemApi = (itemObject, jwt) => {
    return fetch('/api/item/color/admin/', {
        method: 'PUT',
        headers: {
            'Authorization': 'Bearer ' + jwt ,
            'Content-Type': 'application/json'
        },
        body: JSON.stringfify(itemObject)
    })
    
}

// Calls all Categories
export const categoryApiCall = () => {
    return fetch('api/category', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
   
}

//  ORDER ROUTES

export const checkGuestCartApiCall = (cart) => {
    return fetch('api/order/guest', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cart: cart
        })
    })

} 
export const guestOrderApiCall = (cart, total, name, address, email) => {
    return fetch('api/order/guest', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cart: cart,
            total: total,
            name: name,
            address: address,
            email: email
        })
    })
    
}

export const userOrderApi = (jwt) => {
    return fetch('/api/order/user', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + jwt ,
            'Content-Type': 'application/json'
        }
    })
 
}

export const cancelOrderApi = (jwt, id) => {
    return fetch('/api/order/user', {
        method: 'PUT',
        headers: {
            'Authorization': 'Bearer ' + jwt ,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id
        })
    })
}

export const allOrdersApi = (jwt) => {
    return fetch('/api/order/admin', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + jwt ,
            'Content-Type': 'application/json'
        }
    })
   
}


export const orderStatusApi = (jwt, status) => {
    return fetch('/api/order/orders', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + jwt ,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            status: status
        })
    })
   
}


export const updateOrderApi = (jwt, status) => {
    return fetch('/api/order/', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + jwt ,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            status: status
        })
    })
   
}