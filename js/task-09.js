function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorStr = document.querySelector(".color")
const colorBtn = document.querySelector(".change-color")
const body = document.querySelector("body")

colorBtn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor
  colorStr.textContent = randomColor
})

