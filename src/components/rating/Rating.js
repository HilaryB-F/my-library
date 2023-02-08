import "./Rating.scss";
import { FaHeart } from "react-icons/fa";
import React from "react";
import { useState } from "react";
import {v4} from "uuid";


export default function Rating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);



  return (
    <div className ="rating__container">
      {[...Array(5)].map((heart, i) => {
        const ratingValue = i + 1;
        return (
          <label key={v4()} >
            <input
              className="rating"
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              // id="rating"
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
