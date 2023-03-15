import React, { useState } from 'react';
import './App.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function App() {
  const [currentImage, setCurrentImage] = useState(0);

  

  const images = [
    'https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];

  const content = [
    {
      title: 'WHITE  LABEL MARKETING AUTOMATION AGENCY ',
      description: 'WE ARE HERE FOR ALL YOUR HUBSPOT MANAGEMNET SERVICES',
    },
    {
      title: 'Image 2',
      description: 'This is the content for Image 2',
    },
    {
      title: 'Image 3',
      description: 'This is the content for Image 3',
    },
  ];

  const handleNextImage = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  const handlePrevImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  return (
    <div className="container">
      <div className="slider">
        <div className="slider-image" style={{ backgroundImage: `url(${images[currentImage]})` }}>
        
          <div className="content">
          <div className="overlay"></div>
            <p className='desc'><h3 className='title'>{content[currentImage].title}</h3>{content[currentImage].description}</p>
            <button className="cta-button">Get Started</button>
          </div>
        </div>
        <div className="slider-buttons">
          <button className="prev-button" onClick={handlePrevImage}><ArrowBackIosIcon/></button>
          <br/>
          <br/>
          <button className="next-button" onClick={handleNextImage}><ArrowForwardIosIcon/></button>
        </div>
      </div>
    </div>
  );
}

export default App;
