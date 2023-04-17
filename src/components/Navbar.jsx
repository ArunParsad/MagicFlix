import { BsPlayCircle } from 'react-icons/bs'
import { BiHomeSmile, BiSearch, BiMovie, BiTv } from 'react-icons/bi'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='h-screen bg-transparent z-50 md:w-[10rem] w-20  fixed'>
        <Link to='/'>
          <div className='py-4 flex flex-col justify-center items-center  space-y-[0.2rem] hover:cursor-pointer'>
            <BsPlayCircle className='text-5xl text-[#D9D9D9]' />
            <span className=' text-[#D9D9D9] text-md tracking-wide'>
              MagicFlix
            </span>
          </div>
        </Link>
        <div className='h-full flex justify-start items-center flex-col'>
          <div
            className='flex flex-col justify-between items-center list-none text-white 
            h-[50%]
             mt-10 px-2 py-3'
          >
            <NavLink to='/'>
              <li className='w-20 h-20 flex justify-center items-center flex-col'>
                <BiHomeSmile className='text-[#D9D9D9]  text-xl hover:text-3xl transition-all ease-in-out cursor-pointer hover:text-white' />
              </li>
            </NavLink>
            <NavLink to='/search'>
              <li className='w-20 h-20 flex justify-center items-center flex-col'>
                <BiSearch className='text-[#D9D9D9]  text-xl hover:text-3xl transition-all ease-in-out cursor-pointer hover:text-white' />
              </li>
            </NavLink>
            <NavLink to='/movies'>
              <li className='w-20 h-20 flex justify-center items-center flex-col'>
                <BiMovie className='text-[#D9D9D9]  text-xl hover:text-3xl transition-all ease-in-out  cursor-pointer hover:text-white' />
              </li>
            </NavLink>
            <NavLink to='/shows'>
              <li className='w-20 h-20 flex justify-center items-center flex-col'>
                <BiTv className='text-[#D9D9D9]  text-xl hover:text-3xl transition-all ease-in-out cursor-pointer hover:text-white' />
              </li>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
