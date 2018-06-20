/*
Your quirky boss collects rare, old coins. They found out you're a programmer 
and asked you to solve something they've been wondering for a long time. 

Write a function that, given an amount of money and an array of coin denominations, 
computes the number of ways to make the amount of money with coins of the available 
denominations. 

Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program 
would output 4—the number of ways to make 4¢ with those denominations: 
*/

function changePossibilies(amount, denominations) {
    let p = [];
    p[0] = 1;
    for (let i = 1; i <= amount; i++) {
        p[i] = 0;       
    }
  
    denominations.forEach(den =>{
        for (let i = den; i <= amount; i++) {
            let rem = i - den;
            p[i] += p[rem];
        }
    });
  
    return p[amount]; 
  } 
  
  changePossibilies(4, [1,2,3]);
  
  