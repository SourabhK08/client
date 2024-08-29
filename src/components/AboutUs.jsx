import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <Container className={styles.aboutUsContainer}>
      <h1 className={styles.heading}>About Us</h1>
      <hr className={styles.separator} />
      <Row className={styles.row}>
        <Col md={4} className={styles.column}>
          <h3 className={styles.subHeading}>WHO WE ARE</h3>
        </Col>
        <Col md={8} className={styles.column}>
          <p className={styles.paragraph}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            repellendus eaque ab quidem maxime dignissimos, nisi veniam quas non
            saepe praesentium rerum accusamus dolorum id odio ipsum?
            Accusantium, quis dolorem?
          </p>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos quae
            exercitationem sed aliquid nesciunt nulla! Unde molestias in dolore
            ex odio expedita earum beatae deserunt culpa natus itaque accusamus
            vero ratione magni quia iste rerum nihil architecto, nostrum tenetur
            maxime eveniet? Sint repellat esse, eum porro nam veniam reiciendis
            id!
          </p>
        </Col>
      </Row>
      <Row className={styles.row}>
        <Col md={4} className={styles.column}>
          <h3 className={styles.subHeading}>WHAT WE’RE ABOUT</h3>
        </Col>
        <Col md={8} className={styles.column}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi aut
          dolor rerum vitae, eius debitis sed consectetur delectus vero
          voluptatum recusandae, sequi similique dicta veritatis laborum sunt!
          Cumque voluptatem, dignissimos veniam officiis quaerat maxime quo
          doloremque suscipit consectetur incidunt mollitia culpa? Nesciunt sed
          eveniet doloribus inventore incidunt aliquam error commodi!
        </Col>
      </Row>
      <Row className={styles.row}>
        <Col md={4} className={styles.column}>
          <h3 className={styles.subHeading}>WHERE WE COME FROM</h3>
        </Col>
        <Col md={8} className={styles.column}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eum
          optio repellendus quaerat et, voluptas soluta voluptatem architecto
          libero, dicta quibusdam, magni magnam! Molestias eos tempora facilis
          asperiores inventore quidem magnam deserunt aliquid voluptatum et
          fugiat at eveniet, reiciendis possimus!
        </Col>
      </Row>
      <Row className={styles.row}>
        <Col md={4} className={styles.column}>
          <h3 className={styles.subHeading}>LOVE SINCE 1958</h3>
        </Col>
        <Col md={8} className={styles.column}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptatem
          provident saepe fugiat ab magni, hic maiores dolore sint porro minima
          aliquid aperiam illum qui exercitationem repudiandae! Debitis,
          necessitatibus. Fugit.
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
