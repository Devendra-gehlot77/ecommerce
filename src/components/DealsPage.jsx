import React, { useEffect, useState } from "react";
import PlaceHolder from "./PlaceHolder";
import Product from "./Product";
import axios from "axios";
import { Container, Row, Col } from 'react-bootstrap';  
import { Link } from "react-router";

export default function DealsPage() {
  const [loading, setLoading] = useState(true);
  const [mensShirt, setMensShirt] = useState([]);

  // Men's Shirt
  useEffect(() => {
    axios
      .get(`https://wscubetech.co/ecommerce-api/products.php`, {
        params: {
          limit: 8,
          categories: "mens-shirts ,sunglasses",
        },
      })
      .then((response) => {
        setMensShirt(response.data.data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("ERROR");
      });
  }, []);

  return (
    <>
    <div className="exclusive-banner">
            <div className="discount-banner-wrapper">
        <div className="hot-deals-wrapper">
      <Container>
        <Row className="align-items-center text-center">
          <Col md={12}>
            <div className="hot-deals-box pulse-animate">
              <h2 className="hot-deals-title">🔥 Hot Deals Are Live!</h2>
              <p className="hot-deals-text">
                Grab the best discounts on your favorite products. Limited time only!
              </p>
              <Link to={'/product-listings'} className="hot-deals-btn">Shop Deals</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
        </div>

      <div className="container py-5">
        {/* Heading */}
        {/* <h2 className="text-center mb-5 fw-bold">🔥 Exclusive Deals</h2> */}
        {/* Deals Grid */}
        <div className="row g-4">
          {/* Deal Card 1 */}
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {loading ? (
              <>
                <PlaceHolder />
                <PlaceHolder />
                <PlaceHolder />
                <PlaceHolder />
              </>
            ) : (
              mensShirt.map((v, i) => {
                return <Product key={i} data={v} />;
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}
