/* eslint-disable react/prop-types */
import Item from './Item';
import './ItemList.css';

export default function ItemList({ products }) {
  return (
    <section className="itemlistgrid">
      {products.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </section>
  );
}
