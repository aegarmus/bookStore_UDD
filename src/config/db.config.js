import mongoose from 'mongoose'

export const db = async() => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
        console.log('Connected to MongoDB! :D')
    } catch (error) {
        console.error('Error connecting to MongoDB :c', error)
    }
}