import mongoose, { Schema } from 'mongoose';

const reviewSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    venueId: { type: String, required: true },
    rating: { type: Number },
    review: { type: String },
  },
  { timestamps: true },
);

export const Review = mongoose.model('review', reviewSchema);
