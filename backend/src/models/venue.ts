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
  },
  { timestamps: true },
);

export type VenueModel = {
  name: string;
  phoneNumber: string;
  frequency: string;
  signUpTime: string;
  startTime: string;
  endTime: string;
  ageVerification: Boolean;
  address: string;
};

export const Venue = mongoose.model('venue', venueSchema);
