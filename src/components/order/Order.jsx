import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const CreateOrder = () => {
  const { cart, totalCart } = useContext(CartContext);
  const [order, setOrder] = useState({
    buyer: { name: "", phone: "", email: "" },
    items: cart.map((item) => ({ id: item.id, title: item.title, price: item.price, cantidad: item.cantidad })),
    total: totalCart,
  });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [error, setError] = useState("")
  const [orderID, setOrderID] = useState("")

  const createOrder = async () => {
    
    if (!formData.name || !formData.phone || !formData.email) {
      setError("Por favor, complete todos los campos del formulario.")
      return;
    }

    try {
      const db = getFirestore();
      const orderCollection = collection(db, "orders")

      
      setOrder((prevOrder) => ({
        ...prevOrder,
        buyer: { ...formData },
      }));

   
      const docRef = await addDoc(orderCollection, order)
      setOrderID(docRef.id)

     
      setFormData({
        name: "",
        phone: "",
        email: "",
      });
    } catch (err) {
      console.error("Error al crear la orden:", err)
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Resumen de su compra:</h1>
      <ul>
        {order.items.map((item) => (
          <li key={item.id}>
            <p>Producto: {item.title}</p>
            <p>Precio: ${item.price}</p>
            <p>Cantidad: {item.cantidad}</p>
          </li>
        ))}
      </ul>
      <p>Total de la orden: ${order.total}</p>

     
      <form>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <label htmlFor="phone">Teléfono:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </form>

     
      {error && <p>{error}</p>}

      {orderID && <p>La compra se creó con éxito. ID de la compra: {orderID}</p>}

      
      <button onClick={createOrder}>Finalizar</button>
    </div>
  );
};

export default CreateOrder










