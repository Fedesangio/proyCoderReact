/* eslint-disable react/prop-types */
import './ImgNav.css'

export default function ImgLogo ({imagen, estilo}) {
    return (
        <>
        <img className={estilo} src={imagen} alt="" />
        </>
    )
};