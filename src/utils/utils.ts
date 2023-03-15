


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


export const filterPagesCount = (total: number[], current: number) => {
    let arr = total.filter((el) => {
        if ( el > 1 && el <= current + 1 && el >= current - 1) {
            return true
        }
    })
    return arr
}