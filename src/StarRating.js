import React, { useState, useMemo } from 'react';
import './style.css';

export default function StarRating({ maxStars = 5, initialRating }) {
  const stars = useMemo(() => Array(maxStars).fill(null), [maxStars]);
  const [selectedCount, setSelectedCount] = useState(initialRating || 0);
  const [hoveredCount, setHoveredCount] = useState(0);

  const handleStarClick = (idx) => {
    setSelectedCount(idx + 1);
  };

  const handleStarHover = (idx) => {
    setHoveredCount(idx + 1);
  };

  const handleStarOut = () => {
    setHoveredCount(0);
  };

  const highlightedCount = hoveredCount || selectedCount;

  return (
    <div>
      {stars.map((_, idx) => {
        return (
          <span
            key={idx}
            onClick={() => handleStarClick(idx)}
            onMouseOver={() => handleStarHover(idx)}
            onMouseOut={handleStarOut}
            style={{
              cursor: 'pointer',
              color: idx < highlightedCount ? 'gold' : '#ccc',
              fontSize: '25px'
            }}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
}
