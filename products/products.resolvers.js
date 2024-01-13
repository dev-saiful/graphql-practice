const products = require("./products.model");
module.exports = {
    products: ()=>{
      return products.getAllProducts();
    },
}