import axios from 'axios'

export const getCategoryAll = async () => {
    try {
        const getCategory = await axios.get(`/api/category/getAll/`)
        return getCategory
    } catch (error) {
        throw error
    }
}

export const deleteCategoryById = async (id) => {
    try {
        const deleteCategory = await axios.delete(`/api/category/${id}`)
        return deleteCategory
    } catch (error) {
        throw error
    }
}

export const getCategoryById = async (id) => {
    try {
        const getCategory = await axios.get(`/api/category/${id}`)
        return getCategory
    } catch (error) {
        throw error
    }
}

export const putCategoryById = async (id, category) => {
    try {
        const putCategory = await axios.put(`/api/category/${id}`, category)
        return putCategory
    } catch (error) {
        throw error
    }
}

export const getCategoryByIdAndProduct = async (id) => {
    try {
        const getCategory = await axios.get(`/api/category/productcategories/${id}`)
        return getCategory
    } catch (error) {
        throw error
    }
}

export const putCategoryUpDate = async (data) => {
    try {
        const upDateCategory = await axios.put(`/api/category/updateRelation`, data)
        return upDateCategory
    } catch (error) {
        throw error
    }
}

export const postCategoryAdd = async (data) => {
    try {
        const addCategory = await axios.post("/api/category/new", data)
        return addCategory
    } catch (error) {
        throw error
    }
}

export const postCategoryAddRelation = async (data) => {
    try {
        const addCategoryRelation = await axios.post("/api/category/addmanyRelations",data)
        return addCategoryRelation
    } catch (error) {
        throw error
    }
}


