import React from "react";
import asteroid from '../../assets/icon.png';
import './Card.scss';

const Card = (props) => {

  const {nea} = props

  return <div className="card">
          <p>Designation: {nea.designation}</p>
          <p>Discovery year: {nea.discovery_year}</p>
          <p>Orbit class: {nea.orbit_class}</p>
          <p>PHA: {nea.pha}</p>
          <img src={asteroid} alt="asteroid" className="nea-img"/>
        </div>;
};

export default Card;
