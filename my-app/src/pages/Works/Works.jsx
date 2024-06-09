// src/pages/Works/Works.js
import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import './Works.scss';

function Works() {
  const [paintings, setPaintings] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/paintings.json`)
      .then((response) => response.json())
      .then((data) => setPaintings(data))
      .catch((error) => console.error('Error fetching paintings:', error));
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>WORKS | Oleksandr Pryvalov</title>
      </Helmet>
      <div className="gallery-container">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
          <Masonry gutter="10px">
            {paintings.map((painting, index) => (
              <div key={index} className="image-container">
                <Link
                  to={`/gallery/${index}`}
                  state={{ from: location.pathname }}
                >
                  <img className='individual-painting' src={painting.picture} alt={painting.description} />
                </Link>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </HelmetProvider>
  );
}

export default Works;
