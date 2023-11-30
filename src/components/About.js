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
                <Col md={{ span: 4, order: 1 }} className="mb-4 mb-md-0">
                    <img
                        src="/profile-pic.png" // Adjust the image source based on your setup
                        alt="Parker Alton"
                        className="img-fluid rounded-circle"
                    />
                </Col>
                <Col md={{ span: 8, order: 2 }} className="text-lg-start">
                    <h5>
                        Hi! I'm Parker, an adaptable software engineer with a robust foundation in Java Development,
                        and an Oracle Certified Associate in Java SE 8. My expertise extends to the dynamic
                        world of iOS development and SwiftUI, where I've collaborated closely with stakeholders to
                        shape app requirements and user experiences. As a rapid learner, I embrace challenges to
                        swiftly acquire new skills. My passion lies in crafting efficient and scalable solutions,
                        with a keen eye for detail. Beyond my technical capabilities, I bring creativity and innovation
                        to every project, ensuring a comprehensive understanding of goals and delivering cutting-edge solutions.
                    </h5>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default About;
