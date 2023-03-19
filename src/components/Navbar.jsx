import { NavLink } from "react-router-dom";
import '../stylesheets/navbar.css'

const Navbar = () => {
    const setActive = ({ isActive }) => (isActive ? 'active' : 'inactive')
    const pokeballImg = 'https://cdn-icons-png.flaticon.com/128/1033/1033013.png'
    return (
        <nav className="navbar navbar-light bg-dark">
            <div className="container-fluid justify-content-around">
                <div className="navbar-brand">
                    <div className="img-container">
                    <img src={pokeballImg} alt="poke-ball" />
                    </div>
                </div>
                <div>
                    <NavLink className={setActive} to='/'>Home</NavLink>
                    <NavLink className={setActive} to='/pokemones'>Pokemons</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;