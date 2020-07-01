import React, { Component } from 'react';
import spinner from "../images/spinner.gif"
import pic from '../images/pic1.png';
const API_KEY = 'cd655ac314b1d52d90544cac3f17925a';


class Display extends Component {

    state = { 
        isLoading:true,
        id:'',
        temp:'',
        max:'',
        min:'',
        description:'',
        humidity:'',
        pressure:''
     }

    convertedCelsius = (temp) => {
        const celsius = temp-273.15;
        return celsius.toFixed(2);
    } 

    componentDidMount(){
        
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.city},${this.props.country} &appid=${API_KEY}`)
            .then(res=>res.json())
            .then(resp=> {
             console.log(resp);
             this.setState({
                 id:resp.id,
                 temp:resp.main.temp,
                 max:resp.main.temp_max,
                 min:resp.main.temp_min,
                 pressure:resp.main.pressure,
                 humidity:resp.main.humidity,
                 description:resp.weather[0].description,

                 isLoading:false
             })
             })
            .catch(err => {
               console.log(err);
            });
        
    }

    render() { 
        if(this.state.isLoading){
         
            return <img src={spinner} className="align_itm" alt="weather" style={{ width: "200px", margin: "40px auto", display: "block" }}/>   
        }
        else{
        return ( 
            <React.Fragment>
                <div className="container">
                    <div className="card card_style row">
                        <h1 className="card-title bg-warning p-3">{this.props.city},{this.props.country}</h1>
                    <div>
                        <img className="img-thumbnail rounded img_style" src={pic} alt="weather"/>            
                        <h2  style={{float:'right'}}>{this.convertedCelsius(this.state.temp)}&deg;C</h2>
                        <h6 style={{float:'right'}}>{this.state.description}</h6>
                    </div>
                    
                    <div class="align_itm">
                    <h6>Max temp:{this.convertedCelsius(this.state.max)}&deg;C</h6>
                    <h6>Min temp:{this.convertedCelsius(this.state.min)}&deg;C</h6>
                    <h6>Pressure:{this.state.pressure} </h6>
                    <h6>Humidity:{this.state.humidity}</h6>
                    </div>
        
                    </div>
                </div>
            </React.Fragment>
         );
    }}
}
 
export default Display;