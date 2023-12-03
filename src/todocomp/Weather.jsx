import React, {useState} from 'react'

const WeatherComp = () => {
const [weatherCondition, setweatherCondition] = useState("normal")
  return (
    <>
      <div className='container'>
        <div className='weather'>
          <div className='top-section'><i className='wi-day-rain'></i></div>
          <div className='middle-section'>
            <div className='cloud'><i className="wi wi-sunset"></i>&#8451;<br/></div><span className='countryname'>,</span> 
            <div className='time'>{new Date().toLocaleDateString()}<br/></div>
          </div>
          <div className='bottom-section'>
            <div className='bottom-1'>Humidity =</div>
            <div className='bottom-2'>Pressure = </div>
            <div className='bottom-3'>Sunset PM</div>
            <div className='bottom-4'><i className={"wi wi-sunset"}></i></div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='weather'>
          <div className='top-section'><i className={'wi-day-rain'}></i></div>
          <div className='middle-section'>
            <div className='cloud'><i className={"wi wi-sunset"}></i>&#8451;<br/></div><span className='countryname'>,</span> 
            <div className='time'>{new Date().toLocaleDateString()}<br/></div>
          </div>
          <div className='bottom-section'>
            <div className='bottom-1'>Humidity =</div>
            <div className='bottom-2'>Pressure =</div>
            <div className='bottom-3'>Sunset  PM</div>
            <div className='bottom-4'><i className={"wi wi-sunset"}></i></div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='weather'>
          <div className='top-section'><i className={'wi-day-rain'}></i></div>
          <div className='middle-section'>
            <div className='cloud'><i className={"wi wi-sunset"}></i>&#8451;<br/></div><span className='countryname'>,</span> 
            <div className='time'>{new Date().toLocaleDateString()}<br/></div>
          </div>
          <div className='bottom-section'>
            <div className='bottom-1'>Humidity =</div>
            <div className='bottom-2'>Pressure =</div>
            <div className='bottom-3'>Sunset  PM</div>
            <div className='bottom-4'><i className={"wi wi-sunset"}></i></div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='weather'>
          <div className='top-section'><i className={'wi-day-rain'}></i></div>
          <div className='middle-section'>
            <div className='cloud'><i className={"wi wi-sunset"}></i>&#8451;<br/></div><span className='countryname'>,</span> 
            <div className='time'>{new Date().toLocaleDateString()}<br/></div>
          </div>
          <div className='bottom-section'>
            <div className='bottom-1'>Humidity =</div>
            <div className='bottom-2'>Pressure =</div>
            <div className='bottom-3'>Sunset  PM</div>
            <div className='bottom-4'><i className={"wi wi-sunset"}></i></div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='weather'>
          <div className='top-section'><i className={'wi-day-rain'}></i></div>
          <div className='middle-section'>
            <div className='cloud'><i className={"wi wi-sunset"}></i>&#8451;<br/></div><span className='countryname'>,</span> 
            <div className='time'>{new Date().toLocaleDateString()}<br/></div>
          </div>
          <div className='bottom-section'>
            <div className='bottom-1'>Humidity =</div>
            <div className='bottom-2'>Pressure =</div>
            <div className='bottom-3'>Sunset  PM</div>
            <div className='bottom-4'><i className={"wi wi-sunset"}></i></div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='weather'>
          <div className='top-section'><i className={'wi-day-rain'}></i></div>
          <div className='middle-section'>
            <div className='cloud'><i className={"wi wi-sunset"}></i>&#8451;<br/></div><span className='countryname'>,</span> 
            <div className='time'>{new Date().toLocaleDateString()}<br/></div>
          </div>
          <div className='bottom-section'>
            <div className='bottom-1'>Humidity =</div>
            <div className='bottom-2'>Pressure =</div>
            <div className='bottom-3'>Sunset  PM</div>
            <div className='bottom-4'><i className={"wi wi-sunset"}></i></div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='weather'>
          <div className='top-section'><i className={'wi-day-rain'}></i></div>
          <div className='middle-section'>
            <div className='cloud'><i className={"wi wi-sunset"}></i>&#8451;<br/></div><span className='countryname'>,</span> 
            <div className='time'>{new Date().toLocaleDateString()}<br/></div>
          </div>
          <div className='bottom-section'>
            <div className='bottom-1'>Humidity =</div>
            <div className='bottom-2'>Pressure =</div>
            <div className='bottom-3'>Sunset  PM</div>
            <div className='bottom-4'><i className={"wi wi-sunset"}></i></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WeatherComp
