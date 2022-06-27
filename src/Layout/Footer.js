import React from 'react';
import {
    Container,

} from 'reactstrap';

const Footer =  function(){
    return(
        <Container fluid
            tag="footer"
            className="text-center bg-info text-white text-uppercase fixed-bottom"
        >A product by Composition Pvt ltd.</Container>
    );
}


export default Footer;