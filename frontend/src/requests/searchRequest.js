import axios from 'axios'
const REACT_APP_API_URL = process.env.REACT_APP_API_URL


export const getSearchByname = async ({ search, limitPage, orderSense, page }) => {
    try {
        const searchByName = await axios.post(
            `${REACT_APP_API_URL}/comprador/search?limitPage=${limitPage}&orderKey=id&orderSense=${orderSense}&page=${page}`,
            { stringSearch: search }
        )

        return searchByName
    } catch (error) {
        throw error
    }
}