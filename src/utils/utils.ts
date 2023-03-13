


export const formatDate = (date: string) => {
    let newDate: Date = new Date(date)
    return `${newDate.toUTCString()}`
}


