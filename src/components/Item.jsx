import './item.css'

/* eslint-disable react/prop-types */
export default function Item ({product}) {
    return (
        <>
        <div className='estiloItem'>
        <h3 className='h3Item'>{product.Title}</h3>
        <img className='imgItem' src={product.Image} alt="" />
        <p></p>
        <p></p>
        <button>Mas Datos</button>
        </div>
        </>
    );
}