


export const formatDate = (date: string) => {
    let newDate: Date = new Date(date)
    return `${newDate.toUTCString()}`
}


export const getPagesCount = (total: number) => {
    let arr = []
    const pages = Math.ceil(total / 12)
    for(let i = 0; i < pages; i++) {
        arr.push(i + 1)
    }
    return arr
}