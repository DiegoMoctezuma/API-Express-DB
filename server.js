const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Corse
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.get('/explorers', async (req, res) => {
    const allExplorers =  await prisma.explorer.findMany({});
    res.json(allExplorers);
});

app.get('/explorers/:id', async (req, res) => {
    const id = req.params.id;
    const explorer = await prisma.explorer.findUnique({where: {id: parseInt(id)}});
    res.json(explorer);
});

app.post('/explorers', async (req, res) => {
    const explorer = {
      name: req.body.name,
      username: req.body.username,
      mission: req.body.mission
     };
    const message = 'Explorer creado.';
    await prisma.explorer.create({data: explorer});
    return res.json({message});
});

app.put('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.explorer.update({
		where: {
			id: id
		},
		data: {
			mission: req.body.mission
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.explorer.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

// Nuevos explorers
app.get('/nuevosExplorers', async (req, res) => {
  const allExplorers =  await prisma.nuevoExplorer.findMany({});
  res.json(allExplorers);
});

app.get('/nuevosExplorers/:id', async (req, res) => {
  const id = req.params.id;
  const explorer = await prisma.nuevoExplorer.findUnique({where: {id: parseInt(id)}});
  res.json(explorer);
});

app.post('/nuevosExplorers', async (req, res) => {
  const Explorer = {
    name: req.body.name,
    lang: req.body.lang,
    missionCommander: req.body.missionCommander
   };
  const message = 'Explorer creado.';
  await prisma.nuevoExplorer.create({data: Explorer});
  return res.json({message});
});

app.put('/nuevosExplorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.nuevoExplorer.update({
		where: {
			id: id
		},
		data: {
			missionCommander: req.body.missionCommander
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/nuevosExplorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.nuevoExplorer.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});