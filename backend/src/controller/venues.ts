import { Venue } from '../models/venue.js';
import { VenueViewModel } from './../../../shared/types/VenueViewModel.js';

export async function listVenues() {
  console.log(Venue);
  return await Venue.find();
}

export async function createVenue(venueModel: VenueViewModel) {
  let venue = new Venue({
    ...venueModel,
  });
  return await venue.save();
}

export async function deleteVenue(id: string) {
  return await Venue.deleteOne({ _id: id });
}
