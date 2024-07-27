import express from "express";
import mongoose from "mongoose";
import fastify from "fastify";
import Produto from "./models/produto.js";
import Venda from "./models/vendas.js";

//promise de conection com o mongoose
mongoose
  .connect(
    "mongodb+srv://user1:root123@clusteroitonove.ijahpkl.mongodb.net/?retryWrites=true&w=majority&appName=ClusterOitonove"
  )
  .then(() => console.log("conectado"))
  .catch(() => console.log("deu ruim"));

const app = express();

app.use(express.json());

const produtos = [];

app.get("/readProdutos", async (request, response) => {
  const produtos = await Produto.find();

  return response.status(200).json(produtos);
});

app.post("/createProduto", async (request, response) => {
  const produto = request.body;

  const newProduto = await Produto.create(produto);

  return response.status(201).json(newProduto);
});

app
  .listen(3000);
