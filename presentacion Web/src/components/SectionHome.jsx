import Header from "./Content";
import Card from "./Card";
import javaLogo from '../assets/JavaLogo.png';
import PythonLogo from '../assets/PythonLogo.png';
import JSLogo from '../assets/JSLogo.png';
import SQLLogo from '../assets/SQLLOGO.jpg';

export default function SectionHome1(){
    return (
        <div className="m-2 rounded-md bg-emerald-800 text-emerald-200">
            <Header></Header>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 content-center text-center">
                <Card image={javaLogo} title="Java" text="Es el lenguaje con el que menos experiencia tengo, ya que llevo con el unos meses, pero domino los distintos paradigmas de programación como el funcional, orientado a objetos, etc..."></Card>
                <Card image={PythonLogo} title="Python" text="Mi lenguaje favorito, con le que empezé, puedo hacer analisis de datos y backend con Django, creación de Scripts de automatización, etc..."></Card>
                <Card image={JSLogo} title="JavaScript" text="Me gusta usar Astro, React, Bootstrap, Tailwind, creando diseños responsivos, tengo que aprender todavía mucho más ya que es un ecosistema muy dinámico."></Card>
                <Card image={SQLLogo} title="SQL" text="SQLite3 o MariaDB son mis motores predilectos, creando Scripts automatizados, diseñando bases de datos según los requrimientos de negocio."></Card>
            </div>
            <div className="m-10 rounded-md bg-emerald-800 text-emerald-200">
            <h1 className="text-xl text-center m-2">Dejo mi Email y mi número de teléfono si quieres contactar conmigo:</h1>
            <div className="m-10 grid md:grid-cols-2">
                <div className="border-2 rounded-md text-left m-2 p-2 border-emerald-900">Email: projectwali272@gmail.com</div>
                <div className="border-2 rounded-md text-left m-2 p-2 border-emerald-900">Tlfno: +34 677 367 124</div>
            </div>
        </div>
        </div>
    )
}