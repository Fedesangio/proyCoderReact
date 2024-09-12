/* eslint-disable react/prop-types */
import './ItemListContainer.css'

export default function ItemListContainer ({greeting}) {
    return (
        <div className='conteinerStyle'>
        <h1 className='colortexto'>{greeting}</h1>
        </div>
    )
};