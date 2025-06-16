import { useQuery } from '@tanstack/react-query';
import './Venue.css';
import ReviewList from '../review/ReviewList.tsx';
import { getReviews } from '../../api/reviews.ts';
import type { VenueViewModel } from '../../../shared/types/VenueViewModel.ts';
import { ChevronDown } from 'lucide-react';
import type { ReviewViewModel } from '../../../shared/types/ReviewViewModel.ts';

export default function Venue(props: VenueViewModel) {
  const reviewQuery = useQuery({
    queryKey: ['reviews', props._id],
    queryFn: () => getReviews(props._id),
  });
  const reviews: ReviewViewModel[] = reviewQuery.data ?? [];

  // Generate star ratings - You might want to calculate this based on actual review data
  const renderStars = () => {
    const stars = [];
    const avgPrice: number =
      reviews.length > 0 ? reviews.reduce((sum, item) => sum + item.rating, 0) / reviews.length : 0;

    for (let i = 0; i < avgPrice; i++) {
      stars.push(<div key={i} className="star"></div>);
    }
    return stars;
  };

  return (
    <div id={props._id} className="venue-card">
      <div className="venue-header">
        <h2 className="venue-name">
          {props.name}
          <span className="dropdown-icon">
            <ChevronDown size={18} />
          </span>
        </h2>
        <p className="venue-address">{props.address}</p>
        <p className="venue-phone">{props.phoneNumber || '(123) 456-7890'}</p>
        <div className="venue-rating">{renderStars()}</div>
      </div>

      <div className="venue-details">
        <div className="detail-label">Monday</div>
        <div className="detail-value">Weekly</div>

        <div className="detail-label">Sign Up Time:</div>
        <div className="detail-value">{props.signUpTime || '6:30pm'}</div>

        <div className="detail-label">Start/End Time:</div>
        <div className="detail-value">
          {props.startTime || '7:00pm'} - {props.endTime || '10:00pm'}
        </div>
      </div>

      <div className="reviews-section">
        {reviews.length > 0 ? (
          <ReviewList reviews={reviews}></ReviewList>
        ) : (
          <p className="no-reviews">No reviews yet!</p>
        )}
      </div>
    </div>
  );
}
