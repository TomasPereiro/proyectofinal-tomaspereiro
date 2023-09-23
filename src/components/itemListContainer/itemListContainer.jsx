import React, { useState, useEffect } from "react";
import { db } from "../../firebase/client";
import { getDocs, collection, query, where } from 'firebase/firestore';
import { ItemList } from "./itemList"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useParams } from "react-router-dom";


export const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()


  const getProducts = async () => {

    const productsRef = collection(db, "products")
    let data;
    if (id) {
      const q = query(productsRef, where("categoryid", "==", id))
      data = await getDocs(q);
    } else {
      data = await getDocs(productsRef);
    }




    const dataFiltrada = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    setProducts(dataFiltrada)
    setLoading(false)
  };

  useEffect(() => {
    getProducts();
  }, [id]);

  return (
    <Container>
      <Row>
        {loading ? (
          <p>Cargando productos...</p>
        ) : (
          <ItemList products={products}></ItemList>
        )}
      </Row>
    </Container>
  )
}

