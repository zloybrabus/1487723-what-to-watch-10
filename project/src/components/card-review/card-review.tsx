import React, { useMemo } from 'react';
import { useAppSelector } from '../../hooks';
import Review from '../review/review';

const MAX_REVIEWS = 3;

function CardReviews(): JSX.Element {
  const { currentFilmComments } = useAppSelector((state) => state);

  const commentsToRender = useMemo(
    () =>
      currentFilmComments?.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    [currentFilmComments]
  );

  const middle = Math.ceil(currentFilmComments.length / 2);

  return (
    <div className="film-card__reviews film-card__row">
      {currentFilmComments && currentFilmComments.length ? (
        <>
          <div className="film-card__reviews-col">
            {commentsToRender
              .slice(0, middle)
              .map(({ id, user, comment, date, rating }) => (
                <Review
                  key={id}
                  user={user}
                  comment={comment}
                  date={date}
                  rating={rating}
                />
              ))}
          </div>

          <div className="film-card__reviews-col">
            {commentsToRender
              .slice(middle)
              .map(({ id, user, comment, date, rating }) => (
                <Review
                  key={id}
                  user={user}
                  comment={comment}
                  date={date}
                  rating={rating}
                />
              ))}
          </div>
        </>
      ) : (
        <div>No comments yet</div>
      )}
    </div>
  );
}

export default CardReviews;
