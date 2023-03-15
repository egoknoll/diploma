import { api } from ".."
import { IPost } from "../../components/PostsGrid/PostsGrid"

interface IResponse {
    data: IPost[]
}

interface ICount {
    data: number
}

export const getArticles = async (page: number) => {
    let url = '/articles?_limit=12'
    if(page && page > 1) {
        url += `&_start=${(page - 1) * 12}`
    }
    const response = await api.get(url)
    return response
}


export const getArticlesCount = async () => {
    const response: ICount = await api.get('/articles/count')
    return response
}