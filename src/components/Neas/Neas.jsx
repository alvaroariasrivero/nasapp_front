import React, {useEffect, useState} from "react";
import { animateScroll } from "react-scroll";
import axios from 'axios';
import Card from '../Card';
import './Neas.scss'

const Neas = () => {

  const[from, setFrom] = useState('');
  const[to, setTo] = useState('');
  const[orbit, setOrbit] = useState('');
  const[neas, setNeas] = useState([]);

  useEffect(() => {
    async function fetchNeas(){
      try {
        const res = await axios.get(`http://localhost:5000/api/astronomy/neas?class=${orbit}&from=${from}&to=${to}`)
        const json = res.data;
        const neasArray = json.map(element => {
          return {
            'designation': element.designation,
            'discovery_year': element.discovery_date.slice(0,4),
            'pha': element.pha,
            'orbit_class': element.orbit_class
          }
        })
        setNeas(neasArray.slice(0,50));
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchNeas();
  }, [from, to, orbit])

  const handleSubmit = (event) => {
    event.preventDefault();
    const orbitClass = event.target.elements.orbit_class.value;
    const fromYear = event.target.elements.from.value;
    const toYear = event.target.elements.to.value;
    setOrbit(orbitClass.charAt(0).toUpperCase()+orbitClass.slice(1));
    setFrom(fromYear);
    setTo(toYear);
    paintCards();
  }

  const top = () => {
    animateScroll.scrollToTop();
  }

  const paintCards = () => {
    return neas.map((nea, i) => <Card key={i} nea={nea}/>)
  }

  return <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="orbit_class">Orbti class: </label>
              <input type="text" name="orbit_class" placeholder="Apollo"/>
            </div>
            <div>
              <label htmlFor="from">From year: </label>
              <input type="text" name="from" placeholder="2010"/>
            </div>
            <div>
              <label htmlFor="to">To year: </label>
              <input type="text" name="to" placeholder="2015"/>
            </div>
            <input type="submit" value='Search'/>
          </form>
          <div className="card-container">{paintCards()}</div>
          <button onClick={top} className="scroll">&#129145;</button>
        </div>;
};

export default Neas;
