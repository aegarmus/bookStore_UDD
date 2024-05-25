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


export const createNewBook = async(req, res) => {
    try {
        const {titulo, autor, editorial, genero, precio, paginas } = req.body

        const book = new Book({
            titulo,
            autor,
            editorial,
            genero,
            precio,
            paginas
        })

        const saveBook = await book.save()

        res.status(201).json({
            message: 'Libro creado con éxito',
            status: 201,
            data: saveBook
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error al crear el libro',
            status: 500,
            error
        })
    }
}

export const updateBookById = async(req, res) => {
    try {
        const bookID = req.params.id
        const updatedBook = req.body

        const updateBook = await Book.findOneAndUpdate({ _id: bookID }, updatedBook, { new: true })
        if(!updateBook) res.status(404).json({message: 'Libro no encontrado', status: 404})
        
        res.status(202).json({
            message: 'Libro Actualizado con Éxito',
            status: 202,
            data: updateBook       
        })

    } catch (error) {
        res.status(500).json({
            message: 'No pudimos actualizar el libro',
            status: 500,
            error
            }
        )
    }
}