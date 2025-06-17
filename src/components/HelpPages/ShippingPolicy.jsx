import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ShippingPolicy() {
  return (
    <>
    <div className="shipping-wrapper">
        <Container>
          <Row className="align-items-start">
            <Col md={12} className="animate-slide-in">
              <h2 className="shipping-heading">🚚 Shipping Policy</h2>
              <p className="shipping-subtext">
                At YourStore, we aim to deliver your products in the fastest and safest way possible.
              </p>

              <div className="shipping-section">
                <h4>📦 Processing Time</h4>
                <p>All orders are processed within 1–2 business days. Orders placed on weekends or holidays will be processed the next business day.</p>
              </div>

              <div className="shipping-section">
                <h4>🌍 Shipping Methods & Delivery Time</h4>
                <ul>
                  <li>Standard Shipping: 3–7 business days</li>
                  <li>Express Shipping: 1–3 business days</li>
                  <li>International Shipping: 7–14 business days</li>
                </ul>
              </div>

              <div className="shipping-section">
                <h4>💰 Shipping Charges</h4>
                <p>Shipping is free on all prepaid orders over ₹999. A flat ₹50 fee is charged on orders below that amount or for Cash on Delivery (COD).</p>
              </div>

              <div className="shipping-section">
                <h4>📩 Order Tracking</h4>
                <p>Once your order is shipped, you'll receive a tracking link via email/SMS to monitor your delivery.</p>
              </div>

              <div className="shipping-section">
                <h4>🛑 Delays</h4>
                <p>Delays may occur due to weather, holidays, or unexpected circumstances. We appreciate your patience and understanding.</p>
              </div>

              {/* ✅ Unique Continue Shopping Button */}
              <div className="text-center mt-5">
                <Link to="/product-listings" className="continue-shopping-btn">
                  🛒 Continue Shopping
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
