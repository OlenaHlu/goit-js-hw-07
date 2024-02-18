
const categoriesNames = document.getElementById('categories');
const categories = categoriesNames.children;

console.log(`Number of categories: ${categories.length}`);



for (let category of categories) {
    const categoryName = category.querySelector('h2').textContent;
    const categoryItems = category.querySelectorAll('ul > li');

    console.log(`Category: ${categoryName}`);
    console.log(`Number of items: ${categoryItems.length}`);
}