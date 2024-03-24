import { pool } from "../db.js";

export const getProducts = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * from products");
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * from products WHERE id=?", [
      req.params.id,
    ]);
    if (result.length <= 0)
      return res.status(404).json({ message: "Productos no encontrado" });
    res.json(result[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const postProduct = async (req, res) => {
  try {
    const [result] = await pool.query("INSERT INTO products SET?", req.body);
    //res.json(result)
    res.send({
      id: result.insertId,
      registro: req.body,
    });
    //res.send('Productos guardado por POST')
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const putProduct = async (req, res) => {
  try {
    const [result] = await pool.query("UPDATE products SET? WHERE id=?", [
      req.body,
      req.params.id,
    ]);
    if (result.affectedRows <= 0)
      return res.status(404).json({ message: "Productos no encontrado" });
    res.status(204).json({ message: "Productos actualizado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM products WHERE id=?", [
      req.params.id,
    ]);
    if (result.affectedRows <= 0)
      return res.status(404).json({ message: "Productos no encontrado" });
    res.status(204).json({ message: "Productos eliminado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const patchProduct = async (req, res) => {
  try {
    const [result] = await pool.query("UPDATE products SET ?  WHERE id = ?", [
      req.body,
      req.params.id,
    ]);

    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: "Productos no encontrado" });
    }
    const [row] = await pool.query("SELECT * from products WHERE id=?", [
      req.params.id,
    ]);
    res.json(row[0]);
    //res.status(204).json({message: "Productos actualizado"})
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
