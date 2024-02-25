
const categoriesNames = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesNames.length);

categoriesNames.forEach(elem => {
    const title = elem.firstElementChild;
    console.log('Category:', title.innerHTML)
    
    const list = elem.lastElementChild.children;
    console.log('Elements:', list.length)
})

