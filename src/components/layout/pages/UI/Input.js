
import React from 'react'
//import styles from '../UI/Input.module.css'
export const Input =React.forwardRef((props,ref) => {
  return (
    <div>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref}  {...props.input} 
       // className={styles.input}
        />
    </div>
  )
}
);


