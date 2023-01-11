const inputVal = document.querySelector("[type='text']")
const lengthStr = inputVal.getAttribute("data-length")
const lengthNum = parseInt(lengthStr, 10)
console.log(lengthNum)


inputVal.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length === lengthNum) {
        inputVal.classList.remove('invalid')
        inputVal.classList.add('valid')
    } else {
        inputVal.classList.remove('valid')
        inputVal.classList.add('invalid')
    }
})

