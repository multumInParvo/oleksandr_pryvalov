// About
import React from 'react';
import '../About/About.scss';
import Painter from '../../images/painter.webp';

function About() {
    return (
        <div className='about-container'>
            <p className='about-text'>
                Oleksandr Pryvalov (born 1987) grew up in Mykolaiv, Ukraine, but his artistic passion blossomed in Argentina after immigrating there with his family.
                While exploring various interests in his youth, art, particularly drawing and painting, remained a constant.
                This fascination with capturing the world visually would become a defining force in his life.

                Now in France, Pryvalov finds inspiration in the stories etched on aging buildings.
                He sees these weathered facades and crumbling structures not just as decay, but as silent witnesses to time.
                Each mark left by the elements becomes a potential story waiting to be discovered.

                Through his paintings, Pryvalov aims to bring these forgotten eras back to life.
                His works go beyond portraying weathered exteriors, transporting viewers to the streets and lives these structures once saw.
            </p>
            <img className='artist-pic' src={Painter} alt="just a provisionary picture" />
        </div>
    );
}

export default About;