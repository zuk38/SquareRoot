import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Customize.css';

export default function Concept({ concept }) {
  const { name, description, image } = concept;

  return (
    <div className='c-grid--2x1'>
      <div className='grid-item1'>
        <img className='featured-concept--img' src={image} alt={name} />
      </div>

      <div className='grid-item3 position-relative'>
        <div className='move-to-bottom'>
          <h1 className='featured-concept--h1'>{name.toUpperCase()}</h1>
          <p className='c-mrg--top-sm'>{description}</p>

          <div className='c-mrg--top-sm'>
            <Link to={`/concepts/${name}`}>
              <button className='o-btn'>Se konsept</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
