import React from 'react';
import './PgBar.css';

const PgBar = () => {
    return (
        <>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h3 class="progressbar-title">HTML5</h3>
                    <div class="progress">
                        <div class="progress-bar" style={{width: "85%", background: "#ed687c"}}>
                            <span style={{background: '#ed687c'}}>85%</span>
                        </div>
                    </div>
        
                    <h3 class="progressbar-title">CSS3</h3>
                    <div class="progress">
                        <div class="progress-bar" style={{width: "75%", background: "#049dff"}}>
                            <span style={{background: '#049dff'}}>75%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>




        
        {/* done progress bar----01
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h3 class="progress-title">HTML5</h3>
                        <div class="progress">
                            <div class="progress-bar" style={{width:'65%'}}>
                                <div class="progress-value">65%</div>
                            </div>
                        </div>
            
                        <h3 class="progress-title">CSS3</h3>
                        <div class="progress yellow">
                            <div class="progress-bar" style={{width:'87%'}}>
                                <div class="progress-value">87%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}



     
            {
                
            /* this pg bar not working perfectly.............................
            
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
            </div> */}
        </>
      
    );
};

export default PgBar;