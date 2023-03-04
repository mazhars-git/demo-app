import React from 'react';
import './Css/ItemCard.css';
import { GiCobweb } from "react-icons/ai";
import { BsFlagFill, BsGlobe2, BsWindows } from "react-icons/bs";

const ItemCard = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="serviceBox">
                            <div className="service-icon">
                                <span><BsGlobe2 /></span>
                            </div>
                            <h3 className="title">Web Design</h3>
                            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="serviceBox purple">
                            <div className="service-icon">
                                <span><BsWindows /></span>
                            </div>
                            <h3 className="title">Web Development</h3>
                            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="serviceBox purple">
                            <div className="service-icon">
                                <span><BsWindows /></span>
                            </div>
                            <h3 className="title">Web Development</h3>
                            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="serviceBox purple">
                            <div className="service-icon">
                                <span><i>C</i></span>
                            </div>
                            <h3 className="title">Web Development</h3>
                            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;