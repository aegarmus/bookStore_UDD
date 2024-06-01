import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    rut: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    telefono: { type: String, required: true },
    edad: { type: Number, require: true }
}, { versionKey: false })

export const User = mongoose.model('users', userSchema)