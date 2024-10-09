import mongoose from 'mongoose';

// Define the schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true }
);

// Create the model using the schema
const User = mongoose.model('User', userSchema);

export default User; 