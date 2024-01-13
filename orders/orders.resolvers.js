const orders = require("./orders.model");
module.exports = {
    Query:{
        orders: ()=>{
            return orders.getAllOrders();
        },
    }
}