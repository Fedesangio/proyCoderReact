import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getProducts } from './asyncMock';
import './ItemListContainer.css';

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getProducts()
      .then(allProducts => {
        setProducts(id ? allProducts.filter(product => product.category === id) : allProducts);
      })
      .catch(console.error);
  }, [id]);

  return (
    <div className='containerStyle'>
      <ItemList products={products} />
    </div>
  );
}