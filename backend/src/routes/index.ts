import express, { Router } from 'express';
import { createVenue, listVenues } from '../services/venues.js';
import { VenueModel } from '../services/types.js';

const router: Router = express.Router();

router.get('/api/status', (req, res) => {
  res.json({ status: 'API is running' });
});

router.get('/api/venues', async (req, res) => {
  let venues = await listVenues();
  res.json(venues);
});
router.post('/api/venues', async (req, res) => {
  console.log(req.body);
  let venue = (await req.body) as VenueModel;
  await createVenue(venue);
  res.json();
});
router.delete('/api/venues/{:id}', async (req, res) => {
  let id = req.params.id;
  await deleteVenue(id);
  res.json();
});

export default router;
