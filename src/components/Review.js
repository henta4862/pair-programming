import React, { useState } from 'react';
const Review = ({ tour, onDelete }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  const handleDelete = () => {
    onDelete(tour.id); // Pass the item's ID to the parent component for deletion
  };

  return (
    <article className="review">
      <div className="tour-info">
        <h4>{tour.name}</h4>
        <button onClick={toggleDescription}>
          {expanded ? 'Hide Description' : 'Show Description'}
        </button>
        <button onClick={handleDelete} className="delete-button">
          Delete
        </button>
      </div>
      {expanded && <p className="description">{tour.description}</p>}
    </article>
  );
};

export default Review;