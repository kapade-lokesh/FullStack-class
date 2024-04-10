const products  = require('./data.json');
 

const category = products.products.map((item)=>{
      
     return item.category 
    
})

const brands = products.products.map((item)=>{
      
    return item.brand
   
})

console.log([...new Set(category)]);

console.log([...new Set(brands)]);