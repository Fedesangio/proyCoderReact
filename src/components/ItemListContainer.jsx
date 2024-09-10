/* eslint-disable react/prop-types */
import './ItemListContainer.css'

export default function ItemListContainer ({saludo}) {
    return (
        <div className='conteinerStyle'>
        <h1 className='colortexto'>{saludo}</h1>
        </div>
    )
};