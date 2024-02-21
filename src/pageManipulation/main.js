export default function createMain() {
  // Create the main element
  const mainElement = document.createElement("main");
  // Create children for main element
  const headingElement = document.createElement("h1");
  // Add content to children
  headingElement.innerHTML = "This is the main content";
  // Populate main
  mainElement.appendChild(headingElement);

  return mainElement;
}
