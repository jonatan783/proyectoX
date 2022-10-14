import axios from 'axios';

export const sendSignUpRequest = async (data) => {
    try {
        const registerUser = await axios.post('/api/user/register', data)
        return registerUser.data

    } catch (error) {
        throw error
    }
}

export const sendLoginRequest = async (data) => {
    try {
        const loginUser = await axios.post('/api/user/register', data)
        return loginUser.data

    } catch (error) {
        throw error
    }
}

export const sendLogoutRequest = async (data) => {
    try {
        const logoutUser = await axios.post('/api/user/logout')
        return logoutUser.data

    } catch (error) {
        throw error
    }
}

export const persistUserRequest = async () => {
    try {
        const persistUser = await axios.get('/api/user/me')
        return persistUser.data

    } catch (error) {
        throw error
    }
}

