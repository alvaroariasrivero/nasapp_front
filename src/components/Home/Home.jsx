import React, {useState, useEffect } from "react";
import axios from 'axios'
import './Home.scss'

const Home = () => {
  const[picture, setpicture] = useState({});

  useEffect(() => {
    async function fetchPicture(){
      let image = {}
      try {
        const res = await axios.get('https://api.nasa.gov/planetary/apod?api_key=MosJdOel85j1l0s0tnx1YnKnzPIgsE568C47KbDs')
        const json = res.data
        console.log('Esto es json', json)
        if(json.media_type === 'video'){
          image = {
            'title': json.title,
            'url': json.url,
            'media_type': json.media_type
          }
        } else{
        image = {
          'title': json.title,
          'hdurl': json.hdurl,
          'copyright': json.copyright
        }}
      setpicture(image)
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchPicture();
  }, [])

  if(picture.media_type){
    return <div>
            <div className="container">
              <iframe src={picture.url} title={picture.title} className="video" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <p>Title: {picture.title}</p>
            {/* <p>Copyright: {picture.copyright}</p> */}
          </div>
  }else{
    return <div>
            <img src={picture.hdurl} alt={picture.title} className='picture'/>
            <p>Title: {picture.title}</p>
            <p>Copyright: {picture.copyright}</p>
          </div>
  };
};

export default Home;
