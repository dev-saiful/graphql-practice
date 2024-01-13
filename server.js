const path = require("path");
const express = require("express");
const {loadFilesSync} = require("@graphql-tools/load-files")
const {makeExecutableSchema} = require("@graphql-tools/schema");
const {createHandler} = require("graphql-http/lib/use/express");
const app = express();

const typesArray = loadFilesSync(path.join(__dirname,"**/*.graphql"));


const schema = makeExecutableSchema({
    typeDefs:typesArray,
    resolvers:{
        Query:{
            products: async(parent)=>{
                console.log("Getting Products");
                const product = await Promise.resolve(parent.products);
                return product;
            },
            orders: async(parent)=>{
                console.log("Getting Orders");
                const order = await Promise.resolve(parent.orders);
                return order;
            },
        }
    }
});

const root = {
   products: require("./products/products.model"),
   orders: require("./orders/orders.model"),
};

app.use("/graphql",createHandler({
    schema:schema,
    rootValue:root,
}));

app.listen(3002,()=>{
        console.log("GraphQL running on port 3002");
});