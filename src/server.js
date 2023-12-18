const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs/promises");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors())

const pathRomsJson = "src/roms.json";

app.get("/roms", async (req, res) => {
  try {
    const data = await fs.readFile(pathRomsJson, "utf-8");
    res.json(JSON.parse(data));
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao Ler os ROMs!");
  }
});

app.post("/roms", async (req, res) => {
  try {
    const roms = req.body;
    await fs.writeFile(pathRomsJson, JSON.stringify(roms, null, 2));
    res.json(roms);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao Atualizar os ROMs.");
  }
});

app.delete("/roms/:id", async (req, res) => {
  try {
    const roms = await fs.readFile(pathRomsJson, "utf-8");
    const romsArray = JSON.parse(roms);
    
    const romIdToDelete = parseInt(req.params.id);
    const updatedRoms = romsArray.filter((rom) => rom.id !== romIdToDelete);
    
    await fs.writeFile(pathRomsJson, JSON.stringify(updatedRoms, null, 2));
    
    res.json(updatedRoms);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao Excluir o ROM.");
  }
});

app.delete("/roms", async (req, res) => {
  try {
    await fs.writeFile(pathRomsJson, '[]');
    res.json([]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao Excluir todos os ROMs.");
  }
});

app.listen(port, () => {
  console.log(`Servidor esta rodando em http://localhost:${port}`);
});
