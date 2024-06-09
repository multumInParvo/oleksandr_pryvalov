// About //
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../About/About.scss';

function About() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>ABOUT | Oleksandr Pryvalov</title>
                <meta name="description" content="Learn more about Oleksandr Pryvalov, his background, and his journey as an artist." />
                <meta name="keywords" content="Oleksandr Pryvalov, Art, Artist, Biography" />
                <meta property="og:title" content="ABOUT | Oleksandr Pryvalov" />
                <meta property="og:description" content="Learn more about Oleksandr Pryvalov, his background, and his journey as an artist." />
                <meta property="og:image" content="/images/og-image-about.jpg" />
                <meta property="og:url" content="https://yourwebsite.com/about" />
                <meta property="twitter:title" content="ABOUT | Oleksandr Pryvalov" />
                <meta property="twitter:description" content="Learn more about Oleksandr Pryvalov, his background, and his journey as an artist." />
                <meta property="twitter:image" content="/images/twitter-image-about.jpg" />
            </Helmet>
            <div className='about-container'>
                <div className='deco-line'></div>
                <div className='text-pic-container'>
                    <p className='about-text'>
                        Oleksandr Pryvalov (born 1987) grew up in Mykolaiv, Ukraine, but his artistic passion grew in Argentina after immigrating there with his family.
                        While exploring various interests in his youth, art, particularly drawing and painting, remained a constant.
                        As a self-taught artist, Pryvalov's fascination with capturing the world visually became a defining force in his life.
                        Finally, in France, he met the conditions to take oil painting to a serious level.
                        Pryvalov finds inspiration in the facades of aging buildings. He sees these weathered, crumbling structures, and worn doors not just as decay, but as silent witnesses to time.
                        Each mark left by the elements holds a potential story to uncover. Through his paintings, Pryvalov aims to capture the mark of time on structures.
                        His works portray weathered exteriors and transport the viewer to times these structures saw.
                    </p>
                    <img className='about-image' src="/images/artist.webp" alt="Alt image" />
                </div>
            </div>
        </HelmetProvider>
    );
}

export default About;
