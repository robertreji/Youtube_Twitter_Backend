import mongoose from 'mongoose'
import {DB_NAME} from '../constants.js'


export   const connectDB= async ()=>
    {
        try{
        const DatabaseInstance = await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`)
        console.log(DatabaseInstance.connection.host)
        }
        catch(error)
        {
            console.error(error);
             console.error("Error in conectin with data base ...")
            process.exit(1)
        }
    }