import BotonNav from './BotonNav';
import CartWidget from './CartWidget';
import ImgNav from './ImgNav';
import ItemListContainer from './ItemListContainer';
import './NavBar.css';

export default function NavBar () {
    return(
    <>
    <div className='style color'>
    <ImgNav imagen="./src/assets/logoblanco.png" estilo="imgLogo"/>
    <div>
    <BotonNav/>
    <BotonNav/>
    <BotonNav/>
    <BotonNav/>
    </div>
    <div className='cartContenedor'>
    <CartWidget/>
    </div>
    </div>
    <ItemListContainer saludo="Hola como andas?"/>
    </>
    )
};