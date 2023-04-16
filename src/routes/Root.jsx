import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Root = () => {
  return (
    <>
      <section className='grid grid-cols-12'>
        <Navbar />
        <div className='col-start-2 ml-12 col-end-[-1]'>
          <Outlet />
        </div>
      </section>
    </>
  )
}

export default Root
