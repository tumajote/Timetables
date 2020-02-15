const convertTimeStamp = timestamp => {
    return new Date(timestamp).toLocaleTimeString('fi-FI', {
        hour: 'numeric',
        minute: 'numeric'
    })
}

const convertDuration = duration => {
    return Math.round(duration / 60)
}

export { convertTimeStamp, convertDuration }
