const productsModel = require("./products.model");
module.exports = {
  Query:{
    products: ()=>{
      return productsModel.getAllProducts();
    },
    productsByPrice: (_,args)=>{
      return productsModel.getProductsByPrice(args.max,args.min);
    },
    product:(_,args)=>{
      return productsModel.getProductByID(args.id);
    }
  }
   
}