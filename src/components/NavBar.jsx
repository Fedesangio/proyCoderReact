
import BotonNav from './BotonNav';
import CartWidget from './CartWidget';
import ImgNav from './ImgNav';
import './NavBar.css';

export default function NavBar () {
    return(
    <>
    <div className='style color'>
    <ImgNav imagen="./src/assets/logoblanco.png" estilo="imgLogo"/>
    <div>
    <BotonNav titulo='Chocolate' Link to={'/category/chocolate'} />
    <BotonNav titulo='Nieve' Link to={'/category/nieve'}/>
    <BotonNav titulo='Premium' Link to={'/category/premium'}/>
    </div>
    <div className='cartContenedor'>
    <CartWidget/>
    </div>
    </div>

    </>
    )
};