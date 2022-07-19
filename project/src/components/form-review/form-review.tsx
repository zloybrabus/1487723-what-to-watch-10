import React, {useState, ChangeEvent, FormEvent} from 'react';

const ratingValues: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function FormReview(): JSX.Element {

  const [inputData, setFormInput] = useState({
    rating: '',
    reviewText: '',
  });

  const inputChangeHandler = (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {

    const {value, name} = evt.target;
    setFormInput({
      ...inputData,
      [name]: value,
    });
  };

  const postForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

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
          <textarea
            className="add-review__textarea"
            name="reviewText" id="reviewText"
            placeholder="Review text"
            onChange={inputChangeHandler}
            value={inputData.reviewText}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Добавить отзыв</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormReview;
