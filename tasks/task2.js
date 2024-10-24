// Функція отримує масив товарів і повертає всі товари, які мають ціну нижчу за 100 або вищу за 500
"ВИКОРИСТОВУВАТИ ЛИШЕ МЕТОДИ МАСИВІВ filter, map, sort та інші, які є в файлі methods.js."


function getProductsNotInPriceRange(products) {
  
  const filteredProducts = products.filter(product => product.price < 100 || product.price > 500);
  
  
  const productNames = filteredProducts.map(product => product.name);

  return productNames;
}


const products = [
  { name: 'Laptop', price: 800 },
  { name: 'Phone', price: 250 },
  { name: 'Shirt', price: 30 },
  { name: 'Watch', price: 120 },
  { name: 'Tablet', price: 550 },
  { name: 'Shoes', price: 75 },
  { name: 'PlayStation', price: 590 }
];

console.log(getProductsNotInPriceRange(products)); 


module.exports = getProductsNotInPriceRange;
