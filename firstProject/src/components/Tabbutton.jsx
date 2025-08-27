import React from 'react'

const Tabbutton = ({children, isSelected ,...props}) => {
  return (
    <div>
        <li className={`list-none  ${isSelected? "bg-purple-600 hover:bg-purple-700 ":"bg-none"} hover:bg-gray-900 inline px-3 py-2 rounded-md text-gray-300`}><button {...props} className='cursor-pointer'>{children}</button></li>
    </div>
  )
}

export default Tabbutton