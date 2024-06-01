import express from 'express'
import { createNewBook, deleteBookByID, getAllBooks, updateBookById } from '../controllers/book.controller.js'
import { authRequire } from '../middlewares/auth.middleware.js'


const router = express.Router()

router.get('/books', getAllBooks)

router.post('/books', authRequire, createNewBook)

router.put("/books/:id", authRequire, updateBookById);

router.delete("/books/:id", authRequire, deleteBookByID);

export default router


