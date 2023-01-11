const value = document.querySelector("#value")
value.textContent = 0
let counterValue = 0

const minusBtn = document.querySelector("[data-action='decrement']")
const plusBtn = document.querySelector("[data-action='increment']")

minusBtn.addEventListener("click", () => {
    counterValue -= 1
    value.textContent = counterValue
})
plusBtn.addEventListener("click", () => {
    counterValue += 1
    value.textContent = counterValue
})
