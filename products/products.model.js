 const products = [
    {
        id:"redshoe",
        description:"Red Shoe",
        price: 42.11,
    },
    {
        id:"bluejean",
        description:"Blue Jeans",
        price:55.34
    }
]

function getAllProducts(){
    return products;
}

module.exports = {
    getAllProducts,
}