import {db} from '../db/db.js';


export async function insert(newProduct) {

  const { name, price, categoryId } = newProduct;

  let connection;
  let isnserted = false;
  const query = "INSERT INTO productos (name, price, categoryId) VALUES (?, ?, ?)";

  try {
    connection = await db.getConnection();
    const res = await connection.query(query, [name, price, categoryId]);
    isnserted = true
  } catch (err) {
    console.error("Error al cargar datos:", err);
    isnserted = false;
  } finally {
    if (connection) connection.release();
  }

  return isnserted;

}


export async function select() {

  let connection;
  const query = "SELECT * FROM productos";

  try {
    connection = await db.getConnection();
    const [productos] = await connection.query(query);
    return productos;
  } catch (err) {
    console.error("Error al consultar: ", err);
  } finally {
    if (connection) connection.release(); // Devuelve la conexión al pool
  }
}


export async function selectByCategory(categoryId) {

  let connection;
  const query = "SELECT * FROM productos WHERE categoryId = ?";

  try {
    connection = await db.getConnection();
    const [productos] = await connection.query(query, [categoryId]);
    return productos;
  } catch (err) {
    console.error("Error al consultar: ", err);
  } finally {
    if (connection) connection.release();
  }
}


export async function selectGreaterThanPrice(price) {

  let connection;
  const query = "SELECT * FROM productos WHERE price > ?";

  try {
    connection = await db.getConnection();
    const [productos] = await connection.query(query, [price]);
    return productos;
  } catch (err) {
    console.error("Error al consultar: ", err);
  } finally {
    if (connection) connection.release();
  }
}


export async function selectLessThanPrice(price) {

  let connection;
  const query = "SELECT * FROM productos WHERE price < ?";

  try {
    connection = await db.getConnection();
    const [productos] = await connection.query(query, [price]);
    return productos;
  } catch (err) {
    console.error("Error al consultar: ", err);
  } finally {
    if (connection) connection.release();
  }
}