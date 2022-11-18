import axios from 'axios'
const REACT_APP_API_URL = process.env.REACT_APP_API_URL


export const getSearchByNameRequest = async ({ search, category, priceRange, limitPage, orderSense, orderKey, page }) => {
    if (!Array.isArray(priceRange) || !priceRange) priceRange = null;
    try {
        const searchByName = await axios.post(
            `${REACT_APP_API_URL}/comprador/search?limitPage=${limitPage}&orderKey=${orderKey}&orderSense=${orderSense}&page=${page}&name=${category}`,
            {
                stringSearch: search,
                rangoPrecio: priceRange
            }
        )
        return searchByName
    } catch (error) {
        throw error
    }
}