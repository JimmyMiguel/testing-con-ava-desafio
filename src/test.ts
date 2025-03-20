import test from "ava";
import { Product, User } from "./index";

test("Testeo la clase Product", (t) => {
  const product = new Product("Product 1", 10);
  t.is(product.name, "Product 1");
  t.is(product.price, 10);
});


/// test de la clse User

test("Testeo la clase User", (t) => {
  const product1 = new Product("Nombre 1",1);
  const product2 = new Product ("Nombre 2",2);
  const user1 = new User("Usuario 1");
  user1.addProduct(product1);
  user1.addProduct(product2);
  t.is(user1.name ,"Usuario 1");
/// aqui pruebo si los productos se han ananaido correctamente al array de productos
  const totalProduct =  [product1,product2];
  t.deepEqual(user1.products,totalProduct)

}) 