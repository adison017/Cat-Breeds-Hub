import React, { useEffect, useState } from 'react';
import CatService from '../services/CatService';

const RandomCat = () => {
  const [catImage, setCatImage] = useState('');

  useEffect(() => {
    CatService.getRandomCat()
      .then(response => {
        setCatImage(response.data[0].url);
      })
      .catch(error => {
        console.error('Error fetching random cat:', error);
      });
  }, []);

  return (
    <div>
      <h2>Random Cat</h2>
      {catImage ? <img src={catImage} alt="Random Cat" style={{ maxWidth: '300px' }} /> : <p>Loading...</p>}
    </div>
  );
};

export default RandomCat;
