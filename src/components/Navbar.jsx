import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/pokemon_logo.png';
import { NavLink } from "react-router-dom";

const BarraNav = () => {
    const setActive = ({ isActive }) => (isActive ? 'on' : 'off')
    
    return (
      <Navbar className='d-flex justify-content-between px-5' bg="dark">
        <img
          alt="Logo Pokemon"
          src={logo}
          width="140"
          height="50"
        />
        <div className='d-flex'>
          <div className='p-4'><NavLink className={setActive} to='/'>Home</NavLink></div>
          <div className='p-4'><NavLink className={setActive} to='/pokemones'>Pokemones</NavLink></div>
        </div>
      </Navbar>
    )
}

export default BarraNav;