import React from 'react'

const PortfCard = (props) => {
  return (
    <div className="card">
      <a href={props.link} className="card-link" target="_blank" rel="noopener noreferrer">
        <div id={props.id} className="carousel slide">
          <div className="carousel-inner">
            {props.images.map((img, index) => (
              <div 
                key={index} 
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img src={img} className="d-block w-100" alt={props.title} />
              </div>
            ))}
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target={`#${props.id}`} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target={`#${props.id}`} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="card-body">
          <h3 className="card-title">{props.title}</h3>
          <p>{props.desc}</p>
        </div>
      </a>
    </div>
  );
};

export default PortfCard;
