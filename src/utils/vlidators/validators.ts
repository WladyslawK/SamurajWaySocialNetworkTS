export const requiredField = (value: string) => {
    if(value) return undefined
    else return "Field is required"
}

export const maxLengthCreator = (length: number) => (value: string) => {
    if(value.length > length) return `max length ${length}`
}
