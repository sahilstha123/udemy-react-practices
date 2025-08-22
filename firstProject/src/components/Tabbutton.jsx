import React from 'react'

const Tabbutton = ({children}) => {
  return (
    <div>
        <li className='list-none hover:cursor-pointer hover:bg-gray-900 inline px-3 py-2 rounded-md text-gray-300'><button>{children}</button></li>
    </div>
  )
}

export default Tabbutton