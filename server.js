const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Dummy login credentials
const users = [
  { email: 'test@example.com', password: '123456' }
];

app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
