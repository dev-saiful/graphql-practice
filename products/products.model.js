 const products = [
    {
        id:"redshoe",
        description:"Red Shoe",
        price: 42.11,
        reviews:[],
    },
    {
        id:"bluejean",
        description:"Blue Jeans",
        price:55.34,
        reviews:[],
    }
]

function getAllProducts(){
    return products;
}

function getProductsByPrice(max,min)
{
    return products.filter((product)=>{
        return product.price <= max && product.price >=min;
    });
}

function getProductByID(id)
{
    return products.find((product)=>{
        return product.id === id;
    });
}

function addNewProduct(id,description,price)
{
    const newProduct = {
        id,
        description,
        price,
        reviews:[],
    }
    products.push(newProduct);
    return newProduct;
}

function addNewReview(id,rating,comment)
{
   const matchedProduct = getProductByID(id);
   
    if(matchedProduct)
    {
        const newReview = {
            rating,
            comment
        };
        matchedProduct.reviews.push(newReview);
        return newReview;
    }
   
    
}


module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductByID,
    addNewProduct,
    addNewReview,
}