// Semua isi portofolio ada di file ini. Edit teks di sini, lalu deploy ulang.

export const profile = {
  name: "Vidky Adhi Pradana",
  role: "Fullstack Developer dan Project Manager",
  intro:
    "Saya membangun sistem web yang menggantikan kertas dan spreadsheet: dari absensi 600+ anggota sampai aplikasi internal LSP UGM yang memangkas kerja admin sekitar 60%. Lulusan D4 Teknologi Rekayasa Perangkat Lunak UGM, berbasis di Wonogiri.",
  email: "vickypradana1111@gmail.com",
  github: "https://github.com/VICKY3824D",
  linkedin: "https://www.linkedin.com/in/vidky-adhi-pradana-658063244/",
  cvs: [
    { label: "Unduh CV Fullstack Developer", href: "/cv/Vidky_Adhi_Pradana-CV-Developer.pdf" },
    { label: "Unduh CV Project Manager", href: "/cv/Vidky_Adhi_Pradana-CV-Project-Manager.pdf" },
  ],
};

export const projects = [
  {
    name: "JEKA, Jejak Kontribusi Anggota",
    meta: "Fullstack Developer, Apr 2026 sampai sekarang, dipakai oleh Imapres Wonogiri",
    url: "https://jeka.imapreswonogiri.id",
    text: [
      "Sistem absensi dan poin keaktifan untuk 600+ pengguna Imapres Wonogiri. Menggantikan pencatatan manual di spreadsheet, dan tetap stabil saat banyak anggota mengakses bersamaan.",
      "Ada 4 role (admin, pengurus cabang, pengurus pusat, anggota) dengan dashboard berbeda. Berjalan di server Kominfo Ubuntu 24.04 dengan Nginx dan SSL Cloudflare, dan terhubung ke aplikasi pemda lain lewat API Key.",
    ],
    tech: "Laravel 11, PostgreSQL, Redis, MinIO, Docker Compose",
    shots: [
      ["jeka-landing", "Halaman depan JEKA"],
      ["jeka-anggota", "Dashboard anggota"],
      ["jeka-pengurus", "Dashboard pengurus pusat"],
      ["jeka-admin", "Dashboard super admin"],
    ],
  },
  {
    name: "Explore Kismantoro",
    meta: "Fullstack Developer, portal Kecamatan Kismantoro, Kabupaten Wonogiri",
    url: "https://explorekismantoro.id",
    text: [
      "Portal informasi Kecamatan Kismantoro: profil wilayah, berita, dan direktori UMKM sebagai pemasaran digital bagi pelaku usaha lokal.",
      "Setiap desa punya halamannya sendiri berisi berita, UMKM, pemerintahan, dan statistik interaktif seperti agama dan pendidikan.",
    ],
    shots: [["kismantoro", "Beranda Explore Kismantoro"]],
  },
  {
    name: "SI-LSP UGM",
    meta: "Fullstack Developer, Jul 2026 sampai sekarang, Lembaga Sertifikasi Profesi UGM",
    note: "Aplikasi internal, tidak dibuka untuk umum.",
    text: [
      "Aplikasi web internal LSP UGM untuk proses dengan kompleksitas bisnis dan dokumen yang tinggi. Mengganti alur berbasis kertas dalam jumlah besar menjadi satu aplikasi, sehingga effort admin turun sekitar 60%.",
      "Memakai 4 role pengguna, antrean pekerjaan (queue), dan alur Git tim yang lengkap dengan rebase dan pull request.",
    ],
    tech: "Laravel 10, MySQL, Redis, Node.js, Docker Compose",
    shots: [["lsp-landing", "Halaman depan LSP UGM"]],
  },
  {
    name: "SIYUDIS",
    meta: "Backend Developer, Agu 2026 sampai sekarang, Prodi TRPL UGM",
    note: "Dalam pengembangan.",
    text: [
      "Sistem pengajuan yudisium mahasiswa dengan 6 role: Mahasiswa, Admin, Staf Akademik, Kaprodi, Manit, dan Kepala Departemen.",
    ],
    tech: "Laravel 13, MySQL",
    shots: [],
  },
];

export const experience = [
  {
    when: "Jul 2026 sampai sekarang",
    title: "Fullstack Developer",
    org: "Lembaga Sertifikasi Profesi UGM, Yogyakarta",
    text: "Mengembangkan aplikasi web internal dengan Laravel dan Docker. Menurunkan effort admin sekitar 60% dengan mengganti proses kertas menjadi alur kerja digital.",
  },
  {
    when: "Feb 2026 sampai Jun 2026",
    title: "Project Manager dan Frontend Contributor",
    org: "Restoran Kita, Yogyakarta",
    text: "Menyusun PRD, mengoordinasikan developer dan desainer UI/UX, membagi tugas mingguan, dan ikut mengerjakan Front End platform pemesanan makanan digital.",
  },
  {
    when: "Agu 2025 sampai Des 2025",
    title: "Project Manager",
    org: "Monpad, Yogyakarta",
    text: "Menganalisis kebutuhan dan menyusun dokumen spesifikasi, menjaga jadwal proyek, memantau progres tiap minggu dan melaporkannya kepada Project Owner.",
  },
  {
    when: "Feb 2022 sampai Feb 2023",
    title: "Ketua Rohis Al-Mujahidin",
    org: "Wonogiri, Jawa Tengah",
    text: "Memimpin 25+ anggota, memfasilitasi rapat mingguan, dan mengelola anggaran bersama bendahara.",
  },
  {
    when: "Agu 2022 sampai Agu 2024",
    title: "Sekretaris Community Youth Development",
    org: "Wonogiri, Jawa Tengah",
    text: "Mengelola surat resmi, laporan kegiatan, perizinan, jadwal induk, dan notulen rapat.",
  },
];

export const skills = [
  ["Backend", "Laravel 10 sampai 13, PHP 8, REST API, integrasi API Key, queue"],
  ["Python web", "Django (Django ORM, WSGI), Flask, FastAPI"],
  ["Frontend", "Next.js, Vue.js, React.js, HTML, CSS, JavaScript"],
  ["Database", "MySQL, PostgreSQL, Redis, MinIO"],
  ["DevOps", "Docker Compose, Nginx, Cloudflare (SSL), Ubuntu Server, SSH, CI/CD dasar"],
  ["Kerja tim", "Git dan GitHub (branch, merge, rebase, pull request), PRD, perencanaan jadwal, pelaporan progres"],
  ["AI", "Claude untuk generative AI, Antigravity untuk agentic AI"],
];

export const education = {
  school: "Universitas Gadjah Mada, Sleman",
  degree: "Diploma D4 Teknologi Rekayasa Perangkat Lunak, lulus Jul 2024, IPK 3,89 dari 4,00",
  note: "Asisten praktikum Pemrograman Python: mendampingi sesi lab dan menilai tugas mahasiswa.",
  courses: [
    "Laravel 12 (MySQL, PHP 8, Composer), bersertifikat",
    "Next.js di Codepolitan",
    "Website dasar: HTML, CSS, JavaScript",
  ],
};
