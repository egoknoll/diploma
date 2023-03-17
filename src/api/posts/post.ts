import { api } from ".."
import { IPost } from "../../components/PostsGrid/PostsGrid"

interface IResponse {
    data: IPost[]
}

interface ICount {
    data: number
}

export const getArticles = async (page: number, content: string) => {
    let url = `${content === 'Articles' ? 'articles' : 'blogs'}?_limit=12`
    if(page && page > 1) {
        url += `&_start=${(page - 1) * 12}`
    }
    const response = await api.get(url)
    return response
}


export const getArticlesCount = async (content: string) => {
    const response: ICount = await api.get(`/${content === 'Articles' ? 'articles' : 'blogs'}/count`)
    return response
}