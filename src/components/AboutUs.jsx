import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <>
      <Container style={{ marginTop: "50px", backgroundColor: "white" }}>
        <h1 style={{ fontWeight: "bold", textAlign: "center" }}>About Us</h1>
        <hr />
        <Row>
          <Col md={4}>
            <h3>WHO WE ARE</h3>
          </Col>
          <Col md={7}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              repellendus eaque ab quidem maxime dignissimos, nisi veniam quas
              non saepe praesentium rerum accusamus dolorum id odio ipsum?
              Accusantium, quis dolorem?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
              quae exercitationem sed aliquid nesciunt nulla! Unde molestias in
              dolore ex odio expedita earum beatae deserunt culpa natus itaque
              accusamus vero ratione magni quia iste rerum nihil architecto,
              nostrum tenetur maxime eveniet? Sint repellat esse, eum porro nam
              veniam reiciendis id!
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={4}>
            <h3>WHAT WE’RE ABOUT</h3>
          </Col>
          <Col md={7}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi aut
            dolor rerum vitae, eius debitis sed consectetur delectus vero
            voluptatum recusandae, sequi similique dicta veritatis laborum sunt!
            Cumque voluptatem, dignissimos veniam officiis quaerat maxime quo
            doloremque suscipit consectetur incidunt mollitia culpa? Nesciunt
            sed eveniet doloribus inventore incidunt aliquam error commodi!
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={4}>
            <h3>WHERE WE COME FROM</h3>
          </Col>
          <Col md={7}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            eum optio repellendus quaerat et, voluptas soluta voluptatem
            architecto libero, dicta quibusdam, magni magnam! Molestias eos
            tempora facilis asperiores inventore quidem magnam deserunt aliquid
            voluptatum et fugiat at eveniet, reiciendis possimus!
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={4}>
            <h3>LOVE SINCE 1958 </h3>
          </Col>
          <Col md={7}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            voluptatem provident saepe fugiat ab magni, hic maiores dolore sint
            porro minima aliquid aperiam illum qui exercitationem repudiandae!
            Debitis, necessitatibus. Fugit.
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
