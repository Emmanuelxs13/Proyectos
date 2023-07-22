import React, { useState } from "react";
// ICONS
import { RiCheckboxBlankCircleFill, RiCloseLine, RiMenu3Fill } from "react-icons/ri";


const Header = () => {

   // Estilos de los botones
    const Button = "inline-block rounded-full border-2 border-none px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-neutral-500 hover:bg-opacity-10 focus:border-primary-accent-100 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:text-primary-100 dark:hover:bg-gray-400 dark:hover:bg-opacity-10";

  // Mostrar o ocultar el menu en la vista responsive
  const [showMenu, setShowMenu ] = useState(false);

  return (
  <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50 sticky top-0  bg-white">
    <div className="xl:w-1/6 text-center -mt-4">
        <a href="#" className="text-2xl font-bold relative p-1 bg-white">
          Emmanuel Berrio<span className="text-primary text-5xl">.</span>{" "}
          <RiCheckboxBlankCircleFill className="absolute -left-3 -bottom-3 text-primary -z-10" />
        </a>
    </div>

    <nav className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${ showMenu ? "left-0" : "-left-full" } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50 `}>

        <a href="#Home" className={`${Button}`}>Inicio</a>  
        <a href="#About" className={`${Button}`}>Sobre Mí</a>
        <a href="#Estudios" className={`${Button}`}>Estudios</a>
        <a href="#Projects" className={`${Button}`}>Proyectos</a>
        <a href="#Skills" className={`${Button}`}>Skills</a>
        <a href="#Contact" className={`${Button}`}>Contacto</a>

    </nav>

    {/* RESPONSIVE MENU BUTTON */}
    <button onClick={() => setShowMenu(!showMenu)} className="xl:hidden text-2xl p-2 z-50">
     {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
    </button>
  </header>
  );
}

export default Header;
