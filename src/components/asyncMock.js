const productosPuntaBallena = [
{
    id: 1,
    Title: "Alfajor Clásico Chocolate",
    Image: "https://www.alfajorespuntaballena.com/wp-content/uploads/2023/06/1-Cla%CC%81sico-choco-48g.png",
    category: "Chocolate",
    Description: "Un delicioso alfajor clásico bañado en chocolate, ideal para los amantes del dulce tradicional."
},
{
    id: 2,
    Title: "Alfajor Clásico de Nieve",
    Image: "https://www.alfajorespuntaballena.com/wp-content/uploads/2023/06/2-Cla%CC%81sico-nieve-35g.png",
    category: "Nieve",
    Description: "Un alfajor clásico cubierto con una suave capa de merengue blanco, perfecto para una dulce experiencia."
},
{
    id: 3,
    Title: "Alfajor Triple Choco",
    Image: "https://www.alfajorespuntaballena.com/wp-content/uploads/2023/06/3-Triple-choco-65g-1.png",
    category: "Chocolate",
    Description: "Tres capas de sabor inigualable con una generosa porción de chocolate en cada bocado."
},
{
    id: 4,
    Title: "Alfajor Triple Nieve",
    Image: "https://www.alfajorespuntaballena.com/wp-content/uploads/2023/06/4-Triple-nieve-48g-1.png",
    category: "Nieve",
    Description: "Tres capas de alfajor, cubiertas con una deliciosa capa de merengue blanco, perfecto para los amantes de la nieve."
},
{
    id: 5,
    Title: "Alfajor Super Blanco",
    Image: "https://www.alfajorespuntaballena.com/wp-content/uploads/2023/06/5-super-blanco-80g.png",
    category: "Premium",
    Description: "Un alfajor premium bañado en una capa gruesa de merengue blanco, ideal para disfrutar en cualquier momento."
},
{
    id: 6,
    Title: "Caja Super Choco",
    Image: "https://www.alfajorespuntaballena.com/wp-content/uploads/2023/06/6-super-choco-80g.png",
    category: "Premium",
    Description: "Una caja completa de alfajores bañados en chocolate premium, perfecta para regalar o compartir."
},
{
    id: 7,
    Title: "Alfajor Super Soul",
    Image: "https://www.alfajorespuntaballena.com/wp-content/uploads/2023/06/7-soul-60g.png",
    category: "Premium",
    Description: "Una mezcla de sabores intensos en un alfajor premium que sorprenderá a tu paladar."
},
{
    id: 8,
    Title: "Alfajor CocoLate",
    Image: "https://www.alfajorespuntaballena.com/wp-content/uploads/2023/06/8-cocolate-50g.png",
    category: "Chocolate",
    Description: "Alfajor bañado en chocolate con un toque exótico de coco, una combinación única y deliciosa."
}
];

export const getProducts = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(productosPuntaBallena), 2000);
  });
};