import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"

export const Item = (props) => {
    return (


        <Card style={{ width: '18rem', height: '28rem' }}>

            <Card.Body>

                <Card.Img style={{ width: '10rem', height: '10rem' }} variant="top" src={props.product.image} />
                <Card.Title style={{ width: '10rem', height: '10rem' }} >{props.product.title}</Card.Title>
                <Card.Text>
                    {props.product.price}
                </Card.Text>
                <Link to={`/detail/${props.product.id}`}>Details</Link>
            </Card.Body>
        </Card>






    )

}
