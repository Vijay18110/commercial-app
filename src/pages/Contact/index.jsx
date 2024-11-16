import React from "react";
import Container from '../../ui/Container'
import Help from "../../components/ContactHelppagemodel";
import Viewmaplist from "../../components/Viewmap";
import ContactComp from "../../components/ContactComp";
const Contact = () => {
    return <Container>
        <Help />
        <Viewmaplist />
        <ContactComp />
    </Container>;
};
export default Contact;
