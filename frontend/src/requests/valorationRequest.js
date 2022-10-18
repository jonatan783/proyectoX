import axios from 'axios'

export const getValorationById = async (id) => {
    try {
        const getValoration = await axios.get(`/api/productValoration/getAll/${id}`)
        return getValoration
    } catch (error) {
        throw error
    }
}

export const postValorationAdd = async (id, data) => {
    try {
        const addValoration = await axios.post(`/api/productValoration/add/${id}`, data)
        return addValoration
    } catch (error) {
        throw error
    }
}