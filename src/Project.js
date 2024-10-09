import React from 'react'

const Project = () => {
  return (
    <section className='min-h-full'>
      <div className='p-5 pt-14 w-3/4 mx-auto my-7 '>
        <div className='mb-7 rounded-xl shadow-[0_0_5px_3px_rgba(99,199,232,0.5)]'>
          <div>
            <div className='flex justify-center bg-blue-950 my-3 rounded-xl rounded-b-none mb-0 py-2 gap-2'>
              <h2 className='text-2xl font-bold'> ● <span className='underline'> Internship</span></h2>
              <img src="/internship.png" alt="internship" width={35} />
            </div>
            <h4 className='flex md:flex-row flex-col md:justify-around items-center text-lg font-semibold rounded-xl bg-[#0606268a] p-2 rounded-t-none'> 
              <span className='my-3 md:my-0'> Project : THE PET SHOP </span><span><i>18/04/2024 - 18/05/2024</i> </span></h4>
          </div>
        </div>
        <div className='flex md:flex-row flex-col md:justify-around gap-2 rounded-xl shadow-[0_0_5px_3px_rgba(99,199,232,0.5)]'>
          <div className='w-full'>
            <div className='flex gap-2 justify-center py-2 bg-blue-950 rounded-xl rounded-b-none mb-0 my-3'>
              <h2 className='text-2xl font-bold'> ● <span className='underline'>Projects</span></h2>
              <img src="/project.png" alt="project" width={30} />
            </div>
            <ul className='flex flex-col gap-2 w-full bg-[#142548a4] p-1'>
              <li className='bg-[#0000008a] p-2 rounded-xl'>
                <a className='hover:underline' href="https://github.com/tanyadubey9/Netflix-landing-page-clone.git"><h4 className='flex justify-between text-lg font-semibold'>1. Netflix Homepage Clone</h4></a>
              </li>
              <li className='bg-[#0000008a] p-2 rounded-xl'>
                <a className='hover:underline' href="https://github.com/tanyadubey9/Spotify-Project.git"><h4 className='flex justify-between text-lg font-semibold'>2. Spotify Clone</h4></a>
              </li>
              <li className='bg-[#0000008a] p-2 rounded-xl'>
                <a className='hover:underline' href="https://github.com/tanyadubey9/X-Home.git"><h4 className='flex justify-between text-lg font-semibold'>3. Twitter Homepage Clone</h4></a>
              </li>
              <li className='bg-[#0000008a] p-2 rounded-xl'>
                <a className='hover:underline' href="https://github.com/tanyadubey9/To-do-List.git"><h4 className='flex justify-between text-lg font-semibold'>4. To-do List Application</h4></a>
              </li>
              <li className='bg-[#0000008a] p-2 rounded-xl'>
                <a className='hover:underline' href="https://github.com/tanyadubey9/PassOp-project.git"><h4 className='flex justify-between text-lg font-semibold'>5. Password Manager Application</h4></a>
              </li>
              <li className='bg-[#0000008a] p-2 rounded-xl'>
                <a className='hover:underline' href="https://github.com/tanyadubey9/Get-Me-A-Chai.git"><h4 className='flex justify-between text-lg font-semibold'>6. 'Get Me A Chai' Application</h4></a>
              </li>
              <li className='bg-[#0000008a] p-2 rounded-xl'>
                <a className='hover:underline' href="https://github.com/tanyadubey9/User-Survey.git"><h4 className='flex justify-between text-lg font-semibold'>7. User Survey Page</h4></a>
              </li>
              <li className='bg-[#0000008a] p-2 rounded-xl'>
                <a className='hover:underline' href="https://github.com/tanyadubey9/Date-Picker.git"><h4 className='flex justify-between text-lg font-semibold'>7. Date-Picker Calendar Application</h4></a>
              </li>
            </ul>
          </div>
          <div className='opacity-50 shadow-[0_0_1px_1px_rgba(99,199,232,0.5)] md:hidden my-3 md:m-0'></div>
          <div className='w-full'>
            <div className='flex gap-2 justify-center py-2 bg-blue-950 rounded-xl rounded-b-none mb-0 my-3'>
              <h2 className='text-2xl font-bold'> ● <span className='underline'>Skills used</span></h2>
              <img src="/skill.png" alt="project" width={35} />
            </div>
            <ul className='flex flex-col gap-2 w-full bg-[#142548a4] p-1'>
              <li className='bg-[#0000008a] p-2 rounded-xl'>
                <h4 className='flex justify-between text-lg font-semibold'> HTML, CSS</h4>
              </li>
              <li className='bg-[#0000008a] p-2 rounded-xl'>
                <h4 className='flex justify-between text-lg font-semibold'> HTML, CSS, JavaScript</h4>
              </li>
              <li className='bg-[#0000008a] p-2 rounded-xl'>
                <h4 className='flex justify-between text-lg font-semibold'> HTML, Tailwind CSS</h4>
              </li>
              <li className='bg-[#0000008a] p-2 rounded-xl'>
                <h4 className='flex justify-between text-lg font-semibold'> Tailwind CSS, React</h4>
              </li>
              <li className='bg-[#0000008a] p-2 rounded-xl'>
                <h4 className='flex justify-between text-lg font-semibold'> React, MongoDB, Express, Tailwind CSS</h4>
              </li>
              <li className='bg-[#0000008a] p-2 rounded-xl'>
                <h4 className='flex justify-between text-lg font-semibold'> Next.js, Tailwind CSS </h4>
              </li>
              <li className='bg-[#0000008a] p-2 rounded-xl'>
                <h4 className='flex justify-between text-lg font-semibold'> React, Tailwind CSS </h4>
              </li>
              <li className='bg-[#0000008a] p-2 rounded-xl'>
                <h4 className='flex justify-between text-lg font-semibold'> Tailwind CSS, Next.js</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='border border-slate-700 opacity-100 w-full'></div>
    </section>
  )
}

export default Project
