import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function PokeSelector() {
    const [Poke, setPoke] = useState([]);
    const [select, setSelect] = useState('')
    const navigate = useNavigate();

    const PokeApi = async () => {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151');
        const data = await res.json();
        setPoke(data.results);
    }

    useEffect(() => {
        PokeApi()
    }, [])

    const verDetalle = () => {
        navigate(`/pokemones/${select}`);
    }

    return (
        <div className="d-flex flex-column align-items-center mt-5">

        <Form>
        <Form.Label className="fs-1 fw-bold">Selecciona un Pokemon</Form.Label>
        <Form.Group className="mb-3">
          <Form.Select value={select} onChange={(e) => setSelect(e.target.value)}>
            <option value='' disabled defaultValue>Nombre Pokemon</option>
                    {Poke.map(({name}, index) => (
            <option key={index} value={name}>{name}</option>
                    ))}
          </Form.Select>
        </Form.Group>
        </Form>

        <Button className="mt-2" onClick={verDetalle} variant="outline-danger">Ver Detalle</Button>
        </div>
    )
}

export default PokeSelector;