import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='imagebox'>
      <img src='./images/hpage.png' className='image'></img>
      <span>
      <h1>ROOFTOP</h1>
      <p>Text explaining why rooftops are good and why the customers should have rooftop gardens.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          LEARN MORE
        </Button> 
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          ADD TO PROJECT <i class="fas fa-chevron-right"/>
        </Button>
      </div>
      </span>
      </div>
      <div className='imagebox'>
      <img src='./images/rainbeds.png' className='image'></img>
      <span>
      <h1>RAINBEDS</h1>
      <p>Text explaining why rainbeds are good and why the customers should have rainbeds.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          LEARN MORE
        </Button> 
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          ADD TO PROJECT <i class="fas fa-chevron-right"/>
        </Button>
      </div>
      </span>
      </div>
      <div className='imagebox'>
      <img src='./images/biodiversity.png' className='image'></img>
      <span>
      <h1>BIODIVERSITY</h1>
      <p>Text explaining why biodiversity are good and why the customers should have it.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          LEARN MORE
        </Button> 
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          ADD TO PROJECT <i class="fas fa-chevron-right"/>
        </Button>
      </div>
      </span>
      </div>
    </div>
    
  );
}

export default HeroSection;