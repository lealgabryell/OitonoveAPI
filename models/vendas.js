import mongoose from "mongoose";

const vendaSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  cliente: { type: String, required: false },
  idProdutos: [{ type: Number, required: true }],
  DataVenda: { type: Date, default: Date.now() },
  valorPago: { type: Number, required: true },
});

export default mongoose.model("Venda", vendaSchema);
