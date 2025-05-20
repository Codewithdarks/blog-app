import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://amittiwari:Amit121@cluster0.iznm3.mongodb.net', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.info('Connected to DataBase');
    } catch (error){
        console.error('Connection Error', error);
        process.exit(1);
    }
};
mongoose.connection.on('error', (err) => {
    console.error('MongoDB Connection Error', err);
});

export default connectDB;