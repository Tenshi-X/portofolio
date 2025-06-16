// Di sini Anda bisa mengisi semua data proyek Anda.
// 'slug' adalah bagian dari URL untuk detail proyek (harus unik).
// 'image' adalah path ke gambar di folder /public/projects/

export const projectsData = [
  {
    slug: "proyek-web-keren",
    category: "web",
    title: "Website E-commerce Modern",
    image: "/projects/web-project-1.jpg",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "GraphQL"],
    description:
      "Ini adalah deskripsi lengkap dari proyek web pertama. Sebuah platform e-commerce dengan fitur pembayaran modern menggunakan Stripe, dibangun di atas Next.js untuk performa secepat kilat dan SEO yang optimal. Menggunakan GraphQL untuk query data yang efisien.",
  },
  {
    slug: "proyek-web-kedua",
    category: "web",
    title: "Dashboard Analitik",
    image: "/projects/web-project-2.jpg",
    techStack: ["React", "Vite", "Recharts", "TypeScript", "MUI"],
    description:
      "Dashboard analitik interaktif untuk memvisualisasikan data penjualan. Dibuat dengan React dan Vite untuk pengembangan yang cepat, dengan grafik yang indah dari Recharts dan komponen UI dari Material-UI.",
  },
  {
    slug: "proyek-mobile-satu",
    category: "mobile",
    title: "Aplikasi Social Media",
    image: "/projects/mobile-project-1.jpg",
    techStack: ["Flutter", "Dart", "Firebase", "BLoC"],
    description:
      "Aplikasi mobile cross-platform untuk berbagi foto dan video. Menggunakan Firebase untuk otentikasi, database realtime, dan storage. State management ditangani dengan BLoC untuk skalabilitas.",
  },
  {
    slug: "proyek-mobile-dua",
    category: "mobile",
    title: "Aplikasi Pencatat Keuangan",
    image: "/projects/mobile-project-2.jpg",
    techStack: ["React Native", "TypeScript", "RealmDB"],
    description:
      "Aplikasi untuk melacak pemasukan dan pengeluaran harian. Dibangun dengan React Native dan menggunakan database lokal RealmDB untuk performa offline yang sangat cepat.",
  },
];
