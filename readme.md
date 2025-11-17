# APORIA — Your Greek Philosophy Assistant  
Landing Page & Informational Website  

---

## 🎭 Deskripsi Singkat

**Aporia** adalah sebuah landing page statis modern yang dirancang untuk memperkenalkan *Your Greek Philosophy Assistant*.  
Website ini menampilkan tema estetika Yunani Kuno dengan elemen visual seperti simbol Φ, motif kuil Olympus, info cards, profil tim, dan sistem tema gelap/terang.

Tujuan repo ini adalah menyediakan struktur profesional, bersih, dan mudah dikembangkan untuk proyek edukasi, asisten AI, atau platform pembelajaran filosofi.

---

## ✨ Fitur Utama

- **Hero Header** dengan logo Φ, tagline, dan background elegan.
- **Info Panel (3 Cards)** — Filosofi Yunani, Kebijaksanaan Kuno, dan Tanya Apa Saja.
- **Our Team Section** — menampilkan 3 anggota tim dengan foto, nama, dan deskripsi.
- **Quote Section** — kutipan klasik *Know Thyself*.
- **Dark Mode Toggle** — interaksi sederhana via JavaScript.
- **Footer Lengkap** — Tentang, Social Media, Site Links.
- **Responsif** — bekerja di desktop dan mobile.
- **Struktur kode rapi** — mudah dikembangkan ke multipage.

---

## 📁 Struktur Direktori

```
asilkomtech-betterthangpt/
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── assets/
│   └── images/
│       └── member1.jpg
│       └── member2.jpg
│       └── member3.jpg
│
├── model/                 # model AI agent
│
├── pages/
│   ├── About/
│   │    └── index.html     # halaman About
│   │
│   └── Home/
│       └── index.html     # halaman Home
│
└── index.html             # landing page utama
```

### Catatan Penting  
- Pastikan file utama bernama **index.html**, bukan `indeks.html`.
- Jika foto anggota masih digabung, pisahkan menjadi 3 file individual.
- Folder `model/` boleh dihapus jika tidak digunakan.

---

## 🛠️ Teknologi yang Digunakan

- **HTML5** (struktur halaman)
- **CSS3** (layout, efek, animasi ringan)
- **JavaScript** (toggle dark mode & interaksi kecil)
- Tidak membutuhkan backend (static website)

---

## 🚀 Cara Menjalankan Secara Lokal

### 1. Menggunakan Live Server (VSCode)
Paling direkomendasikan.  
Cukup klik **Go Live** → otomatis terbuka di browser.

### 2. Menggunakan Python
```bash
python3 -m http.server 8000
```

Akses di: [http://localhost:8000/](http://localhost:8000/)

### 3. Menggunakan Node.js Serve

```bash
npm install -g serve
serve . -p 5000
```

---

## 🎨 Style & Panduan Pengembangan

- Gunakan variabel CSS (`:root`) agar mudah mengatur tema atau warna.
- Untuk elemen yang membutuhkan layering, **pastikan sudah pakai `position: relative`** agar `z-index` berfungsi.
- Untuk spasi kosong di antara section, gunakan utilitas seperti:

```css
.spacer-lg { height: 180px; }
```

- Gunakan `object-fit: cover` untuk menjaga foto tim terlihat rapi.
- Semua elemen interaktif (toggle tema, dsb.) sudah terhubung lewat `script.js`.

---

## 👥 Menambahkan / Mengubah Konten Tim

1. Masukkan foto ke:
```
assets/images/
```

2. Format yang disarankan: `member1.jpg`, `member2.jpg`, `member3.jpg`.

3. Edit section tim di `index.html`:

```html
<img src="assets/images/member1.jpg" alt="Nama Member">
<h3>Nama Member</h3>
<p>Deskripsi singkat yang profesional.</p>
```

---

## 🧠 Paragraf Info Cards (Versi Diperpanjang)

Berikut paragraf gabungan untuk digunakan pada halaman utama atau bagian "Tentang Kami":

> *Aporia adalah platform pembelajaran yang menghadirkan kembali kebijaksanaan Yunani Kuno melalui pendekatan yang sederhana, visual, dan interaktif. Kami mengeksplorasi pemikiran para filosof besar seperti **Socrates, Plato, dan Aristoteles**, serta menghubungkannya dengan kehidupan modern. Melalui penjelasan ringan, konten edukatif, dan tanya jawab langsung, Aporia membantu Anda memahami konsep-konsep seperti etika, logika, retorika, dan makna hidup. Situs ini dirancang untuk semua kalangan — dari pemula hingga penggemar filosofi — agar dapat menikmati wawasan klasik yang tetap relevan selama ribuan tahun.*

---

## ☁️ Deploy (Hosting)

Anda dapat meng-hosting website ini di layanan gratis seperti:

### 1. GitHub Pages

- Push repo
- Buka **Settings → Pages → Source: main/root**
- Selesai

URL akan berbentuk: `https://username.github.io/asilkomtech-betterthangpt/`

### 2. Netlify (super mudah)

- Drag & drop folder project
- Otomatis online

### 3. Vercel

- Connect repo
- Deploy otomatis

---

## ✔️ Checklist Sebelum Deploy

- [ ] Kompres gambar ke WebP
- [ ] Minify CSS & JS
- [ ] Tambahkan `alt=""` pada seluruh gambar
- [ ] Tambahkan favicon (logo Φ)
- [ ] Tambahkan meta SEO:

```html
<meta name="description" content="Aporia — Your Greek Philosophy Assistant. Pelajari filsafat Yunani kuno dengan cara sederhana.">
```

---

## 📌 Kontribusi

Kontribusi terbuka. Gunakan format commit berikut:

- `feat:` fitur baru
- `fix:` perbaikan bug
- `docs:` perbaikan dokumentasi
- `style:` perbaikan tampilan / CSS
- `refactor:` perapian kode
- `chore:` tugas non-fitur

Buat branch baru sebelum PR.

---

## 🗂️ Changelog

```
v0.1.0 — Initial Commit
- Struktur folder stabil
- Landing page dengan header, info cards, team, quote, footer
- Dark mode toggle
- About page
```

---

## 📜 Lisensi (MIT)

```
MIT License

Copyright © 2025 Aporia

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
```

---

## 📞 Kontak / Credits

- **Developer:** Rakasya Yoga Surya Pratama
- **Konsep & Desain UI:** Aporia Team
- **Icon & Assets:** dibuat sendiri / bebas lisensi

---

## 🎉 Terima Kasih!

Jika repo ini membantu, jangan lupa ⭐ di GitHub!  
Aporia terus dikembangkan untuk menjadi platform pembelajaran filosofi yang lebih baik.