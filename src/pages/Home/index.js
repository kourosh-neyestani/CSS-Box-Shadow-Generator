import React, { useState } from 'react';
import './style.css';

function Home(props) {

    const [blur, setBlur] = useState(0); // 0, 300
    const [size, setSize] = useState(0); // -200, 200
    const [inset, setInset] = useState(false); // true, false
    const [opacity, setOpacity] = useState(0); // 0.00, 1.00
    const [vertical, setVertical] = useState(0); // -200, 200
    const [horizontal, setHorizontal] = useState(0); // -200, 200
    const [boxColor, setBoxColor] = useState("#ffffff");
    const [shadowColor, setShadowColor] = useState("##d93d64");
    const [backgroundColor, setBackgroundColor] = useState("#ffffff");

    return (
        <section className="section">
            <div className="sidenav">
                <div className="form">

                </div>
            </div>
            <div className="wrapper">
                <div className="center">
                    <div className="element">
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;