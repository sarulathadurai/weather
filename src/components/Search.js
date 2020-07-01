import React from 'react';

const Search = (props) => {
    return ( 
        <React.Fragment>
            <div className="container">
                <nav className="navs bg-warning">
                    <h1 className="text-center">Weather App</h1>
                </nav>
                <form className="form-group" onSubmit={props.handleSubmit}>
                    <input className="form-control mb-3 " type="text" name="city" value={props.city} onChange={props.handleChange} placeholder="Enter city" />
                    <input className="form-control mb-3 " type="text" name="country" value={props.country} onChange={props.handleChange} placeholder="Enter country"/>
                    <button type="submit" className="btn btn-warning row">Get weather</button>
                </form>
            </div>
        </React.Fragment>
     );
}
 
export default Search;