import axios from "axios";

export const getOrdenDetailById = async (id) => {
    try {
        const getOrderById = await axios.get(`/api/orderDetail/getorder/${id}`)
        return getOrderById
    } catch (error) {
        throw error
    }
}

export const setOrder = async (id) => {
    try {
        const setOrder = await axios.get(`/api/orderDetail/getorder/${id}`)
        return setOrder
    } catch (error) {
        throw error
    }
}

export const getOrderAll = async (id) => {
    try {
        const getOrder = await axios.get(`/api/orderItem/getAll/${id}`)
        return getOrder
    } catch (error) {
        throw error
    }
}