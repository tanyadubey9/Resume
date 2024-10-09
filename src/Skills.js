import React from 'react'

const Skills = () => {
    return (
        <section className='min-h-Full'>
            <div className='w-4/5 my-8 mx-auto'>
                <h1 className='text-3xl font-bold text-center underline my-3'>Skills</h1>
                <div className='flex md:flex-row flex-col md:justify-around border-sky-900 rounded-xl border-2 bg-[#00000070] shadow-[0_0_5px_3px_rgba(99,199,232,0.5)]'>
                    <div className='w-full mb-5'>
                        <h3 className='font-semibold text-xl text-center bg-blue-950 rounded-xl p-2 m-2 mb-0 rounded-b-none'>--Tech Skills--</h3>
                        <div className='bg-[#0f072e8a] rounded-xl m-2 p-2 mt-0 rounded-t-none'>
                            <ul className='grid grid-cols-3 gap-3'>
                                <li className='flex flex-col items-center'>
                                    <img src="/HTML.png" alt="Html" width={100} height={100} />
                                    <h4 className='font-semibold'>HTML</h4>
                                </li>
                                <li className='flex flex-col items-center'>
                                    <img src="/CSS.png" alt="Css" width={100} height={100} />
                                    <h4 className='font-semibold'>CSS</h4>
                                </li>
                                <li className='flex flex-col items-center'>
                                    <img src="/JavaScript.png" alt="JS" width={100} height={100} />
                                    <h4 className='font-semibold'>JavaScript</h4>
                                </li>
                                <li className='flex flex-col items-center'>
                                    <img src="/Bootstrap.png" alt="BootStrap" width={100} height={100} />
                                    <h4 className='font-semibold'>BootStrap</h4>
                                </li>
                                <li className='flex flex-col items-center'>
                                    <img src="/Tailwind.png" alt="Tailwind-css" width={100} height={100} />
                                    <h4 className='font-semibold'>Tailwind CSS</h4>
                                </li>
                                <li className='flex flex-col items-center'>
                                    <img src="/Node.png" alt="Node" width={100} height={100} />
                                    <h4 className='font-semibold'>Node.js</h4>
                                </li>
                                <li className='flex flex-col items-center'>
                                    <img src="/Express.png" alt="Express" width={100} height={100} />
                                    <h4 className='font-semibold'>Express</h4>
                                </li>
                                <li className='flex flex-col items-center'>
                                    <img src="/React.png" alt="React" width={100} height={100} />
                                    <h4 className='font-semibold'>React</h4>
                                </li>
                                <li className='flex flex-col items-center'>
                                    <img src="/Next.png" alt="Next" width={100} height={100} />
                                    <h4 className='font-semibold'>Next.js</h4>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='opacity-50 shadow-[0_0_1px_1px_rgba(99,199,232,0.5)] md:hidden my-3 md:m-0'></div>
                    <div className='w-full mb-5'>
                        <h3 className='font-semibold text-xl text-center bg-blue-950 rounded-xl p-2 m-2 mb-0 rounded-b-none'>--Soft Skills--</h3>
                        <div className='bg-[#0f072e8a] rounded-xl m-2 p-2 mt-0 rounded-t-none'>
                            <ul className='grid grid-cols-3 gap-3'>
                                <li className='flex flex-col items-center'>
                                    <img src="/communication.png" alt="Communication" width={100} height={100} />
                                    <h4 className='font-semibold'>Communication</h4>
                                </li>
                                <li className='flex flex-col items-center'>
                                    <img src="/adaptation.png" alt="Adaptation" width={100} height={100} />
                                    <h4 className='font-semibold'>Adaptation</h4>
                                </li>
                                <li className='flex flex-col items-center'>
                                    <img src="/creative.png" alt="Creative" width={100} height={100} />
                                    <h4 className='font-semibold'>Creative</h4>
                                </li>
                                <li className='flex flex-col items-center'>
                                    <img src="/success.png" alt="Communication" width={100} height={100} />
                                    <h4 className='font-semibold'>Learning & Development</h4>
                                </li>
                                <li className='flex flex-col items-center'>
                                    <img src="/listening.png" alt="Listening" width={100} height={100} />
                                    <h4 className='font-semibold'>Listening</h4>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border border-sky-800 opacity-100 w-full'></div>
        </section>
    )
}

export default Skills
