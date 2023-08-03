import React from 'react';

import './Input.css';

const Input = (props) => {
    return (
        <input
            type={props.type}
            onChange={props.onChange}
            className={`Input ${props.className}`}
            placeholder={props.placeholder}
            name={props.name}
            value={props.value}
        />
    )
}

export default Input;