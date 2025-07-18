import { useQuery } from '@tanstack/react-query';
import VenueList from '../components/VenueList';
import { getVenues } from '../api/venues';
import type { VenueViewModel } from '../../../shared/types/VenueViewModel';
import { useState } from 'react';
import TypeButton from '../components/VenueTypeButton';

export default function Home() {
  const venuesQuery = useQuery({
    queryKey: ['venues'],
    queryFn: () => getVenues(),
  });

  const [search, setSearch] = useState('');
  const [type, setType] = useState('');
  const setVenueType = (selectedType: string) => {
    if (selectedType === type) {
      setType('');
    }
    else {
      setType(selectedType)
    }
  }
  const venueTypes = ['Music', 'Comedy', 'Poetry', 'Drama']

  const venues: VenueViewModel[] = venuesQuery.data ?? [];
  return (
    <>
      <header>
        <div className='header-container'>
          <h1 className='header-title'>Open Mic Finder</h1>
          <div className="search-container">
            <div className="search-icon"></div>
            <input
              id='header-search'
              type='text'
              name='header-search'
              placeholder='Search venues, events, locations...'
              value={search}
              onChange={() => setSearch}
            />
          </div>          <ul className='filter-container'>
            {venueTypes.map(venueType =>
              <TypeButton key={venueType} type={venueType} isSelected={type === venueType} onClick={setVenueType}></TypeButton>
            )}
          </ul>
        </div>

      </header >
      <div className='venue-section'>
        <div className="sidebar" id="sidebar">
          <div className="sidebar-header">
            <h2 className="sidebar-title">Nearby Venues</h2>
          </div>
          <div className='venue-list-container'>
            <VenueList venues={venues} type={type} searchTerm={search} />
          </div>

        </div>
        <div className='map-container'>
          <div>Map Test</div>
        </div>
      </div >
    </>
  )
}
