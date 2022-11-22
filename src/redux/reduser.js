import React from 'react'
import { act } from "react-dom/test-utils"

const initialState = {
  count: 0
}

export const  reducer = (state = initialState,action) => {
        switch(action.type){
          case 'INCREMENT':
            return {...state, count: state.count + 1}
          case 'DECREMENT':
            return {...state, count: state.count>0?state.count - 1:state.count}
          default: return state;
        }
}