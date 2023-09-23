import Card from 'react-bootstrap/Card';
import ItemCount from "./itemCount"

export const ItemDetail = (props) => {
    return(
   
     
        <Card style={{ width: '18rem', height: '28rem' }}>
                            
        <Card.Body>
           
            <Card.Img style={{ width: '10rem', height: '10rem'  }} variant="top" src= {props.product.image}/>
            <Card.Title style={{ width: '10rem', height: '10rem'  }} >{props.product.title}</Card.Title>

            <Card.Text>
               {props.product.price}
               <ItemCount prod={props.product}></ItemCount>
            </Card.Text>
            
        
        </Card.Body>
    </Card>

       
    
     

  
    )

}
