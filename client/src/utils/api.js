
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

export const updateUserApi = (name, email, password, jwt) => {
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

<<<<<<< HEAD
export const addCartApi = (itemId, quantity, jwt) => {
=======
export const addCartApi = (jwt, itemId, quantity) => {
>>>>>>> 540d286f9c63e213995aaece4a13f3861b7efa4c
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

<<<<<<< HEAD
export const deleteCartApi = (itemId, quantity, jwt) => {
=======
export const deleteCartApi = (jwt, itemId, quantity) => {
>>>>>>> 540d286f9c63e213995aaece4a13f3861b7efa4c
    return fetch('/api/user/cart', {
        method: 'DELETE',
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

<<<<<<< HEAD
export const addOrderApi = (address, total, jwt) => {
=======
export const addOrderApi = (jwt, address, total) => {
>>>>>>> 540d286f9c63e213995aaece4a13f3861b7efa4c
    return fetch('/api/user/order', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + jwt ,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            address: address,
            total: total ? total : null
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

export const searchItemsApi = (itemName) => {
    return fetch('/api/item/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: itemName
        })
    })
    .then((response) => response.json()).then((data) => {
        if (data.message) {
          alert(data.message);
          return;
        }
      }) 
}

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

export const addItemApi = (jwt, addItem) => {
    return fetch('/api/admin', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + jwt ,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(addItem)
    })
    .then((response) => response.json()).then((data) => {
        if (data.message) {
          alert(data.message);
          return;
        }
      })
}

export const updateItemApi = (itemObject) => {
    return fetch('/api/item/color/admin/', {
        method: 'PUT',
        headers: {
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


export const categoryApiCall = () => {
    return fetch('api/category', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const orderApiCall = () => {
    return fetch('api/order', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}