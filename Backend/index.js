import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from'cors'


import FreeArticleRoute from "./route/FreeArticle.route.js"
import userRoute from './route/user.route.js'
import copostRoute from './route/CoPost.route.js'

const app = express()

app.use(cors())
app.use(express.json())

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
app.use("/freearticle",FreeArticleRoute) //real path
app.use("/user",userRoute) //real path
app.use("/community",copostRoute) //real path

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})