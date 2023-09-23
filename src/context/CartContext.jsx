import React, { createContext, useContext, useEffect, useState } from 'react';

// Crear el contexto
const CartContext = createContext();

// Crear un componente proveedor para el contexto
function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalCart, setTotalCart] = useState(0)

  const updateTotal = () =>{
    let total = 0
    cart.forEach((prod) => {
      total += (prod.price*prod.cantidad)
    })
    setTotalCart(total)
    total=0
  }

  const addToCart = (item) => {
    const cartProductsIndex = cart.findIndex((product) => 
    product.id === item.id)
    
    
    

    if (cartProductsIndex !== -1){
        const updatedCart = [...cart]
        updatedCart[cartProductsIndex].cantidad += item.cantidad
        setCart(updatedCart)

        
    }else{
        setCart([...cart, {...item}])
        
    }

  /*   let total = 0
    cart.forEach((prod) => {
      total += prod.price
    })
    setTotalCart(total) */


  };

  // Función para eliminar un elemento del carrito
  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };
  const vaciarCarrito = () => {
    setCart([])
    setTotalCart(0)
}
  const contextValue = {
    cart,
    addToCart,
    setCart,
    vaciarCarrito,
    removeFromCart,
    setTotalCart,
    totalCart
  };
useEffect(() => {updateTotal()},[cart])

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de un componente CartProvider');
  }
  return context;
}

export { CartProvider, useCart, CartContext };

