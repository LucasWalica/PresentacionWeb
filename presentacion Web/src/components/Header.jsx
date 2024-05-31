import personalPhoto from '../assets/LucasPhoto.jpg';
import './headerStyling.css';
import React, { useState, useEffect } from 'react';
export default function Header(){

    const [content, setContent] = useState('');

    function loadData(section) {
        let data = '';
        switch (section) {
            case 0:
                data = "";
                break;
            case 1:
                data = "Beneficios del Yoga";
                break;
            case 2:
                data = 'Razones para hacer Yoga';
                break;
            case 3:
                data = 'Somos una empresa líder...';
                break;
            default:
                data = 'Bienvenido a nuestra página web';
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
                    <div className="m-2 justify-center content-center grid grid-cols-2">
                        <center>
                            <img src={personalPhoto} className='max-h-96 rounded-full'></img>
                        </center>
                        <div className='text-emerald-200 border-2 m-4 rounded-lg justify-center content-center border-emerald-400 bg-emerald-950'>
                            <h1 className='text-lg text-center content-center flex justify-center p-2 m-2'>Programador Web</h1>
                            <hr></hr>
                            <div className='m-2 content-center text-lg bg-emerald-400 rounded-md text-emerald-950 font-r4 hover:bg-emerald-600 hover:pl-4 hover:pr-4 duration-150 hover:text-emerald-400'>
                                <h1>Lenguajes de Programación:</h1>
                                <ul className='m-2 content-center text-lg bg-emerald-400 rounded-md text-emerald-950 font-r4 hover:bg-emerald-600 hover:pl-4 hover:pr-4 duration-150 hover:text-emerald-400'>
                                    <li>-Python</li>
                                    <li>-Java</li>
                                    <li>-JavaScript</li>
                                    <li>-SQL</li>
                                </ul>
                            </div>
                            <hr></hr>
                            <div className='m-2 content-center text-lg bg-emerald-400 rounded-md text-emerald-950 font-r4 hover:bg-emerald-600 hover:pl-4 hover:pr-4 duration-150 hover:text-emerald-400'>
                                <h1>Tecnologías: </h1>
                                <ul className='m-2 content-center text-lg bg-emerald-400 rounded-md text-emerald-950 font-r4 hover:bg-emerald-600 hover:pl-4 hover:pr-4 duration-150 hover:text-emerald-400'>
                                    <li>-Django</li>
                                    <li>-React</li>
                                    <li>-Tailwind & Bootstrap</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-emerald-950 m-4 rounded-lg'>
                    <div className='grid grid-cols-3 text-center m-4 border-2 text-emerald-300'>
                        <div onClick={() => loadData(1)} className='m-2 content-center text-lg bg-emerald-400 rounded-md text-emerald-950 font-r4 hover:bg-emerald-600 hover:pl-4 hover:pr-4 duration-150 hover:text-emerald-400'>
                            Lenguajes de Programacion
                        </div>
                        <div onClick={() => loadData(2)} className='m-2 content-center text-lg bg-emerald-400 rounded-md text-emerald-950 font-r4 hover:bg-emerald-600 hover:pl-4 hover:pr-4 duration-150 hover:text-emerald-400'>
                            Tecnologias
                        </div>
                        <div onClick={() => loadData(3)} className='m-2 content-center text-lg bg-emerald-400 rounded-md text-emerald-950 font-r4 hover:bg-emerald-600 hover:pl-4 hover:pr-4 duration-150 hover:text-emerald-400'>
                            Contacto
                        </div>
                    </div>
                    <div className='border-2 m-4 p-2 text-center'>
                        {content}
                    </div>
                </div>
            </div>
        </div>
    )
}