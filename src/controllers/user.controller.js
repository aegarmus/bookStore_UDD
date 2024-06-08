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


export const updateUser = async (req, res) => {
  try {
    const userRut = req.params.rut;
    const updateData = req.body;

    const updateUser = await User.findOneAndUpdate(
      { rut: userRut },
      updateData,
      { new: true }
    );
    if (!updateUser) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res
      .status(202)
      .json({
        message: `Usuario ${updateUser.nombre} ${updateUser.apellido} ha sido actualizado con éxito`,
      });
  } catch (error) {
    res.status(500).json({ message: "No pudimos actualizar el usuario" });
  }
};

export const deleteUserByRut = async (req, res) => {
  try {
    const userRut = req.params.rut;

    const removeUser = await User.findOneAndDelete({ rut: userRut });
    if (!removeUser) {
      return res
        .status(404)
        .json({ message: "Usuario no encontrado para eliminar" });
    }

    res
      .status(202)
      .json({
        message: `Usuario ${removeUser.nombre} ${removeUser.apellido} ha sido eliminado con éxito`,
      });
  } catch (error) {
    res.status(500).json({ message: "No pudimos eliminar el usuario" });
  }
};





