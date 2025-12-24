// src/data/projects.ts

export const projects = [
  // Kategori WEB
  {
    slug: "supply-management-ahp",
    category: "Web",
    title: "Supply Management (AHP Method)",
    // Ganti 'placeholder.jpg' dengan nama file gambar Anda
    image: "/projects/supply_management.webp",
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
    image: "/projects/matahati.png",
    tags: ["Next.js", "Laravel"],
    description: `
        <p>Matahati adalah platform <i>"edugame"</i> (edukasi-game) interaktif yang bertujuan untuk meningkatkan kesadaran masyarakat mengenai bahaya dan pencegahan hipertensi. Melalui permainan kuis, cerita, dan simulasi, pengguna dapat belajar tentang gaya hidup sehat dengan cara yang menyenangkan dan tidak membosankan.</p>
        <p>Proyek ini menggabungkan backend yang kuat dengan Laravel untuk manajemen konten dan logika game, serta frontend yang cepat dan responsif menggunakan Next.js.</p>
      `,
  },
  {
    slug: "larismanis-web",
    category: "Web",
    title: "Larismanis",
    image: "/projects/larismanis.png",
    tags: ["Next.js", "Supabase"],
    description: `
        <p class="mb-2"><strong>Tools Sakti untuk UMKM naik kelas.</strong> Platform ini menyediakan alat pemasaran berbasis AI:</p>
        <ul class="list-disc pl-5 space-y-1">
            <li><strong>Magic Content:</strong> Integrasi Gemini AI untuk generate caption dan style promosi instan hanya dengan upload foto produk.</li>
            <li><strong>Campaign Planner:</strong> Jadwalkan konten promosi mingguan dengan mudah dan terstruktur.</li>
            <li><strong>Consultant:</strong> Konsultasi bisnis dengan AI Chatbot yang memberikan solusi dan rekomendasi fitur yang tepat.</li>
        </ul>
      `,
  },

  // Kategori MOBILE
  {
    slug: "bacalagi-book-scanner",
    category: "Mobile",
    title: "Bacalagi - Cek Harga Buku Bekas",
    image: "/projects/bacalagi.jpg",
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
    image: "/projects/gotrash.png",
    tags: ["Kotlin", "IoT", "Firebase"],
    description: `
        <p>Solusi <i>Smart City</i> dalam bentuk aplikasi Android untuk memonitor tingkat keterisian tempat sampah secara efisien. Aplikasi ini terhubung dengan sensor jarak (ultrasonik) yang dipasang di tempat sampah melalui platform IoT.</p>
        <p>Petugas kebersihan dapat melihat data real-time pada peta, mengetahui tempat sampah mana yang sudah penuh, dan merencanakan rute pengambilan sampah yang paling optimal. Ini mengurangi biaya operasional dan menjaga kebersihan kota.</p>
      `,
  },
  {
    slug: "trenova-mobile",
    category: "Mobile",
    title: "Trenova",
    image: "/projects/trenova.png",
    tags: ["React Native", "Supabase"],
    description: `
        <div class="inline-block bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full mb-2">On Going</div>
        <p>Asisten trading crypto pribadi Anda. Aplikasi ini menggunakan <strong>AI Agent</strong> canggih untuk menganalisis grafik pasar secara real-time.</p>
        <p>User cukup input target (misal: Buy @ 88k, TP @ 100k), dan AI akan memantau pergerakan harga (misal saat ini 90k) serta memberikan alert pintar momentum entry dan exit terbaik. Solusi bagi trader untuk profit maksimal tanpa harus memantau layar grafik seharian.</p>
      `,
  },
];
