# MySQL
This app creates an Amazon-like storefront using MySQL. The app will take in orders from customers and deplete stock from the store's inventory. 

## Requirements
- Make a bamazonCustomer.js app that depends on the inputs prompted from the user to query data from MySQL. 
- Take the selections from the user and use that data to adjust the inventory levels of the store.

## Technologies Used
- Node.js
- JavaScript
- MySQL
- Inquirer
- Console.Table

## Code Explanation / Demo
- The user will be shown items available for purchase and walked through the buying process with the steps listed below:

  1) Display Products Available.
    Link to demo: https://drive.google.com/file/d/17OzKI803ceJRcY6FnL14RvEtfeITSKe9/view

  2) Prompt user to select a product ID and the amount they would like to purchase. The purchase price will also be calculated and displayed.
    Link to demo:
    https://drive.google.com/file/d/1mKD1Zn6lbGKA0ev0hlZe_v8JjS7F-VQU/view

  3) If a user selects an stock_quantity over what is available, they will receive and error and be prompted to select a product again.
    Link to demo:
    https://drive.google.com/file/d/10YtSskVGLvOhQeO0kWqRlam0_UMJaTxW/view

  4) The user will be asked if they would like to make another purchase. If the user selects Yes - they updated inventory of products will be displayed and the purchasing process will begin again.
    Link to demo:
    https://drive.google.com/file/d/1v-prqtPT4SGEnwSSsScWfzT_Luoe5K6Q/view

