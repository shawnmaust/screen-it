import React from 'react';
import star from '../images/star.png';
import starFilled from '../images/star-filled.png';
  
const Rater = ({stars}) => {
  return (
    [...Array(5).keys()].map(i => { 
      if (i+1 <= stars)  
        return <img key={i} src={starFilled} alt="" />
        
      return <img key={i} src={star} alt="" />
    })
  );
}

export default Rater;