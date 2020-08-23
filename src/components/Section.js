import React from 'react';

function Section() {
  return(
    <section className='boxSection' id='linkSection'>
      <h3>Desarrollo</h3>
      <div className='section'>
        <div className='imgSection'>
          <img src='https://previews.123rf.com/images/yuliche/yuliche1711/yuliche171100034/90451031-paisaje-urbano-y-de-pueblo-camino-de-la-ciudad-al-campo-ecolog%C3%ADa-protección-del-medio-ambiente-libertad-d.jpg' alt=''/>
        </div>
        <article className='contentSection'>
          <h3>Huertos Familiares</h3>
          <p>Texto contenido bla bla bla bla</p>
          <a className='buttonGetStarted' href='2'>Leer más</a>
        </article>
      </div>
    </section>
  );
}

export default Section;