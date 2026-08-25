import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    fullName: { 
      type: String, 
      required: [true, 'Full name is required'], 
      trim: true 
    },
    email: { 
      type: String, 
      required: [true, 'Email is required'], 
      unique: true, 
      lowercase: true, 
      trim: true 
    },
    password: { 
      type: String, 
      required: [true, 'Password is required'],
      select: false // Prevents returning hashed password in queries by default
    }
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);