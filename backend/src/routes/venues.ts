import express, { Request, Response } from 'express';
import { createVenue, deleteVenue, listVenues } from '../controller/venues.js';
import { VenueViewModel } from '@shared/types/VenueViewModel.js';

const venueRouter = express.Router();

venueRouter.get('', async (req: Request, res: Response) => {
  let venues = await listVenues();
  res.json(venues);
});

venueRouter.post('', async (req: Request, res: Response) => {
  let json = (await req.body) as VenueViewModel;
  try {
    let venue = await createVenue(json);
    res.status(202).json(venue).end();
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});

venueRouter.delete('{:id}', async (req: Request, res: Response) => {
  console.log('deleting');
  let id = req.params.id as string;
  await deleteVenue(id);
  res.json();
});

export default venueRouter;
