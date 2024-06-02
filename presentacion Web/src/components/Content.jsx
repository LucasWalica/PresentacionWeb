import personalPhoto from '../assets/LucasPhoto.jpg';
import './headerStyling.css';

export default function Header(){
    return (
        <div>
            <div className="grid md:grid-cols-2">
                <div className="grid grid-cols-1 bg-emerald-950 rounded-lg m-4">
                    <div className="font-r3 text-center content-center justify-center m-4 border-2 text-black rounded-se-3xl border-emerald-700 bg-emerald-200">      
                        <h1 className='text-4xl '>Lucas Walica</h1>
                        <h6 className='text-xl'>Programador web y técnico de impresoras 3D</h6>
                    </div>
                    <div className="m-2 justify-center content-center grid lg:grid-cols-2 sm:grid-cols-1">
                        <center>
                            <img src={personalPhoto} className='max-h-96 rounded-full'></img>
                        </center>
                        <div className='text-emerald-200 border-2 m-4 rounded-lg justify-center content-center border-emerald-400 bg-emerald-950'>
                            <h1 className='text-lg text-center content-center flex justify-center p-2 m-2'>Presentación</h1>
                            <hr></hr>
                            <div className='m-2 p-2 content-center text-lg bg-emerald-400 rounded-md text-emerald-950 font-r4'>
                                Mi nombre es Lucas Walica, llevo año y medio programando por mi cuenta.
                                Estoy estudiando Desarrollo de aplicaciones multiplataforma, aunque también estoy muy interesado en robótica e impresión 3D.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center bg-emerald-950 m-4 p-2 rounded-lg grid grid-cols-1'>
                    <h1 className='text-center text-xl bg-emerald-500 rounded-md text-emerald-950'>
                        Algunos repositorios y webs de mi Github:
                    </h1>
                    <a target="_blank" className='m-11 hover:bg-emerald-400 hover:text-emerald-950 hover:rounded-lg duration-300 bg-emerald-900 text-emerald-50 rouned-md p-2 ' href="https://github.com/LucasWalica/PokemonAnalisisCSV">
                        Analisis de datos pokemon con matplotlib y Python
                    </a>
                    <a target='_blank' className='m-11 hover:bg-emerald-400 hover:text-emerald-950 hover:rounded-lg duration-300 bg-emerald-900 text-emerald-50 rouned-md p-2 ' href="https://github.com/LucasWalica/mascotasDJANGO">
                        Django CRUD de mascotas
                    </a>
                    <a target="_blank" className='m-11 hover:bg-emerald-400 hover:text-emerald-950 hover:rounded-lg duration-300 bg-emerald-900 text-emerald-50 rouned-md p-2 ' href="https://lucaswalica.github.io/StoryTelling/">
                        Juego historia con elecciones usando JSON
                    </a> 
                    <a target="_blank" className='m-11 hover:bg-emerald-400 hover:text-emerald-950 hover:rounded-lg duration-300 bg-emerald-900 text-emerald-50 rouned-md p-2 ' href="https://github.com/LucasWalica/CountryCRUDDjangoTailwindWithSearch">
                        Un Crud de paises con barra de busqueda
                    </a>
                    <a target="_blank" className='m-11 hover:bg-emerald-400 hover:text-emerald-950 hover:rounded-lg duration-300 bg-emerald-900 text-emerald-50 rouned-md p-2 ' href="https://github.com/LucasWalica/LibraryProcedures/blob/main/biblioteca.sql">
                        Un ejercicio de SQL bastante completo
                    </a>       
                </div>
            </div>
        </div>
    )
}