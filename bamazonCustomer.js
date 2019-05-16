var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("console.table");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Sto37*kke",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  displayProducts();
});

// function which prompts the user for what action they should take
function displayProducts() {
  connection.query("SELECT * FROM products;", function (err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    else {
      console.log("Please see the list of products below that are available for purchase.");
      console.table(res);
    }
    selectProduct();
  })

};

function selectProduct(res) {
  inquirer
    .prompt([
      {
        name: "productID",
        type: "input",
        message: "What is the product ID that you would like to purchase?",
      },
      {
        name: "amount",
        type: "input",
        message: "How many would you would like to purchase?",
      }])
    .then(function (answer) {
      var productChoice = answer.productID;
      var quantityChoice = answer.amount;
      var total;
      var newQuantity;

      connection.query("SELECT * FROM products WHERE ?;", { item_id: productChoice }, function (err, res) {
        var productDetails = res[0];
        if (err) throw err;
        if (quantityChoice > productDetails.stock_quantity) {
          console.log("--------------------", "\nQuantity selected not available. Please try again.", "\n--------------------");
          displayProducts();
        } else {
          if (quantityChoice <= productDetails.stock_quantity) {
            console.log("--------------------", "\nGreat Choice - please wait while we get you checked out!", "\n--------------------");
            total = (quantityChoice * productDetails.price).toFixed(2);
            console.log("--------------------", "\nYour order has been processed and your total is $" + total + ".", "\n--------------------");
          }
        }
        var newQuantity = (productDetails.stock_quantity - answer.amount);
      connection.query("UPDATE products SET ? WHERE ?", [{ stock_quantity: newQuantity}, {item_id: productChoice }], function (err, res) {
          if (err) throw err;
          else {
            console.log("--------------------", "\nInventory updated after purchase!", "\n--------------------");
          }
        })
      })

      inquirer.prompt({
        name: "anotherOrder",
        type: "list",
        message: "Would you like to place another order?",
        choices: ["Yes", "No"]
      })
        .then(function (answer) {
          if (answer.anotherOrder === "Yes") {
            displayProducts();
          } else {
            connection.end();
            console.log("--------------------", "\nThank you for shopping at bAmazon! Visit us again soon!", "\n--------------------");
          }
        })
    })
};