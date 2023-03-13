import { api } from ".."
import { IPost } from "../../components/PostsGrid/PostsGrid"

interface IResponse {
    data: IPost[]
}


export const getArticles = async () => {
    const response: IResponse = await api.get('/articles?_limit=12')
    return response
}