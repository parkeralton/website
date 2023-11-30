// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import JobDetails from './components/JobDetails';
import './App.css';
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/jobs/:company" element={<JobDetails />} />
            </Routes>
        </Router>
    );
};

export default App;
