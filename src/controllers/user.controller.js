import { User } from '../models/User.model.js'



export const getAllUsers = async(req, res) => {
    try {
        const allUsers = await User.find()
        res.status(200).json({message: "Usuarios Encontrados", status: 200, data: allUsers})
    } catch (error) {
        res.status(404).json({message: "Usuarios no Encontrados", status: 404, error})
    }
}

export const getUserByRut = async(req, res) => {
    try {
        const { rut } = req.params
        const getUserByRut = await User.findOne({ rut: rut })

        res.status(200).json({message: `Usuario con RUT ${rut} encontrado`, status: 200, data: getUserByRut})
    }catch(error) {
        res.status(404).json({message: 'No pudimos encontrar', status: 404, error})
    }
}



