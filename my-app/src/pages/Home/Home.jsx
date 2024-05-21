// Home
import React from 'react';
import { Helmet } from 'react-helmet';
import '../Home/Home.scss';
import Carousel from '../../components/Carousel/Carousel';

function Home() {
  return (
    <div className='home'>
      <Helmet>
        <title>Oleksandr Pryvalov</title>
      </Helmet>
      <Carousel />
    </div>
  );
}

export default Home;