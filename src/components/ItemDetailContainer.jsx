import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from './asyncMock';
import './ItemDetailContainer.css';

export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then(products => {
        const selectedProduct = products.find(p => p.id === parseInt(id));
        selectedProduct ? setProduct(selectedProduct) : setError('Product not found');
      })
      .catch(() => setError('Error loading product'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) return <div>{error}</div>;

  return (
    <div className="itemDetail">
      
      <h2>{product.Title}</h2>
      <p>Categoria: {product.category}</p>
      <img src={product.Image} alt={product.Title} />
      <p>{product.Description}</p>
      <p>Price: ${product.Price}</p>

    </div>
  );
}