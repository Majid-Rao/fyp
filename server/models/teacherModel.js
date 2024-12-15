const mongoose = require('mongoose');


const TeacherSchema = new mongoose.Schema(
  {
    uid: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User',
      required: [true, "User ID is required"]
  },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    subject: {
      type: String,
      required: true,
      trim: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, 
  }
);


const Teacher = mongoose.model('Teacher', TeacherSchema);
module.exports = Teacher;
