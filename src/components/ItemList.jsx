import { useEffect, useState } from "react";
import Item from "./Item";
import { getProducts } from "./asyncMock";
import './ItemList.css'

export default function ItemList () {
    const[products, setProducts] = useState ([]);

    useEffect (() => {
        getProducts()
        .then((products) => {
            setProducts(products)
        })
        .catch(error => {
            console.error(error);
        })
        }, []);

    return (
    <>
    <section className="itemlistgrid">
        {products.map(product => (
            <Item 
                key={product.id} 
                product={product}/>
            )
        )}
    </section>
    
    </>
    );
}