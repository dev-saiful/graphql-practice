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

function getProductsByPrice(max,min)
{
    return products.filter((product)=>{
        return product.price <= max && product.price >=min;
    })
}

function getProductByID(id)
{
    return products.find((product)=>{
        return product.id === id;
    })
}

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductByID
}