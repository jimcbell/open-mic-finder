import { ReviewViewModel } from '@shared/types/ReviewViewModel.js';
import { Review } from '../models/review.js';

export async function listReviews(venueId: string) {
  return await Review.find({ venueId: venueId });
}
export async function listAllReviews() {
  return await Review.find();
}

export async function createReview(reviewModel: ReviewViewModel) {
  let review = new Review({
    ...reviewModel,
  });
  return await review.save();
}
