// About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <Container className="my-5 pt-5 text-center">
            <Row>
                <Col md={{ span: 4, order: 1 }} className="mb-4 mb-md-0">
                    <img
                        src="/profile-pic.png" // Adjust the image source based on your setup
                        alt="Parker Alton"
                        className="img-fluid rounded-circle"
                    />
                </Col>
                <Col md={{ span: 8, order: 2 }} className="text-lg-start">
                    <h2>Hi! I'm Parker</h2>
                    <p className="lead">
                        A versatile software engineer with a strong foundation in Java Development. Recently, I've been using my expertise in dynamic iOS development and SwiftUI to create solutions at Medtronic. My passion for creativity, innovation, and acquiring new skill sets ensures a comprehensive understanding of project goals, delivering cutting-edge solutions.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
