/* eslint-disable react/display-name */
import "./Input.css";
import { forwardRef } from 'react';

const Input = forwardRef(({onChange}, ref) => {

  return (
    <div className="inputWrapper">
        <p>Enter your guess here:</p>
        <input ref={ref} id="input" onChange={onChange}/>
    </div>
  )
})

export default Input