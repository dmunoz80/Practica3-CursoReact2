import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const PokeCard = () => {
    const [pokemon, setPokemon] = useState([]);
    const { select } = useParams();

    useEffect(() => {
        const getPoke = async () => {
            const res = await fetch(`${'https://pokeapi.co/api/v2/pokemon'}/${select}`);
            const data = await res.json();
            setPokemon(data);
        }
        getPoke();
    }, [select])

    return (
<div className="pokecard">
            <Card className="d-flex align-items-center mt-5 p-3" style={{ width: '22rem' }}>
                {pokemon.sprites &&
                <>
                <Card.Title>{pokemon.name}</Card.Title>
                <Card.Img variant="top" src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                </>
                }
                <Card.Body>
                    <Card.Text>
                        <ul>
                            {pokemon.stats && pokemon.stats.map((stat, index) => (
                            <li key={index}>
                            {stat.stat.name}: {stat.base_stat}
                            </li>
                            ))}
                        </ul>
                    </Card.Text>
                    <Link to='/pokemones'>
                        <Button variant="primary"> Nueva Consulta </Button>
                    </Link>
                </Card.Body>
            </Card>
            </div>
    )
}
export default PokeCard;