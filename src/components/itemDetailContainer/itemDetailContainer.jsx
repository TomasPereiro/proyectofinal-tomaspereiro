import React, { useState, useEffect } from "react";
import { db } from "../../firebase/client";
import { getDocs, getDoc, doc, collection, query, where } from 'firebase/firestore';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useParams } from "react-router-dom";
import { ItemDetail } from "../itemDetailContainer/itemDetail"


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams()


    const getProduct = async () => {

        const productRef = doc(db, "products", id)
        let prod;
        prod = await getDoc(productRef)

        setProduct({ ...prod.data(), id: prod.id })
        setLoading(false);



    }
    useEffect(() => {
        getProduct();
    }, [id]);

    return (
        <Container>
            <Row>
                {loading ? (
                    <p>Cargando productos...</p>
                ) : (
                    <ItemDetail product={product}></ItemDetail>
                )}
            </Row>
        </Container>
    );


}