import { api } from ".."
import { getDate } from "../../utils/utils"
import { IResponse } from "../../pages/ContentPage/ContentPage"


interface ICount {
    data: number
}

export const getArticles = async (page: number, content: string, sortDate: string, sortAplpa: string, search?: string) => {
    const currentDate = new Date()
    const sortDay = getDate(currentDate, sortDate)?.toISOString()
    let url = `${content === 'Articles' ? 'articles' : 'blogs'}?_limit=12`
    if(page && page > 1) {
        url += `&_start=${(page - 1) * 12}`
    }
    if(sortDay && sortDate) {
        url += `&publishedAt_gt=${sortDay.slice(0, 10)}`
    }
    if(sortAplpa && sortAplpa === 'A-Z') {
        url += `&_sort=title`
    }
    if(sortAplpa && sortAplpa === 'Z-A') {
        url += `&_sort=summary`
    }
    if(search) {
        url += `&title_contains=${search}`
    }
    const response = await api.get(url)
    return response
}


export const getArticlesCount = async (content: string, sortDate: string, sortAplpa: string, search?: string) => {
    const currentDate = new Date()
    const sortDay = getDate(currentDate, sortDate)?.toISOString()
    let url = `/${content === 'Articles' ? 'articles' : 'blogs'}/count?`
    if(sortDay && sortDate) {
        url += `&publishedAt_gt=${sortDay.slice(0, 10)}`
    }
    if(sortAplpa && sortAplpa === 'A-Z') {
        url += `&_sort=title`
    }
    if(sortAplpa && sortAplpa === 'Z-A') {
        url += `&_sort=summary`
    }
    if(search) {
        url += `&title_contains=${search}`
    }
    const response: ICount = await api.get(url)
    return response
}


export const getSinglePost = async (id: string | undefined, category: string ) => {
    const url = `/${category === 'Articles' ? 'articles' : 'blogs'}/${id}`
    const response: IResponse = await api.get(url)
    return response
}