import React from "react";
import "../../styles/Body.css";
import PortfCard from "./portfCard";
import Stats from "./Stats";


const Body = (props) => {
    return (
        <div className="container-fluid body-bg">
            <div className="container body-content">
                <h1>МОЇ РОБОТИ</h1>

                <div className="portfolio-section  mb-5">
                    <div className="row">

                        <div className="col-md-7">

                            <p>
                                Протягом навчання та практики я створив декілька проєктів різного рівня складності.
                                Серед них — прості адаптивні лендинги, інтерактивні інтерфейси на React та full-stack
                                застосунки із бекендом на Spring Boot. Кожна робота відображає мій прогрес у веб-розробці,
                                вміння працювати з різними технологіями та знаходити рішення для реальних задач.
                            </p>
                            <p>
                                Моя мета — створювати не просто сайти, а зручні й ефективні інструменти, які допомагають
                                користувачам досягати результату. У проєктах я роблю акцент на чистому коді, сучасних
                                підходах до верстки, інтеграції сторонніх бібліотек та логіці роботи з даними.
                            </p>
                        </div>

                        {/* Права колонка — відгуки */}
                        <div className="col-md-5">
                            <div className="testimonial p-3 mb-3">
                                <p>"Дуже відповідальний підхід! Завжди знаходив рішення навіть для складних завдань."</p>
                                <span>- Іван Петров</span>
                            </div>
                            <div className="testimonial p-3 mb-3">
                                <p>"Максим швидко зробив прототип сайту, який перевершив очікування."</p>
                                <span>- Оксана Коваленко</span>
                            </div>
                            <div className="testimonial p-3">
                                <p>"Вміє працювати в команді, пише акуратний код і приділяє увагу деталям."</p>
                                <span>- Андрій Сидоренко</span>
                            </div>
                        </div>
                    </div>
                </div>


                {props.cards.map((card, index) =>
                    <PortfCard id={`carousel-${index}`} key={card.title} desc={card.description} link={card.link} title={card.title} images={card.images}></PortfCard>)}





                <Stats count={props.cards}></Stats>
            </div>
        </div>
    );
};

export default Body;
