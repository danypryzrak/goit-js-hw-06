const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredients = document.querySelector("#ingredients")

const el = ingredients.map(ingredient => {
  const element = document.createElement("li")
  element.textContent = ingredient
  element.classList.add("item")
  return element
})

ulIngredients.append(...el)