/* eslint-disable react/prop-types */
import React from 'react';
import './btn.css';
export default function AddButton(props){
    return(
        <button type="button" className="btn add" onClick={props.handleClick}>+</button>

    );
}
