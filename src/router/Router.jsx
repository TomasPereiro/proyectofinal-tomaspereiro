import React from 'react';
import { ItemListContainer } from '../components/itemListContainer/itemListContainer'
import {NavBar} from "../components/NavBar/NavBar"
import {
    BrowserRouter,
    Switch,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import { ItemDetailContainer } from '../components/itemDetailContainer/itemDetailContainer';
import CartView from '../components/CartView';
import CreateOrder from '../components/order/Order';
import Prueba from '../components/order/Prueba';
export default function Router() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>

                <Route path='/' element={<ItemListContainer />} />
                <Route path='/categories/:id' element={<ItemListContainer />} />
                <Route path='/detail/:id' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<CartView />} />
                <Route path='/order' element={<CreateOrder />} />
                <Route path='/hola' element={<Prueba />} />
            </Routes>
        </BrowserRouter>
    )
}