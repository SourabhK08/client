import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Policy = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1 style={{ fontWeight: "bold", textAlign: "center" }}>
          Terms and Conditions
        </h1>
        <hr />
        <Row>
          <Col md={12}>
            <h5>Modify/Cancel The Online Order</h5>
            <ul style={{ listStyle: "square" }}>
              <li>The online order cannot be modified</li>
              <li>
                Cancellation of Order by Customer is Applicable only for Cash on
                Delivery Orders and in selected stores only.
              </li>
              <li>
                Cancellation of Order by Customer will not be chargeable within
                60 seconds of order placement.
              </li>
              <li>
                Cancellation of Order by Customer is applicable for orders
                placed via Domino's India Application and is not applicable for
                orders placed from any other source.
              </li>
              <li>
                Cash on delivery option will be disabled for the next order upon
                cancellation of order beyond 60 seconds. Cash payment will be
                enabled after successful delivery of next prepaid order
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h5>Service Guarantee</h5>
            <ul style={{ listStyle: "square" }}>
              <li>
                Service Guarantee on orders may vary from Restaurant to
                Restaurant and also may vary during different times of the day.
              </li>
              <li>
                Service guarantee of less than 20 mins is applicable on selected
                restaurants for orders placed between 11am to 7pm. The maximum
                liability of Domino's is limited up to 200 Wallet points or upto
                bill value whichever is lesser, subject to applicability
              </li>
              <li>
                Domino's Pizza does not penalize its drivers for late delivery.
              </li>
              <li>
                Domino's Pizza reserves the right to withdraw the service
                guarantee without prior intimation.
              </li>
              <li>
                Service Guarantee has three variables (Applicable only on
                Delivery orders):
                <ul style={{ listStyle: "square" }}>
                  <li>
                    20 mins : Service Delivery Promise upto the first barrier
                    point , in case of promised time breach, customer is
                    eligible for a Service Guarantee of maximum 200 Wallet
                    points or upto order value, whichever is lesser.
                  </li>
                  <li>
                    30 mins : Service Delivery Promise upto the first barrier
                    point, in case of promised time breach, customer is eligible
                    for a Service Guarantee of maximum 300 Wallet points or upto
                    order value, whichever is lesser.
                  </li>
                  <li>
                    45 mins : Service Delivery Promise upto the first barrier
                    point, in case of promised time breach, customer is eligible
                    for a Service Guarantee of maximum 300 Wallet points or upto
                    order value, whichever is lesser.
                  </li>
                </ul>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h5>Delivery Charges</h5>
            <ul style={{ listStyle: "square" }}>
              <li>Delivery charges shall be applicable to all orders</li>
              <li>
                The delivery charge will be applicable on per invoice/bill in
                case of multiple orders.
              </li>
              <li>Delivery charges are inclusive of taxes.</li>
              <li>
                Delivery of orders shall be subject to availability of stock.
              </li>
              <li>All disputes are subject to Delhi jurisdiction only.</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h5>Pizzas at 49</h5>
            <ul style={{ listStyle: "square" }}>
              <li>Offer is available in selected restaurants only</li>
              <li>
                Offer is applicable on purchase of atleast 2 items from the
                predefined list of items available in the restaurant
              </li>
              <li>
                Offer is applicable only in multiples of 2 items from the
                predefined list of items
              </li>
              <li>Offer cannot be clubbed with any other offer or coupon</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h5>1 Plus 1</h5>
            <ul style={{ listStyle: "square" }}>
              <li>
                Offer applicable only on purchase of every 2 pizzas from
                Everyday Value Offers (1 PLUS 1) Section.
              </li>
              <li>
                1 PLUS 1 Offer is applicable only Regular and Medium size Pizzas
              </li>
              <li>1 PLUS 1 does not apply to Pizza Mania OR Combos</li>
              <li>Offer cannot be combined with any other offer/coupons</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Policy;
