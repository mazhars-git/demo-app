import React from 'react';

const Progressbar = () => {
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
            <div class="container">
            <h2 class="header">Loading 3D Experience</h2>
            {/* <!--  @  body section start --> */}
            <div class="bar">
                {/* <!--  $  Graphic section start --> */}
                <svg>
                <circle cx="50%" cy="50%" r="50%"></circle>
                </svg>
                {/* <!--  $  Graphic section End--> */}

                {/* <!--  %  content section start --> */}
                <h1 class="number">0%</h1>
                <h4 class="config">Loading Robot</h4>
                {/* <!-- %   content section End --> */}
            </div>
            {/* <!--  @  body section End--> */}
            </div>
        </>
    );
};

export default Progressbar;