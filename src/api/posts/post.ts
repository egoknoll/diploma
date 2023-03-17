import { api } from ".."
import { IPost } from "../../components/PostsGrid/PostsGrid"
import { getDate, getLastMonthDate, getLastWeekDate } from "../../utils/utils"

interface IResponse {
    data: IPost[]
}

interface ICount {
    data: number
}

export const getArticles = async (page: number, content: string, sortDate: string, sortAplpa: string) => {
    const currentDate = new Date()
    const sortDay = getDate(currentDate, sortDate)?.toISOString()
    let url = `${content === 'Articles' ? 'articles' : 'blogs'}?_limit=12`
    if(page && page > 1) {
        url += `&_start=${(page - 1) * 12}`
    }
    if(sortDay && sortDate) {
        url += `&publishedAt_gt=${sortDay.slice(0, 10)}`
    }
    const response = await api.get(url)
    return response
}


export const getArticlesCount = async (content: string, sortDate: string, sortAplpa: string) => {
    const currentDate = new Date()
    const sortDay = getDate(currentDate, sortDate)?.toISOString()
    let url = `/${content === 'Articles' ? 'articles' : 'blogs'}/count?`
    if(sortDay && sortDate) {
        url += `&publishedAt_gt=${sortDay.slice(0, 10)}`
    }
    const response: ICount = await api.get(url)
    return response
}