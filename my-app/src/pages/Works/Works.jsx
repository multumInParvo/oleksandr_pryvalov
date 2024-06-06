import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Paintings from '../../data/Paintings';
import './Works.scss';

function Works() {
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
            {Paintings.map((painting, index) => (
              <div key={index} className="image-container">
                <Link to={`/gallery/${index}`}>
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
