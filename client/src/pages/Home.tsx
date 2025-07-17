import { useQuery } from '@tanstack/react-query';
import VenueList from '../components/venue/VenueList';
import { getVenues } from '../api/venues';
import type { VenueViewModel } from '../../../shared/types/VenueViewModel';

export default function Home() {
  const venuesQuery = useQuery({
    queryKey: ['venues'],
    queryFn: () => getVenues(),
  });

  const venues: VenueViewModel[] = venuesQuery.data ?? [];
  return (
  <div className='venue-section'>
    <VenueList venues={venues} />
    </div>
  )
}
