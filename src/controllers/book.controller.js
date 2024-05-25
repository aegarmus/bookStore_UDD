import { Book } from "../models/Book.model.js";

export const getAllBooks = async(req, res) => {
    try {
        const allBooks = await Book.find()
        res.status(200).json({
            message: 'Libros encontrados con éxito',
            status: 200,
            data: allBooks
        })
    } catch (error) {
        res.status(404).json({
            message: 'No se encontraron libros',
            status: 404,
            error
        })
    }
}