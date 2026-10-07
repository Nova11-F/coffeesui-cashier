<div align="center">

## ☕ COFFEESUI CASHIER

### *Modern Coffee Shop Point of Sale*

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Lucide](https://img.shields.io/badge/Lucide_Icons-F56565?style=for-the-badge&logo=lucide&logoColor=white)](https://lucide.dev/)
[![Google Fonts](https://img.shields.io/badge/Plus_Jakarta_Sans-4285F4?style=for-the-badge&logo=googlefonts&logoColor=white)](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
[![License](https://img.shields.io/badge/License-Educational-blue?style=for-the-badge)]()

Aplikasi kasir interaktif untuk coffee shop yang membantu mengelola pesanan, menghitung total pembayaran, dan memproses transaksi secara cepat langsung dari browser.

</div>


# 📖 Tentang Proyek

**Coffeesui Cashier** merupakan aplikasi Point of Sale (POS) berbasis *client-side* yang dibangun menggunakan **HTML, CSS, dan JavaScript (ES6+)** tanpa framework maupun proses build.

Website ini memungkinkan pengguna untuk:

- 🛒 Memilih produk dan menambahkannya ke keranjang pesanan
- 🔍 Mencari produk dan memfilter berdasarkan kategori
- 🧮 Menghitung subtotal, pajak, dan total pembayaran secara otomatis
- 💳 Memproses pembayaran dengan metode **QRIS** atau **Cash**

Proyek ini dibuat sebagai media pembelajaran dalam menerapkan konsep **DOM Manipulation**, **Event Delegation**, **State Management**, **Dynamic Rendering**, dan **Form Validation**.


## ✨ Fitur Utama

- **🚀 Loading Screen**:
  - Animasi pembuka bertuliskan *"Preparing your coffee..."* dengan progress bar saat aplikasi dimuat.

- **🛍️ Katalog Produk**:
  - Tampilan daftar produk lengkap dengan gambar.
  - Filter produk berdasarkan **kategori**.
  - Kolom **pencarian** untuk menemukan produk dengan cepat.

- **🧾 Keranjang Pesanan (Order Details)**:
  - Tambah produk ke keranjang hanya dengan satu klik.
  - Ubah jumlah pesanan menggunakan tombol `+` dan `-`.
  - Tampilan khusus ketika keranjang masih kosong.
  - Jumlah item di keranjang diperbarui otomatis.

- **📊 Perhitungan Otomatis**:
  - **Subtotal**: total harga seluruh produk dikalikan jumlahnya.
  - **Tax (10%)**: pajak dihitung otomatis dari subtotal.
  - **Total**: subtotal ditambah pajak, dengan format Rupiah (`id-ID`).

- **💳 Halaman Checkout (Popup)**:
  - Tampil sebagai *overlay* dengan latar belakang gelap.
  - Dua pilihan metode pembayaran: **QRIS** dan **Cash**.
  - **QRIS**: jumlah diterima terisi otomatis sesuai total dan kembalian otomatis `0`.
  - **Cash**: masukkan jumlah uang yang diterima, kembalian dihitung secara real-time.
  - Tombol **Selesaikan Pembayaran** hanya aktif jika metode sudah dipilih dan uang yang diterima mencukupi.
  - Keranjang otomatis dikosongkan setelah transaksi selesai.


## 🛠️ Teknologi yang Digunakan

- **HTML5**: Struktur halaman web semantik.
- **CSS3**: Styling kustom, layout, serta tampilan popup checkout.
- **JavaScript (ES6+)**: Logika keranjang, perhitungan harga, validasi pembayaran, dan render UI dinamis.
- **Lucide Icons (via CDN)**: Library ikon yang ringan dan konsisten.
- **Google Fonts**: Font *Plus Jakarta Sans* untuk tampilan yang modern.


## 📁 Struktur Proyek

```text
.
├── img/          # Gambar produk
├── index.html    # Struktur UI utama aplikasi kasir
├── style.css     # Styling kustom & tampilan checkout
└── script.js     # Logika keranjang, perhitungan, & proses pembayaran
```


## 💻 Cara Menjalankan Proyek

Aplikasi ini berjalan sepenuhnya di sisi client sehingga dapat dibuka langsung di browser. Koneksi internet dibutuhkan untuk memuat ikon Lucide dan Google Fonts dari CDN.

### Opsi 1: Clone & Buka Langsung
```bash
git clone https://github.com/Nova11-F/coffeesui-cashier.git
cd coffeesui-cashier
```
Lalu buka file `index.html` di browser.

### Opsi 2: Menggunakan VS Code Extension (Live Server)
1. Buka folder proyek di **Visual Studio Code**.
2. Instal ekstensi **Live Server** oleh *Ritwick Dey*.
3. Klik kanan pada file `index.html` dan pilih **Open with Live Server**.

### Opsi 3: Menggunakan Python Web Server
```bash
# Untuk Python 3.x
python -m http.server 8000
```
Buka browser dan akses halaman melalui `http://localhost:8000`.


## 🔄 Alur Pembayaran

| Metode | Jumlah Diterima | Kembalian | Tombol Selesaikan |
| :--- | :--- | :--- | :--- |
| *Belum dipilih* | Terkunci & kosong | Kosong | Nonaktif |
| **QRIS** | Otomatis sesuai total (terkunci) | Otomatis `0` | Langsung aktif |
| **Cash** | Diisi manual oleh kasir | `Uang diterima - Total` | Aktif jika uang ≥ total |


## ⚙️ Penjelasan Fungsi Utama Kode

- **`getTotalHarga()` (`script.js`)**:
  Menghitung subtotal dari seluruh item di keranjang, menambahkan pajak 10%, lalu mengembalikan nilai `subTotal`, `tax`, dan `totalHarga`.
- **`renderCart()` (`script.js`)**:
  Merender ulang panel keranjang, baik tampilan keranjang kosong maupun daftar item beserta ringkasan biaya dan tombol bayar.
- **`renderCheckOutPage()` (`script.js`)**:
  Membangun tampilan popup checkout yang berisi total pembayaran, pilihan metode, input uang diterima, dan kembalian.
- **`updateCheckoutState()` (`script.js`)**:
  Mengatur status input, nilai kembalian, dan tombol selesai secara konsisten sesuai metode pembayaran yang dipilih.
- **`finished()` (`script.js`)**:
  Memvalidasi pembayaran, menyelesaikan transaksi, mengosongkan keranjang, dan menutup halaman checkout.
- **`closeCheckOutPage()` (`script.js`)**:
  Menutup popup checkout dengan menghapus class `active` pada overlay.


# 🎯 Tujuan Proyek

Proyek ini dibuat sebagai latihan dalam mengembangkan aplikasi kasir sederhana dengan menerapkan:

- Struktur kode JavaScript yang rapi dan mudah dipelihara
- Manipulasi DOM & Event Delegation
- Dynamic Rendering menggunakan template literal
- Validasi input dan pengelolaan state pembayaran
- Format mata uang dengan `toLocaleString("id-ID")`
- User Interface (UI) & User Experience (UX) modern


# 🚀 Rencana Pengembangan

Beberapa fitur yang akan dikembangkan di masa mendatang:

- 🕘 Riwayat Transaksi
- 🖨️ Cetak Struk Pembayaran
- 💾 Penyimpanan Data (localStorage / Database)
- 🛠️ Manajemen Produk (Tambah, Ubah, Hapus)
- 📱 Penyempurnaan Tampilan Responsif untuk Tablet & Ponsel
- 🗄️ Backend API Integration (Node.js / Express)


## 📜 Lisensi

Proyek ini dibuat untuk tujuan edukasi dan portofolio pengembangan aplikasi web frontend. Silakan kembangkan dan kustomisasi sesuai kebutuhan Anda.

<div align="center">

### ⭐ Jangan lupa berikan Star jika proyek ini bermanfaat!

Created by [Nova11-F](https://github.com/Nova11-F)

</div>
