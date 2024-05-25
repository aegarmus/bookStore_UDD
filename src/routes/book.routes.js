import express from 'express'
import { createNewBook, deleteBookByID, getAllBooks, updateBookById } from '../controllers/book.controller.js'


const router = express.Router()

router.get('/books', getAllBooks)

router.post('/books', createNewBook)

router.put('/books/:id', updateBookById)

router.delete('/books/:id', deleteBookByID)

export default router