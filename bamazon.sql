-- Creates the database --
CREATE DATABASE bamazon;

-- Makes it so all of the following code will affect bamazon --
USE bamazon;

-- Creates the table "products" within this database --
CREATE TABLE products (
  -- Auto-incremented ID that will be assigned to each item in the table automatically and cannot be null --
  item_id Integer(10) NOT NULL auto_increment,
  -- Name of the individual product in the database --
  product_name VARCHAR(30) NOT NULL,
  -- Mname of the department that the product resides in --
  department VARCHAR(30) NOT NULL,
  -- Price of the product for the customer --
  price decimal(10, 2) NOT NULL,
  -- Stock or inventory level of the product in the table --
  stock_quantity INTEGER(10) NOT NULL
);

-- Creates new rows containing data in all named columns --
INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("Banana", "Produce", 1.01, 20), 
("Asparagus", "Produce", 3.99, 15), 
("Angel Hair Spaghetti", "Pasta", 1.89, 18),
("Linguini", "Pasta", 2.02, 25),
("Vanilla Bean Icecream", "Frozen", 3.45, 16),
("Strawberry Icecream", "Frozen", 2.99, 7),
("Turkey Slices", "Deli", 4.25, 9),
("Roast Beef Slices", "Deli", 5.45, 11),
("Maple Bar", "Bakery", .88, 12),
("Lemon Bar", "Bakery", .75, 13);
