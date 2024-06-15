import bcrypt from 'bcrypt'


export const validateLoginData = async(user, password) => { 
    const verifyPassword = await bcrypt.compare(password, user.password)
      
    if(!user || !verifyPassword) {
        return 'Los datos ingresados son invalidos'
    }
}