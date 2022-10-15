import axios from "axios"

export const addToShoppingCartRequest = async (data) => {
    try {
        const addToShoppingCart = await axios.post(`/api/add/objectId=${data.id}`, data)
        return addToShoppingCart
    } catch (error) {
        throw error
    }
}

export const removeFromShoppingCartRequest = async (data) => {
    try {
       
        const removeShoppingCart = await axios.delete(`/api/remove/objectId=${data.id}`, data)
        return removeShoppingCart.data
    } catch (error) {
        throw error
    }
}

export const getShoppingCartRequest = async (data, thunkAPI) => {
    const { user } = thunkAPI.getState();
    try {
        if (user.id) {
            const getShoppingCart = await axios.get(`/api/shoppingCart/${user.id}`)
            return getShoppingCart.data
        }

    } catch (error) {
        throw error
    }
}