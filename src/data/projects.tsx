// src/data/projects.ts

// Di sini Anda bisa mengisi semua data proyek Anda.
// 'slug' adalah bagian dari URL untuk detail proyek (harus unik).
// 'image' adalah path ke gambar di folder /public/projects/

export const projectsData = [
  {
    slug: "supply-management-ahp",
    category: "web",
    title: "Supply Management (AHP)",
    image: "/projects/supply-management.jpg",
    techStack: ["Next.js", "Express.js", "MySQL", "AHP"],
    description:
      "Sistem pendukung keputusan berbasis web untuk membantu perusahaan dalam memilih supplier terbaik secara objektif. Aplikasi ini mengimplementasikan metode Analytical Hierarchy Process (AHP) untuk pembobotan kriteria. Backend dibangun dengan Express.js dan frontend interaktifnya menggunakan Next.js.",
  },
  {
    slug: "matahati-edugame",
    category: "web",
    title: "Matahati: Edukasi Hipertensi",
    image: "/projects/matahati.jpg",
    techStack: ["Laravel", "Next.js", "MySQL"],
    description:
      "Platform game edukasi yang dirancang untuk meningkatkan kesadaran dan pengetahuan masyarakat mengenai penyakit hipertensi. Backend dan manajemen konten ditangani oleh Laravel, sementara pengalaman bermain yang dinamis dan responsif disajikan melalui frontend Next.js.",
  },
  {
    slug: "simont-mart-pos",
    category: "web",
    title: "Simont Mart: Stok & Penjualan",
    image: "/projects/simont-mart.jpg",
    techStack: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
    description:
      "Aplikasi Point-of-Sale (POS) dan manajemen inventaris untuk usaha jual beli. Sistem ini berfungsi untuk mendata stok barang, mencatat transaksi penjualan, dan menghasilkan laporan. Dibangun secara fundamental menggunakan native PHP dan database MySQL.",
  },
  {
    slug: "ip-status-checker",
    category: "web",
    title: "IP Status Checker",
    image: "/projects/ip-checker.jpg",
    techStack: ["PHP", "HTML", "Bootstrap"],
    description:
      "Sebuah tool utilitas sederhana namun fungsional untuk memeriksa status sebuah alamat IP atau domain. Website ini melakukan ping ke target untuk memastikan apakah server aktif dan dapat dijangkau. Fungsionalitas backend diimplementasikan dengan skrip PHP.",
  },

  // === MOBILE PROJECTS ===
  {
    slug: "bacalagi-book-scanner",
    category: "mobile",
    title: "Bacalagi: Penilaian Harga Buku",
    image: "/projects/bacalagi.jpg",
    techStack: [
      "Kotlin",
      "Machine Learning",
    ],
    description:
      "Aplikasi mobile inovatif yang mampu menentukan estimasi harga buku bekas hanya dengan memindai sampulnya. Aplikasi ini terintegrasi dengan model Machine Learning dan Google Vision API untuk pengenalan gambar. Dibangun secara native untuk platform Android menggunakan Kotlin.",
  },
  {
    slug: "gotrash-iot-monitoring",
    category: "mobile",
    title: "GoTrash: Monitoring Sampah IoT",
    image: "/projects/gotrash.jpg",
    techStack: ["Kotlin", "IoT", "Firebase", "Android SDK"],
    description:
      "Solusi Smart City berupa aplikasi mobile untuk memonitor volume sampah pada tempat sampah secara real-time. Aplikasi yang dikembangkan dengan Kotlin ini terhubung dengan sensor jarak (IoT) dan menggunakan Firebase sebagai backend untuk notifikasi dan data-monitoring.",
  },
  {
    slug: "e-market-user-app",
    category: "mobile",
    title: "Marketplace User App",
    image: "/projects/e-market.jpg",
    techStack: ["Flutter", "Dart", "REST API"],
    description:
      "Aplikasi mobile cross-platform yang berfungsi sebagai sisi pengguna (user) dalam sebuah platform jual beli. User dapat melakukan registrasi, Browse produk, menambahkan ke keranjang, dan menyelesaikan transaksi. Dibangun menggunakan Flutter dengan state management BLoC.",
  },
];
