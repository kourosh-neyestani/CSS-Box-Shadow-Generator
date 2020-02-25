import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import './style.css';

function InputSetColor(props) {

    const [show, setShow] = useState(false);
    const { value, label, onClick } = props;

    const style = {
        backgroundColor: value
    }

    const handleClick = (value) => setShow(value);

    return (
        <div>
            <label>{label}</label>
            <div className={["input-color-picker", show && "active"].join(" ")}>
                <button type="button" style={style} onClick={() => handleClick(true)}>  
                    <span>Click</span>
                </button>
                <input type="text" placeholder={value} />
                <div className="color-picker">
                    <ChromePicker
                        color={value}
                        onChange={onClick}
                    />
                </div>
                <span className="overlay" onClick={() => handleClick(false)}></span>
            </div>
        </div>
    );
}

export default InputSetColor;