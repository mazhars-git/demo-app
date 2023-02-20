import React from 'react';
import '../Css/Progressbar.css';

const ProgressBar2 = () => {
    return (
        <div>
            <div class="container pt-5">
                <div class="row">
                    <div class="col-md-8">
                        <h3 class="progress-title">HTML5</h3>
                        <div class="progress">
                            <div class="progress-bar bg-danger" style={{width: '85%'}}>
                                <div class="progress-value">85%</div>
                            </div>
                        </div>
            
                        <h3 class="progress-title">CSS3</h3>
                        <div class="progress">
                            <div class="progress-bar bg-warning" style={{width: '75%'}}>
                                <div class="progress-value">75%</div>
                            </div>
                        </div>

                        <h3 class="progress-title">JavaScript</h3>
                        <div class="progress">
                            <div class="progress-bar bg-success" style={{width: '60%'}}>
                                <div class="progress-value">60%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar2;