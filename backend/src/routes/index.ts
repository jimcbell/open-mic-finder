import express, { Router } from 'express';
import venueRouter from './venues.js';

const router: Router = express.Router();

router.get('/api/status', (req, res) => {
  res.json({ status: 'API is running' });
});

router.use('/api/venues', venueRouter);

export default router;
