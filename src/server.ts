import express, { request, response } from "express"

const app = express();

// GET = buscas
// POST = criação
// PUT = Alteração
// Delete = deletar
// PATH = alterar uma informação especifica


app.get("/", (request, response) => {
    return response.json({
    message : "Olá NLW 5",
    });
});
app.post("/", (request, response) => {
    return response.json({ message: "Usuário salvo com sucesso!"});
});

app.listen(3333, () => console.log("Server está rodando na porta 3333"))