import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  descricao: { type: String, required: true },
  marca: { type: String, required: true },
  tamanho: { type: String, required: true },
  cor: { type: String, required: true },
  valorUnit: { type: Number, required: true },
  quantidadeEstoque: { type: Number, required: true },
  imagem: { type: String, required: false },
  createdAt: { type: Date, default: Date.now() },
});

export default mongoose.model("Produto", produtoSchema);
