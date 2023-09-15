// Write a function that takes in an array of the day's stock prices,
// and returns an object with the best buy price, sell price, and profit.

function findBestBuySellPrices(prices) {
    if (prices.length < 2) {
      return null; // Not enough data to make a profit
    }
  
    let bestBuyPrice = prices[0];
    let bestSellPrice = prices[1];
    let maxProfit = bestSellPrice - bestBuyPrice;
  
    for (let i = 1; i < prices.length; i++) {
      const currentPrice = prices[i];
      const potentialProfit = currentPrice - bestBuyPrice;
  
      if (potentialProfit > maxProfit) {
        bestSellPrice = currentPrice;
        maxProfit = potentialProfit;
      }
  
      if (currentPrice < bestBuyPrice) {
        bestBuyPrice = currentPrice;
      }
    }
  
    return {
      buyPrice: bestBuyPrice,
      sellPrice: bestSellPrice,
      profit: maxProfit,
    };
  }
  
  // Example usage:
//   const stockPrices = [10, 7, 5, 8, 11, 9];
//   const result = findBestBuySellPrices(stockPrices);
//   console.log(result); // Output: { buyPrice: 5, sellPrice: 11, profit: 6 }

//   Solution code from class:

let stocks = [10,3,2,7,1,7,6]

const stockPrices = (arr) => {
    let lowest = arr[0]
    let stockObj = {
        profit: 0
    }

    for (let i = 0; i < arr.length; i++) {
        let currentPrice = arr[i]
        if (currentPrice < lowest){
            lowest = currentPrice
        }

        let profit = currentPrice - lowest
        if(profit > stockObj.profit){
            stockObj.profit = profit
            stockObj.buyPrice = lowest
            stockObj.sellPrice = currentPrice
        }
    }
    return stockObj
}

console.log(stockPrices(stocks))