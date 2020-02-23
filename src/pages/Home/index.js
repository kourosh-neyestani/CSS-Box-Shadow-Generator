import React, { useState } from 'react';
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

    return (
        <section className="section">
            <div className="sidenav">
                <div className="form">
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