import express from 'express'
import { createNewBook, getAllBooks, updateBookById } from '../controllers/book.controller.js'


const router = express.Router()

router.get('/books', getAllBooks)

router.post('/books', createNewBook)

router.put('/books/:id', updateBookById)

export default router