import Col from 'react-bootstrap/Col';
import { Item } from "./item";

export const ItemList = (props) => {
  return (
    <>
      {props.products.map((product) => (
        <Col key={product.id} lg="4">
          <Item product={product} />
        </Col>
      ))}
    </>
  )
}








