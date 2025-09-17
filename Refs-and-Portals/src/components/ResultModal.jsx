import React from 'react'

const ResultModal = ({results, timeChanger}) => {
  return (
    <dialog>
        <h2>You {results}</h2>
        <p>The target Time was <strong>{timeChanger}</strong></p>
        <p>You stopped the timer with X second left</p>
    </dialog>
  )
}

export default ResultModal