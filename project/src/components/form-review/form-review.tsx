import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useAppDisptach } from '../../hooks';
import { addCommentFilm } from '../../store/api-action';

const ratingValues: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const initState = {
  comment: '',
  rating: '0',
};

type FormReviewProps = {
  id: string,
}

function FormReview({ id }: FormReviewProps):JSX.Element {
  const dispatch = useAppDisptach();
  const [formData, setFormData] = useState(initState);

  const handleChange = (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const {value, name} = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const postForm = (evt: FormEvent):void => {
    evt.preventDefault();
    const {comment, rating} = formData;
    const review = {
      id,
      comment,
      rating,
    };
    dispatch(addCommentFilm(review));
  };
console.log(formData.rating)
  return (
    <div className="add-review">
      <form onSubmit={postForm} action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {
              ratingValues.map((score) => (
                <React.Fragment key={score}>
                  <input
                    className="rating__input"
                    id={`star-${score}`}
                    type="radio"
                    name="rating"
                    value={score}
                    onChange={handleChange}
                  />
                  <label className="rating__label" htmlFor={`star-${score}`}>Rating {score}</label>
                </React.Fragment>
              ))
            }
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="comment" id="review-text"
            placeholder="Review text"
            onChange={handleChange}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" disabled={formData.comment.length == 0 || formData.rating === '0'} type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormReview;
