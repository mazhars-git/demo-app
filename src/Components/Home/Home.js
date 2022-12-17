import React from 'react';
// import '../Css/Progressbar.css';

const Home = () => {

    function increase() {
        // Change the variable to modify the speed of the number increasing from 0 to (ms)
        let SPEED = 40;
        // Retrieve the percentage value
        let limit = parseInt(document.getElementById("value1").innerHTML, 10);
    
        for(let i = 0; i <= limit; i++) {
            setTimeout(function () {
                document.getElementById("value1").innerHTML = i + "%";
            }, SPEED * i);
        }
    }
    
    increase();

    return (
        <div>
            <h1>This is home</h1>
            <h3>JavaScript</h3>
            <div class="chart">                
                <div class="bar"></div>
                {/* <!-- Change the value below --> */}
                <span id="value1">88%</span>
            </div>

            <h3>React</h3>

            {/* <div class="chart">                
                <div class="bar"></div>
                <span id="value2">78</span>
            </div> */}


           
        </div>
    );
};

export default Home;