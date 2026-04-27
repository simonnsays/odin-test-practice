const getAve = (arr) => {
    return arr.reduce((total, num) => total += num, 0) / arr.length
}

const getMin = (arr) => {
    return arr.reduce((last, curr) => Math.min(last, curr), arr[0])
}

const getMax = (arr) => {
    return arr.reduce((last, curr) => Math.max(last, curr), arr[0])
}

export const analyzeArray = (arr) => {
    return {
        average: getAve(arr),
        min: getMin(arr),
        max: getMax(arr),
        length: arr.length
    }
}