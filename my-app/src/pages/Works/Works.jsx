import React, { useState } from 'react';
import paintingsData from '../../data/paintings.json';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Works.scss';

function Works() {
  const [paintings] = useState(paintingsData);
  const location = useLocation();

  return (
    <HelmetProvider>
      <Helmet>
        <title>WORKS | Oleksandr Pryvalov</title>
      </Helmet>
      <h1 className='title-works'>Works</h1>
      <div className="gallery-container">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 3 }}
        >
          <Masonry gutter="5px">
            {paintings.map((painting, index) => (
              <div key={index} className="image-container">
                <Link
                  to={`/gallery/${index}`}
                  state={{ from: location.pathname }}
                >
                  <LazyLoadImage
                    className='individual-painting'
                    src={painting.picture}
                    alt={painting.description}
                    effect="blur"
                  />
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
