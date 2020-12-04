var coinChange = function(coins, amount) {
    
    if(coins.length < 1 || amount === null)
        return -1
    
    if(amount == 0)
        return 0
    
    // arrays are 0 based 
    let dp_size = amount + 1;
    
    let dp = new Array(dp_size).fill(dp_size);
    
    dp[0] = 0; // to make $0 we need 0 coins
    
    // go through all the lil amounts we have to make
    for(let i = 0; i<= amount; i++){
        // go through all our coins
        for(let j = 0; j < coins.length; j++){
            // if the coing is equal or less than the amount we want to make
            // we can use it
            if(coins[j] <= i){
                // dp[i -  coins[j]] means that we have to look now for the coins
                // that can make the amount of the amount minus the coin we added
                // + 1 is the coin we added 
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }
    return dp[amount] > amount ?  -1 : dp[amount];
    
};

// test

let res = coinChange([1, 2, 5], 11);

if(res == -1) 
    console.log("We cannot make up that number");
else 
    console.log("We need at least", res, "coins");