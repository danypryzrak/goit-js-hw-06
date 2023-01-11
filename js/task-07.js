const inputVal = document.querySelector("#font-size-control")

const text = document.querySelector("#text")
text.setAttribute("style", "font-size: 56px")

inputVal.addEventListener("input", (event) => {
    text.style.fontSize = event.currentTarget.value + 'px'
})
