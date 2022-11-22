import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function CountPage() {
    const dispatch = useDispatch()

    const newcount = useSelector(state=>state.count)

  return (
        <>
            <h1>{newcount}</h1>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
        </>
  )
}

export default CountPage