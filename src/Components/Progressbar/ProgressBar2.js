import React from 'react';
import '../Css/Progressbar.css';

const ProgressBar2 = () => {
    return (
        <div>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-8">
                        <h3 className="progress-title">HTML5</h3>
                        <div className="progress">
                            <div className="progress-bar bg-danger" style={{width: '90%'}}>
                                <div className="progress-value">90%</div>
                            </div>
                        </div>
            
                        <h3 className="progress-title">CSS3</h3>
                        <div className="progress">
                            <div className="progress-bar bg-warning" style={{width: '85%'}}>
                                <div className="progress-value">85%</div>
                            </div>
                        </div>

                        <h3 className="progress-title">JavaScript</h3>
                        <div className="progress">
                            <div className="progress-bar bg-success" style={{width: '60%'}}>
                                <div className="progress-value">60%</div>
                            </div>
                        </div>

                        <h3 className="progress-title">React</h3>
                        <div className="progress">
                            <div className="progress-bar bg-info" style={{width: '90%'}}>
                                <div className="progress-value">90%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar2;