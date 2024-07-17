import mongoose from "mongoose";

const coPostSchema=mongoose.Schema(
    {
        image:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        },
        details:{
            type:String,
            required:true
        },
        tag1:{
            type:String,
            required:true
        },
        tag2:{
            type:String,
            required:true
        },
        tag3:{
            type:String,
            required:true
        }
    }
);

const CoPost=mongoose.model("CoPost",coPostSchema);
export default CoPost;