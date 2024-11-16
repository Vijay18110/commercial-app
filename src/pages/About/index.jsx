import React from "react";
import Container from "../../ui/Container";
import styles from './index.module.css'
import Wnest from "../../components/WelcomeNest";
import Provide from "../../components/AboutProvide";
import Performance from "../../components/Performance";
import Team from "../../components/Team";
const About = () => {
    return <Container>
        <Wnest />
        <Provide />
        <Performance />
        <Team />
    </Container>;
};

export default About;
