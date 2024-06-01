import express from 'express'
import bookRouter from './src/routes/book.routes.js'
import userRouter from './src/routes/user.routes.js'

import { db } from './src/config/db.config.js'

import dotenv from 'dotenv'

dotenv.config()


const app = express()

//Middlewares parse Json
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//Middlewares para rutas
app.use("/api/v1", bookRouter);

app.use('/api/v1', userRouter)


db()

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`)
})