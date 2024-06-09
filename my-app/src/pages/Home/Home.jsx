// Home //
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../Home/Home.scss';
import Carousel from '../../components/Carousel/Carousel';

function Home() {
  return (
    <HelmetProvider>
      <div className='home'>
        <Helmet>
          <title>Oleksandr Pryvalov</title>
        </Helmet>
        <Carousel />
      </div>
    </HelmetProvider>
  );
}

export default Home;