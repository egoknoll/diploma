import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.spaceflightnewsapi.net/v3'
})

export const authApi = axios.create(
    {
        baseURL: 'https://641ae8df1f5d999a44560c77.mockapi.io/users/users'
    }
)