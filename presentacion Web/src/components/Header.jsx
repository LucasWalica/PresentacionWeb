import personalPhoto from '../assets/LucasPhoto.jpg';
import './headerStyling.css';
import React, { useState, useEffect } from 'react';
export default function Header(){

    const [content, setContent] = useState('');

    function loadData(section) {
        let data = '';
        switch (section) {
            case 0:
                data = "Bienvenido a mi Web de presentación";
                break;
            case 1:
                data = (
                    <div className="text-start">
                        -Python<br></br>
                        -JavaScript<br></br>
                        -Java<br></br>
                        -SQL<br></br>
                    </div>
                );
                break;
            case 2:
                data = (
                    <div className="text-start">
                        -Django<br></br>
                        -React<br></br>
                        -Bootstrap<br></br>
                        -Tailwind<br></br>
                    </div>
                );
                break;
            case 3:
                data = (
                    <div className="text-start m-2">
                        -tlfno: 677 367 124<br></br>
                        -Email: projectwali272@gmail.com<br></br>
                        <center>
                            <div className='m-2 p-2 text-center bg-emerald-700 text-emerald-200 w-1/3 hover:w-1/2 duration-150 rounded-md hover:bg-emerald-800 hover:text-emerald-300'>
                                <a className="hover:bg-emerald-400 hover:text-emerald-950 rounded-md p-4" target='_blank' href="https://github.com/LucasWalica">Github</a>    
                            </div>
                            <div className='m-2 p-2 text-center bg-emerald-700 text-emerald-200 w-1/3 hover:w-1/2 duration-150 rounded-md hover:bg-emerald-800 hover:text-emerald-300'>
                                <a className="hover:bg-emerald-400 hover:text-emerald-950 rounded-md p-4"  target="_blank" href="https://www.linkedin.com/in/lucas-walica/">Linkedin</a>
                            </div>
                            <div className='m-2 p-2 text-center bg-emerald-700 text-emerald-200 w-1/3 hover:w-1/2 duration-150 rounded-md hover:bg-emerald-800 hover:text-emerald-300'>
                            <a className="hover:bg-emerald-400 hover:text-emerald-950 rounded-md p-4" target="_blank" href="https://www.instagram.com/usually_3dprinted/">3D</a>
                            </div>
                        </center>
                    </div>
                );
                break;
        }
        setContent(data);
    }

    useEffect(() => {
        // Cargar el contenido por defecto al cargar la página
        loadData(0);
    }, []);

    return (
        <div>
            <div className="grid md:grid-cols-2">
                <div className="grid grid-cols-1 bg-emerald-950 rounded-lg m-4">
                    <h1 className="text-4xl font-r3 text-center justify-center m-4 border-2 rounded-se-3xl border-emerald-700 bg-emerald-200">
                        Lucas Walica
                    </h1>
                    <div className="m-2 justify-center content-center grid lg:grid-cols-2 sm:grid-cols-1">
                        <center>
                            <img src={personalPhoto} className='max-h-96 rounded-full'></img>
                        </center>
                        <div className='text-emerald-200 border-2 m-4 rounded-lg justify-center content-center border-emerald-400 bg-emerald-950'>
                            <h1 className='text-lg text-center content-center flex justify-center p-2 m-2'>Presentación</h1>
                            <hr></hr>
                            <div className='m-2 p-2 content-center text-lg bg-emerald-400 rounded-md text-emerald-950 font-r4'>
                                Mi nombre es Lucas Walica, llevo año y medio programando por mi cuenta y quiero empezar a hacer mis primeros proyectos.
                                Estoy estudiando Desarrollo de aplicaciones multiplataforma, aunque también estoy muy interesado en robótica e impresión 3D.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-emerald-950 m-4 p-2 rounded-lg'>
                    <div className='grid grid-cols-3 text-center m-4 text-emerald-300'>
                        <div onClick={() => loadData(1)} className='m-2 content-center text-lg bg-emerald-400 rounded-md text-emerald-950 font-r4 hover:bg-emerald-600 duration-150 hover:text-emerald-400'>
                            Lenguajes
                        </div>
                        <div onClick={() => loadData(2)} className='m-2 content-center text-lg bg-emerald-400 rounded-md text-emerald-950 font-r4 hover:bg-emerald-600 duration-150 hover:text-emerald-400'>
                            Tecnologías
                        </div>
                        <div onClick={() => loadData(3)} className='m-2 content-center text-lg bg-emerald-400 rounded-md text-emerald-950 font-r4 hover:bg-emerald-600 duration-150 hover:text-emerald-400'>
                            Contacto
                        </div>
                    </div>
                    <div className='m-4 text-center text-emerald-50 h-52 bg-emerald-600 rounded-md content-center'>
                        <div className='m-2'>
                            {content}
                        </div>
                    </div>
                    <div className='bg-emerald-700 rounded-lg m-2'>
                        <center>
                            <h1 className='text-center text-white text-xl font-r3 bg-emerald-700 rounded-md w-1/2'>
                                Bueno, Barato y Bonito
                            </h1>
                        </center>
                        <div className='content-center'>
                            <h1 className='text-emerald-100 m-2 font-r4'>
                                Si quieres Páginas web de presentación, cartas para bares/restaurantes online con QR, blogs, gestores web, otros proyectos web, contactame.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}