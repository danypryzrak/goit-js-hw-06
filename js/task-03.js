const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector(".gallery")

// const galleryItem = ({url, alt}) =>
// `<li><img src="${url}" alt="${alt}"></li>`
// const imagesReduce = images.reduce((clean, item) => { clean + galleryItem(item) }, ``) 

const item = images.map(image => {
  const elLi = `<li><img src="${image.url}" alt="${image.alt}" width="300" height="200"></li>`
  return elLi
})

galleryList.insertAdjacentHTML("afterbegin", item.join(``))
galleryList.setAttribute("style", "list-style-type: none; display: flex; gap: 10px")

// galleryList.insertAdjacentHTML("afterbegin", imagesReduce)
// galleryList.setAttribute()

