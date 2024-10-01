import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

import './NavBar.css';

export default function NavBar() {
  return (
    <nav>
      <Link to="/" className="brand">Punta Ballena</Link>
      <ul>
        <li><Link to="/category/Chocolate">Chocolate</Link></li>
        <li><Link to="/category/Nieve">Nieve</Link></li>
        <li><Link to="/category/Premium">Premium</Link></li>
      </ul>
      <div className='cartContenedor'>
    <CartWidget/>
    </div>
    </nav>
  );
}