import React, { useContext, useState } from 'react';
import homeIcon from "../../assets/images/buy-home.png";
import menuIcon from "../../assets/images/menu.png";
import cartNumber from '../../assets/images/buy-me.png'
import ButtonMain from "../buttonNav/buttonNav";
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function NavBar() {
  const [cart, setCart] = useContext(CartContext);

  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="NavContainer">
      <div className='drawerButton'>
        <Link to='/'>
          <ButtonMain miClase='Icons' src={homeIcon} alt='Home button function'/>
        </Link>
      </div>

      <div className='drawerButton'>
        <h1>Profesional Store</h1>
      </div>
      
      <div className='drawerButton' onClick={toggleDrawer}>
        <ButtonMain miClase='Icons' src={menuIcon} alt='Menu button function'/>
      </div>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        className='drawer'
        size={350}
        // style={"backgroun:rgba(90, 89, 89, 0.25)"}
      >
        <div>
          <ul>

            <Link to='/checkout'>
              <p>{cart.length}</p>
              <ButtonMain miClase='drawer' src={cartNumber} alt='button cart notification'></ButtonMain>
            </Link>

            <li>Catogorias</li>
            <li>Ayuda</li>
            <li>Servicio al Cliente</li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
}