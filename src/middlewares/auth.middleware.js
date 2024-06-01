import jwt from 'jsonwebtoken'

export const authRequire = (req, res, next) => {
    try {
        const { authorization } = req.headers

        const tokenDecoded = jwt.verify(authorization, process.env.SECRET_KEY)
        const actualTime = (new Date()/1000)

        if(actualTime > tokenDecoded.exp) return res.status(401).json({message: 'Token expirado :c'})

        req.data = tokenDecoded.data

    } catch (error) {
        return res.status(401).json(error)
    }

    next()
}