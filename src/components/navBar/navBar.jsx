import React, { useState } from 'react';
import homeIcon from "../../assets/images/buy-home.png";
import menuIcon from "../../assets/images/menu.png";
import ButtonMain from "../buttonNav/buttonNav";
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="NavContainer">
      <div className='drawerButton'>
        <Link to='/'>
          <ButtonMain src={homeIcon} alt='Home button function'/>
        </Link>
      </div>

      <div className='drawerButton'>
        <h1>Profesional Stooore</h1>
      </div>
      
      <div className='drawerButton' onClick={toggleDrawer}>
        <ButtonMain src={menuIcon} alt='Menu button function'/>
      </div>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        className='bla bla bla'
        size={350}
      >
        <div>
          <ul>
            <li>Carrito N°</li>
            <li>Catogorias</li>
            <li>Ayuda</li>
            <li>Servicio al Cliente</li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
}