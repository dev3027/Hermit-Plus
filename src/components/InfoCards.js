import React from 'react';
import mumboCard from '../images/mumboCard.png';
import gemCard from '../images/GeminiTayCard.png';

const InfoCards = () => {
  return (
    <>
      <section className='cards'>
        <img src={mumboCard} alt='mumbo jumbo information' />
        <img src={gemCard} alt='Gemini Tay information' />
      </section>
    </>
  );
};

export default InfoCards;
