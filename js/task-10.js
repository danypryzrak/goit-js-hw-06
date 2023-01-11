function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNum = document.querySelector('#controls>input')
const btnCreate = document.querySelector('[data-create]')
const btnDestroy = document.querySelector('[data-destroy]')
const boxes = document.querySelector('#boxes')

const createBoxes = amount => {
  const elementsToAdd = []
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.height = `${30 + 10 * i}px`
		box.style.width = `${30 + 10 * i}px`
    box.style.backgroundColor = getRandomHexColor()
    elementsToAdd.push(box)
  }
  return elementsToAdd
}

const destroyBoxes = () => {
  boxes.innerHTML = ""
}

btnCreate.addEventListener('click',() => {
  const boxesToAdd = createBoxes(inputNum.value)
  boxes.append(...boxesToAdd)
})

btnDestroy.addEventListener('click', () => {
  destroyBoxes.call()
})



