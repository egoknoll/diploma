


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

export const getDate = (date: Date, ago: string) => {
    if(ago === 'Week') {
        return new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000)
    } else if (ago === 'Month') {
        return new Date(date.getTime() - 30 * 24 * 60 * 60 * 1000)
    } else if (ago === 'Year') {
        return new Date(date.getTime() - 365 * 24 * 60 * 60 * 1000)
    } else if (ago === 'Day') {
        return new Date(date.getTime() - 1 * 24 * 60 * 60 * 1000)
    }
}


export const changeSlidesCount = (size: string) => {
    switch (size) {
        case 'sm':
            return 1
        case 'md':
            return 2
        case 'lg':
            return 3
    }
}

export const getMediaQuery = (windowSize: number) => {
    if(windowSize <= 740) {
        return 'sm'
    } else if (windowSize <= 1024 && windowSize > 740) {
        return 'md'
    } return 'lg'
}