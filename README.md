# Mini DMS Static Hosting

## Tujuan
Menyiapkan server ringan berbasis Node.js supaya semua file HTML/CSS di folder ini bisa dijalankan kapan saja.

## Langkah yang dibutuhkan
1. **Pasang dependensi**
   ```bash
   npm install
   ```
2. **Jalankan server**
   ```bash
   npm start
   ```
   Server akan berjalan di `http://localhost:3000` secara default.
3. **Ubah port (opsional)**
   ```bash
   PORT=5000 npm start
   ```
   (atau `set PORT=5000` di PowerShell/Command Prompt sebelum `npm start`).

## Catatan
- `server.js` menempatkan folder ini sebagai direktori statis sehingga semua file `.html`, `.css`, dan `db.json` dapat diakses langsung.
- Penambahan `app.get('*', …)` menjaga agar routing berbasis front-end tetap kembali ke `login.html` jika pengguna membuka jalan selain berkas yang ada.
- Bila ingin hosting ke layanan publik (misalnya Vercel, Railway, Render), cukup unggah folder ini dan pastikan `npm install` dijalankan plus perintah start-nya mengarah ke `node server.js`.

## Hosting di GitHub Pages
- Halaman utama sekarang tersedia lewat `index.html`, jadi GitHub Pages bisa langsung mengarahkan pengunjung ke `login.html` tanpa konfigurasi tambahan.
- Untuk mempublikasikan:
  1. Push isi folder ini ke branch `main` dari repositori GitHub yang Anda kontrol.
  2. GitHub Action di `.github/workflows/gh-pages.yml` otomatis akan menyalin seluruh konten ke branch `gh-pages` setiap ada push ke `main`.
  3. Buka _Settings → Pages_ di repo, lalu pilih branch `gh-pages` dengan folder `/` untuk mengaktifkan situs. URL akan berbentuk `https://<username>.github.io/<repo>`.
  4. Kalau ingin domain khusus, tambahkan `CNAME` ke root dan atur di _Custom domain_.
- Keterbatasan penting: semua permintaan API (`fetch("http://localhost:3000/...")`) tidak berjalan di GitHub Pages karena tidak ada server Express. Versi GitHub Pages hanya menampilkan antarmuka statis; data `db.json` tetap bisa dilihat langsung tapi tidak bisa disunting atau menyimpan log baru. Jika perlu demonstrasi interaktif, pertimbangkan mengalihkan logika ke _mock_ dengan `db.json` yang diambil secara lokal dan disimpan ke `localStorage`.
