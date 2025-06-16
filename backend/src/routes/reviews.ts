import { ReviewViewModel } from '@shared/types/ReviewViewModel.js';
import express, { Request, Response } from 'express';
import {
  createReview,
  listAllReviews,
  listReviews,
} from '../controller/reviews.js';

const reviewRouter = express.Router();
reviewRouter.get('/', async (req: Request, res: Response) => {
  try {
    let reviews = await listAllReviews();
    res.json(reviews);
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});
reviewRouter.get('/{:venueId}', async (req: Request, res: Response) => {
  try {
    let venueId = req.params.venueId;
    let reviews = await listReviews(venueId);
    res.json(reviews);
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});
reviewRouter.post('/{:venueId}', async (req: Request, res: Response) => {
  let json = (await req.body) as ReviewViewModel;
  try {
    let venue = await createReview(json);
    res.status(202).json(venue).end();
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});

export default reviewRouter;
