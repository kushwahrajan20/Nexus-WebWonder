import mongoose from "mongoose";

const FreeArticleSchema=mongoose.Schema({
    title:String,
    details:String,
    price:Number,
    category:String
})

const FreeArticle = mongoose.model("FreeArticle",FreeArticleSchema);

export default FreeArticle;