import React, {useState, useEffect} from "react";
import { MapContainer, TileLayer } from 'react-leaflet';
import Markers from '../Markers';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import './Landings.scss';

const Landings = () => {

  const [value, setValue] = useState('');
  const[select, setSelect] = useState('');
  const [landings, setLandings] = useState([]);

  useEffect(() => {
    async function fetchLanding(){
      if(select){
        try {
          const res = await axios.get(`http://localhost:5000/api/astronomy/landings/${select}/${value}`)
          const json = res.data
          //Antes de hacer el map hacemos un filter para sacar de la petición http los elementos a los que les faltan campos
          const landingArray = json.filter(element => {
            if(!element.year || !element.reclong){
              return false
            }
            return true;
          }).map(element =>{
            return {
              'name': element.name,
              'longitude': Number(element.reclong),
              'latitude': Number(element.reclat),
              'year': element.year.slice(0,4)
            }
          })
          setLandings(landingArray.slice(0,50))
        } catch (error) {
          console.log('error', error)
        }
      }
    }
    fetchLanding();
  }, [select, value])

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const selection = event.target.elements.selection.value;
    const content = event.target.elements.text.value;
    setValue(content.toUpperCase());
    setSelect(selection);
    paintMarkers()
  }

  const paintMarkers = () => {
    return landings.map((landing, i) =><Markers landing={landing} key={i}/>)
  }

  return <>
  <form onSubmit={handleSubmit}>
    <div className="landignsReq">
      <label htmlFor="selection">Search by: </label>
      <select name="selection">
        <option value="class">Class</option>
        <option value="mass">Mass</option>
      </select>
      <input type="text" name='text'/>
    </div>
    <input type="submit" value='Search'/>
  </form>
  <div id="map">
    <MapContainer center={[30, 0]} zoom={2} scrollWheelZoom={false} className="mapCont">
      <TileLayer attribution='&copy; 
      <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <>{paintMarkers()}</>
    </MapContainer>
  </div>
  </>;
};

export default Landings;
