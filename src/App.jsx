import { useState } from "react";
import "./App.css";
import FormSubmitted from "./FormSubmitted";

export default function App() {
  const [rating, setRating] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  function handleRatingChange(event) {
    setRating(event.target.value);
  }

  function handleSubmit() {
    if (!rating) {
      alert("Please rate how we did!");
    } else {
      console.log(`Submitted rating: ${rating}`);
      setFormSubmitted(true);
    }
  }

  if (formSubmitted) {
    return <FormSubmitted rating={rating} />;
  }

  return (
    <div className="App">
      <span className="top-star">⭐️</span>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form className="ratings-form">
        <div className="ratings">
          <label htmlFor="1">
            <span
              className={`rating-number ${rating === "1" ? "selected" : ""}`}
            >
              1
            </span>
            <input
              type="radio"
              id="1"
              value="1"
              onChange={handleRatingChange}
            />
          </label>
          <label htmlFor="2">
            <span
              className={`rating-number ${rating === "2" ? "selected" : ""}`}
            >
              2
            </span>
            <input
              type="radio"
              id="2"
              value="2"
              onChange={handleRatingChange}
            />
          </label>
          <label htmlFor="3">
            <span
              className={`rating-number ${rating === "3" ? "selected" : ""}`}
            >
              3
            </span>
            <input
              type="radio"
              id="3"
              value="3"
              onChange={handleRatingChange}
            />
          </label>
          <label htmlFor="4">
            <span
              className={`rating-number ${rating === "4" ? "selected" : ""}`}
            >
              4
            </span>
            <input
              type="radio"
              id="4"
              value="4"
              onChange={handleRatingChange}
            />
          </label>
          <label htmlFor="5">
            <span
              className={`rating-number ${rating === "5" ? "selected" : ""}`}
            >
              5
            </span>
            <input
              type="radio"
              id="5"
              value="5"
              onChange={handleRatingChange}
            />
          </label>
        </div>
        <button type="button" onClick={handleSubmit}>
          SUBMIT
        </button>
      </form>
    </div>
  );
}
