const services = {
  ig_followers: { name: "Instagram Followers", pricePer1000: 2.99 },
  ig_verified_followers: { name: "Instagram Verified Followers", pricePer1000: 9.99 },
  ig_likes: { name: "Instagram Likes", pricePer1000: 1.49 },
  ig_verified_likes: { name: "Instagram Verified Likes", pricePer1000: 4.99 },
  ig_comments: { name: "Instagram Comments", pricePer1000: 3.99 },
  ig_verified_comments: { name: "Instagram Verified Comments", pricePer1000: 8.99 },
  tt_followers: { name: "TikTok Followers", pricePer1000: 2.49 },
  tt_verified_followers: { name: "TikTok Verified Followers", pricePer1000: 9.99 },
  tt_likes: { name: "TikTok Likes", pricePer1000: 1.29 },
  tt_verified_likes: { name: "TikTok Verified Likes", pricePer1000: 4.99 },
  tt_comments: { name: "TikTok Comments", pricePer1000: 3.99 },
  tg_members: { name: "Telegram Members", pricePer1000: 3.49 },
  tg_likes: { name: "Telegram Likes", pricePer1000: 2.49 },
  tg_boost: { name: "Telegram Boost", pricePer1000: 3.99 },
  yt_views: { name: "YouTube Views", pricePer1000: 1.99 },
  yt_likes: { name: "YouTube Likes", pricePer1000: 1.49 },
  yt_comments: { name: "YouTube Comments", pricePer1000: 2.99 },
  snap_followers: { name: "Snapchat Followers", pricePer1000: 3.99 },
  spotify_followers: { name: "Spotify Followers", pricePer1000: 4.99 },
  kick_followers: { name: "Kick Followers", pricePer1000: 2.99 },
};

const serviceSelect = document.getElementById("serviceSelect");
const amountInput = document.getElementById("amountInput");
const userInput = document.getElementById("userInput");
const priceValue = document.getElementById("priceValue");
const submitOrder = document.getElementById("submitOrder");

function updatePrice() {
  const service = serviceSelect.value;
  const amount = parseInt(amountInput.value);
  if (services[service] && amount >= 100) {
    const total = (amount / 1000) * services[service].pricePer1000;
    priceValue.textContent = total.toFixed(2);
  } else {
    priceValue.textContent = "0.00";
  }
}

serviceSelect.addEventListener("change", () => {
  amountInput.value = 100;
  priceValue.textContent = "0.00";
  userInput.value = "";
  updatePrice();
});

amountInput.addEventListener("input", updatePrice);

submitOrder.addEventListener("click", () => {
  const service = serviceSelect.value;
  const amount = parseInt(amountInput.value);
  const user = userInput.value.trim();

  if (!service) {
    alert("Please select a service.");
    return;
  }
  if (!user) {
    alert("Please enter a username or link.");
    return;
  }
  if (!amount || amount < 100) {
    alert("Amount must be at least 100.");
    return;
  }

  const totalPrice = (amount / 1000) * services[service].pricePer1000;

  alert(
    `Order Details:\nService: ${services[service].name}\nAmount: ${amount}\nUser: ${user}\nTotal Price: €${totalPrice.toFixed(
      2
    )}\n\nPlease send payment to one of the crypto wallets listed and send your payment proof to @CRYPTOBOOSTSUPPORT on Telegram.`
  );

  serviceSelect.value = "";
  amountInput.value = 100;
  userInput.value = "";
  priceValue.textContent = "0.00";
});

// Copy wallet buttons
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const wallet = btn.getAttribute("data-copy");
    navigator.clipboard.writeText(wallet).then(() => {
      btn.textContent = "Copied!";
      setTimeout(() => {
        btn.textContent = "Copy";
      }, 1500);
    });
  });
});
