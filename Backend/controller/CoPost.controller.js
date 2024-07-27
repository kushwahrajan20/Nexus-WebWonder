import CoPost from "../model/CoPost.model.js";

export const copost= async(req,res)=>{
    try {
        //request data from body 
        const {user,u,image,title,details,tag1,tag2,tag3}=req.body
        //create new post
        const createdPost= new CoPost({
            image:image,
            user:user,
            u:u,
            title:title,
            details:details,
            tag1:tag1,
            tag2:tag2,
            tag3:tag3
        });
        //new post saved in database
        await createdPost.save()
        //response sending
        res.status(201).json({
            message:"Post created successfully",
            copost:{
                _id: createdPost._id,
                image:createdPost.image,
                user:createdPost.user,
                u:createdPost.u,
                title:createdPost.title,
                details:createdPost.details,
                tag1:createdPost.tag1,
                tag2:createdPost.tag2,
                tag3:createdPost.tag3
            }
        })

    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getcopost= async(req,res)=>{
    try {
        const getcopost = await CoPost.find()
        res.status(200).json(getcopost)

    } catch (error) {
        console.log("Error: ",error)
        res.status(500).json(error)
    }
}