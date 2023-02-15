import './EditRating.scss'
import { FaHeart } from "react-icons/fa";
import React from "react";
import { useState } from "react";


export default function EditRating({selectedBook}) {
  const [rating, setRating] = useState(selectedBook.rating);
  const [hover, setHover] = useState(null);

  return (
    <div className ="edit-rating__container">
      {[...Array(5)].map((heart, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i} >
            <input
              className="rating"
              type="radio"
              name="rating"
              value={rating}
              onClick={() => setRating(ratingValue)}
            />
            <FaHeart 

              className="heart"
              size={40}
              color={ratingValue <= (hover || rating) ? "#F84B4B" : "#4B1F19"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
          
        );
      })}
    </div>
  );
}
