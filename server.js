const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

app.use(express.static(__dirname));

function readCount() {
  const raw = fs.readFileSync(path.join(__dirname, 'enum.json'), 'utf-8');
  return JSON.parse(raw).searchCount || 0;
}

function writeCount(n) {
  fs.writeFileSync(path.join(__dirname, 'enum.json'), JSON.stringify({ searchCount: n }));
}

app.get('/api/count', (req, res) => {
  res.json({ searchCount: readCount() });
});

app.post('/api/count/increment', (req, res) => {
  const current = readCount();
  const next = current + 1;
  writeCount(next);
  res.json({ searchCount: next });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Lyrixa lancé sur http://localhost:${PORT}`);
});
