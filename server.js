const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const root = path.resolve(__dirname);

// Layani file statis apa pun di folder ini
app.use(express.static(root));

// Tambahkan fallback supaya navigasi SPA tetap mengirimkan halaman awal
app.get('*', (req, res) => {
  res.sendFile(path.join(root, 'login.html'));
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}/`);
});
