const boxConfig = [
  { color: "red", width: "33.33%" },
  { color: "magenta", width: "33.33%" },
  { color: "blue", width: "33.33%" },
  { color: "yellow", width: "50%" },
  { color: "orange", width: "50%" },
  { color: "purple", width: "70%" },
  { color: "pink", width: "30%" },
];

const container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

function renderBoxes() {
  container.innerHTML = "";
  boxConfig.forEach((config, index) => {
    const box = document.createElement("div");
    box.className = "box";
    box.style.backgroundColor = config.color;
    box.style.width = config.width;
    container.appendChild(box);
  });
}

container.addEventListener("click", (event) => {
  const clickedElement = event.target;
  if (clickedElement.classList.contains("box")) {
    const index = Array.from(container.children).indexOf(clickedElement);
    const config = boxConfig[index];
    alert(`Color of box ${index + 1} is ${config.color}`);
  }
});

renderBoxes(); // First Render

document
  .getElementById("add-box-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const newBoxColor = document.getElementById("ip-color").value; // get entered color
    let newBoxWidth = document.getElementById("ip-width").value; // get entered width
    newBoxWidth = newBoxWidth ? `${newBoxWidth}%` : "100%"; // set default width if not entered by user
    boxConfig.push({ color: newBoxColor, width: newBoxWidth }); // push entered values in boxConfig object
    renderBoxes(); // render boxes again
    document.getElementById("ip-color").value = "#ffffff"; // reset color input value
    document.getElementById("ip-width").value = "100%"; // reset width input value
  });
