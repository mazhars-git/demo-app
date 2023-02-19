import React from 'react';
import './Css/ItemCard.css';
import { GiCobweb } from "react-icons/ai";
import { BsFlagFill, BsGlobe2, BsWindows } from "react-icons/bs";

const ItemCard = () => {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-6">
                        <div class="serviceBox">
                            <div class="service-icon">
                                <span><BsGlobe2 /></span>
                            </div>
                            <h3 class="title">Web Design</h3>
                            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="serviceBox purple">
                            <div class="service-icon">
                                <span><BsWindows /></span>
                            </div>
                            <h3 class="title">Web Development</h3>
                            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="serviceBox purple">
                            <div class="service-icon">
                                <span><BsWindows /></span>
                            </div>
                            <h3 class="title">Web Development</h3>
                            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="serviceBox purple">
                            <div class="service-icon">
                                <span><i>C</i></span>
                            </div>
                            <h3 class="title">Web Development</h3>
                            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;