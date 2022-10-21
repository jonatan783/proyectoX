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
    console.log('data ---> ', data)
    try {
        const loginUser = await axios.post('/api/user/login', data)
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

//por fuera de desux-loger

export const getAllUserRequest = async (id) => {
    try {
        const getAllUser = await axios.get(`/api/user/getAll/${id}`)
        return getAllUser

    } catch (error) {
        throw error
    }
}

export const promoteUserRequest = async (id) => {
    try {
        const promoteUser = await axios.put(`/api/user/admin/adminPromote`, id )
        return promoteUser

    } catch (error) {
        throw error
    }
}

export const removeUserRequest = async (id) => {
    try {
        const removeUser = await axios.put(`/api/user/admin/adminRemove`, id )
        return removeUser

    } catch (error) {
        throw error
    }
}
