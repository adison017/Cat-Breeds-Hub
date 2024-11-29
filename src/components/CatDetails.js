import React, { useEffect, useState } from 'react';
import CatService from '../services/CatService';

const CatDetails = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    CatService.getCatWithDetails()
      .then(response => {
        setCats(response.data);
      })
      .catch(error => {
        console.error('Error fetching cat details:', error);
      });
  }, []);

  return (
    <div>
      <h2>Cat Details</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {cats.map(cat => (
          <div
            key={cat.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '10px',
              maxWidth: '300px',
            }}
          >
            <img
              src={cat.url}
              alt={cat.breeds[0]?.name || 'Unknown Breed'}
              style={{ width: '100%', borderRadius: '10px' }}
            />
            <h3>{cat.breeds[0]?.name || 'Unknown Breed'}</h3>
            <p>{cat.breeds[0]?.description || 'No description available.'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatDetails;
