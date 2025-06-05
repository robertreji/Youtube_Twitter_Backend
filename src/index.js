import dotenv from 'dotenv'
dotenv.config()
import {connectDB} from './db/index.js'
import { app } from './app.js'

connectDB()
.then(()=>
{   
    app.on("error",(error)=>{
        console.log(error)
        console.log("error in sserver .....")
    })
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at port ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("conncetion failed with data base !!!");
    console.log(error) 
})