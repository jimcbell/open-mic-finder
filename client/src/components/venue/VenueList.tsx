import type { VenueViewModel } from '../../../../shared/types/VenueViewModel';
import Venue from './Venue';

// Option 1: Explicitly define the props interface
interface VenueListProps {
  venues: VenueViewModel[];
}

export default function VenueList({ venues }: VenueListProps) {
  return (
    <div>
      <h1>Venue List</h1>
      {venues.map((venue) => (
        <Venue key={venue._id || venue.name} {...venue} />
      ))}
    </div>
  );
}
