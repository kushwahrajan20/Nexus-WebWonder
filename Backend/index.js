import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from'cors'

import FreeArticleRoute from "./route/FreeArticle.route.js"

const app = express()

app.use(cors())

dotenv.config()

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//connect to mongodb
try {
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology:true
    });
    console.log("Connected to mongoDB");
}
catch (error) {
    console.log("Error: ",error)
}

//defining  routes
app.use("/",FreeArticleRoute) //real path

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})