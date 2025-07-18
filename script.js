function updatePrice(amountInputId, pricePer1000, totalSpanId) {
  const amount = document.getElementById(amountInputId).value;
  const total = (amount / 1000) * pricePer1000;
  document.getElementById(totalSpanId).innerText = total.toFixed(2);
}

document.getElementById('igFollowersAmount').addEventListener('input', () => {
  updatePrice('igFollowersAmount', 2.99, 'igFollowersTotal');
});

document.getElementById('ttLikesAmount').addEventListener('input', () => {
  updatePrice('ttLikesAmount', 1.29, 'ttLikesTotal');
});

// Inicializa precios al cargar
updatePrice('igFollowersAmount', 2.99, 'igFollowersTotal');
updatePrice('ttLikesAmount', 1.29, 'ttLikesTotal');
