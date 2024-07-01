const express = require("express")
const app = express()


//Exercise One: Be Polite, Greet the User
app.get("/greetings/:username", (req, res) => {
    return res.send(`Spiffing to see you again, ${req.params.username} old chap!`)
})


//Exercise Two: Rolling the Dice
app.get("/roll/:diceRoll", (req, res) => {
    if (!Number.isInteger(parseInt(req.params.diceRoll))) {         //first check if NaN, if =int, parseInt - Number.is integer(input) = int (check syntax)
        return res.send(`You must specify a number`)
    } else {
        return res.send(`You have rolled a ${((Math.floor(Math.random()*(req.params.diceRoll))))}`)
    }
})

    
//Exercise Three: I Want THAT One!
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }];
app.get("/collectibles/:indexParam", (req, res) => {
    //if array contains indexParam
    if(collectibles.hasOwnProperty(req.params.indexParam)) {
        return res.send(`So you want the ${collectibles[req.params.indexParam].name}? For ${collectibles[req.params.indexParam].price} generic units of money, it can be yours!`)
    } else {
        //if array does not have indexParam
        return res.send(`This item is not yet in stock. Check back soon!`)
    }}
)


//Exercise Four: Filter Shoes by Query Parameters
const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];











// app.get('/shoes', (req, res) => {
//     // return res.send(shoes.filter(({price}) => price > req.params.minprice))
//     result = shoes.filter(({price}) => price > Number(req.params.minprice))
//     res.send(result)
// })




app.listen(3000, () => {
    console.log('Express server has started on port 3000')
  })