
// USER ROUTES
export const allUsersApi = (jwt) => {
    return fetch('/api/user', {
        method: 'GET',
        header: {
            'Authorization': 'Bearer ' + jwt ,
            'Content-Type': 'application/json'
        }
    })
}

export const loginUserApi = (email, password) => {
    return fetch('/api/user/login', {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
          })
    })
    .then((response) => response.json()).then((data) => {
        if (data.message) {
          alert(data.message);
          return;
        }
      }) 
}

export const signUpUserApi = (name, email, password) => {
    return fetch('/api/user/signup', {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
          })
    })
    .then((response) => response.json()).then((data) => {
        if (data.message) {
          alert(data.message);
          return;
        }
      }) 
}

<<<<<<< HEAD
export const updateUserApi = (jwt, name, email, password) => {
=======
export const updateUserApi = (name, email, password, jwt) => {
>>>>>>> 540d286f9c63e213995aaece4a13f3861b7efa4c
    return fetch('/api/user/', {
        method: 'PUT',
        header: {
            'Authorization': 'Bearer ' + jwt ,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        })
    })
    .then((response) => response.json()).then((data) => {
        if (data.message) {
          alert(data.message);
          return;
        }
      }) 
}

export const deleteUserApi = (jwt) => {
    return fetch('/api/user/', {
        method: 'DELETE',
        header: {
            'Authorization': 'Bearer ' + jwt ,
            'Content-Type': 'application/json'
        }
    })
    .then((response) => response.json()).then((data) => {
        if (data.message) {
          alert(data.message);
          return;
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
    .then((response) => response.json()).then((data) => {
        if (data.message) {
          alert(data.message);
          return;
        }
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
    .then((response) => response.json()).then((data) => {
        if (data.message) {
          alert(data.message);
          return;
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
    .then((response) => response.json()).then((data) => {
        if (data.message) {
          alert(data.message);
          return;
        }
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
    .then((response) => response.json()).then((data) => {
        if (data.message) {
          alert(data.message);
          return;
        }
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
    .then((response) => response.json()).then((data) => {
        if (data.message) {
          alert(data.message);
          return;
        }
      }) 
}



// ITEM ROUTES
export const itemApi = () => {
    return fetch('/api/item', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => response.json()).then((data) => {
        if (data.message) {
          alert(data.message);
          return;
        }
      }) 

}

// /item/search -- search by name
export const searchItemsApi = (itemName) => {
    return fetch('/api/item/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            search: itemName
        })
    })
    .then((response) => response.json()).then((data) => {
        if (data.message) {
          alert(data.message);
          return;
        }
      }) 
}

// /items/type/:type -- search by specific item
export const itemTypeApi = (itemType) => {
    return fetch('/api/item/type/' + itemType, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => response.json()).then((data) => {
        if (data.message) {
          alert(data.message);
          return;
        }
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
    .then((response) => response.json()).then((data) => {
        if (data.message) {
          alert(data.message);
          return;
        }
      }) 
}

// /item/category/:id -- 
export const itemCategoryApi = (categoryId) => {
    return fetch('/api/item/category/' + categoryId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => response.json()).then((data) => {
        if (data.message) {
          alert(data.message);
          return;
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
    .then((response) => response.json()).then((data) => {
        if (data.message) {
          alert(data.message);
          return;
        }
      }) 
}

// /item/color/:id -- specific color
export const itemColorApi = (colorId) => {
    return fetch('/api/item/color/' + colorId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => response.json()).then((data) => {
        if (data.message) {
          alert(data.message);
          return;
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
    .then((response) => response.json()).then((data) => {
        if (data.message) {
          alert(data.message);
          return;
        }
      }) 
}

export const addItemApi = (jwt, itemObject ) => {
    return fetch('/api/admin', {
        method: 'POST',
        headers: {
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
    .then((response) => response.json()).then((data) => {
        if (data.message) {
          alert(data.message);
          return;
        }
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
    .then((response) => response.json()).then((data) => {
        if (data.message) {
          alert(data.message);
          return;
        }
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
    .then((response) => response.json()).then((data) => {
        if (data.message) {
          alert(data.message);
          return;
        }
      }) 
}

//  ORDER ROUTES
export const orderApiCall = (cart, total, name, address, email) => {
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
    .then((response) => response.json()).then((data) => {
        if (data.message) {
          alert(data.message);
          return;
        }
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
    .then((response) => response.json()).then((data) => {
        if (data.message) {
          alert(data.message);
          return;
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
    .then((response) => response.json()).then((data) => {
        if (data.message) {
          alert(data.message);
          return;
        }
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
    .then((response) => response.json()).then((data) => {
        if (data.message) {
          alert(data.message);
          return;
        }
      }) 
}


export const receivedOrdersApi = (jwt) => {
    return fetch('/api/order/admin/received', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + jwt ,
            'Content-Type': 'application/json'
        }
    })
    .then((response) => response.json()).then((data) => {
        if (data.message) {
          alert(data.message);
          return;
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
    .then((response) => response.json()).then((data) => {
        if (data.message) {
          alert(data.message);
          return;
        }
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
    .then((response) => response.json()).then((data) => {
        if (data.message) {
          alert(data.message);
          return;
        }
      }) 
}