import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const skills = [
  { name: "Adobe Photoshop", progress: 85 },
  { name: "Adobe Illustrator", progress: 40 },
  { name: "Microsoft Word", progress: 60 },
  { name: "Microsoft PowerPoint", progress: 60 }
];

let references = [
  { name: "Michael R. Magee", address: "4418 Bobcat Drive Southfield, MI 48034" },
  { name: "Travis M. Godinez", address: "2755 Oakmound Drive, Chicago, IL 60605" }
];

const hobbies = [
  { name: "Traveling" },
  { name: "Playing Football" },
  { name: "Reading Books" }
];

app.get('/skills', (_, res) => res.json(skills));

app.get('/hobbies', (_, res) => res.json(hobbies));

app.get('/references', (_req: Request, res: Response) => {
  res.json(references);
});

app.post('/references', (req: Request, res: Response) => {
  const newRef = req.body;
  if (newRef && newRef.name && newRef.address) {
    references.push(newRef);
    res.status(201).json({ message: 'Reference added', reference: newRef });
  } else {
    res.status(400).json({ message: 'Invalid reference' });
  }
});

const PORT = 1488;
app.listen(PORT, () => console.log(`Mock API running at http://localhost:${PORT}`));
