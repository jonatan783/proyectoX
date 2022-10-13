import axios from "axios"

export const addToShoppingCartRequest = async (data) => {
    try {
        const addToShoppingCart = await axios.post(`/api/add/objectId=${data.id}`, data)
        return addToShoppingCart
    } catch (error) {
        throw error
    }
}

export const removeFromShoppingCartRequest = async (data, thunkAPI) => {
    const { user } = thunkAPI.getState();
    try {
        //verificar el http delete => body=data
        const removeShoppingCart = await axios.get(`/api/shoppingCart/${user.id}`)
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