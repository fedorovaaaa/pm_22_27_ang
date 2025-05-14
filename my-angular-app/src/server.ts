import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';

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

// Зберігатимемо користувачів в оперативній пам'яті
const users: any[] = [];

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

app.post('/register', (req: Request, res: Response) => {
  const newUser = req.body;

  // Перевірка на обов’язкові поля
  if (!newUser.email || !newUser.password || !newUser.username) {
    res.status(400).json({ error: 'Всі поля обов’язкові' });
    return;
  }

  // Перевірка на існуючого користувача
  const existingUser = users.find(u => u.email === newUser.email);
  if (existingUser) {
    res.status(409).json({ error: 'Користувач з таким email вже існує' });
    return;
  }

  // Додаємо нового користувача
  users.push(newUser);
  res.status(201).json({ message: 'Користувач зареєстрований', user: newUser });
});

app.get('/users', (_, res: Response) => {
  res.json(users); // Показує всіх зареєстрованих користувачів
});

app.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = users.find((u: { email: string; password: string }) =>
    u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ error: 'Неправильний email або пароль' });
  }

  return res.status(200).json({ message: 'Успішний вхід', user });
});

const PORT = 1444;
app.listen(PORT, () => console.log(`Mock API running at http://localhost:${PORT}`));