// JobDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import jobs from '../data/jobs';
import Header from "./Header";

const JobDetails = () => {
    const { company } = useParams();
    const job = jobs.find((j) => j.company === company);

    if (!job) {
        return <p>Job not found</p>;
    }

    return (
        <>
            <Header />
            <Container className="my-5 pt-5">
                <Row>
                    <Col>
                        <h1>{job.company}</h1>
                        <h2>{job.position}</h2>
                        <p>{job.duration}</p>
                        <p>{job.description}</p>

                        <h2>Projects</h2>
                        {job.projects.map((project, index) => (
                            <div key={index} className="mb-4">
                                <Row>
                                    {project.image && (
                                        <Col xs={12} md={3} className="mb-3 mb-md-0">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="img-fluid rounded"
                                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                            />
                                        </Col>
                                    )}
                                    <Col xs={project.image ? 12 : 12} md={project.image ? 9 : 12}>
                                        <h3>{project.title}</h3>
                                        <h4>{project.location}</h4>
                                        <h5>{project.dates}</h5>
                                        <p>{project.description}</p>
                                    </Col>
                                </Row>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </>
    );




};

export default JobDetails;
