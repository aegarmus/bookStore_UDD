import express from 'express'
import { createNewBook, getAllBooks } from '../controllers/book.controller.js'


const router = express.Router()

router.get('/books', getAllBooks)

router.post('/books', createNewBook)

export default router