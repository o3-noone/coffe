const data = [
  {
    title: "Expresso Tradicional",
    price: 9.9,
    images: "/images/Image1",
    category: ["Tradicional", ""],
    info: "O tradicional café feito com água quente e grãos moídos",
    id: 1,
    quantity: 1,
  },
  {
    title: "Expresso Americano",
    price: 9.9,
    images: "/images/Image2",
    category: ["Tradicional", ""],
    info: "Expresso diluído, menos intenso que o tradicional",
    id: 2,
    quantity: 1,
  },
  {
    title: "Expresso Cremoso",
    price: 9.9,
    images: "/images/Image3",
    category: ["Tradicional", ""],
    info: "Café expresso tradicional com espuma cremosa",
    id: 3,
    quantity: 1,
  },
  {
    title: "Expresso Gelado",
    price: 9.9,
    images: "/images/Image4",
    category: ["Tradicional", "gelado"],
    info: "Bebida preparada com café expresso e cubos de gelo",
    id: 4,
    quantity: 1,
  },
  {
    title: "Café com Leite",
    price: 9.9,
    images: "/images/Image5",
    category: ["Tradicional", "com leite"],
    info: "Meio a meio de expresso tradicional com leite vaporizado",
    id: 5,
    quantity: 1,
  },
  {
    title: "Latte",
    price: 9.9,
    images: "/images/Image6",
    category: ["Tradicional", "com leite"],
    info: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    id: 6,
    quantity: 1,
  },
  {
    title: "Capuccino",
    price: 9.9,
    images: "/images/Image7",
    category: ["Tradicional", "com leite"],
    info: "Bebida com canela feita de doses iguais de café, leite e espuma",
    id: 7,
    quantity: 1,
  },
  {
    title: "Macchiato",
    price: 9.9,
    images: "/images/Image8",
    category: ["Tradicional", "com leite"],
    info: "Café expresso misturado com um pouco de leite quente e espuma",
    id: 8,
    quantity: 1,
  },
  {
    title: "Mocaccino",
    price: 9.9,
    images: "/images/Image9",
    category: ["Tradicional", "com leite"],
    info: "Café expresso com calda de chocolate, pouco leite e espuma",
    id: 9,
    quantity: 1,
  },
  {
    title: "Chocolate Quente",
    price: 9.9,
    images: "/images/Image10",
    category: ["especial", "com leite"],
    info: "Bebida feita com chocolate dissolvido no leite quente e café",
    id: 10,
    quantity: 1,
  },
  {
    title: "Cubano",
    price: 9.9,
    images: "/images/Image11",
    category: ["especial", "alcoólico", "gelado"],
    info: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    id: 11,
    quantity: 1,
  },
  {
    title: "Havaiano",
    price: 9.9,
    images: "/images/Image12",
    category: ["especial", ""],
    info: "Bebida adocicada preparada com café e leite de coco",
    id: 12,
    quantity: 1,
  },
  {
    title: "Árabe",
    price: 9.9,
    images: "/images/Image13",
    category: ["especial", ""],
    info: "Bebida preparada com grãos de café árabe e especiarias",
    id: 13,
    quantity: 1,
  },
  {
    title: "Irlandês",
    price: 9.9,
    images: "/images/Image14",
    category: ["especial", "alcoólico"],
    info: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    id: 14,
    quantity: 1,
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
            <button class="btn__Korzinka" onclick="handleButtonClick(${item.id})">
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
let SelectedArray = [];

function handleButtonClick(id) {
  let selectItem = data.find((item) => item.id === id);
  console.log(selectItem);
  SelectedArray.push(selectItem);
  ChiqarSevimli();
}
function removeBtn(id) {
  SelectedArray = SelectedArray.filter((item) => item.id !== id);
  ChiqarSevimli();
}

const sec3List = document.querySelector(".sec3__list");
function ChiqarSevimli() {
  if (SelectedArray.length === 0) {
    sec3List.textContent = "Hozircha hech qanday ma'lumot yo'q";
  } else {
    let localData = SelectedArray.map((item) => {
      return `
          <li class="sec3__item">
            <div class="sec3__itemLeft">
              <img src="${item.images}.png" alt="${item.title}" />
              <div class="sec3__itemBtnDiv">
                <p>${item.title}</p>
                <div class="sec3__itemBtn">
                  <span>
                    <button class="btn_dec" onclick="decreaseQuantity(${item.id})">
                      <i class="fa-solid fa-minus"></i>
                    </button>
                    <p>${item.quantity}</p>
                    <button class="btn_inc" onclick="increaseQuantity(${item.id})">
                      <i class="fa-solid fa-plus"></i>
                    </button>
                  </span>
                  <button class="removeBtn" onclick="removeBtn(${item.id})">
                    <i class="fa-regular fa-trash-can"></i> remove
                  </button>
                </div>
              </div>
            </div>
            <div class="sec3__itemPrice">
              <span>
                <p>R$</p>
                <h4>${item.price}</h4>
              </span>
            </div>
          </li>
          <svg xmlns="http://www.w3.org/2000/svg" width="368" height="2" viewBox="0 0 368 2" fill="none">
            <path d="M0 1H368" stroke="#E6E5E5" />
          </svg>
        `;
    }).join("");

    sec3List.innerHTML = localData;
  }
}

function increaseQuantity(id) {
  SelectedArray = SelectedArray.map((item) => {
    if (item.id === id) {
      return { ...item, quantity: item.quantity + 1 };
    }
    return item;
  });

  ChiqarSevimli();
}
let sec3P1 = document.querySelector("#sec3__p2");
function decreaseQuantity(id) {
  SelectedArray = SelectedArray.map((item) => {
    if (item.id === id && item.quantity > 1) {
      return { ...item, quantity: item.quantity - 1 };
    }
    return item;
  });

  ChiqarSevimli();
}
