import axios from "axios";

export const getCommentById = async (id) => {
    try {
        const getComment = await axios.get(`/api/productComment/${id}`)
        return getComment
    } catch (error) {
        throw error
    }
}

export const postCommentAdd = async (data) => {
    try {
        const getComment = await axios.post(`/api/productComment/add`, data )
        return getComment
    } catch (error) {
        throw error
    }
}