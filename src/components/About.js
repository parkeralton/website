// About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    const email = 'parkeralton@gmail.com';
    const linkedIn = 'https://www.linkedin.com/in/parkeralton'
    return (
        <Container className="my-5 pt-5 text-center">
            <Row>
                <Col md={{ span: 4, order: 1 }} className="mb-4 mb-md-0">
                    <img
                        src="/profile-pic.png"
                        alt="Parker Alton"
                        className="img-fluid rounded-circle"
                    />
                </Col>
                <Col md={{ span: 8, order: 2 }} className="text-lg-start">
                    <h2>Hi! I'm Parker</h2>
                    <p className="lead">
                        I'm a versatile software engineer with a strong foundation in Java Development. Recently, I've been using my expertise in dynamic iOS development and SwiftUI to create solutions at Medtronic. My passion for creativity, innovation, and acquiring new skill sets ensures a comprehensive understanding of project goals, delivering cutting-edge solutions.
                    </p>
                    <p className="lead">
                        Contact me at {' '}
                        <a href={`mailto:${email}`} className="text-decoration-none">
                            parkeralton@gmail.com
                        </a>{' '}
                        or on {' '}
                        <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                            LinkedIn
                        </a>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
