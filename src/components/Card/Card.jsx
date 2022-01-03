import React from "react";
import asteroid from '../../assets/icon.png'

const Card = (props) => {

  const {nea} = props

  return <div>
          <p>Designation: {nea.designation}</p>
          <p>Discovery year: {nea.discovery_year}</p>
          <p>Orbit class: {nea.orbit_class}</p>
          <p>PHA: {nea.pha}</p>
          <img src={asteroid} alt="asteroid" />
        </div>;
};

export default Card;
