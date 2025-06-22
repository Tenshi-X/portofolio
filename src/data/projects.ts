// src/data/projects.ts

export const projects = [
  // Kategori WEB
  {
    slug: "supply-management-ahp",
    category: "Web",
    title: "Supply Management (AHP Method)",
    // Ganti 'placeholder.jpg' dengan nama file gambar Anda
    image: "/projects/placeholder.jpg",
    tags: ["Next.js", "Express.js", "AHP"],
    description: `
        <p>Sebuah sistem pendukung keputusan berbasis web yang dirancang untuk membantu perusahaan dalam proses pemilihan supplier secara objektif. Website ini mengimplementasikan metode <i>Analytic Hierarchy Process</i> (AHP) untuk menghitung dan memberi peringkat kepada supplier berdasarkan berbagai kriteria yang telah ditentukan, seperti harga, kualitas, dan waktu pengiriman.</p>
        <p>Aplikasi ini memungkinkan manajer untuk membuat keputusan yang didukung oleh data, mengurangi bias, dan meningkatkan efisiensi dalam rantai pasok.</p>
      `,
  },
  {
    slug: "matahati-edugame",
    category: "Web",
    title: "Matahati - Game Edukasi Hipertensi",
    image: "/projects/placeholder.jpg",
    tags: ["Next.js", "Laravel"],
    description: `
        <p>Matahati adalah platform <i>"edugame"</i> (edukasi-game) interaktif yang bertujuan untuk meningkatkan kesadaran masyarakat mengenai bahaya dan pencegahan hipertensi. Melalui permainan kuis, cerita, dan simulasi, pengguna dapat belajar tentang gaya hidup sehat dengan cara yang menyenangkan dan tidak membosankan.</p>
        <p>Proyek ini menggabungkan backend yang kuat dengan Laravel untuk manajemen konten dan logika game, serta frontend yang cepat dan responsif menggunakan Next.js.</p>
      `,
  },
  {
    slug: "simont-mart-pos",
    category: "Web",
    title: "Simont Mart - Sistem Jual Beli & Stok",
    image: "/projects/placeholder.jpg",
    tags: ["PHP", "MySQL", "Bootstrap"],
    description: `
        <p>Aplikasi web untuk manajemen toko (Point of Sale) dan inventaris barang yang dibangun menggunakan PHP native. Sistem ini mencakup fitur-fitur esensial untuk usaha kecil dan menengah, seperti pencatatan transaksi penjualan, manajemen data produk, pelacakan stok barang secara real-time, dan pembuatan laporan penjualan sederhana.</p>
        <p>Proyek ini dirancang untuk menjadi solusi yang ringan dan mudah digunakan bagi pemilik usaha.</p>
      `,
  },
  {
    slug: "ip-status-checker",
    category: "Web",
    title: "IP Status Checker",
    image: "/projects/placeholder.jpg",
    tags: ["PHP"],
    description: `
        <p>Sebuah utilitas jaringan sederhana berbasis web yang berfungsi untuk memeriksa status host (server atau perangkat lain) berdasarkan alamat IP-nya. Pengguna dapat memasukkan alamat IP, dan aplikasi akan melakukan ping untuk memverifikasi apakah host tersebut aktif (online) atau tidak aktif (offline).</p>
        <p>Tools ini sangat berguna untuk administrator jaringan atau developer untuk melakukan diagnosis cepat.</p>
      `,
  },

  // Kategori MOBILE
  {
    slug: "bacalagi-book-scanner",
    category: "Mobile",
    title: "Bacalagi - Cek Harga Buku Bekas",
    image: "/projects/placeholder.jpg",
    tags: ["Kotlin", "Machine Learning", "Computer Vision"],
    description: `
        <p>Aplikasi Android inovatif yang membantu pengguna untuk mengetahui estimasi harga pasar buku bekas mereka. Pengguna cukup memindai (scan) sampul depan buku menggunakan kamera ponsel.</p>
        <p>Aplikasi kemudian menggunakan model Machine Learning yang terintegrasi untuk mengenali judul buku dari gambar sampul, lalu mengambil data harga dari berbagai sumber online untuk memberikan taksiran harga yang akurat. Dibangun secara native menggunakan Kotlin untuk performa terbaik.</p>
      `,
  },
  {
    slug: "gotrash-iot-monitor",
    category: "Mobile",
    title: "goTrash - Monitoring Sampah IoT",
    image: "/projects/placeholder.jpg",
    tags: ["Kotlin", "IoT", "Firebase"],
    description: `
        <p>Solusi <i>Smart City</i> dalam bentuk aplikasi Android untuk memonitor tingkat keterisian tempat sampah secara efisien. Aplikasi ini terhubung dengan sensor jarak (ultrasonik) yang dipasang di tempat sampah melalui platform IoT.</p>
        <p>Petugas kebersihan dapat melihat data real-time pada peta, mengetahui tempat sampah mana yang sudah penuh, dan merencanakan rute pengambilan sampah yang paling optimal. Ini mengurangi biaya operasional dan menjaga kebersihan kota.</p>
      `,
  },
  {
    slug: "tokokita-ecommerce-app",
    category: "Mobile",
    title: "TokoKita - Aplikasi E-commerce",
    image: "/projects/placeholder.jpg",
    tags: ["Flutter", "Dart"],
    description: `
        <p>Aplikasi mobile untuk platform e-commerce yang dirancang untuk memberikan pengalaman berbelanja yang mulus bagi pengguna. Fitur-fitur utama termasuk penjelajahan produk berdasarkan kategori, pencarian produk, sistem keranjang belanja, proses checkout, dan manajemen profil pengguna.</p>
        <p>Dibangun menggunakan Flutter, aplikasi ini dapat berjalan di platform Android dan iOS dengan satu basis kode (single codebase), memastikan konsistensi tampilan dan fungsionalitas.</p>
      `,
  },
];
