import React from 'react'



const Contact = () => {
    return (
        <div id='Contact'>

            <div className="container my-4 mx-auto md:px-6">

                <section className="mb-32">
                    <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://cdn.pixabay.com/photo/2016/11/21/17/41/star-trails-1846734_1280.jpg')]"></div>
                    <div className="container -px-2 md:px-12">
                        <div
                            className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
                            <div className="flex flex-wrap">

                                <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                                    <div className="flex flex-wrap">
                                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                                            <div className="flex items-start">
                                                <div className="shrink-0">

                                                    {/* PHONE */}
                                                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                    <img width="70" height="70" src="https://img.icons8.com/clouds/100/whatsapp.png" alt="whatsapp"/>
                                                    </div>
                                                </div>
                                                <div className="ml-6 grow">
                                                    <p className="mb-2 font-bold dark:text-white">
                                                        Número Celular
                                                    </p>
                                                    <a href='https://wa.me/3015249169' target={'_blank'} className="text-neutral-500 dark:text-neutral-200 hover:text-primary">
                                                        +57 3015249169
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                                            <div className="flex items-start">
                                                <div className="shrink-0">
                                                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                        <img width="70" height="70" src="https://img.icons8.com/clouds/100/new-post.png" alt="new-post" />
                                                    </div>
                                                </div>
                                                <div className="ml-6 grow">
                                                    <p className="mb-2 font-bold dark:text-white">
                                                        Correo Electrónico
                                                    </p>
                                                    <a href="mailto:emmanuelberriojimenez@gmail.com" target={'_blank'} className="text-neutral-500 dark:text-neutral-200 hover:text-primary">
                                                        emmanuelberriojimenez@gmail.com
                                                    </a>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                                            <div className="align-start flex">
                                                <div className="shrink-0">
                                                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                    <img width="70" height="70" src="https://img.icons8.com/clouds/100/linkedin.png" alt="linkedin"/>
                                                    </div>
                                                </div>
                                                <div className="ml-6 grow">
                                                    <p className="mb-2 font-bold dark:text-white">Linkedin</p>
                                                    <a href='https://www.linkedin.com/in/emmanuel-berrio-jimenez/' target={'_blank'} className="text-neutral-500 dark:text-neutral-200 hover:text-primary">
                                                        Emmanuel Berrio Jimenez
                                                    </a>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                                            <div className="align-start flex">
                                                <div className="shrink-0">
                                                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                    <img width="70" height="70" src="https://img.icons8.com/clouds/100/github.png" alt="github"/>
                                                    </div>
                                                </div>
                                                <div className="ml-6 grow">
                                                    <p className="mb-2 font-bold dark:text-white">Github</p>
                                                    <a href='https://github.com/Emmanuelxs13' target={'_blank'} className="text-neutral-500 dark:text-neutral-200  hover:text-primary">
                                                        Emmanuelxs13
                                                    </a>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Contact
