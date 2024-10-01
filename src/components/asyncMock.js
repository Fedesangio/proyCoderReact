const productosPuntaBallena = [
{
    id: 1,
    Title: "Alfajor Clásico Chocolate",
    Image: "https://www.alfajorespuntaballena.com/wp-content/uploads/2023/06/1-Cla%CC%81sico-choco-48g.png"
},
{
    id: 2,
    Title: "Alfajor de Mousse de Nieve",
    Image: "https://www.alfajorespuntaballena.com/wp-content/uploads/2023/06/2-Cla%CC%81sico-nieve-35g.png"
},
{
    id: 3,
    Title: "Alfajor Triple Choco",
    Image: "https://www.alfajorespuntaballena.com/wp-content/uploads/2023/06/3-Triple-choco-65g-1.png"
},
{
    id: 4,
    Title: "Alfajor Triple Nieve",
    Image: "https://www.alfajorespuntaballena.com/wp-content/uploads/2023/06/4-Triple-nieve-48g-1.png"
},
{
    id: 5,
    Title: "Alfajor Super Blanco",
    Image: "https://www.alfajorespuntaballena.com/wp-content/uploads/2023/06/5-super-blanco-80g.png"
},
{
    id: 6,
    Title: "Caja Super Choco",
    Image: "https://www.alfajorespuntaballena.com/wp-content/uploads/2023/06/6-super-choco-80g.png"
},
{
    id: 7,
    Title: "Alfajor Super Soul",
    Image: "https://www.alfajorespuntaballena.com/wp-content/uploads/2023/06/7-soul-60g.png"
},
{
    id: 8,
    Title: "Alfajor CocoLate",
    Image: "https://www.alfajorespuntaballena.com/wp-content/uploads/2023/06/8-cocolate-50g.png"
}
];

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productosPuntaBallena)
        }, 2000)
})
}