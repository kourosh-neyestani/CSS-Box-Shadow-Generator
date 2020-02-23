import React from 'react';
import './style.css';

function InputRangeSlider(props) {

    const {min, max, step, value, onChange} = props;

    return (
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
    );
}

export default InputRangeSlider;