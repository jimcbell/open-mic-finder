import type { VenueViewModel } from '../../../shared/types/VenueViewModel';
import Venue from './Venue'

// Option 1: Explicitly define the props interface
interface VenueListProps {
  venues: VenueViewModel[];
  type: string;
  searchTerm: string;
}


export default function VenueList({ venues, type, searchTerm }: VenueListProps) {
  console.log(searchTerm);
  return (
    <>
      <div>
        {venues.filter(venue => venue.type === type || type === '').map((venue) => (
          <Venue key={venue._id || venue.name} {...venue} />
        ))}
      </div>
    </>

  );
}
