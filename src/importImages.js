import createImg from "./createImg";


export default function importImages(imgArray){
    const allImgs = imgArray;
    const configuredImgs = []

    let imgNum = 0
    allImgs.forEach(img => {
        const configuredImg = createImg(img, 'images', `pie${imgNum}`)
        configuredImgs.push(configuredImg)
        imgNum++
    });
    return configuredImgs
}