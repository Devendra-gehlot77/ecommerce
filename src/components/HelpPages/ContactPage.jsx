import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; 

export default function ContactPage() {
  return (
    <>
      <div className="contact-wrapper">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="contact-text animate-left">
            <h2 className="contact-heading">📞 Get in Touch</h2>
            <p className="contact-subtext">
              We'd love to hear from you! Fill out the form and our team will
              get back to you within 24 hours.
            </p>
            <ul className="contact-info">
              <li>📍 123 Market Street, YourCity</li>
              <li>📧 support@yourecom.com</li>
              <li>📞 +91-9876543210</li>
            </ul>
          </Col>

          <Col md={6} className="animate-right">
            <Form className="contact-form shadow-lg p-4 rounded">
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Write your message"
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mb-3">
                Send Message
              </Button>

              {/* ✅ Unique Continue Shopping Button */}
              <div className="text-center">
                <Link to="/product-listings" className="continue-button">
                  🛍️ Continue Shopping
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}
