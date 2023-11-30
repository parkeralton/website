// JobList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import jobs from '../data/jobs';

const JobList = () => {
    return (
        <Container className="my-5 pt-5 text-left">
            {jobs.map((job, index) => (
                <Row key={index} className="mb-5">
                    <Col>
                        <div className="d-md-flex align-items-center">
                            {job.logo && (
                                <img
                                    src={job.logo}
                                    alt={`${job.company} Logo`}
                                    className="img-fluid logo mr-4 p-5"
                                    style={{ width: '15rem' }} // Set the desired width
                                />
                            )}
                            <div>
                                <h2>{job.company}</h2>
                                <h3>{job.position}</h3>
                                <p>{job.duration}</p>
                                <p>{job.description}</p>
                                <Link to={`/jobs/${job.company}`}>Learn more</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            ))}
        </Container>
    );
};

export default JobList;
