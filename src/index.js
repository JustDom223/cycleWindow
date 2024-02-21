import importImages from './importImages';
import './styles/main.css'


function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));


document.addEventListener("DOMContentLoaded", () => {
    // DOM is fully parsed and ready for manipulation
    const imgSliderElement = document.querySelector("#imgSlider");
    const imgs = importImages(images)
    imgs.forEach(img => {
        imgSliderElement.appendChild(img);

    })
    // populateMain("projects");
  });
  