import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const skills = [
  { name: "Adobe Photoshop", progress: 85 },
  { name: "Adobe Illustrator", progress: 40 },
  { name: "Microsoft Word", progress: 60 },
  { name: "Microsoft PowerPoint", progress: 60 }
];

const references = [
  { name: "Michael R. Magee", address: "4418 Bobcat Drive Southfield, MI 48034" },
  { name: "Travis M. Godinez", address: "2755 Oakmound Drive, Chicago, IL 60605" }
];

const hobbies = [
  { name: "Traveling" },
  { name: "Playing Football" },
  { name: "Reading Books" }
];

app.get('/skills', (_, res) => res.json(skills));
app.get('/references', (_, res) => res.json(references));
app.get('/hobbies', (_, res) => res.json(hobbies));

const PORT = 1488;
app.listen(PORT, () => console.log(`Mock API running at http://localhost:${PORT}`));
