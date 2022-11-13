let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

let stripe = Stripe(
  "pk_test_51M1xQVILTqtLCobiAUmxt46hgy8TosjqymTzMBtwHyLKtEAPVRoL2Wtz2p56mOzeGDy266ziRZk0ygQhMtaFTJrI00kWyD9mBH"
);

btn1.addEventListener("click", () => {
  stripe
    .redirectToCheckout({
      lineItems: [
        {
          price: "price_1M3PDPILTqtLCobiYmsCApsW",
          quantity: 1,
        },
      ],
      mode: "payment",
      successUrl: "https://www.google.com/",
      cancelUrl: "https://www.youtube.com/",
    })
    .then(function (result) {});
});

btn2.addEventListener("click", () => {
  stripe
    .redirectToCheckout({
      lineItems: [
        {
          price: "price_1M3PIMILTqtLCobiHEq0r9Hm",
          quantity: 1,
        },
      ],
      mode: "payment",
      successUrl: "https://www.google.com/",
      cancelUrl: "https://www.youtube.com/",
    })
    .then(function (result) {});
});
btn3.addEventListener("click", () => {
  stripe
    .redirectToCheckout({
      lineItems: [
        {
          price: "price_1M3PK1ILTqtLCobiwsn0n6k7",
          quantity: 1,
        },
      ],
      mode: "payment",
      successUrl: "https://www.google.com/",
      cancelUrl: "https://www.youtube.com/",
    })
    .then(function (result) {});
});
btn4.addEventListener("click", () => {
  1;
  stripe
    .redirectToCheckout({
      lineItems: [
        {
          price: "price_1M3PMiILTqtLCobieppVkDIS",
          quantity: 1,
        },
      ],
      mode: "payment",
      successUrl: "https://www.google.com/",
      cancelUrl: "https://www.youtube.com/",
    })
    .then(function (result) {});
});



let book = document.querySelectorAll(".book");
book.forEach((element, index) => {
    let img = document.getElementsByClassName("book")[index];
    let imgSrc = img.getAttribute('src');
    let imgWidth = img.offsetWidth / 16;
    element.addEventListener("mouseover", () => {
        let number = Math.floor((Math.random() * 2) + 1);
        img.src = `img/ob${number}.png`;
        img.style.width = "13.5rem";
    });
    element.addEventListener("mouseout", () => {
       img.src = imgSrc;
       img.style.width = imgWidth + "rem";
    });
});


