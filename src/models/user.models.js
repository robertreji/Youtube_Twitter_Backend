import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
 const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            require:true,
            unique:true,
            lowercase:true,
            index:true // to search easily in data base { use whnenever we need to deasrch a item frequently }
        },
        email:{
            type:String,
            require:true,
            unique:true,
            lowercase:true,
        },
        fullname:{
            type:String,
            require:true,
            lowercase:true,
            index:true
        },
        avatar:{
            type :String, // we will use url saved in cloudinary,
            require:true
        },
        coverImage:{
            type :String, // we will use url saved in cloudinary,
            require:true
        },
        watchHistory:[{
            type : mongoose.Schema.Types.ObjectId,
            ref:"Video"
        }],
        password:{
            type:String,
            require:[true,"password is required"]
        },
        refreshToken:{
            type:String
        }
    }
 ,{timestamps:true})

userSchema.pre("save",async function(next) {
    if (!this.isModified("password")) return
    this.password=bcrypt.hash(this.password,10)
    next()
})
userSchema.methods.isPasswordCorrect=async function (password) {
   return await bcrypt.compare(password,this.password)
}
userSchema.methods.generateAcesstoken=function (){
    return jwt.sign({
        _id:this._id,
        email:this.email,
        username:this.username
    },
    process.env.ACESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACESS_TOKEN_EXPIRY
    }
)
}
userSchema.methods.generateRefreshtoken=function (){
    return jwt.sign({
        _id:this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
)
}

export const  User=mongoose.model("User",userSchema)