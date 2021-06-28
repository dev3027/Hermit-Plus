import React from 'react';
import { Link } from 'react-router-dom';
import BdubsSkin from '../images/bdouble_minecraft_skin.png';
import grianSkin from '../images/Grian_Minecraft_Skin.png';
import keralisSkin from '../images/keralis_minecraft_skin.png';

const Hermits = () => {
  return (
    <>
      <section className='hermits'>
        <p className='hermit-info'>
          Introducing Hermit Plus. A web app that shows all the hermits just the
          way you want to see them. All your Hermits gathered in one place,
          presented in a tastefully pleasing format, with all the information
          you want to know about them. This is the experience you didn’t know
          you wanted.
        </p>
        <div className='characters'>
          <img
            className='bdub'
            src={BdubsSkin}
            alt="B double o's Minecraft skin"
          />
          <img className='grian' src={grianSkin} alt="Grian's Minecraft skin" />
          <img
            className='keralis'
            src={keralisSkin}
            alt="Keralis's Minecraft skin"
          />
        </div>
        <div className='button-wrapper'>
          <div className='signup-button'>
            <Link>
              <h3>Sign Up</h3>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hermits;
