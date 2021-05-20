import React from 'react'; 

const Image = ({ image, className }) => {
  
  if (!image) {
    return null;   
  }

  return image.animated ? (
    <video 
      className={className}
      src={image.img} 
      alt={image.title}
      autoPlay loop muted/>
      ) : (
      <img 
        src={image.img} 
        alt={image.title}
        className={className}
      />
  );
}; 

export default Image; 