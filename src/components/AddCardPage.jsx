import React, { useContext, useEffect, useRef, useState } from "react";
import { commonContex } from "./contex Api/Contex";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getDatabase, ref, set } from "firebase/database";
import app from "./configFiles/FireBase";
import { Button, Container } from "react-bootstrap"; // Make sure this line is here or wherever your styles are

export default function AddCardPage() {
  const { cardItem, setCardItem, isLogin } = useContext(commonContex);
  const [subAmount, setSubAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [shipment, setShipment] = useState(10);
  const cardRefs = useRef([]);

  useEffect(() => {
    var sum = 0;
    cardItem.forEach((amount) => {
      sum += amount.price * amount.quantity;
    });
    setSubAmount(sum);
    setTotalPrice(sum + shipment);
  }, [cardItem]);

  const changeQty = (cardId, type) => {
    const updatedCart = cardItem.map((data) => {
      if (cardId === data.id) {
        if (type === "minus") {
          if (data.quantity > 1) {
            data.quantity--;
          } else {
            toast.info("Oops! Minimum quantity already.");
          }
        } else if (type === "plus") {
          if (data.quantity < 3) {
            data.quantity++;
          } else {
            toast.info("Oops! You’ve reached the maximum quantity for this item.");
          }
        }
      }
      return data;
    });

    setCardItem([...updatedCart]);
    localStorage.setItem("cardItem", JSON.stringify(updatedCart));

    // Trigger animation
    const cardRef = cardRefs.current.find(ref => ref?.dataset?.id === cardId.toString());
    if (cardRef) {
      cardRef.classList.add("cart-card-animate");
      setTimeout(() => {
        cardRef.classList.remove("cart-card-animate");
      }, 600);
    }

    const db = getDatabase(app);
    set(ref(db, "users_cart/" + isLogin), updatedCart);
  };

  const removeItem = (cardId) => {
    if (window.confirm("Are you sure you want to remove this product?")) {
      const updatedCart = cardItem.filter((item) => item.id !== cardId);
      setCardItem(updatedCart);
      localStorage.setItem("cardItem", JSON.stringify(updatedCart));
      toast.info("Removed from cart.");

      const db = getDatabase(app);
      set(ref(db, "users_cart/" + isLogin), updatedCart);
    }
  };

  return (
    <div className="container my-4">
      {cardItem.length > 0 ? (
        <>
          <Container className="cart-heading-container">
            <h2 className="cart-heading animate-slide-in">🛒 Your Shopping Cart</h2>
            <p className="cart-subheading animate-fade-in">
              Review your selected items before checkout.
            </p>
          </Container>
          {cardItem.map((card, index) => (
            <div
              className="card shadow-sm p-3 mb-4"
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-id={card.id}
            >
              <div className="row g-3 align-items-center">
                <div className="col-4 col-md-2">
                  <Link to={`/details-product/${card.id}`}>
                    <img
                      src={card.image}
                      alt="Product"
                      className="img-fluid rounded"
                    />
                  </Link>
                </div>

                <div className="col-8 col-md-3 text-start">
                  <Link to={`/details-product/${card.id}`}>
                    <h5 className="mb-1">{card.name}</h5>
                  </Link>
                  <p className="mb-1 small text-muted">
                    Brand: <strong>{card.brand_name}</strong>
                  </p>
                  <p className="mb-1 small text-muted">Category: {card.category_name}</p>
                  <p className="d-none d-md-block small text-muted">{card.description}</p>
                </div>

                <div className="col-6 col-md-2 text-center">
                  <p className="mb-1 fw-bold">Quantity</p>
                  <div className="btn-group" role="group">
                    <button
                      onClick={() => changeQty(card.id, "minus")}
                      className="btn btn-sm btn-outline-secondary"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="form-control form-control-sm text-center"
                      value={card.quantity}
                      readOnly
                      style={{ width: "50px" }}
                    />
                    <button
                      onClick={() => changeQty(card.id, "plus")}
                      className="btn btn-sm btn-outline-secondary"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="col-6 col-md-2 text-center">
                  <p className="mb-1 fw-bold">Price</p>
                  <p className="mb-0">${card.price}</p>
                </div>

                <div className="col-6 col-md-2 text-center">
                  <p className="mb-1 fw-bold">Total</p>
                  <p className="mb-0">${card.price * card.quantity}</p>
                </div>

                <div className="col-6 col-md-1 text-center">
                  <p className="mb-1 invisible">Remove</p>
                  <button
                    onClick={() => removeItem(card.id)}
                    className="btn btn-sm btn-danger"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="row mt-4">
            <div className="col-md-6 offset-md-6">
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between">
                  <span>Subtotal</span>
                  <strong>${subAmount}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Shipping</span>
                  <strong>${shipment}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total</span>
                  <strong>${totalPrice}</strong>
                </li>
              </ul>

              <div className="d-flex justify-content-between mt-3">
                <Link to={"/product-listings"}>
                  <Button variant="primary" size="lg" className="mt-3">
                    🛒 Continue Shopping
                  </Button>
                </Link>
                <button className="btn btn-success animate-bounce">
                  Checkout <i className="bi bi-arrow-right-circle"></i>
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center text-muted mt-5">
          <h4>Your Shopping Cart is empty</h4>
          <Link to={"/product-listings"}>
            <Button variant="primary" size="lg" className="mt-3">
              🛒 Go Shopping
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
