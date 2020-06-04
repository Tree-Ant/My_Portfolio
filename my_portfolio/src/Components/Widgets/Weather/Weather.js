import React, { Component } from 'react';
import Axios from 'axios';

import './Weather.css';

class Weather extends Component{
    state = {
        temp: ""
    }

    componentDidMount() {
        Axios.get(
            "https://api.openweathermap.org/data/2.5/weather?q=Nashville&appid=697a503cd6f089e038d0e57a5755ce20"
            ).then(res => {
                // console.log(res.data);
                var kelvin = (res.data.main.temp - 273.15) * (9/5) + 32;
                var icon = (res.data.weather[0].icon);
                var weatherDetails = (res.data.weather[0].main);
                var cityName = (res.data.name);                
                
                this.setState({
                    temp: kelvin.toFixed(0) + '° F', 
                    icon: "http://openweathermap.org/img/wn/" + icon + "@2x.png",
                    details: weatherDetails,
                    city: cityName
                })
                

            })
    }

    render() {
        return(
            <div className='Weather'>
                <h1>{this.state.city}</h1>
                <div className='Icon'>
                    <img  src= {this.state.icon} alt="hello"/>
                    <h2>{this.state.details}</h2>
                </div>
                <h1>{this.state.temp}</h1>                
            </div>
        )
    }
}

export default Weather;