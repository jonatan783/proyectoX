import axios from "axios";

export function getProducts() {
    return axios.get('/api/vendedor/product/')
}

export function createOrderDetail(user, shoppingCart) {
    return axios.post(`/api/orderDetail/createOrderDetail`, {
        UserId: user,
        total: shoppingCart,
    })
}

export function deleteItemCartById(id) {
    return  axios.delete(`/api/itemCart/remove/${id}`);
}

export function deleteShoppingCartById(id) {
    return axios.delete(`/api/shoppingCart/${id}`);
}

