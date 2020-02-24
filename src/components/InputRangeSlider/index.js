import React from 'react';
import './style.css';

function InputRangeSlider(props) {

    const { min, max, step, value, label, onChange } = props;

    return (
        <div>
            <label>{label}</label>
            <div className='input-range-slider'>
                <input
                    min={min}
                    max={max}
                    step={step}
                    type="range"
                    value={value}
                    onChange={onChange}
                />
                <div className="value">
                    <input
                        type="number"
                        value={value}
                        onChange={onChange}
                    />
                    <span>px</span>
                </div>
            </div>
        </div>
    );
}

export default InputRangeSlider;