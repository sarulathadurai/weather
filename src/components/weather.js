import React, { Component } from 'react';
import Search from './Search';
import Display from './Display';


class Weather extends Component {
    state = { 
        city:'',
        country:'',
        isWeather:false
    }

    handleChange=(e)=>{
        this.setState({
            isWeather:false,
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        if(this.state.city && this.state.country){
            this.setState({
                isWeather:true
            })
        }
    }

    render() {        
        const display = (this.state.isWeather===true) ? <Display city={this.state.city} country={this.state.country} /> : null;
        return ( 
            <React.Fragment>
                <Search city={this.state.city} country={this.state.country} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                {display}
            </React.Fragment>
         );
    }
}
 
export default Weather;