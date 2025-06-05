import mongoose  from "mongoose";
import aggregatePaginate from 'mongoose-aggregate-paginate-v2'
const videoSchema = new mongoose.Schema(
    {
        videoFile:{
            type :string, // stored in clodinary 
            require :true
        },
        thunbnail:{
            type :string,
            require :true
        },
        title:{
            type :string,
            require :true
        },
        description:{
            type :string,
            require :true
        },
        duration : {
            type : number , // from cloudnary 
            require : true
        },
        views :{
            type: number ,
            default :0
        },
        isPublished :{
            type :Boolean,
            default : true
        },
        owner:{
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        }
    }
    ,{timestamps:true})
    
videoSchema.plugin(aggregatePaginate)
export const Video = mongoose.model(videoSchema)