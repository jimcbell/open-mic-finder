import './venue.css'
import { useState } from 'react';
import type { VenueViewModel } from '../../../../shared/types/VenueViewModel';
import Venue from './Venue';
import VenueTypeButton from './VenueTypeButton';

// Option 1: Explicitly define the props interface
interface VenueListProps {
  venues: VenueViewModel[];
}
const venueTypes = ['Music', 'Comedy', 'Poetry', 'Drama']



export default function VenueList({ venues }: VenueListProps) {
  const [type, setType] = useState('');
  return (
    <>
    <div className='type-container'>
    {venueTypes.map(venueType => 
        <VenueTypeButton key={venueType} venueType={venueType} isSelected={false} onClick={setType}></VenueTypeButton>
    )}
    </div>
    <div className='container'>
      {venues.filter(venue => venue.type === type || type === '').map((venue) => (
        <Venue key={venue._id || venue.name} {...venue} />
      ))}
    </div>
    </>
    
  );
}
