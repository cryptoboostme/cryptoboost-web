// Actualiza el precio en la sección catálogo
document.querySelectorAll('.amount').forEach(input => {
  input.addEventListener('input', () => {
    const pricePer1000 = parseFloat(input.dataset.price);
    const amount = parseInt(input.value) || 0;
    const total = (amount / 1000) * pricePer1000;
    const targetId = input.dataset.target;
    document.getElementById(targetId).innerText = total.toFixed(2);
  });
});

// Inicializa precios en catálogo
document.querySelectorAll('.amount').forEach(input => {
  const pricePer1000 = parseFloat(input.dataset.price);
  const amount = parseInt(input.value) || 0;
  const total = (amount / 1000) * pricePer1000;
  const targetId = input.dataset.target;
  document.getElementById(targetId).innerText = total.toFixed(2);
});

// Manejo formulario pedido
const servicesData = {
  igFollowers: 2.99,
  igLikes: 1.49,
  ttFollowers: 2.49,
  ttLikes: 1.29,
  tgMembers: 3.49,
  ytViews: 1.99,
};

const serviceNames = {
  igFollowers: "Instagram Followers",
  igLikes: "Instagram Likes",
  ttFollowers: "TikTok Followers",
  ttLikes: "TikTok Likes",
  tgMembers: "Telegram Members",
  ytViews: "YouTube Views",
};

const orderForm = document.getElementById('orderForm');
const serviceSelect = document.getElementById('serviceSelect');
const orderAmount = document.getElementById('orderAmount');
const orderUser = document.getElementById('orderUser');
const orderTotal = document.getElementById('orderTotal');

function updateOrderTotal() {
  const selectedService = serviceSelect.value;
  const amount = parseInt(orderAmount.value) || 0;
  if (servicesData[selectedService] && amount >= 100) {
    const price = (amount / 1000) * servicesData[selectedService];
    orderTotal.innerText = price.toFixed(2);
  } else {
    orderTotal.innerText = "0.00";
  }
}

serviceSelect.addEventListener('change', () => {
  // Ajusta valor mínimo según servicio si quieres
  orderAmount.value = 100;
  updateOrderTotal();
});

orderAmount.addEventListener('input', updateOrderTotal);

orderForm.addEventListener('submit', e => {
  e.preventDefault();
  if (!serviceSelect.value) {
    alert("Please select a service.");
    return;
  }
  if (orderAmount.value < 100) {
    alert("Minimum amount is 100.");
    return;
  }
  if (!orderUser.value.trim()) {
    alert("Please enter your username or link.");
    return;
  }
  // Aquí podrías agregar lógica para enviar pedido a backend o API
  alert(`Order submitted!\nService: ${serviceNames[serviceSelect.value]}\nAmount: ${orderAmount.value}\nUser: ${orderUser.value}\nTotal: €${orderTotal.innerText}\n\nPlease send payment to the crypto wallets and send proof to @CRYPTOBOOSTSUPPORT on Telegram.`);
  orderForm.reset();
  orderTotal.innerText = "0.00";
});
