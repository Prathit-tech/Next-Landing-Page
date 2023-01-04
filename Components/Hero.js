import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-black font-weight-medium f-14 mb-4">Welcome To Paynager</p>
              <h1 className="mb-4 font-weight-normal text-black line-height-1_4">Saving For Everything You Want</h1>
              <p className="text-black mb-4 pb-2">Our application is designed to make it easy for you to manage your payments and expenses. With our intuitive interface, you can easily keep track of your income, bills, and other financial transactions.</p>
              <a href="https://paynage-yf5adx.flutterflow.app/" className="btn btn-dark btn-lg">
                Get Started <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="../Paynager (1).png" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Hero;