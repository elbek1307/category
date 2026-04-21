const items = [
  { id: 1, category: "pizza", title: "Pepperoni Pizza", desc: "Spicy beef lorem", price: "$12" },
  { id: 2, category: "pizza", title: "Cheese Pizza", desc: "Double cheese", price: "$10" },
  { id: 3, category: "pizza", title: "Margarita", desc: "Tomato & basil", price: "$11" },
  { id: 4, category: "pizza", title: "Chicken Pizza", desc: "Chicken & cheese", price: "$13" },
  { id: 5, category: "pizza", title: "BBQ Pizza", desc: "BBQ sauce", price: "$14" },
  { id: 6, category: "pizza", title: "Veggie Pizza", desc: "Vegetables", price: "$9" },
  { id: 7, category: "pizza", title: "Hawaiian Pizza", desc: "Pineapple & ham", price: "$13" },
  { id: 8, category: "pizza", title: "Seafood Pizza", desc: "Shrimp & fish", price: "$15" },

  { id: 9, category: "sushi", title: "Salmon Sushi", desc: "Fresh salmon lorem", price: "$8" },
  { id: 10, category: "sushi", title: "Tuna Sushi", desc: "Tuna roll", price: "$9" },
  { id: 11, category: "sushi", title: "Shrimp Sushi", desc: "Shrimp taste", price: "$10" },
  { id: 12, category: "sushi", title: "Avocado Sushi", desc: "Fresh avocado", price: "$7" },
  { id: 13, category: "sushi", title: "Dragon Roll", desc: "Special roll", price: "$11" },
  { id: 14, category: "sushi", title: "California Roll", desc: "Classic roll", price: "$9" },
  { id: 15, category: "sushi", title: "Spicy Tuna", desc: "Hot & spicy", price: "$10" },
  { id: 16, category: "sushi", title: "Ebi Roll", desc: "Shrimp roll", price: "$12" }
];

// DOM
const pizzaBox = document.getElementById("pizza_list");
const sushiBox = document.getElementById("sushi_list");

const pizzaSection = document.querySelector(".pizza");
const sushiSection = document.querySelector(".sushi");

const pizzaBtn = document.getElementById("pizza_btn");
const sushiBtn = document.getElementById("sushi_btn");

// render helper
function render(data, box) {
  box.innerHTML = data.map((item, index) => `
    <div class="pizza_item">
      <img src="https://picsum.photos/id/${index + 50}/300/200" />
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <button>Выбрать</button>
      <span>${item.price}</span>
    </div>
  `).join("");
}

// boshlanish
render(items.filter(i => i.category === "pizza"), pizzaBox);
render(items.filter(i => i.category === "sushi"), sushiBox);

// buttonlar
pizzaBtn.addEventListener("click", () => {
  pizzaSection.style.display = "block";
  sushiSection.style.display = "none";
});

sushiBtn.addEventListener("click", () => {
  pizzaSection.style.display = "none";
  sushiSection.style.display = "block";
});