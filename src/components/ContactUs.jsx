import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { BiPhoneCall } from "react-icons/bi";
import { FaMobileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
const ContactUs = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1 style={{ fontWeight: "bold", textAlign: "center" }}>Contact Us</h1>
        <hr />
        <Row>
          <Col md={6}>
            <h1>Sourabh Kakani</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate, perferendis incidunt amet eveniet eius voluptas quis
              voluptates ipsum unde repellat facere? Expedita magni ipsa quia
              ducimus eveniet. Quae, blanditiis. Voluptatum magni iure sunt. A
              omnis soluta ipsa id excepturi necessitatibus. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quidem modi neque minima
              ratione quibusdam sequi asperiores obcaecati repellendus natus
              odit!
            </p>

            <Table
              bordered
              hover
              className="text-center"
              style={{ fontSize: "20px" }}
            >
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>
                    ------- Contact Details -------
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <MdEmail />{" "}
                  </td>
                  <td>Email</td>
                  <td>Help@gmail.com</td>
                </tr>
                <tr>
                  <td>
                    <BiPhoneCall />{" "}
                  </td>
                  <td>Phone</td>
                  <td>0145-1234</td>
                </tr>
                <tr>
                  <td>
                    <FaMobileAlt />{" "}
                  </td>
                  <td>Call</td>
                  <td>8290244123</td>
                </tr>

                <tr>
                  <td>
                    <HiLocationMarker />{" "}
                  </td>
                  <td>Address</td>
                  <td>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Est, recusandae?
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col
            md={6}
            style={{
              marginTop: "85px",
            }}
          >
            <Image src="images/contact.jpg" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactUs;
