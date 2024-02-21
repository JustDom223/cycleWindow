import './styles/main.css'

document.addEventListener("DOMContentLoaded", () => {
    // DOM is fully parsed and ready for manipulation
    const imgSliderElement = document.querySelector("#imgSlider");
    imgSliderElement.appendChild(importImages());
    populateMain("projects");
  });
  