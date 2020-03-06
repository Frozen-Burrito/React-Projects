import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="center panel">
            <div className="header">
                <h1>A react project a day</h1>
                By <a href="https://github.com/Frozen-Burrito">Frozen Burrito</a>
            </div>

            <Link to="/carousel">
                <div className="card">
                    <h2>Image carousel</h2>
                    <h3>06/Mar/2020</h3>
                    <p>Simple image gallery with captions</p>
                </div>
            </Link>

            <Link to="/map">
                <div className="card">
                    <h2>Google Maps Embed</h2>
                    <h3>07/Mar/2020</h3>
                    <p>A component that loads maps from Google</p>
                </div>
            </Link>
        </div>
    )
} 

export default Home;