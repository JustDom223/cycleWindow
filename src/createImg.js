export default function createImg(importedImg, assignedClass, assignedID) {
  const image = new Image();
  image.src = importedImg;
  image.classList.add(assignedClass);
  image.id = assignedID;

  return image;
}
