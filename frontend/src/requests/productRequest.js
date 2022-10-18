import axios from 'axios';

export const getProductByName = async (name) => {
    try {
        const productByName = await axios.get(`/api/product/name/${name}`)
        return productByName
    } catch (error) {
        throw error
    }
}

export const deleteProductById = async (id) => {
    try {
        const deleteProduct = await axios.delete(`/api/product/${id}`)
        return deleteProduct
    } catch (error) {
        throw error
    }
}

export const getProductById = async (id) => {
    try {
        const getProduct = await axios.get(`/api/product/${id}`)
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
        const getProduct = await axios.get('/api/product/')
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
        const addProduct = await axios.post("/api/product/add", data)
        return addProduct
    } catch (error) {
        throw error
    }
}
