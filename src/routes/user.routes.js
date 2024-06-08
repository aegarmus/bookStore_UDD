import express from 'express'

import { getAllUsers, getUserByRut, updateUser, deleteUserByRut } from '../controllers/user.controller.js'
import { authRequire } from '../middlewares/auth.middleware.js'

const router = express.Router()

router.get('/users', authRequire ,getAllUsers)

router.get('/users/:rut', authRequire, getUserByRut)

router.put("/users/:rut", authRequire, updateUser);

router.delete("/users/:rut", authRequire, deleteUserByRut);

export default router