export const BASE_DIR_MEDIA = "assets"

export const getBaseUrlMedia = () => {
    return process.env.PUBLIC_URL + '/' + BASE_DIR_MEDIA
}

export const getFileUrlMedia = fileName => {
    return getBaseUrlMedia() + '/' + fileName
}

export const getRandomKey = (min = 0, max = 1000000) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
