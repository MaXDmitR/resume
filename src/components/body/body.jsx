import React from "react";
import "../../styles/Body.css";
import PortfCard from "./portfCard";


const Body = (props) => {
    return (
        <div className="container-fluid body-bg">
            <div className="container body-content">
                <h1>МОЇ РОБОТИ</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea inventore culpa labore nihil. Ipsa ullam incidunt, dolorem, autem excepturi magni iusto quod consequuntur minima veritatis ipsum a praesentium cupiditate deserunt!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea inventore culpa labore nihil. Ipsa ullam incidunt, dolorem, autem excepturi magni iusto quod consequuntur minima veritatis ipsum a praesentium cupiditate deserunt!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea inventore culpa labore nihil. Ipsa ullam incidunt, dolorem, autem excepturi magni iusto quod consequuntur minima veritatis ipsum a praesentium cupiditate deserunt!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea inventore culpa labore nihil. Ipsa ullam incidunt, dolorem, autem excepturi magni iusto quod consequuntur minima veritatis ipsum a praesentium cupiditate deserunt!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea inventore culpa labore nihil. Ipsa ullam incidunt, dolorem, autem excepturi magni iusto quod consequuntur minima veritatis ipsum a praesentium cupiditate deserunt!</p>

                {props.cards.map((card, index)=>
                    <PortfCard id={`carousel-${index}`} key={card.title} desc={card.description} link={card.link} title={card.title} images={card.images}></PortfCard>)}

                




            </div>
        </div>
    );
};

export default Body;
