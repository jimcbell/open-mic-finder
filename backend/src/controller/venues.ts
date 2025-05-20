import { Venue, VenueModel } from '../models/venue.js';

export async function listVenues() {
  return await Venue.find();
}

export async function createVenue(venueModel: VenueModel) {
  let venue = new Venue({
    ...venueModel,
  });
  return await venue.save();
}

export async function deleteVenue(id: string) {
  return await Venue.deleteOne({ _id: id });
}
