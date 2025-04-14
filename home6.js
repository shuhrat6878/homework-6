
/*

let sizeObj={
    small: 2500,
    medium: 4000,
    large: 6000,
};
let extraObj = {
    cheese: 10000,
    tomato: 8000,
    free: 13000,
};

function orderPizza(size, extra) {
    let extraPrice = 0;
    for (let i=0; i < extra.length; i++) {
        extraPrice += extraObj[extra[i]];
    }
    this.size = size;
    this.extra = extra;
    this.price = sizeObj[this.size] + extraPrice;
    this.time = `${Math.floor(Math.random()*45)+15} daqiqa` ;
}
let order = new orderPizza("medium", ["cheese", "tomato"]);
let order2 = new orderPizza("medium", ["cheese", "tomato", "free"]);
*/

// projekt

/* 

// Ma'lumotlar strukturasini tayyorlash
const pizzaOrders = [
    { id: 1, type: "pishloqli", size: "large" },
    { id: 2, type: "tovuqli", size: "medium" },
    { id: 3, type: "pishloqsiz", size: "small" },
    { id: 4, type: "qazili", size: "large" },
    { id: 5, type: "pishloqli", size: "small" },
    { id: 6, type: "tovuqli", size: "large" }
];

// Narx hisoblash funksiyasi
function calculatePrice(order) {
    // Asosiy narx
    let basicPrice = 10000;

    // Typega qarab qo'shimcha narx
    switch (order.type) {
        case "pishloqli":
            basicPrice += 5000;
            break;
        case "pishloqsiz":
            basicPrice += 0;
            break;
        case "tovuqli":
            basicPrice += 7000;
            break;
        case "qazili":
            basicPrice += 10000;
            break;
    }

    // Sizega qarab qo'shimcha narx
    switch (order.size) {
        case "small":
            basicPrice += 1000;
            break;
        case "medium":
            basicPrice += 2000;
            break;
        case "large":
            basicPrice += 3000;
            break;
    }

    // Yakuniy hisoblangan qiymatni qaytaramiz
    return basicPrice;
}

// Callback funksiyasi
function pizzaReadyCallback(order, totalPrice) {
    console.log(`Pitsa #${order.id} (${order.type}, ${order.size}) tayyor! Narxi: ${totalPrice} so'm`);
}

// Asosiy buyurtma funksiyasi
function orderPizza(order, callback) {
    console.log(`Pitsa #${order.id} (${order.type}, ${order.size}) buyurtma qilindi. Pishirish boshlandi...`);

    // 2 soniyadan keyin
    setTimeout(() => {
        // Narxni hisoblaymiz
        const totalPrice = calculatePrice(order);

        // Callback funksiyasini chaqiramiz
        callback(order, totalPrice);
    }, 2000);
}

// Massivni qayta ishlash
pizzaOrders.forEach(function (order) {
    orderPizza(order, pizzaReadyCallback);
});

*/

const sotuv = [
    {
        id: 1,
        productName: "MacBook Pro 16-inch",
        basePrice: 30000000,
        monthlyPayment: 6
    },
    {
        id: 2,
        productName: "iPhone 15 Pro ",
        basePrice: 13000000,
        monthlyPayment: 5
    },{
        id: 1,
        productName: "Samsung Galaxy S25 Ultra",
        basePrice: 14000000,
        monthlyPayment: 9
    },
]

function calculateFinalPrice(basePrice, brand, model) {
  let finalPrice = basePrice;

  // Brendga qarab ustama qo'shamiz
  switch (brand.toLowerCase()) {
    case "Macbook":
      finalPrice *= 1.05; // +5% ustama
      break;
    case "iphone":
      finalPrice *= 0.98; // -2% chegirma
        break;
    case "iphone":
      finalPrice *= 0.9; // -10% chegirma
        break;
  }

  // Modelga qarab chegirma qo'shamiz
  switch (model.toLowerCase()) {
    case "eski_model":
      finalPrice *= 0.9; // -10% chegirma
      break;
    case "yangi_model":
      finalPrice *= 1.02; // +2% ustama
      break;
  }

  return finalPrice;
}

const basePrice = 10000000;
const brand = "iphone";
const model = "eski_model";

const finalPrice = calculateFinalPrice(basePrice, brand, model);
console.log(`Asosiy narx: ${basePrice}`);
console.log(`Brend: ${brand}, Model: ${model}`);
console.log(`Yakuniy narx: ${finalPrice}`);
