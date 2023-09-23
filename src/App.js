
import logo from './logo.svg';
import './App.css';
import { Context, createContext, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import {db} from "./firebase/client"
import {getDocs, collection, query, where, limit, getDoc, doc, addDoc} from 'firebase/firestore'
import Router from  './router/Router'


const productsRef = collection(db, "products")


function App() {


  return (
    <CartProvider>
    
    

   <Router/> 
   </CartProvider>
   
  );
}

export default App;
