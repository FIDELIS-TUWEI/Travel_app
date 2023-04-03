import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import axios from 'axios';

const POSPage = () => {
    // useState
    const [products, setProducts] = useState([]);

    // fetching data from backend
    const fetchProducts = async() => {
        const result = await axios.get('products')
        setProducts(await result.data);
    }

    // useEffect hook
    useEffect(() => {
        fetchProducts();
    }, []);

    // useEffect for products
    useEffect(() => {
        console.log(products)
    }, [products]);

    return ( 
        <MainLayout>
            POS content
        </MainLayout> 
    );
}
 
export default POSPage;