import React from 'react'

const Log = ({turns}) => {
  return (
    <div className='flex justify-center mt-4'>
      <ol>
        {
          turns.map((item)=><li key={`${item.square.row}${item.square.col}`}>{item.player} selected {item.square.row}, {item.square.col}</li>)
        }
      </ol>
    </div>
  )
}

export default Log