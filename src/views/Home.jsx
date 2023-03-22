import 'bootstrap/dist/css/bootstrap.min.css';
import ash_img from '../img/ash_img.png';

function Home() {
    return (
            <div className='d-flex flex-column align-items-center mt-4'>
                <h1 className="text-center mb-5">Bienvenido Maestro Pokémon</h1>
                <img
                alt="Ash_Imagen"
                src={ash_img}
                width="350"
                height="650"
                />
            </div>
    )
}
export default Home;