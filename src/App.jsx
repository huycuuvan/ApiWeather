
        // const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=20&lon=106&appid=44a22df9378f6b9d69335ab9506514e1')

import React, { useState} from 'react';
import axios from 'axios'

function App() {
 
  
  
  const [mydata, setMydata] = useState({})
  const [lat, setLat] = useState('')
  const [lon, setLon] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=44a22df9378f6b9d69335ab9506514e1`
  // const temp = mydata.main.temp.toFixed()
  // const weather = document.querySelector('.cold')

  // if (temp > 50) {
  //   weather.setAttribute('class', 'cold')
  // }
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url)
        .then((resonse) => {
        setMydata(resonse.data)
        
      }) 
      setLon('')
      setLat('')
    }
  }
  return ( 
    <div >
      <div className="app" >
        <div className="search">
          <input value={lat}
            onChange={event => setLat(event.target.value)}
            onKeyUp={searchLocation}
            placeholder='Enter Lat'
            type="text" />
          <input value={lon}
            onChange={event => setLon(event.target.value)}
            onKeyUp={searchLocation}
            placeholder='Enter Lon'
            type="text" />
        </div>
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{mydata.name}</p>
            </div>
            <div className="temp">
              
              {mydata.main ? <h1> {mydata.main.temp.toFixed()}°F</h1>: null}
            </div>
            <div className="des">
              {mydata.weather ? <p> {mydata.weather[0].main} </p>: null}
            </div>
          </div>

          {mydata.name !== undefined && 
          <div className="bottom">
            <div className="feels">
              { mydata.main ? <p className='bold'>{mydata.main.feels_like.toFixed()}°F</p>: null}
              
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {mydata.main  ? <p className='bold'> {mydata.main.humidity } %</p> : null}
              
              <p>Humidity</p>
            </div>
            <div className="wind"> 
              {mydata.main ? <p className='bold'>{ mydata.wind.speed.toFixed()} MPH</p>:null}
              <p>Wind Speed</p>
            </div>
          </div>
          }
        
          </div>
        </div>
          
    </div>
  );  
}

export default App;
