import React, { SyntheticEvent, useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { useAppDisptach, useAppSelector } from '../../hooks';
import { addCommentFilm } from '../../store/api-action';
import { AddReviewObj } from '../../types/review';

const initStateObj: AddReviewObj = {
  comment: '',
  date: '',
  id: 0,
  rating: 0,
  user: {
    id: 0,
    name: ''
  }
};

const ratingValues: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function FormReview():JSX.Element {
    const [inputData, setFormInput] = useState({
    rating: '',
  });

  const inputChangeHandler = (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {

    const {value, name} = evt.target;
    setFormInput({
      ...inputData,
    });
  };
  
  const dispatch = useAppDisptach();
  const {films} = useAppSelector((state) => state);
  const [formData, setFormData] = useState(initStateObj);
  const formChangeHandler = (event: SyntheticEvent): void => {
    const {name, value} = event.target as HTMLTextAreaElement;
    setFormData({...formData, [name]: value});
  };

  const postForm = (event: SyntheticEvent):void => {
    event.preventDefault();
    const {comment, rating, id} = formData;
    const rewiew = {
      id,
      comment,
      rating,
    };
    dispatch(addCommentFilm(rewiew));
  };

  useEffect(()=>{
    setFormData((formDataPrev)=>({...formDataPrev, id: films.id}));
  },[films]);

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
                    onChange={inputChangeHandler}
                  />
                  <label className="rating__label" htmlFor={`star-${score}`}>Rating {score}</label>
                </React.Fragment>
              ))
            }
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="comment" id="review-text" placeholder="Review text" onChange={formChangeHandler}></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default FormReview;
