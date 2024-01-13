const orders = [
    {
        date: "2005-05-04",
        subtotal:90.55,
        items:[
            {
                product:{
                    id:"redshoe",
                    description:"Old Red Shoe",
                    price:44.32,
                },
                quantity:2,
            }
        ]
    }
]

function getAllOrders(){
    return orders;
}

module.exports = {
    getAllOrders,
}