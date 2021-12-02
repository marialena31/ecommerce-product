import {getFileUrlMedia} from '../utils/utils'

export const getProductMainImageUrl = () => {
    return getFileUrlMedia(product.primary_picture.normal)
}

export const getProductMainThumbnailUrl = () => {
    return getFileUrlMedia(product.primary_picture.thumbnail)
}

export const getAllProductThumbnailUrl = () => {
    let medias = product.secondary_pictures.map(img => getFileUrlMedia(img.thumbnail));
    medias.unshift(getProductMainThumbnailUrl());
    return medias;
}

export const getAllProductNormalUrl = () => {
    let medias = product.secondary_pictures.map(img => getFileUrlMedia(img.normal));
    medias.unshift(getProductMainImageUrl());
    return medias;
}

export const getAllProductNormalFilename = () => {
    let medias = product.secondary_pictures.map(img => (img.normal));
    medias.unshift(product.primary_picture.normal);
    return medias;
}

export const getMainImageFromThumbnail = thumbFileName => {
    let mainImageFileName = '';
    if(product.primary_picture.thumbnail === thumbFileName) {
        mainImageFileName = product.primary_picture.normal
    } else {
        let picture = product.secondary_pictures.filter(pict => pict.thumbnail === thumbFileName)
        mainImageFileName = picture[0].normal;
    }
    return mainImageFileName;
}

const product = {
    "category": "Sneaker Company",
    "name": "Fall Limited Edition Sneakers",
    "description": "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    "base_price": "250,00",
    "currency": "$",
    "discount": "50%",
    "net_price": "125,00",
    "primary_picture" : 
        {
            "normal": "image-product-1.jpg",
            "thumbnail": "image-product-1-thumbnail.jpg"
        },
    "secondary_pictures": [
        {
            "normal": "image-product-2.jpg",
            "thumbnail": "image-product-2-thumbnail.jpg"
        },
        {
            "normal": "image-product-3.jpg",
            "thumbnail": "image-product-3-thumbnail.jpg"
        },
        {
            "normal": "image-product-4.jpg",
            "thumbnail": "image-product-4-thumbnail.jpg"
        },
    ]
}

export default product;