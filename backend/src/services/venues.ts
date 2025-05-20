import { Venue } from '../db/models/venue.js';
import { VenueModel } from './types.js';

export async function listVenues() {
  return await Venue.find();
}

export async function createVenue(venue: VenueModel) {
  return await Venue.create({
    name: venue.name,
    phoneNumber: venue.phoneNumber,
    frequency: venue.frequency,
    signUpTime: venue.signUpTime,
    startTime: venue.startTime,
    endTime: venue.endTime,
    ageVerification: venue.ageVerification,
    address: venue.address,
  });
}

export async function deleteVenue(id: string) {
  return await Venue.deleteOne({ _id: id });
}
