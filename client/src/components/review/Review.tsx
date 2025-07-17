import type { ReviewViewModel } from '../../../../shared/types/ReviewViewModel.ts';

export default function Review(props: ReviewViewModel) {
  return (
    <div>
      <h3>
        {props.firstName} {props.lastName}
      </h3>
      <p>{props.rating}</p>
      <p>{props.review}</p>
    </div>
  );
}
