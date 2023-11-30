// Home.js
import React from 'react';
import Header from './Header';
import About from './About';
import './Home.css';
import JobList from "./JobList";

const Home = () => {
    return (
        <div className="home">
            <Header />
            <About />
            <JobList />
        </div>
    );
};

export default Home;
