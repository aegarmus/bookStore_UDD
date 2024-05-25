import express from 'express'


import { db } from './src/config/db.config.js'

import dotenv from 'dotenv'

dotenv.config()


const app = express()



db()

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`)
})