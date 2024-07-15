import FreeArticle from "../model/FreeArticle.model.js"

export const getFreeArticle=async(req,res)=>{
    try {
        const freeArticle=await FreeArticle.find()
        res.status(200).json(freeArticle)
    } 
    catch (error) {
        console.log("Error: ",error)
        res.status(500).json(error)
    }
}