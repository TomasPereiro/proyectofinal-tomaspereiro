import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext"
import { CartItem } from "./CartItem";
import CreateOrder from "./order/Order";
import { Link } from "react-router-dom";


const CartView = () => {
  const { cart, vaciarCarrito } = useContext(CartContext);
  console.log(cart)
  return (
    <div>
      <h1>Carrito</h1>
      <button onClick={() => {
        vaciarCarrito()
      }}>Vaciar</button>
      <Link to="/order">
        <button>Siguiente</button>
      </Link>
      <div className="product-list">
        {cart.map((prod) => (
          <div key={prod.id} className="product-item">
            <CartItem prod={prod}></CartItem>
          </div>
        ))}
      </div>
    </div>
  );
        }  


export default CartView