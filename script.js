let bitcoin_data = document.getElementById("bitcoin-data");

function getBPI() {
  let url = "https://api.coinbase.com/v2/prices/spot?currency=USD";
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let formatted_data = `1 ${data.data.base} = ${data.data.amount} ${data.data.currency}`;
      console.log(formatted_data);
      bitcoin_data.innerHTML = formatted_data;
    });
}

getBPI();
setInterval(getBPI, 60000);