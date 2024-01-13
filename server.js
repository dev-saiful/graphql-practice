const path = require("path");
const express = require("express");
const {loadFilesSync} = require("@graphql-tools/load-files")
const {makeExecutableSchema} = require("@graphql-tools/schema");
const {createHandler} = require("graphql-http/lib/use/express");
const app = express();

const typesArray = loadFilesSync(path.join(__dirname,"**/*.graphql"));
const resolverArrays = loadFilesSync(path.join(__dirname,"**/*.resolvers.js"));

const schema = makeExecutableSchema({
    typeDefs:typesArray,
    resolvers:resolverArrays,
});

app.use("/graphql",createHandler({
    schema:schema,
}));

app.listen(3002,()=>{
        console.log("GraphQL running on port 3002");
});