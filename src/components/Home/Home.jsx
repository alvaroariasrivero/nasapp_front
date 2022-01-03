import React, {useState, useEffect } from "react";
import axios from 'axios'
import './Home.css'

const Home = () => {
  const[picture, setpicture] = useState({});

  useEffect(() => {
    async function fetchPicture(){
      try {
        const res = await axios.get('https://api.nasa.gov/planetary/apod?api_key=K43dzq6lpM74DcJ6HIgBbcmSQ6o94sM8TbdHf0bn')
        const json = res.data
        const image = {
          'title': json.title,
          'hdurl': json.hdurl,
          'copyright': json.copyright
        }
      setpicture(image)
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchPicture();
  }, [])
  return <div>
    <img src={picture.hdurl} alt={picture.title} className='picture'/>
    <p>Title: {picture.title}</p>
    <p>Copyright: {picture.copyright}</p>
  </div>;
};

export default Home;
