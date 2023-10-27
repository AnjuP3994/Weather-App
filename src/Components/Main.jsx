import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import './Main.css'

function Main() {

  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const api_key = "41711c6ba53b44e5c0727e9b7631de32";

  const search = async()=>{
    const cityInput=document.getElementById("cityInput")
    if(cityInput.value===""){
      return 0; 
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${api_key}`; 
    
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod==="404") {
        setError("Sorry, the city was not found. Please verify the city name and try again.");
        setWeatherData(null); // Clear the weatherData state
      } else {
        setWeatherData(data);
        setError(null);
      }
    } catch (error) {
      setError("An error occurred");
      setWeatherData(null); // Clear the weatherData state
    }
  }


  //to get current date and time
  let today = new Date() //Date and Time
  let timestamp = new Intl.DateTimeFormat('en-us',{hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today);
  console.log(timestamp);

  return (
    <div className='body'>

      <Container>
        <Row>
          <Col>
            <div className="top-bar px-5 mt-5">
              <input type="text" id="cityInput" className="ps-3 fs-5 py-1 rounded" placeholder="Search"/>
              <button onClick={search} className="btn text-light rounded"><i className="fa-solid fs-5 fa-magnifying-glass"></i></button>
            </div>
          </Col>
        </Row>

        
        {/* display content */}
          {error && <div className="error text-center mt-5 px-5 fs-1 fw-bolder" style={{color:'black'}}>{error}</div>}
          {weatherData && (
            <Row id='main'>
              <Col className='main2'>

              {/* Row */}
                <Row className='g-1'>

                  {/* Col 1 */}
                  <Col>
                    <Card className='border border-3 border-dark text-info' style={{ width: '100%', backgroundColor:'rgb(0,0,0,0.900' }}>
                      <Carousel controls={false} indicators={false}>
                        <Carousel.Item interval={2000}>
                        <Card.Img height={'275px'} src="https://i.pinimg.com/originals/df/0a/3e/df0a3e2ec30abb1c92d145ef165b714f.gif" />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                        <Card.Img height={'275px'} src="https://i.pinimg.com/originals/c5/3d/66/c53d66d7a42364e2478ca67d6e2f23a8.gif" />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                        <Card.Img height={'275px'} src="https://i.pinimg.com/originals/04/a0/0f/04a00f50fdb994a94aff7914fec7eba5.gif" />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                        <Card.Img height={'275px'} src="https://i.pinimg.com/originals/f8/2a/ea/f82aea96f870529b265c510eb9cb3397.gif" />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                        <Card.Img height={'275px'} src="https://i.pinimg.com/originals/91/57/a5/9157a5c3483ac19d00092355caa6c17a.gif" />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                        <Card.Img height={'275px'} src="https://i.pinimg.com/originals/34/bf/0c/34bf0c4e12a680245c29f1cedc200aa6.gif" />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                        <Card.Img height={'275px'} src="https://i.pinimg.com/originals/0e/58/98/0e58985ae13cec80ade1d4ba2ea2e956.gif" />
                        </Carousel.Item>
                      </Carousel>
                      <Card.Body>
                        <Card.Text className='text-center'>
                          <p className="fs-4"><i className="fa-solid fa-location-dot me-2"></i>{weatherData.name}</p>
                          <h1 className='font mb-1 text-danger' style={{fontSize:'1.5cm'}}><img className='mb-2 me-1' style={{width:'40px'}} src="https://cdn-icons-png.flaticon.com/128/10766/10766489.png" alt="" />
                            {Math.round(weatherData.main.temp - 273.15)}<span className='font2 fs-1'>°C</span></h1>
                          <div id='cardbottom' className='font fs-5 mt-4 ms-2 d-flex justify-content-between'>
                            <p className='font2'>{weatherData.weather[0].description}</p>
                            <p>{timestamp}</p>
                          </div>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  {/* Col 1 */}

                  {/* Col 2 */}
                  <Col>
                    
                  {/* Row 1 */}
                  <Row className="g-1">
                  <Col>
                  <Card className='border border-3 border-dark text-info text-center p-1' style={{ width: '100%', backgroundColor:'rgb(0,0,0,0.900' }}>
                    <Card.Body>
                      <Card.Text>
                      <p><i class="fa-solid fa-water me-2 fs-5"></i>Humidity</p>
                      <h1 className='font mb-3 text-success'>{weatherData.main.humidity}<span className='font2 fs-5'>%</span></h1>
                      <p>Feels like: <span className='font'>{Math.round(weatherData.main.feels_like - 273.15)}°C</span></p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  </Col>

                  <Col>
                  <Card className='border border-3 border-dark text-info text-center p-1' style={{ width: '100%', backgroundColor:'rgb(0,0,0,0.900' }}>
                    <Card.Body>
                      <Card.Text>
                      <p><i class="fa-solid fa-wind me-2 fs-5"></i>Wind</p>
                       <h1 className='font mb-3 text-success'>{weatherData.wind.speed}<span className='font2 fs-5'>km/hr</span></h1>
                      <p className='font'><i class="fa-solid fa-compass me-2"></i>{weatherData.wind.deg}deg</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  </Col>
                  </Row>
                  {/* Row 1 */}

                  {/* Row 2 */}
                  <Row className='g-1' style={{marginTop:'0.5px'}}>
                  <Col>
                  <Card className='border border-3 border-dark text-info text-center p-1' style={{ width: '100%', backgroundColor:'rgb(0,0,0,0.900' }}>
                    <Card.Body>
                      <Card.Text>
                      <p>Visibility</p>
                      <h3 className='font mb-3'>{weatherData.visibility/1000}<span className='font2 fs-5'>km</span></h3>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  </Col>

                  <Col>
                  <Card className='border border-3 border-dark text-info text-center p-1' style={{ width: '100%', backgroundColor:'rgb(0,0,0,0.900' }}>
                    <Card.Body>
                      <Card.Text>
                      <p>Air Pressure</p>
                       <h3 className='font mb-3'>{weatherData.main.pressure}<span className='font2 fs-5'>hPa</span></h3>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  </Col>
                  </Row>
                  {/* Row 2 */}

                  {/* Row 3 */}
                  <Row className='g-1' style={{marginTop:'0.5px'}}>
                  <Col>
                  <Card className='border border-3 border-dark text-info text-center p-2' style={{ width: '100%', backgroundColor:'rgb(0,0,0,0.900' }}>
                    <Card.Body>
                      <Card.Text>
                      <p>Min-Temp</p>
                      <h5 className='font mb-3'>{Math.round(weatherData.main.temp_min - 273.15)}°C</h5>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  </Col>

                  <Col>
                  <Card className='border border-3 border-dark text-info text-center p-2' style={{ width: '100%', backgroundColor:'rgb(0,0,0,0.900' }}>
                    <Card.Body>
                      <Card.Text>
                      <p>Max-Temp</p>
                       <h5 className='font mb-3'>{Math.round(weatherData.main.temp_max - 273.15)}°C</h5>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  </Col>

                  <Col>
                  <Card className='border border-3 border-dark text-info text-center p-2' style={{ width: '100%', backgroundColor:'rgb(0,0,0,0.900' }}>
                    <Card.Body>
                      <Card.Text>
                      <p>Sea-Level</p>
                       <h5 className='font mb-3'>{weatherData.main.sea_level}hPa</h5>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  </Col>
                  </Row>
                  {/* Row 3 */}

                  </Col>
                  {/* Col 2 */}

                </Row>
                {/* Row */}

              </Col>
            </Row>
          )}
      
      </Container>
    </div>
  )
}

export default Main