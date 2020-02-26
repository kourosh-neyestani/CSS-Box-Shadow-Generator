import React from 'react';
import './style.css';

function InputSwitch(props) {

    const { label, value, onClick } = props;

    return (
        <div>
            <label>{label}</label>
            <div className={`input-switch ${value && "active"}`} onClick={onClick}>
                <span className="input-switch-indicator"></span>
            </div>
        </div>
    );
}

export default InputSwitch;