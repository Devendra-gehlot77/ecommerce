import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ReturnExchange() {
  return (
   <>
     
    <div className="exchange-return-page">
        <Container>
          <Row className="mb-5">
            <Col md={12} className="text-center animate-fade-in">
              <h1 className="page-title">🔄 Exchange & Return Policy</h1>
              <p className="page-subtext">
                Hassle-free returns & quick exchanges — your satisfaction is our priority.
              </p>
            </Col>
          </Row>

          <Row className="gy-4">
            <Col md={6} className="animate-slide-left">
              <Card className="policy-card shadow-lg">
                <Card.Body>
                  <h4 className="card-title">📦 Return Policy</h4>
                  <p>
                    Returns accepted within <strong>7 days</strong> of delivery. Items must be in original condition with all tags and packaging.
                  </p>
                  <ul>
                    <li>No stains or damage</li>
                    <li>Original invoice required</li>
                    <li>Refunds to original payment method</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} className="animate-slide-right">
              <Card className="policy-card shadow-lg">
                <Card.Body>
                  <h4 className="card-title">🔁 Exchange Policy</h4>
                  <p>
                    Products can be exchanged for size or color variation. Please request exchange within <strong>5 days</strong> of delivery.
                  </p>
                  <ul>
                    <li>Free first-time exchange</li>
                    <li>Courier pickup arranged</li>
                    <li>Replacement sent after QC</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-center animate-bounce-in">
              <p className="support-text">
                Still need help? Email us at <strong>support@yourstore.com</strong>
              </p>
            </Col>
          </Row>

          {/* ✅ Unique Continue Shopping Button */}
          <Row className="mt-4">
            <Col className="text-center">
              <Link to="/product-listings" className="continue-shopping-btn">
                🛍️ Continue Shopping
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
   </>
  )
}
