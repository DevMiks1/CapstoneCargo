
import { NavLink } from 'react-router-dom'

export const PageNotFound = () => {
  return (
    <div>
        <div className='py-40'>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-5xl font-bold'>404 Not Found</h2>
                <NavLink to="/" className="px-7 mt-20 py-2 bg-button text-white rounded-lg"><button>Home</button></NavLink>
            </div>
        </div>
    </div>
  )
}
