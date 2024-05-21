// About
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../About/About.scss';
import Painter from '../../images/painter.webp';

function About() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>ABOUT | oleksandr pryvalov</title>
            </Helmet>
            <div className='about-container'>
                <div className='deco-line'></div>
                <div className='text-pic-container'>
                    <p className='about-text'>
                        Oleksandr Pryvalov (born 1987) grew up in Mykolaiv, Ukraine, but his artistic passion grew in Argentina after immigrating there with his family.
                        While exploring various interests in his youth, art, particularly drawing and painting, remained a constant.
                        As a self-taught artist, Pryvalov's fascination with capturing the world visually became a defining force in his life.
                        Finally, in France, he met the conditions to take oil painting to a serious level.
                        Pryvalov finds inspiration in the stories on aging buildings. He sees these weathered facades, crumbling structures, and worn doors not just as decay, but as silent witnesses to time.
                        Each mark left by the elements holds a potential story to uncover. Through his paintings, Pryvalov aims to bring the feeling of those times back to life.
                        His works go beyond portraying weathered exteriors, transporting viewers to the streets and lives these structures once saw.
                    </p>
                    <img className='about-image' src={Painter} alt="provisionary picture" />
                </div>
            </div>
        </HelmetProvider>
    );
}

export default About;