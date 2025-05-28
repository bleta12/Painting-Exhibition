import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Gallery = () => {
  const [paintings, setPaintings] = useState([]);
  const isLoggedIn = false; 

  useEffect(() => {
    const fetchPaintings = async () => {
      try {
        const response = await axios.get('http://localhost:8080/painting/all');
        const data = isLoggedIn ? response.data : response.data.slice(0, 4);
        setPaintings(data);
      } catch (error) {
        console.error('Error fetching paintings:', error);
      }
    };

    fetchPaintings();
  }, [isLoggedIn]);

  return (
    <>
  

      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold" style={{ fontFamily: 'Georgia, serif' }}>
            Our Curated Collection
          </h1>
          <p className="text-muted" style={{ fontSize: '1.1rem' }}>
            A glimpse into timeless creativity
          </p>
        </div>

        {/* Masonry-style layout */}
        <div
          style={{
            columnCount: 3,
            columnGap: '1.5rem',
          }}
        >
          {paintings.map((painting) => (
            <div
              key={painting.id}
              style={{
                breakInside: 'avoid',
                marginBottom: '1.5rem',
              }}
            >
              <div
                className="card border-0 shadow-sm"
                style={{ borderRadius: '12px', overflow: 'hidden' }}
              >
                <img
                  src={painting.imageUrl}
                  alt={painting.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{painting.title}</h5>
                  <p className="card-text text-muted">{painting.description}</p>
                  <p className="text-end fw-bold text-secondary">{painting.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

     {/* Show login prompt if NOT logged in */}
        {!isLoggedIn && (
          <div
            className="text-center mb-4 p-3 mt-5"
            style={{
              backgroundColor: '#f8f9fa',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              fontStyle: 'italic',
              color: '#6c757d',
              maxWidth: '500px',
              margin: '0 auto 2rem',
            }}
          >
            🔒 Log in to explore our full collection of paintings!
          </div>
        )}



      </div>

   
    </>
  );
};

export default Gallery;
