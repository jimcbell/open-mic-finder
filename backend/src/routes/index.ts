import express, { Router } from 'express';
import venueRouter from './venues.js';
import reviewRouter from './reviews.js';

const router: Router = express.Router();

router.get('/api/status', (req, res) => {
  res.json({ status: 'API is running' });
});

router.use('/api/venues', venueRouter);
router.use('/api/reviews', reviewRouter);
export default router;
