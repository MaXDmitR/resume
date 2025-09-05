import React from "react";
import "../../styles/Body.css";
import PortfCard from "./portfCard";


const Body = (props) => {
    return (
        <div className="container-fluid cont1">
            <div className="container cont2">
                <h1>МОЇ РОБОТИ</h1>

                {/* <img src="images/Tasktracker/tacktrecker3.jpg" alt="Багатосторінковий сайт" />*/}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea inventore culpa labore nihil. Ipsa ullam incidunt, dolorem, autem excepturi magni iusto quod consequuntur minima veritatis ipsum a praesentium cupiditate deserunt!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea inventore culpa labore nihil. Ipsa ullam incidunt, dolorem, autem excepturi magni iusto quod consequuntur minima veritatis ipsum a praesentium cupiditate deserunt!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea inventore culpa labore nihil. Ipsa ullam incidunt, dolorem, autem excepturi magni iusto quod consequuntur minima veritatis ipsum a praesentium cupiditate deserunt!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea inventore culpa labore nihil. Ipsa ullam incidunt, dolorem, autem excepturi magni iusto quod consequuntur minima veritatis ipsum a praesentium cupiditate deserunt!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea inventore culpa labore nihil. Ipsa ullam incidunt, dolorem, autem excepturi magni iusto quod consequuntur minima veritatis ipsum a praesentium cupiditate deserunt!</p>

                {props.cards.map((card, index)=>
                    <PortfCard id={`carousel-${index}`} key={card.title} desc={card.description} link={card.link} title={card.title} images={card.images}></PortfCard>)}

                {/*<div class="card">
                    <a href="https://github.com/MaXDmitR/Tasktracker" class="card-link">
                        <div id="carousel-tasktracker" class="carousel slide">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="images/Tasktracker/tacktrecker3.jpg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="images/Tasktracker/tacktrecker2.jpg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="images/Tasktracker/tacktrecker1.jpg" class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carousel-tasktracker" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carousel-tasktracker" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="card-body">
                            <h3 class="card-title">TaskTracker</h3>
                            <p>Лендинг з адаптивною версткою</p>
                        </div>
                    </a>
                </div>



                <div class="card">
                    <a href="https://github.com/MaXDmitR/electricity-accounting" class="card-link">
                        <div id="carousel-electricity" class="carousel slide">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="images/Electricity/electricity6.jpg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="images/Electricity/electricity7.jpg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="images/Electricity/electricity8.jpg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="images/Electricity/electricity4.jpg" class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carousel-electricity" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carousel-electricity" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="card-body">
                            <h3 class="card-title">Electricity</h3>
                            <p>Full-stack сайт для обчислення прибутку від сонячної електростанції</p>
                        </div>
                    </a>
                </div>*/}




            </div>
        </div>
    );
};

export default Body;
