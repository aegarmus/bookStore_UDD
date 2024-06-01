import express from 'express'

import { getAllUsers, getUserByRut } from '../controllers/user.controller.js'
import { authRequire } from '../middlewares/auth.middleware.js'

const router = express.Router()

router.get('/users', authRequire ,getAllUsers)

router.get('/users/:rut', authRequire, getUserByRut)

export default router