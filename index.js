console.log(`
Выполнено на 100 баллов из 125
`);

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".navbar");
const links = document.querySelectorAll(".header-nav-link");

const clickHandler = function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
};

menuBtn.addEventListener("click", clickHandler);

links.forEach((link) => {
  link.addEventListener("click", clickHandler);
});

// -----------------------------------------------------
// Кнопки

const btnGarden = document.querySelector("#gardens");
const btnLawn = document.querySelector("#lawn");
const btnPlanting = document.querySelector("#planting");

// Записываем в переменные все карточки
const cardsOfService = document.querySelectorAll(".service-item");
const card1 = document.getElementById("garden-1");
const card2 = document.getElementById("planting-1");
const card3 = document.getElementById("lawn-1");
const card4 = document.getElementById("plantin-2");
const card5 = document.getElementById("garden-2");
const card6 = document.getElementById("planting-3");

// добавляет класс .blur на каждую карточку

function blurAllCards() {
  cardsOfService.forEach((card) => {
    card.classList.add("blur");
  });
}

// убираем класс .blur на все карточки

function disBlurAllCards() {
  cardsOfService.forEach((card) => {
    card.classList.remove("blur");
  });
}

// Проверяем, все ли кнопки активны. Если да, то перевести в режим НЕактивна

function check() {
  const allBtnActive = [btnGarden, btnLawn, btnPlanting].every((item) => {
    return item.classList.contains("active");
  });

  if (allBtnActive) {
    btnGarden.classList.remove("active");
    btnLawn.classList.remove("active");
    btnPlanting.classList.remove("active");
    disBlurAllCards();
  }
}

// на каждую кнопку вешаем "слушатель событий" на клик

btnGarden.addEventListener("click", function () {
  // применяется только в том случае если ни одна из кнопочек не имеет класс эктив
  const anyBtnActive = [btnGarden, btnLawn, btnPlanting].some((item) => {
    return item.classList.contains("active");
  });
  if (!anyBtnActive) {
    blurAllCards();
  }
  card1.classList.toggle("blur");
  card5.classList.toggle("blur");
  btnGarden.classList.toggle("active");
  check();
});

btnLawn.addEventListener("click", function () {
  const anyBtnActive = [btnGarden, btnLawn, btnPlanting].some((item) => {
    return item.classList.contains("active");
  });
  if (!anyBtnActive) {
    blurAllCards();
  }
  card3.classList.toggle("blur");
  btnLawn.classList.toggle("active");
  check();
});

btnPlanting.addEventListener("click", function () {
  const anyBtnActive = [btnGarden, btnLawn, btnPlanting].some((item) => {
    return item.classList.contains("active");
  });
  if (!anyBtnActive) {
    blurAllCards();
  }
  card2.classList.toggle("blur");
  card4.classList.toggle("blur");
  card6.classList.toggle("blur");
  btnPlanting.classList.toggle("active");
  check();
});

// Обращение к переменным

const basicBtn = document.getElementById("basic");
const standardBtn = document.getElementById("standard");
const proBtn = document.getElementById("pro");

const basicBtnInfo = document.querySelector(".accordion-body-1");
const basicItem = document.querySelector(".accordion-item-1");
const basicHeader = document.querySelector(".accordion-header-1");

const standardBtnInfo = document.querySelector(".accordion-body-2");
const standardItem = document.querySelector(".accordion-item-2");
const standardHeader = document.querySelector(".accordion-header-2");

const proBtnInfo = document.querySelector(".accordion-body-3");
const proItem = document.querySelector(".accordion-item-3");
const proHeader = document.querySelector(".accordion-header-3");

// Отключаеь класс .open

function closeOpen() {
  basicBtnInfo.classList.remove("open");
  basicItem.classList.remove("open");
  basicHeader.classList.remove("open");

  standardBtnInfo.classList.remove("open");
  standardItem.classList.remove("open");
  standardHeader.classList.remove("open");

  proBtnInfo.classList.remove("open");
  proItem.classList.remove("open");
  proHeader.classList.remove("open");
}

// Раскрываем тарифы по ценам для Basic
basicHeader.addEventListener("click", function () {
  // closeOpen();
  standardBtnInfo.classList.remove("open");
  standardItem.classList.remove("open");
  standardHeader.classList.remove("open");

  proBtnInfo.classList.remove("open");
  proItem.classList.remove("open");
  proHeader.classList.remove("open");

  basicBtnInfo.classList.toggle("open");
  basicItem.classList.toggle("open");
  basicHeader.classList.toggle("open");
});

// Раскрываем тарифы по ценам для Standard

standardHeader.addEventListener("click", function () {
  // closeOpen();
  basicBtnInfo.classList.remove("open");
  basicItem.classList.remove("open");
  basicHeader.classList.remove("open");

  proBtnInfo.classList.remove("open");
  proItem.classList.remove("open");
  proHeader.classList.remove("open");

  standardBtnInfo.classList.toggle("open");
  standardItem.classList.toggle("open");
  standardHeader.classList.toggle("open");
});

// Раскрываем тарифы по ценам для Pro Care

proHeader.addEventListener("click", function () {
  // closeOpen();
  basicBtnInfo.classList.remove("open");
  basicItem.classList.remove("open");
  basicHeader.classList.remove("open");

  standardBtnInfo.classList.remove("open");
  standardItem.classList.remove("open");
  standardHeader.classList.remove("open");

  proBtnInfo.classList.toggle("open");
  proItem.classList.toggle("open");
  proHeader.classList.toggle("open");
});

// Функционал по кнопке Order

const order1 = document.getElementById("order-1");
const order2 = document.getElementById("order-2");
const order3 = document.getElementById("order-3");

const arrOrders = [order1, order2, order3];

arrOrders.forEach((item) => {
  item.addEventListener("click", function () {});
});
