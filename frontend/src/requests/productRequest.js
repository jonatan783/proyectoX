import axios from 'axios';
const REACT_APP_API_URL = process.env.REACT_APP_API_URL

export const postProductByName = async (searchArr) => {//no actualizado
    try {
        console.log('este es el arreglo para el request', searchArr)
        const productByName = await axios.post(`${REACT_APP_API_URL}/product/name`, searchArr)
        return productByName
    } catch (error) {
        throw error
    }
}


export const deleteProductById = async (id) => {
    try {
        const deleteProduct = await axios.delete(`${REACT_APP_API_URL}/vendedor/product/${id}`)
        return deleteProduct
    } catch (error) {
        throw error
    }
}

export const getProductById = async (id) => {
    try {
        const getProduct = await axios.get(`${REACT_APP_API_URL}/vendedor/product/${id}`)
        return getProduct
    } catch (error) {
        throw error
    }
}

export const putProductById = async (product) => {
    try {
        const getProduct = await axios.put(`/api/product/${product.id}`, product)
        return getProduct
    } catch (error) {
        throw error
    }
}

export const getProductAll = async () => {
    try {
        console.log('estamos en modo: ', process.env.NODE_ENV)
        console.log('esta es la ruta ', REACT_APP_API_URL)
        const getProduct = await axios.get(`${REACT_APP_API_URL}/vendedor/product`)
        return getProduct
    } catch (error) {
        throw error
    }
}

export const getProductCategory = async (id) => {
    try {
        const getProductCategory = await axios.get(`/api/product/category/${id}`)
        return getProductCategory
    } catch (error) {
        throw error
    }
}

export const postProductAdd = async (data) => {
    try {
        const addProduct = await axios.post(`${REACT_APP_API_URL}/vendedor/product/add`, data)
        return addProduct
    } catch (error) {
        throw error
    }
}
