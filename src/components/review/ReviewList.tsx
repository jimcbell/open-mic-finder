import type { ReviewViewModel } from '../../../shared/types/ReviewViewModel';
import Review from './Review';

interface ReviewListProps {
  reviews: ReviewViewModel[];
}
export default function ReviewList({ reviews }: ReviewListProps) {
  return reviews.map((review) => <Review key={review._id} {...review} />);
}
