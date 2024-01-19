// src/components/Card.tsx
import React from 'react';
import "./Card.css"

interface CardProps {
  imageSrc: string;
  name: string;
  email: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, name, email }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={name} className="card-image" />
      <div className="card-details">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
