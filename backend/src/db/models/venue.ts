import mongoose, { Schema } from 'mongoose';

const venueSchema = new Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    frequency: { type: String, required: true },
    signUpTime: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    ageVerification: { type: Boolean, required: true },
    address: { type: String, required: true },
  },
  { timestamps: true },
);

export const Venue = mongoose.model('venue', venueSchema);
