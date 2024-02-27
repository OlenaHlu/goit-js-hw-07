
const categoryItems = document.querySelectorAll('.item');
console.log('Number of categories:', categoryItems.length);

categoryItems.forEach(elem => {
    const title = elem.firstElementChild;
    console.log('Category:', title.textContent)
    
    const list = elem.lastElementChild.children;
    console.log('Elements:', list.length)
})

