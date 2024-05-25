import mongoose from "mongoose";

const Schema = mongoose.Schema

const bookSchema = new Schema({
    titulo: {type: String, required: true},
    autor: {type: String, required: true},
    editorial: {type: String, required: true},
    genero: {type: String, required: true},
    precio: {type: Number, required: true},
    paginas: {type: Number, required: true}
}, {versionKey: false})

export const Book = mongoose.model('Books', bookSchema)