import axios from 'axios'
const REACT_APP_API_URL = process.env.REACT_APP_API_URL


export const getSearchByName = async ({ search, category, limitPage, orderSense, orderKey, page, range }) => {
    try {
        const searchByName = await axios.post(
            `${REACT_APP_API_URL}/comprador/search?limitPage=${limitPage}&orderKey=${orderKey}&orderSense=${orderSense}&page=${page}&name=${category}`,
            { stringSearch: search }
        )
        return {
            response: searchByName,
            page: page,
            search: search,
            limitPage: limitPage,
            orderSense: orderSense
        }
    } catch (error) {
        throw error
    }
}