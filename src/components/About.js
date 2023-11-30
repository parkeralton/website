// About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <div style={{
            width: "50%"
        }}>
        <Container className="my-5 pt-5 text-center">
            <Row>
                <Col md={{ span: 6, order: 1 }} className="mb-4 mb-md-0">
                    <img
                        src="/profile-pic.png" // Adjust the image source based on your setup
                        alt="Your Name"
                        className="img-fluid rounded-circle"
                    />
                </Col>
                <Col md={{ span: 6, order: 2 }} className="text-lg-start">
                    <p>
                        Hello! I'm Parker, a passionate software engineer with a strong foundation in Java
                        development. I'm currently working at Medtronic doing iOS development and QA.
                    </p>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default About;
