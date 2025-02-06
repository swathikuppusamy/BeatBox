import express from 'express'
import dotenv from 'dotenv'
import {clerkMiddleware} from '@clerk/express'
import userRoutes from './routes/user.route.js'
import adminRoutes from './routes/admin.route.js'
import authRoutes from './routes/auth.route.js'
import songRoutes from './routes/song.route.js'
import albumRoutes from './routes/album.route.js'
import statRoutes from './routes/stat.route.js'
import { connectdb } from './lib/db.js'
import fileUpload from "express-fileupload"
import path from 'path'
const app = express();
dotenv.config();

const __dirname=path.resolve()

const PORT = process.env.PORT

app.use(clerkMiddleware());
app.use(express.json());
app.use(fileUpload({
  useTempFiles:true,
  tempFileDir:path.join(__dirname,"temp"),
  createParentPath:true,
  limits:{
    fileSize: 10*1024*1024,
  }
}))

app.use('/api/users',userRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/admin',adminRoutes)
app.use('/api/songs',songRoutes)
app.use('/api/albums',albumRoutes)
app.use('/api/stats',statRoutes)


app.use((error,req,res,next)=>{
  res.status(500).json({message:process.env.NODE_ENV ==="production"?"Internal Server Error" : error.message})
})


app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`)
  connectdb();
})