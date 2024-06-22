import { Transaction } from "../models/Transaction.model.js";

export const createTransaction = async (req, res) => {
    try {
        const { userId,  books, amount, paymentResult } = req.body

        const newTransaction = new Transaction({
            userId,
            books,
            amount,
            paymentResult
        })

        const saveTransaction = await newTransaction.save()

        res.status(201).json(saveTransaction)

    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}