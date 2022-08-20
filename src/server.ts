import express from 'express';

const app = express();
const api_port = 3333;

app.get('/', (req, res) => {
  return res.json({ message: 'App on!' });
});

app.listen(api_port, () => console.log(`Server running on port: ${api_port}`));
