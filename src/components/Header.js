import React from 'react';

function Header() {
  return(
    <header id='linkHome'>

      <nav id='navFixed' className='navbar fixed-top navbar-expand-lg navbar-light bg-light p-10px'>
        <div>
          <h1>LOGO</h1>
        </div>
        <button className='navbar-toggler' type='button' data-toggle='collapse' 
                data-target='#Navbar'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='Navbar'>
          <ul className='navbar-nav mx-auto'>
            <li className='nav-item'>
              <a className='nav-link scroll current' href='1'>Cocodes</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link scroll' href='2'>Cocode Segundo Nivel</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link scroll' href='2'>Cocode Juvenil</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link scroll' href='2'>Coordinadora Departamental</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link scroll' href='2'>¿Quiénes Somos?</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="boxHeader">
        <div className="textHeader">
          <h1><b>Inicio</b></h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur cupiditate voluptate repellendus voluptas esse culpa iusto.</p>

          <a className="buttonGetStarted" href="2" rel="nofollow noopener">Contactanos</a>

        </div>

        <div className="imgHeader">
          <img src='https://previews.123rf.com/images/yuliche/yuliche1711/yuliche171100034/90451031-paisaje-urbano-y-de-pueblo-camino-de-la-ciudad-al-campo-ecolog%C3%ADa-protección-del-medio-ambiente-libertad-d.jpg' alt=''/>
        </div>
      </div>

    </header>
  );
}

export default Header;