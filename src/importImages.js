

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

function createImg(importedImg, assignedClass, assignedID) {
    const image = new Image();
    image.src = importedImg;
    image.classList.add(assignedClass);
    image.id = assignedID;
  
    return image;
  }
  