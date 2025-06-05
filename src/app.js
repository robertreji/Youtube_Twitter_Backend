import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

export const app=express()

app.use(cors())
app.use(express.json({limit:"14kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"})) // all this app.use is used for 
                                                        // defining the incoming  data  requests to the server like put  to  the server 
app.use(cookieParser())    
  
app.use(express.static("public"))