// Rating.js
import React, { useState } from 'react';
import './review.css';
const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <center><div className="joo">
        <h1>Rating and Review</h1>
      <h2>Rate this item:</h2>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleRatingChange(star)}
          style={{
            cursor: 'pointer',
            color: star <= rating ? 'gold' : 'gray',
            fontSize: '24px',
          }}
        >
          ★
        </span>
      ))}
      <p>Selected Rating: {rating}</p>
       <form>
        <table>
            <tr>
            <textarea placeholder='share your feedback' rows={20} cols={50}></textarea><br></br><br></br>
            </tr>
        </table>
       </form>
    </div></center>
  );
};

export default Rating;
