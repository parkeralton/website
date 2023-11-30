// JobList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components if needed
import jobs from '../data/jobs'; // Make sure to have your jobs data or API calls ready

const JobList = () => {
    return (
        <Container className="my-5 pt-5 text-lg-start">
            <Row>
                <Col>
                    <h1>Experience</h1>
                    <ul className="list-unstyled">
                        {jobs.map((job) => (
                            <li key={job.company}>
                                <Link to={`/jobs/${job.company}`}>{job.company}</Link>
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default JobList;
