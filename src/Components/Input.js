import React from 'react';

const Input = (props) => {
    return (
        <input
            type={props.type}
            onChange={props.onChange}
            className='Input'
            placeholder={props.placeholder}
            name={props.name}
            value={props.value}
        />
    )
}

export default Input;