import React from 'react';
import "./Testimonial.css"

function Testimonial({ rating, avatar, name, comment }) {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push('\u2605');
  }
  for (let i = 0; i < 5 - rating; i++) {
    stars.push('\u2606');
  }

  return (
    <div className="testimonial">
      <div className="testimonial-avatar">
        <img src={avatar} alt={name} />
      </div>
      <div className="testimonial-info">
        <h2 className="testimonial-name">{name}</h2>
        <p className="testimonial-rating">{stars.join(' ')}</p>
        <p className="testimonial-comment">{comment}</p>
      </div>
    </div>
  );
}

export default Testimonial;