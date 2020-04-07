import React, { useState } from 'react';
import InputSwitch from '../../components/InputSwitch';
import InputSetColor from '../../components/InputSetColor';
import InputRangeSlider from '../../components/InputRangeSlider';
import './style.css';

function Home(props) {

    const [blur, setBlur] = useState(30); // 0, 300
    const [inset, setInset] = useState(false); // true, false
    const [size, setSize] = useState(12); // -200, 200
    const [vertical, setVertical] = useState(0); // -200, 200
    const [horizontal, setHorizontal] = useState(0); // -200, 200
    const [boxColor, setBoxColor] = useState("#ffffff");
    const [shadowColor, setShadowColor] = useState("#e3e3e3"); // #d93d64"
    const [wrapperColor, setWrapperColor] = useState("#ffffff");

    const boxStyle = {
        backgroundColor: `${boxColor}`,
        boxShadow: `${inset ? "inset" : ""} ${horizontal}px ${vertical}px ${blur}px ${size}px ${shadowColor}`,
    };

    const wrapperStyle = {
        backgroundColor: `${wrapperColor}`
    }

    const handleChange = (type, event) => {
        switch (type) {
            case 'horizontal':
                let stateHorizontal;
                if (event.target.value <= -200) {
                    stateHorizontal = -200;
                } else if (event.target.value >= 200) {
                    stateHorizontal = 200;
                } else {
                    stateHorizontal = event.target.value;
                }
                setHorizontal(stateHorizontal);
                break;
            case 'vertical':
                let stateVertical;
                if (event.target.value <= -200) {
                    stateVertical = -200;
                } else if (event.target.value >= 200) {
                    stateVertical = 200;
                } else {
                    stateVertical = event.target.value;
                }
                setVertical(stateVertical);
                break;
            case 'blur':
                let stateBlur;
                if (event.target.value <= 0) {
                    stateBlur = 0;
                } else if (event.target.value >= 300) {
                    stateBlur = 300;
                } else {
                    stateBlur = event.target.value;
                }
                setBlur(stateBlur);
                break;
            case 'size':
                let stateSize;
                if (event.target.value <= -200) {
                    stateSize = -200;
                } else if (event.target.value >= 200) {
                    stateSize = 200;
                } else {
                    stateSize = event.target.value;
                }
                setSize(stateSize);
                break;
            default:
                return false;
        }
    };

    const handleClick = (value, type) => {
        switch (type) {
            case "box":
                setBoxColor(value.hex);
                break;
            case "shadow":
                setShadowColor(value.hex);
                break;
            case "wrapper":
                setWrapperColor(value.hex);
                break;
            case "inset":
                setInset(value);
                console.log(value);
                alert('worked');
                break;
            default:
                return false;
        }
    }

    return (
        <section className="section">
            <div className="sidenav">
                <div className="form">
                    <div className="form-item">
                        <InputRangeSlider
                            min={-200}
                            max={200}
                            step={1}
                            label="Horizontal Length"
                            value={horizontal}
                            onChange={(event) => handleChange("horizontal", event)}
                        />
                    </div>
                    <div className="form-item">
                        <InputRangeSlider
                            min={-200}
                            max={200}
                            step={1}
                            label="Vertical Length"
                            value={vertical}
                            onChange={(event) => handleChange("vertical", event)}
                        />
                    </div>
                    <div className="form-item">
                        <InputRangeSlider
                            min={-200}
                            max={200}
                            step={1}
                            label="Blur Radius"
                            value={blur}
                            onChange={(event) => handleChange("blur", event)}
                        />
                    </div>
                    <div className="form-item">
                        <InputRangeSlider
                            min={-200}
                            max={200}
                            step={1}
                            label="Spread Radius"
                            value={size}
                            onChange={(event) => handleChange("size", event)}
                        />
                    </div>
                    <div className="form-item">
                        <InputSetColor
                            label="Shadow Color"
                            value={shadowColor}
                            onClick={(event) => handleClick(event, 'shadow')}
                        />
                    </div>
                    <div className="form-item">
                        <InputSetColor
                            label="Background Color"
                            value={wrapperColor}
                            onClick={(event) => handleClick(event, 'wrapper')}
                        />
                    </div>
                    <div className="form-item">
                        <InputSetColor
                            label="Box Color"
                            value={boxColor}
                            onClick={(event) => handleClick(event, 'box')}
                        />
                    </div>
                    <div className="form-item">
                        <InputSwitch
                            label="Inset"
                            value={inset}
                            onClick={() => { setInset(!inset) }}
                        />
                    </div>
                </div>
            </div>
            <div className="wrapper" style={wrapperStyle}>
                <div className="center">
                    <div className="box" style={boxStyle}>
                        <div className="center">
                            <div className="box-output">
                                <p><b>CSS Output:</b></p>
                                <p>-webkit-box-shadow: {boxStyle['boxShadow']};</p>
                                <p>-moz-box-shadow: {boxStyle['boxShadow']};</p>
                                <p>box-shadow: {boxStyle['boxShadow']};</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;