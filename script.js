const products = [
    { id: 1, name: "Montre de Maître", price: 1250, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600", desc: "Mouvement automatique, acier brossé." },
    { id: 2, name: "Parfum 'Or Noir'", price: 185, img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600", desc: "Notes de bois de santal et vanille." },
    { id: 3, name: "Sac Cuir Grainé", price: 890, img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600", desc: "Cuir pleine fleur, finitions main." },
    { id: 4, name: "Bague Diamant", price: 3400, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600", desc: "Or blanc 18 carats et diamant." },
    // PHOTO LUNETTES CORRIGÉE CI-DESSOUS
    { id: 5, name: "Lunettes Élite", price: 310, img: "https://tse2.mm.bing.net/th/id/OIP.G4UGB5EGsLDP-d3Zurjk7AHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", desc: "Monture écaille, verres polarisés." },
    { id: 6, name: "Chaussures Oxford", price: 550, img: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=600", desc: "Cousu Goodyear, patine artisanale." },
    { id: 7, name: "Portefeuille Cuir", price: 245, img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600", desc: "Cuir de veau, monogramme gravé." },
    { id: 8, name: "Stylo Plume Or", price: 320, img: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600", desc: "Plume en or massif 14 carats." }
];

let cartTotal = 0;
let cartCount = 0;

function displayProducts() {
    const grid = document.getElementById('product-grid');
    if(!grid) return;
    
    products.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${p.img}" alt="${p.name}">
            <div class="card-body">
                <h3>${p.name}</h3>
                <p>${p.desc}</p>
                <span class="price">${p.price} €</span>
                <button class="btn-add" onclick="addToCart(${p.price})">Ajouter au panier</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function addToCart(price) {
    cartTotal += price;
    cartCount++;
    document.getElementById('total-price').innerText = cartTotal;
    document.getElementById('cart-count').innerText = cartCount;
}

function toggleTheme() {
    document.body.classList.toggle('dark');
}

window.onload = displayProducts;