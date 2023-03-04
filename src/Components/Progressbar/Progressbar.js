import React from 'react';
import '../Css/Progressbar.css';

const ProgressBar = () => {
        const num = document.querySelector(".number");
        let counter = 0;
        setInterval(() => {
        if (counter == 100) {
            clearInterval();
        } else {
            counter += 1;
            num.textContent = counter + "%";
        }
        }, 35);

    return(
        <>
            <div className="container">
            <h2 className="header">Loading 3D Experience</h2>
            {/* <!--  @  body section start --> */}
            <div className="bar">
                {/* <!--  $  Graphic section start --> */}
                <svg>
                <circle cx="50%" cy="50%" r="50%"></circle>
                </svg>
                {/* <!--  $  Graphic section End--> */}

                {/* <!--  %  content section start --> */}
                <h1 className="number">0%</h1>
                <h4 className="config">Loading Robot</h4>
                {/* <!-- %   content section End --> */}
            </div>
            {/* <!--  @  body section End--> */}
            </div>
        </>
    );
};

export default ProgressBar;