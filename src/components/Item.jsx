/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import './item.css';

export default function Item({ product }) {
  const navigate = useNavigate(); // Hook de navegación

  if (!product) return null;

  // Función que redirige a la página de detalles del producto
  const handleMoreDetails = () => {
    navigate(`/item/${product.id}`); // Navega a la URL con el ID del producto
  };

  return (
    <div className='estiloItem'>
      <h3 className='h3Item'>{product.Title}</h3>
      <img className='imgItem' src={product.Image} alt={product.Title} />
      <button onClick={handleMoreDetails}>Más Datos</button>
    </div>
  );
}
  