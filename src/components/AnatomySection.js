import React, { useState } from 'react';
import '../styles/AnatomySection.css';

const AnatomySection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`anatomy-section ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="anatomy-container">
        <div className="anatomy-images-grid">
          <img 
            src={require('../assets/images/human-body-front.png')} 
            alt="Front View - Human Body Anatomy"
            className="anatomy-image"
          />
          <img 
            src={require('../assets/images/human-body-back.png')} 
            alt="Back View - Human Body Anatomy"
            className="anatomy-image"
          />
        </div>
      </div>
    </div>
  );
};