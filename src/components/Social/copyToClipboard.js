export const copyToClipboard = (text) => {
    if(!navigator.clipboard) {
        return
    }

    return navigator.clipboard.writeText(text).catch(() => {
        console.error('Navigator clipboard: Could not copy text')
    })
}