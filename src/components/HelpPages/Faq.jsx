import React from 'react'
import { Accordion, Container, Row, Col } from 'react-bootstrap';

export default function Faq() {
  return (
   <>
        <div className="faq-section">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} className="text-center animate-fade-in">
              <h2 className="faq-title">❓ Frequently Asked Questions</h2>
              <p className="faq-subtitle">
                Find answers to common queries about our services, shipping, and policies.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center mt-4">
            <Col md={10} className="animate-slide-up">
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0" className="faq-item">
                  <Accordion.Header>🛍️ What is your return policy?</Accordion.Header>
                  <Accordion.Body>
                    You can return items within 7 days of delivery as long as they are unused, in original packaging, and have valid proof of purchase.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className="faq-item">
                  <Accordion.Header>🚚 How long does shipping take?</Accordion.Header>
                  <Accordion.Body>
                    Standard shipping takes 3–5 business days. Express options are available at checkout for faster delivery.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className="faq-item">
                  <Accordion.Header>💳 What payment methods do you accept?</Accordion.Header>
                  <Accordion.Body>
                    We accept credit/debit cards, UPI, net banking, and cash on delivery (COD) in select locations.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className="faq-item">
                  <Accordion.Header>📦 Can I track my order?</Accordion.Header>
                  <Accordion.Body>
                    Yes! Once your order is shipped, you'll receive a tracking link via email or SMS to monitor the status.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4" className="faq-item">
                  <Accordion.Header>📞 How do I contact customer support?</Accordion.Header>
                  <Accordion.Body>
                    You can reach us at <strong>support@yourstore.com</strong> or call us at +91-9876543210 between 9 AM – 6 PM (Mon–Sat).
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              {/* ✅ Unique Continue Shopping Button */}
              <div className="text-center mt-4">
                <a href="/product-listings" className="continue-shopping-btn">
                  🛍️ Continue Shopping
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
   </>
  )
}
