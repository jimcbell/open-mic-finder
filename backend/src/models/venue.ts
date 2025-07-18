import mongoose, { Schema } from 'mongoose';

const venueSchema = new Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    frequency: { type: String },
    signUpTime: { type: String },
    startTime: { type: String },
    endTime: { type: String },
    ageVerification: { type: Boolean, required: true },
    address: { type: String, required: true },
    type: {type: String, required: true, enum: ['Music', 'Comedy', 'Poetry', 'Drama'] }
  },
  { timestamps: true },
);

export const Venue = mongoose.model('venue', venueSchema);
