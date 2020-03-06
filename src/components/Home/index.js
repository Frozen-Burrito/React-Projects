import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="center panel">
            <h1>A react project a day</h1>

            <div className="card">
                <Link to="/carousel"><h2>Image carousel</h2></Link>
                <h3>06/Mar/2020</h3>
                <p>Simple image gallery with captions</p>
            </div>

            <div className="card">
                <Link to="/map"><h2>Google Maps Embed</h2></Link>
                <h3>07/Mar/2020</h3>
                <p>A component that loads maps from Google</p>
            </div>
        </div>
    )
} 

export default Home;