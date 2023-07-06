const data = [
  {
    title: "Expresso Tradicional",
    price: 9.9,
    images: "/images/Image1",
    category: ["Tradicional", ""],
    info: "O tradicional café feito com água quente e grãos moídos",
    id: 1,
  },
  {
    title: "Expresso Americano",
    price: 9.9,
    images: "/images/Image2",
    category: ["Tradicional", ""],
    info: "Expresso diluído, menos intenso que o tradicional",
    id: 2,
  },
  {
    title: "Expresso Cremoso",
    price: 9.9,
    images: "/images/Image3",
    category: ["Tradicional", ""],
    info: "Café expresso tradicional com espuma cremosa",
    id: 3,
  },
  {
    title: "Expresso Gelado",
    price: 9.9,
    images: "/images/Image4",
    category: ["Tradicional", "gelado"],
    info: "Bebida preparada com café expresso e cubos de gelo",
    id: 4,
  },
  {
    title: "Café com Leite",
    price: 9.9,
    images: "/images/Image5",
    category: ["Tradicional", "com leite"],
    info: "Meio a meio de expresso tradicional com leite vaporizado",
    id: 5,
  },
  {
    title: "Latte",
    price: 9.9,
    images: "/images/Image6",
    category: ["Tradicional", "com leite"],
    info: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    id: 6,
  },
  {
    title: "Capuccino",
    price: 9.9,
    images: "/images/Image7",
    category: ["Tradicional", "com leite"],
    info: "Bebida com canela feita de doses iguais de café, leite e espuma",
    id: 7,
  },
  {
    title: "Macchiato",
    price: 9.9,
    images: "/images/Image8",
    category: ["Tradicional", "com leite"],
    info: "Café expresso misturado com um pouco de leite quente e espuma",
    id: 8,
  },
  {
    title: "Mocaccino",
    price: 9.9,
    images: "/images/Image9",
    category: ["Tradicional", "com leite"],
    info: "Café expresso com calda de chocolate, pouco leite e espuma",
    id: 9,
  },
  {
    title: "Chocolate Quente",
    price: 9.9,
    images: "/images/Image10",
    category: ["especial", "com leite"],
    info: "Bebida feita com chocolate dissolvido no leite quente e café",
    id: 10,
  },
  {
    title: "Cubano",
    price: 9.9,
    images: "/images/Image11",
    category: ["especial", "alcoólico", "gelado"],
    info: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    id: 11,
  },
  {
    title: "Havaiano",
    price: 9.9,
    images: "/images/Image12",
    category: ["especial", ""],
    info: "Bebida adocicada preparada com café e leite de coco",
    id: 12,
  },
  {
    title: "Árabe",
    price: 9.9,
    images: "/images/Image13",
    category: ["especial", ""],
    info: "Bebida preparada com grãos de café árabe e especiarias",
    id: 13,
  },
  {
    title: "Irlandês",
    price: 9.9,
    images: "/images/Image14",
    category: ["especial", "alcoólico"],
    info: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    id: 14,
  },
];

const dataList = document.querySelector(".section2__Div_List");
const inc = document.querySelector(".btn_inc");
const dec = document.querySelector(".btn_inc");

window.addEventListener("DOMContentLoaded", function () {
  let product = data
    .map((item) => {
      return `
        <li class="section2__Div_item" >
        <img src="${item.images}.png" alt="${item.title}" />
        <span class="section2__Div_span span__category">
          <p>${item.category[0]}</p>
        </span>
        <span class="section2__Div_span">
          <h4>${item.title}</h4>
        </span>
        <span class="section2__Div_span">
          <p>${item.info}</p>
        </span>
        <div class="section2__Div_price">
          <span class="section2__Span_left">
            <p>R$</p>
            <h4>${item.price}0</h4>
          </span>
          <div class="section2__Div_Btns">
            <span>
              <button class="btn_inc">
                <i class="fa-solid fa-minus"></i>
              </button>
              <p>1</p>
              <button class="btn_dec">
                <i class="fa-solid fa-plus"></i>
              </button>
            </span>
            <button class="btn__Korzinka" onclick="pushKorzinka(${item.id})">
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </li>
        `;
    })
    .join("");
  dataList.innerHTML = product;
});
let localStore = [];
function pushKorzinka(id) {
  const pushID = data.find((item) => (item.id = id));
  localStore.push(pushID);
  console.log(localStore);
}

window.addEventListener("DOMContentLoaded", function () {
  let localData = data
    .map((item) => {
      return `
        <li class="section2__Div_item" >
        <img src="${item.images}.png" alt="${item.title}" />
        <span class="section2__Div_span span__category">
          <p>${item.category[0]}</p>
        </span>
        <span class="section2__Div_span">
          <h4>${item.title}</h4>
        </span>
        <span class="section2__Div_span">
          <p>${item.info}</p>
        </span>
        <div class="section2__Div_price">
          <span class="section2__Span_left">
            <p>R$</p>
            <h4>${item.price}0</h4>
          </span>
          <div class="section2__Div_Btns">
            <span>
              <button class="btn_inc">
                <i class="fa-solid fa-minus"></i>
              </button>
              <p>1</p>
              <button class="btn_dec">
                <i class="fa-solid fa-plus"></i>
              </button>
            </span>
            <button class="btn__Korzinka" onclick="pushKorzinka(${item.id})">
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </li>
        
        `;
    })
    .join("");
  X.innerHTML = localData;
  // x o'rniga joylanadigan class nomi
});
