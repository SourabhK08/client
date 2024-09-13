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
          <h3 className={styles.subHeading}>WHERE WE COME FROM</h3>
        </Col>
        <Col md={8} className={styles.column}>
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
          <h3 className={styles.subHeading}>LOVE SINCE 1958</h3>
        </Col>
        <Col md={8} className={styles.column}>
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
    </Container>
  );
};

export default AboutUs;
