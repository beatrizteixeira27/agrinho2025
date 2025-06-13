// Simulação de produtos para exibição
const produtos = [
    {
        nome: "Maçã",
        categoria: "frutas",
        disponibilidade: "disponivel",
        imagem: "https://via.placeholder.com/250x150/4CAF50/ffffff?text=Maçã",
        preco: "R$ 5,00"
    },
    {
        nome: "Cenoura",
        categoria: "legumes",
        disponibilidade: "disponivel",
        imagem: "https://via.placeholder.com/250x150/ff9800/ffffff?text=Cenoura",
        preco: "R$ 3,50"
    },
    {
        nome: "Queijo Minas",
        categoria: "queijos",
        disponibilidade: "indisponivel",
        imagem: "https://via.placeholder.com/250x150/ffeb3b/ffffff?text=Queijo+Minas",
        preco: "R$ 15,00"
    },
    {
        nome: "Banana",
        categoria: "frutas",
        disponibilidade: "disponivel",
        imagem: "https://via.placeholder.com/250x150/ffeb3b/ffffff?text=Banana",
        preco: "R$ 4,00"
    },
    {
        nome: "Alface",
        categoria: "legumes",
        disponibilidade: "indisponivel",
        imagem: "https://via.placeholder.com/250x150/4CAF50/ffffff?text=Alface",
        preco: "R$ 2,50"
    }
];

// Função para filtrar produtos
function filterProducts() {
    const categoryFilter = document.getElementById("category").value;
    const availabilityFilter = document.getElementById("availability").value;

    // Filtra produtos com base nos filtros selecionados
    const filteredProducts = produtos.filter(produto => {
        const matchCategory = categoryFilter === "all" || produto.categoria === categoryFilter;
        const matchAvailability = availabilityFilter === "all" || produto.disponibilidade === availabilityFilter;

        return matchCategory && matchAvailability;
    });

    displayProducts(filteredProducts);
}

// Função para exibir os produtos filtrados
function displayProducts(produtos) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Limpa a lista de produtos

    if (produtos.length === 0) {
        productList.innerHTML = "<p>Nenhum produto encontrado.</p>";
        return;
    }

    // Cria os elementos HTML para exibir os produtos
    produtos.forEach(produto => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h4>${produto.nome}</h4>
            <p>Preço: <span class="price">${produto.preco}</span></p>
            <p><strong>Categoria:</strong> ${produto.categoria}</p>
            <p><strong>Disponibilidade:</strong> ${produto.disponibilidade === "disponivel" ? "Disponível" : "Indisponível"}</p>
        `;

        productList.appendChild(productDiv);
    });
}

// Chama a função para exibir todos os produtos ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    displayProducts(produtos);
});
