import Card from 'react-bootstrap/Card';
import { CartContext } from '../context/CartContext';
import { useContext } from "react";


export const CartItem = ({prod}) => {
    const { removeFromCart } = useContext(CartContext);
    return(
   
     
        <Card style={{ width: '18rem', height: '28rem' }}>
                            
        <Card.Body>
           
            <Card.Img style={{ width: '10rem', height: '10rem'  }} variant="top" src= {prod.image}/>
            <Card.Title style={{ width: '10rem', height: '10rem'  }} >{prod.title}</Card.Title>

            <Card.Text>
               <h3>{prod.price}</h3>
              <h3>{prod.cantidad}</h3>
              <button className="btn btn-danger btn-sm" onClick={() => {
        removeFromCart(prod.id)
      }}>Eliminar producto</button>
            </Card.Text>
          
            
        </Card.Body>
    </Card>

       
    
     

  
    )

}
