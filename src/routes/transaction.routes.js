import express from 'express'
import { authRequire } from "../middlewares/auth.middleware.js"
import { createTransaction } from "../controllers/transaction.controller.js"

const router = express.Router()

router.post('/transaction', authRequire, createTransaction)

export default router