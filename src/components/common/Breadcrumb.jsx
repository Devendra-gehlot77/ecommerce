import React from 'react'
import { Alert, Container, Row, Col } from 'react-bootstrap';

export default function Breadcrumb() {
  return (
    <>
    <Alert variant="danger" className="text-center p-5 my-4 rounded-4 shadow-lg">
      <Container>
        <Row className="align-items-center">
          <Col md={12}>
            <h1 className="display-5 fw-bold">🎉 50% OFF on All Products!</h1>
            <p className="lead">Limited time offer. Shop now and save big on your favorite items!</p>
          </Col>
        </Row>
      </Container>
    </Alert>
    </>
  )
}
