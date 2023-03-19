import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import TypeColor from "../components/TypeColors";
import '../stylesheets/pokeInfo.css'

const PokeInfo = () => {
    const [pokemons, setPokemons] = useState([]);
    const { pokeSelect } = useParams();

    const imgPokeballUrl = 'https://cdn-icons-png.flaticon.com/512/287/287221.png';
    const url = 'https://pokeapi.co/api/v2/pokemon';

    useEffect(() => {
        const getPoke = async () => {
            const res = await fetch(`${url}/${pokeSelect}`);
            const data = await res.json();
            setPokemons(data);
        }
        getPoke();
    }, [pokeSelect])

    const getTypeColor = (type) => {
        return TypeColor(type).color;
    }

    return (
        <div className="main-container">
            <div className="card">
                {pokemons.sprites &&
                    <>
                        <h2 className="h2-position">{pokemons.name}</h2>
                        <img src={pokemons.sprites.other.dream_world.front_default} alt={pokemons.name} /><div className="card-body">
                            <h2 className="h2-position">Type:</h2>
                            <div className="type-position">
                                {pokemons.types && pokemons.types.map((type, index) => (
                                    <span key={index} className="type" style={{ backgroundColor: getTypeColor(type.type.name) }}>
                                        {type.type.name}
                                    </span>
                                ))}
                            </div>
                            <div className="stats">
                            <h2>Stats:</h2>
                            <ul>
                                {pokemons.stats && pokemons.stats.map((stat, index) => (
                                    <li key={index}>
                                        <img src={imgPokeballUrl} alt='pokeball' />{stat.stat.name}: {stat.base_stat}
                                    </li>
                                ))}
                            </ul>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <Link to='/pokemones'>
                                <button className="bg-dark text-light mt-2">Volver</button>
                            </Link>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default PokeInfo;