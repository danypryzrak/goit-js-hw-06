const categories = document.querySelector("#categories")
const categQuantity = categories.children.length
console.log(`number of categories:`, categQuantity)

const category1 = categories.firstElementChild
const categName1 = category1.firstElementChild.textContent
const length1 = category1.lastElementChild.children.length
console.log(`Category:`, categName1)
console.log(`Elements:`, length1)

const category2 = category1.nextElementSibling
const categName2 = category2.firstElementChild.textContent
const length2 = category2.lastElementChild.children.length
console.log(`Category:`, categName2)
console.log(`Elements:`, length2)

const category3 = categories.lastElementChild
const categName3 = category3.firstElementChild.textContent
const length3 = category3.lastElementChild.children.length
console.log(`Category:`, categName3)
console.log(`Elements:`, length3)