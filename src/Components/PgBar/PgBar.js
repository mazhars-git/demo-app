import React from 'react';
import './PgBar.css';

const PgBar = () => {
    return (
        
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3 class="progress-title">HTML5</h3>
                        <div class="progress orange">
                            <div class="progress-bar" style={{width:'60%', background:'#fe3b3b'}}>
                                <div class="progress-value">60%</div>
                            </div>
                        </div>
                        <h3 class="progress-title">CSS3</h3>
                        <div class="progress blue">
                            <div class="progress-bar" style={{width:'40%', background:'#1a4966'}}>
                                <div class="progress-value">40%</div>
                            </div>
                        </div>
                        <h3 class="progress-title">CSS3</h3>
                        <div class="progress green">
                            <div class="progress-bar" style={{width:'80%', background:'#1a4966'}}>
                                <div class="progress-value">80%</div>
                            </div>
                        </div>
                        <h3 class="progress-title">CSS3</h3>
                        <div class="progress purple">
                            <div class="progress-bar" style={{width:'75%', background:'#1a4966'}}>
                                <div class="progress-value">75%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
    );
};

export default PgBar;