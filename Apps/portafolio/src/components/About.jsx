import React from 'react'


const About = () => {

    const textStyle = 'text-xl leading-[2.5rem]';

    return (
        <section id='About' className='mt-[8rem] m-8'>
            <div>
                {/* TITLE */}
                <h1 className='text-5xl text-center justify-center content-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-second to-[#05AE8C] mb-[5.5rem]'>Sobre Mi</h1>

                {/* PROFILE IMAGE */}
                <div className='pt-5 md:pt-0'>
                    <img src='../../public/img/Profile_img.jpg' className='mx-auto mb-4 w-52 h-52 rounded-full object-cover'/>
                    <div className='circle absolute xl:top-[61rem] xl:left-[40.5rem] top-[77.8rem] left-[4.7rem] w-60 h-60 bg-w animate-spin  bg-gradient-to-r from-second to-[#05AE8C] rounded-full -z-10'></div>
                </div>

                {/* DESCRIPTION */}
                <div className='flex flex-col md:flex-row items-center xl:space-x-[5rem] xl:m-2  text-gray-600 '>
                    <div className='max-w-md py-4 px-4 bg-white shadow-lg rounded-lg my-20  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300 flex flex-row'>
                        <p className={`${textStyle} mt-3`}>
                        Soy un programador con experiencia en desarrollo web, estoy altamente motivado por el desafío de crear soluciones innovadoras para problemas complejos. <b>Html, Css, Sass, SCRUM, JavaScript, TypeScript, Vuejs, Reactjs, Php, Mysql, Git, SDLC y diagramas UMl,</b> he entregado proyectos de calidad en plazos ajustados.
                        </p>
                    </div>

                    <div className='max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300 flex flex-row'>
                        <p className={`${textStyle} mt-3`}>
                        <b>Además, tengo una gran capacidad para colaborar en equipo, comunicar ideas de manera efectiva, aprender nuevas cosas si el proyecto lo requiere, estar abierto a cambios constantemente y mantenerme actualizado con las últimas tendencias en tecnología.</b> 
                        </p>
                    </div>

                    

                    <div className='max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300  flex flex-row'>
                        <p className={`${textStyle} mt-3`}>
                        En mi carrera, he tenido la oportunidad de trabajar en una variedad de proyectos, desde pequeñas aplicaciones web hasta grandes sistemas de software. Como resultado, he desarrollado habilidades en la resolución de problemas, la toma de decisiones y la gestión del tiempo.<b> Estoy enfocado en construir soluciones robustas, escalables y de alta calidad</b> que satisfagan las necesidades de los usuarios y los clientes.
                        </p>
                    </div>

                    {/* <div className='max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300'>
                        <p className={`${textStyle} mt-3`}>
                            En resumen, como programador, mi pasión es trabajar en proyectos desafiantes, donde pueda aplicar mis habilidades y conocimientos para crear soluciones de software que impulsen el éxito de los clientes y de la empresa y que al mismo tiempo me permitan crecer y mejorar como programador y como persona. Si estás buscando un profesional motivado y dedicado para tu equipo, no dudes en contactarme.
                        </p>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default About
