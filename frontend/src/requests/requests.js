import axios from "axios";

export function getProducts() {
    return axios.get('/api/product/')
}

export function getOrdenDetailById(id) {
    return axios.get(`/api/orderDetail/getorder/${id}`)
}

export function setOrder(user) {
    return axios.post(`/api/orderDetail/sendEmail`, { email: user })
}

export function getOrderAll(id) {
    return axios.get(`/api/orderItem/getAll/${id}`)
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

export function getCategoryAll() {
    return axios.get(`/api/category/getAll/`)
}