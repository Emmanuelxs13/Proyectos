import React from 'react'

const Education = () => {
    return (
        <section id='Estudios' className='p-14'>
            <div className='mb-[3rem]'>
                {/* TITLE */}
                <h1 className='text-5xl text-center justify-center content-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-second to-[#05AE8C]'>Estudios Académicos</h1>
            </div>

            <div>
                <ol className="border-l border-neutral-300 dark:border-neutral-500 md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t">

                    {/* Titulo de Técnico en Programación de software */}
                    <li>
                        <div className="flex-start flex items-center pt-3 ml-[3rem]">
                            <span className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></span>
                            {/* Fecha */}
                            <p className="text-sm text-gray-800 dark:text-gray-500">
                                10/02/2022 - 11/05/2023
                            </p>
                        </div>
                        <div className='mb-10 ml-6 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-xl shadow-black/5 dark:bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 object-cover'>
                            <div className="mb-6 ml-4 mt-2">
                                <h4 className="mb-1.5 text-2xl font-bold ">Técnico en Programación de Software</h4>
                                <p className="text-xl text-gray-800 dark:text-gray-500 mb-3">
                                    I.U Salazar y Herrera - Sena
                                </p>
                                <p className="mb-3 text-gray-600">
                                    Completé con éxito la Técnica laboral en programación de software en la I.U Salazar y Herrera con un convenio del Servicio Nacional de Aprendizaje (SENA), allí aprendí la lógica de programación, para luego empezar a desarrollar apps con Html, Css, Javascript, Php, Laravel, además de implementar el SDLC (Systems Development Life Cycle). A su vez me ayudaron a mejorar mis habilidades blandas para el correcto trabajo en equipo.
                                </p>
                            </div>
                        </div>
                    </li>

                    {/* Curso de inglés */}
                    <li>
                        <div className="flex-start flex items-center pt-3 ml-[3rem]">
                            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                            {/* Fecha */}
                            <p className="text-sm text-gray-800 dark:text-gray-500">
                                25/08/2019 - 15/12/2023
                            </p>
                        </div>

                        <div className='mb-10 ml-6 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-xl shadow-black/5 dark:bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 object-cover'>
                            <div className="mb-6 ml-4 mt-2">
                                <h4 className="mb-1.5 text-2xl font-bold transition ease-in-out">Curso de Inglés - B2</h4>
                                <p className="text-xl text-gray-800 dark:text-gray-500 mb-3">
                                    Universidad de Antioquia
                                </p>
                                <p className="mb-3 text-gray-600">
                                    En este curso desarrollé y sigo mejorando mis habilidades lingüísticas en el idioma inglés, logrando así poder comprender y saber expresar mis ideas con claridad, leyendo y escuchando de manera eficaz para la correcta comunicación en este lenguaje.
                                </p>
                                <a href='./public/pdf/EF SET Certificate.pdf' target={'_blank'} className='bg-primary text-white py-1 px-5 rounded-xl text-xl xl:w-auto hover:bg-[#05AE8C]'>EF SET Certifacate
                                </a>
                            </div>
                        </div>
                    </li>

                    {/* Bachiller */}
                    <li>
                        <div className="flex-start flex items-center pt-3 ml-[3rem]">
                            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                            {/* Fecha */}
                            <p className="text-sm text-gray-800 dark:text-gray-500">
                                17/01/2010 - 18/12/2021
                            </p>
                        </div>

                        <div className='mb-10 ml-6 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-xl shadow-black/5 dark:bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 object-cover'>
                            <div className="mb-6 ml-4 mt-2">
                                <h4 className="mb-1.5 text-2xl font-bold">Bachiller Técnico en Preservación de recursos naturales</h4>
                                <p className="text-xl text-gray-800 dark:text-gray-500 mb-3">
                                    I.E Alfonso Upegui Orozco - Sena
                                </p>
                                <p className="mb-3 text-gray-600">
                                    Aquí realicé todos mis estudios primarios y secundarios. Simultáneamente, me ayudaron a formarme como una gran persona, enfatizando en las habilidades personales para luego nutrirme de buenos conocimientos.
                                </p>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
        </section>
    )
}

export default Education
