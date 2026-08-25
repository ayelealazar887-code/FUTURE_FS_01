import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: { 
      type: String, 
      enum: ['Call', 'Email', 'Meeting', 'Note'], 
      required: true 
    },
    lead: { type: mongoose.Schema.Types.ObjectId, ref: 'Lead', required: true },
    performedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    scheduledAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

export default mongoose.model('Activity', activitySchema);