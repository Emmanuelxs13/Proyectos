import React from 'react'


const Projects = () => {
  return (
    <section id='Projects' className='p-8'>
      <div className='mb-[6rem]'>
        {/* TITLE */}
        <h1 className='text-5xl text-center justify-center content-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-second to-[#05AE8C] mb-5'>Proyectos</h1>

        <p className='text-center justify-center content-center text-xl text-gray-600'>Aquí encontrás algunos de los proyectos que he realizado</p>
      </div>

      {/* PROJECTS */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* DOODLE JUMP */}
        <div className='flex flex-col gap-3'>
          <a href='https://github.com/Emmanuelxs13/Proyectos/tree/master/Apps/doodle_jump' target={'_blank'}>
            <img src="./public/img/DoodleJump.png" className='w-full rounded-3xl mb-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'/>
          </a>
            <h3 className='text-2xl font-bold'>Doodle Jump Game</h3>
            <p className='text-gray-600'>El objetivo es llegar lo más alto posible sin morir. El jugador controla a una criatura de 4 patas llamada "Doodler", que salta constantemente sin parar, sobre un número infinito de plataformas. El jugador puede mover a Doodler en la dirección deseada. El juego se ha desarrollado con JavaScript, Html y Css.</p>
        </div>

          {/* STACK GAME */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-[8rem]'>
          <div className='flex flex-col gap-4'>
            <a href='https://github.com/Emmanuelxs13/Proyectos/tree/master/Apps/Stack_Game' target={'_blank'}>
            <img src="./public/img/StackGame.png" className='w-full rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 object-cover'/>
            </a>
            <h3 className='text-2xl font-bold'>Stack Game</h3>
            <p className='text-gray-600'>Apila los bloques tan alto como puedas!. El juego fue desarrollado con JavaScript, Html y Css.</p>
        </div>

          {/* ONLINE STORE */}
        <div className='flex flex-col gap-4'>
          <a href='https://github.com/Emmanuelxs13/Proyectos/tree/master/Apps/dashboard-store' target={'_blank'}>
            <img src="./public/img/Store.png" className='w-full rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 object-cover'/>
          </a>
            <h3 className='text-2xl font-bold'>Online Store</h3>
            <p className='text-gray-600'>Diseño funcional y responsive sobre una tienda digital de comida. La app fue desarrollado con Reactjs y tailwind.</p>
        </div>

          {/* DINNO GAME */}
        <div className='flex flex-col gap-4'>
          <a className='https://github.com/Emmanuelxs13/Proyectos/tree/master/Apps/DinnoGame' target={'_blank'}>
            <img src="./public/img/DinnoGame.png" className='w-full rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 object-cover'/>
          </a>
            <h3 className='text-2xl font-bold'>Dinno Game</h3>
            <p className='text-gray-600'>El juego Dinosaur Game, también conocido como T-Rex Game, Dino Runner o Chrome Dino, es un juego en el navegador web Google Chrome, La idea es acomular el mayor puntaje posible sin ser impactado por un cactus. El juego fue desarrollado desarrollado con JavaScript, Html y Css.</p>
        </div>

        <div className='flex flex-col gap-4'>
          <a href='https://github.com/Emmanuelxs13/Proyectos/tree/master/Apps/ESH-Biometria' target={'_blank'}>
            <img src="./public/img/ESH.png" className='w-full rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 object-cover'/>
          </a>
            <h3 className='text-2xl font-bold'>Check-in App</h3>
            <p className='text-gray-600'>La aplicación hace un seguimiento de las entradas, salidas y horas extra de los empleados a través del escáner de huellas dactilares, donde se almacenarán en la base de datos de la aplicación.</p>
        </div>

        </div>
      </div>
    </section>
  )
}

export default Projects
