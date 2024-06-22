import mongoose from 'mongoose'

const Schema = mongoose.Schema

const transactionSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', require: true },
    books: [{ type: Schema.Types.ObjectId, ref: 'Book', require: true }],
    amount: { type: Number, require: true },
    paymentResult: { type: Object, require: true }
}, { timestamps: true })

export const Transaction = mongoose.model('transaction', transactionSchema)