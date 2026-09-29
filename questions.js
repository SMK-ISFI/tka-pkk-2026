const stages = [
  {
    "id": "dasar",
    "title": "Tahap 1 - Dasar",
    "subtitle": "Memahami konsep dasar PKK",
    "description": "20 soal untuk menguatkan konsep produksi, pemasaran, pengelolaan usaha, laporan keuangan, dan HaKI.",
    "duration": 25,
    "questions": [
      {
        "type": "single",
        "topic": "Peluang Usaha",
        "level": "Knowing",
        "question": "Tujuan utama analisis peluang usaha sebelum bisnis dijalankan adalah ...",
        "options": [
          "Menentukan warna seragam karyawan",
          "Mengetahui potensi pasar, kebutuhan konsumen, dan risiko usaha",
          "Mencatat seluruh transaksi penjualan",
          "Menentukan bentuk laporan keuangan",
          "Mendaftarkan merek terlebih dahulu"
        ],
        "answer": 1,
        "explanation": "Analisis peluang usaha digunakan untuk menilai apakah ide usaha layak dijalankan dengan melihat pasar, kebutuhan konsumen, sumber daya, persaingan, dan risiko."
      },
      {
        "type": "single",
        "topic": "Prototipe",
        "level": "Knowing",
        "question": "Dalam proses pengembangan produk, prototipe adalah ...",
        "options": [
          "Produk akhir yang sudah dipasarkan",
          "Model awal untuk menguji rancangan, fungsi, atau pengalaman pengguna",
          "Laporan keuangan produksi",
          "Daftar pemasok bahan baku",
          "Media promosi utama"
        ],
        "answer": 1,
        "explanation": "Prototipe merupakan bentuk awal produk yang dipakai untuk menguji ide sebelum produk dikembangkan atau diproduksi lebih lanjut."
      },
      {
        "type": "single",
        "topic": "Desain Produk",
        "level": "Knowing",
        "question": "Desain produk yang baik terutama harus mempertimbangkan ...",
        "options": [
          "Keinginan produsen saja",
          "Fungsi, kebutuhan pengguna, keamanan, dan nilai estetika",
          "Harga pesaing saja",
          "Jumlah pengikut media sosial",
          "Ukuran ruang penyimpanan"
        ],
        "answer": 1,
        "explanation": "Desain produk yang baik berorientasi pada kebutuhan pengguna serta mempertimbangkan fungsi, keamanan, kenyamanan, dan estetika."
      },
      {
        "type": "single",
        "topic": "Kemasan",
        "level": "Knowing",
        "question": "Fungsi utama kemasan adalah ...",
        "options": [
          "Hanya membuat produk lebih mahal",
          "Melindungi produk sekaligus mendukung informasi dan daya tarik produk",
          "Menggantikan kualitas produk",
          "Mengurangi informasi konsumen",
          "Menjamin produk selalu laku"
        ],
        "answer": 1,
        "explanation": "Kemasan melindungi produk dari kerusakan sekaligus dapat menjadi media informasi, identitas merek, dan daya tarik pemasaran."
      },
      {
        "type": "single",
        "topic": "Kemasan",
        "level": "Knowing",
        "question": "Informasi pada label produk sebaiknya ...",
        "options": [
          "Sulit dibaca agar terlihat unik",
          "Jelas, relevan, dan sesuai karakter produk",
          "Hanya memuat nama pemilik",
          "Tidak perlu mencantumkan informasi penting",
          "Selalu menggunakan istilah teknis"
        ],
        "answer": 1,
        "explanation": "Label membantu konsumen mengenali dan memahami produk, sehingga informasi harus jelas, mudah dibaca, dan relevan."
      },
      {
        "type": "single",
        "topic": "Biaya Produksi",
        "level": "Knowing",
        "question": "Yang termasuk biaya tetap dalam usaha adalah ...",
        "options": [
          "Bahan baku per unit",
          "Komisi penjualan per produk",
          "Sewa tempat usaha bulanan",
          "Kemasan per produk",
          "Ongkos kirim per pesanan"
        ],
        "answer": 2,
        "explanation": "Biaya tetap relatif tidak berubah terhadap jumlah unit yang diproduksi dalam rentang tertentu, misalnya sewa tempat bulanan."
      },
      {
        "type": "single",
        "topic": "Biaya Produksi",
        "level": "Knowing",
        "question": "Yang termasuk biaya variabel adalah ...",
        "options": [
          "Sewa gedung bulanan",
          "Bahan baku yang digunakan sesuai jumlah produksi",
          "Penyusutan mesin tetap per bulan",
          "Izin usaha tahunan",
          "Gaji manajer tetap"
        ],
        "answer": 1,
        "explanation": "Biaya variabel berubah mengikuti jumlah produksi. Semakin banyak produk dibuat, kebutuhan bahan baku biasanya semakin besar."
      },
      {
        "type": "single",
        "topic": "HPP",
        "level": "Knowing",
        "question": "HPP per unit secara sederhana dapat dihitung dengan ...",
        "options": [
          "Total biaya produksi dibagi jumlah unit yang dihasilkan",
          "Jumlah unit dibagi total penjualan",
          "Laba dibagi modal",
          "Pendapatan dikurangi modal",
          "Harga jual ditambah laba"
        ],
        "answer": 0,
        "explanation": "Jika menggunakan pendekatan biaya produksi sederhana, HPP per unit diperoleh dari total biaya produksi dibagi jumlah unit yang dihasilkan."
      },
      {
        "type": "single",
        "topic": "Pengendalian Mutu",
        "level": "Knowing",
        "question": "Kegiatan memeriksa hasil produksi agar sesuai standar mutu disebut ...",
        "options": [
          "Distribusi",
          "Quality control",
          "Segmentasi pasar",
          "Branding",
          "Promosi"
        ],
        "answer": 1,
        "explanation": "Quality control berfokus pada pemeriksaan hasil/proses untuk menemukan penyimpangan mutu dan memastikan produk memenuhi spesifikasi."
      },
      {
        "type": "single",
        "topic": "Pengendalian Mutu",
        "level": "Knowing",
        "question": "Tujuan quality assurance adalah ...",
        "options": [
          "Mencegah masalah mutu melalui sistem dan prosedur yang terencana",
          "Menaikkan harga tanpa alasan",
          "Menggantikan pemasaran",
          "Menghapus standar kerja",
          "Menentukan warna logo"
        ],
        "answer": 0,
        "explanation": "Quality assurance menekankan pencegahan masalah mutu melalui standar, prosedur, dokumentasi, dan perbaikan proses."
      },
      {
        "type": "single",
        "topic": "Distribusi",
        "level": "Knowing",
        "question": "Kegiatan menyalurkan produk dari produsen hingga dapat diterima konsumen disebut ...",
        "options": [
          "Produksi",
          "Distribusi",
          "Prototyping",
          "Pembukuan",
          "Segmentasi"
        ],
        "answer": 1,
        "explanation": "Distribusi adalah proses penyaluran barang/jasa dari produsen menuju konsumen melalui saluran yang sesuai."
      },
      {
        "type": "single",
        "topic": "Pemasaran",
        "level": "Knowing",
        "question": "Pengelompokan konsumen berdasarkan karakteristik tertentu disebut ...",
        "options": [
          "Segmentasi pasar",
          "Produksi massal",
          "Pengendalian mutu",
          "Pencatatan kas",
          "Prototyping"
        ],
        "answer": 0,
        "explanation": "Segmentasi pasar membagi pasar menjadi kelompok konsumen dengan karakteristik atau kebutuhan yang relatif serupa."
      },
      {
        "type": "single",
        "topic": "Pemasaran",
        "level": "Knowing",
        "question": "Tujuan promosi adalah ...",
        "options": [
          "Menyembunyikan informasi produk",
          "Mengomunikasikan nilai produk dan mendorong ketertarikan target pasar",
          "Mengurangi kualitas produk",
          "Menghapus identitas merek",
          "Mengganti seluruh proses produksi"
        ],
        "answer": 1,
        "explanation": "Promosi bertujuan memperkenalkan, mengingatkan, dan meyakinkan target pasar mengenai manfaat atau nilai produk."
      },
      {
        "type": "single",
        "topic": "Proposal Usaha",
        "level": "Knowing",
        "question": "Bagian proposal usaha yang menjelaskan sasaran konsumen dan cara menjangkau mereka adalah ...",
        "options": [
          "Strategi pemasaran",
          "Daftar hadir",
          "Lampiran foto pribadi",
          "Riwayat sekolah pemilik",
          "Surat jalan"
        ],
        "answer": 0,
        "explanation": "Strategi pemasaran menjelaskan target pasar, positioning, media promosi, harga, dan cara produk menjangkau konsumen."
      },
      {
        "type": "single",
        "topic": "Laporan Keuangan",
        "level": "Knowing",
        "question": "Laporan laba rugi digunakan untuk melihat ...",
        "options": [
          "Pendapatan, beban, serta laba atau rugi pada periode tertentu",
          "Jumlah pengikut media sosial",
          "Jumlah desain produk",
          "Lokasi pemasok",
          "Jumlah pesaing saja"
        ],
        "answer": 0,
        "explanation": "Laporan laba rugi merangkum pendapatan dan beban untuk mengetahui hasil usaha dalam satu periode."
      },
      {
        "type": "single",
        "topic": "Laporan Keuangan",
        "level": "Knowing",
        "question": "Laporan arus kas membantu usaha mengetahui ...",
        "options": [
          "Aliran masuk dan keluar kas",
          "Warna kemasan terbaik",
          "Jumlah kompetitor",
          "Jenis prototipe",
          "Nama merek pesaing"
        ],
        "answer": 0,
        "explanation": "Arus kas menunjukkan pergerakan kas masuk dan kas keluar sehingga membantu menilai kemampuan usaha memenuhi kebutuhan pembayaran."
      },
      {
        "type": "single",
        "topic": "HaKI",
        "level": "Knowing",
        "question": "Perlindungan HaKI yang paling berkaitan dengan nama dan logo pembeda barang/jasa adalah ...",
        "options": [
          "Merek",
          "Paten",
          "Hak cipta",
          "Rahasia dagang",
          "Desain tata letak sirkuit terpadu"
        ],
        "answer": 0,
        "explanation": "Merek melindungi tanda yang membedakan barang atau jasa, misalnya nama, logo, atau kombinasi unsur tertentu sesuai ketentuan."
      },
      {
        "type": "single",
        "topic": "HaKI",
        "level": "Knowing",
        "question": "Kode program komputer pada umumnya berkaitan dengan perlindungan ...",
        "options": [
          "Hak cipta",
          "Sewa menyewa",
          "Surat jalan",
          "Pajak kendaraan",
          "Izin bangunan"
        ],
        "answer": 0,
        "explanation": "Program komputer merupakan salah satu jenis ciptaan yang dapat berkaitan dengan perlindungan hak cipta sesuai ketentuan hukum."
      },
      {
        "type": "single",
        "topic": "SWOT",
        "level": "Knowing",
        "question": "Dalam SWOT, kemampuan tim yang kuat dan berpengalaman termasuk ...",
        "options": [
          "Strength",
          "Weakness",
          "Opportunity",
          "Threat",
          "Market"
        ],
        "answer": 0,
        "explanation": "Strength adalah faktor internal positif yang menjadi keunggulan usaha."
      },
      {
        "type": "single",
        "topic": "SWOT",
        "level": "Knowing",
        "question": "Dalam SWOT, tren meningkatnya kebutuhan layanan digital di masyarakat dapat menjadi ...",
        "options": [
          "Strength",
          "Weakness",
          "Opportunity",
          "Threat",
          "Liability"
        ],
        "answer": 2,
        "explanation": "Opportunity merupakan kondisi eksternal yang dapat dimanfaatkan usaha untuk berkembang."
      }
    ]
  },
  {
    "id": "menengah",
    "title": "Tahap 2 - Menengah",
    "subtitle": "Studi kasus dan perhitungan",
    "description": "20 soal dengan perhitungan biaya/HPP, kasus pemasaran, produksi, SWOT, laporan keuangan, PG kompleks, dan Benar–Salah.",
    "duration": 35,
    "questions": [
      {
        "type": "single",
        "topic": "HPP",
        "level": "Applying",
        "question": "Usaha roti mengeluarkan total biaya produksi Rp3.600.000 untuk menghasilkan 240 roti. HPP per roti adalah ...",
        "options": [
          "Rp10.000",
          "Rp12.000",
          "Rp15.000",
          "Rp18.000",
          "Rp20.000"
        ],
        "answer": 2,
        "explanation": "HPP per unit = Rp3.600.000 ÷ 240 = Rp15.000."
      },
      {
        "type": "single",
        "topic": "HPP",
        "level": "Applying",
        "question": "Sebuah produk memiliki HPP Rp80.000. Usaha menginginkan laba 25% dari HPP. Harga jual berdasarkan perhitungan tersebut adalah ...",
        "options": [
          "Rp90.000",
          "Rp95.000",
          "Rp100.000",
          "Rp105.000",
          "Rp110.000"
        ],
        "answer": 2,
        "explanation": "Laba = 25% × Rp80.000 = Rp20.000. Harga jual = Rp80.000 + Rp20.000 = Rp100.000."
      },
      {
        "type": "single",
        "topic": "Biaya Produksi",
        "level": "Applying",
        "question": "Biaya tetap sebuah usaha Rp1.500.000 per bulan dan biaya variabel Rp12.000 per unit. Jika diproduksi 250 unit, total biaya produksi adalah ...",
        "options": [
          "Rp3.000.000",
          "Rp3.500.000",
          "Rp4.000.000",
          "Rp4.500.000",
          "Rp5.000.000"
        ],
        "answer": 3,
        "explanation": "Total biaya = Rp1.500.000 + (250 × Rp12.000) = Rp4.500.000."
      },
      {
        "type": "single",
        "topic": "Prototipe",
        "level": "Applying",
        "question": "Tim membuat aplikasi reservasi lapangan. Uji pengguna menunjukkan tombol pembayaran sulit ditemukan. Tindakan paling tepat adalah ...",
        "options": [
          "Menambah fitur yang tidak terkait",
          "Memperbaiki alur dan visual tombol berdasarkan hasil uji pengguna",
          "Menaikkan biaya layanan",
          "Menghapus fitur pembayaran",
          "Mengganti nama aplikasi"
        ],
        "answer": 1,
        "explanation": "Temuan uji menunjukkan masalah usability, sehingga desain antarmuka dan alur pembayaran perlu diperbaiki berdasarkan bukti pengujian."
      },
      {
        "type": "single",
        "topic": "Pemasaran",
        "level": "Applying",
        "question": "Penjualan produk turun meski kualitas stabil. Data menunjukkan target remaja lebih aktif di video pendek daripada brosur cetak. Strategi paling sesuai adalah ...",
        "options": [
          "Fokus pada brosur saja",
          "Mengalihkan sebagian promosi ke konten video pendek yang relevan",
          "Mengurangi kualitas",
          "Menaikkan harga tanpa riset",
          "Menghapus identitas merek"
        ],
        "answer": 1,
        "explanation": "Media promosi sebaiknya disesuaikan dengan perilaku target pasar."
      },
      {
        "type": "single",
        "topic": "Pengendalian Mutu",
        "level": "Applying",
        "question": "Sebuah usaha menerima banyak produk retur karena tutup botol sering longgar. Langkah awal perbaikan mutu adalah ...",
        "options": [
          "Menambah iklan",
          "Menganalisis penyebab pada proses penutupan dan standar pemeriksaan",
          "Mengurangi informasi label",
          "Mengganti nama produk",
          "Menambah variasi rasa"
        ],
        "answer": 1,
        "explanation": "Masalah mutu perlu ditelusuri dari proses yang berhubungan langsung dengan cacat, lalu ditetapkan tindakan korektif."
      },
      {
        "type": "single",
        "topic": "Proposal Usaha",
        "level": "Applying",
        "question": "Dalam proposal usaha, data ukuran pasar, tren permintaan, profil target konsumen, dan pesaing paling tepat diletakkan pada bagian ...",
        "options": [
          "Analisis pasar/peluang usaha",
          "Struktur organisasi saja",
          "Daftar aset pribadi",
          "Lampiran nilai sekolah",
          "Kata pengantar"
        ],
        "answer": 0,
        "explanation": "Bagian analisis pasar/peluang usaha menjelaskan kondisi pasar, target konsumen, tren, dan persaingan."
      },
      {
        "type": "single",
        "topic": "Laporan Keuangan",
        "level": "Applying",
        "question": "Usaha memiliki pendapatan Rp18.000.000 dan total beban Rp14.500.000 dalam satu bulan. Laba bersih bulan tersebut adalah ...",
        "options": [
          "Rp2.500.000",
          "Rp3.000.000",
          "Rp3.500.000",
          "Rp4.500.000",
          "Rp32.500.000"
        ],
        "answer": 2,
        "explanation": "Laba bersih = pendapatan - beban = Rp18.000.000 - Rp14.500.000 = Rp3.500.000."
      },
      {
        "type": "multi",
        "topic": "SWOT",
        "level": "Applying",
        "question": "Pilih faktor yang termasuk KEKUATAN internal dalam analisis SWOT sebuah usaha aplikasi sekolah.",
        "options": [
          "Tim pengembang menguasai teknologi yang digunakan",
          "Banyak sekolah mulai membutuhkan sistem digital",
          "Aplikasi pesaing baru bermunculan",
          "Hubungan tim dengan sekolah mitra sudah baik",
          "Anggaran promosi tim sangat terbatas"
        ],
        "answer": [
          0,
          3
        ],
        "explanation": "Strength berasal dari kondisi internal yang menguntungkan usaha. Kompetensi tim dan hubungan mitra merupakan kekuatan internal."
      },
      {
        "type": "multi",
        "topic": "Pemasaran",
        "level": "Applying",
        "question": "Pilih tindakan yang termasuk strategi pemasaran berbasis target pasar.",
        "options": [
          "Menentukan persona konsumen",
          "Memilih media promosi berdasarkan kebiasaan konsumen",
          "Menambah stok tanpa data",
          "Menetapkan pesan promosi sesuai kebutuhan target",
          "Mengganti pemasok tanpa kaitan dengan pasar"
        ],
        "answer": [
          0,
          1,
          3
        ],
        "explanation": "Strategi pemasaran yang berorientasi target memerlukan pemahaman persona, pemilihan saluran yang relevan, dan pesan yang sesuai kebutuhan."
      },
      {
        "type": "multi",
        "topic": "Distribusi",
        "level": "Applying",
        "question": "Sebuah produk makanan akan dikirim antarkota. Pilih hal yang perlu dipertimbangkan dalam distribusi.",
        "options": [
          "Daya tahan produk",
          "Waktu pengiriman",
          "Kondisi kemasan selama pengiriman",
          "Warna seragam admin",
          "Karakteristik saluran distribusi"
        ],
        "answer": [
          0,
          1,
          2,
          4
        ],
        "explanation": "Distribusi harus memperhatikan karakter produk, ketahanan, waktu, keamanan kemasan, dan saluran yang digunakan."
      },
      {
        "type": "multi",
        "topic": "Pengendalian Mutu",
        "level": "Applying",
        "question": "Pilih kegiatan yang mendukung quality assurance.",
        "options": [
          "Menyusun SOP produksi",
          "Melakukan pelatihan prosedur kerja",
          "Mencatat hasil inspeksi",
          "Mengabaikan penyimpangan kecil",
          "Melakukan evaluasi proses secara berkala"
        ],
        "answer": [
          0,
          1,
          2,
          4
        ],
        "explanation": "QA menekankan sistem pencegahan melalui SOP, kompetensi personel, dokumentasi, dan evaluasi berkelanjutan."
      },
      {
        "type": "tf",
        "topic": "Perencanaan Produksi",
        "level": "Applying",
        "question": "Nilailah pernyataan berikut tentang perencanaan produksi saat permintaan meningkat tajam.",
        "statements": [
          {
            "text": "Kapasitas mesin perlu dibandingkan dengan target produksi.",
            "answer": true
          },
          {
            "text": "Ketersediaan bahan baku tidak perlu diperiksa jika permintaan tinggi.",
            "answer": false
          },
          {
            "text": "Jadwal tenaga kerja perlu disesuaikan dengan kebutuhan produksi.",
            "answer": true
          }
        ],
        "explanation": "Perencanaan produksi harus memperhitungkan kapasitas, bahan baku, tenaga kerja, jadwal, serta target agar peningkatan permintaan dapat dipenuhi secara realistis."
      },
      {
        "type": "tf",
        "topic": "Kemasan",
        "level": "Applying",
        "question": "Nilailah pernyataan berikut tentang kemasan dan label.",
        "statements": [
          {
            "text": "Kemasan perlu mempertimbangkan karakteristik produk.",
            "answer": true
          },
          {
            "text": "Label sebaiknya mudah dibaca oleh target konsumen.",
            "answer": true
          },
          {
            "text": "Kemasan yang menarik dapat menggantikan mutu produk yang buruk.",
            "answer": false
          }
        ],
        "explanation": "Kemasan dan label mendukung perlindungan dan komunikasi produk, tetapi tidak dapat menggantikan kualitas produk itu sendiri."
      },
      {
        "type": "tf",
        "topic": "HaKI",
        "level": "Applying",
        "question": "Nilailah pernyataan berikut tentang HaKI.",
        "statements": [
          {
            "text": "Nama merek yang terlalu menyerupai merek terdaftar dapat menimbulkan masalah hukum.",
            "answer": true
          },
          {
            "text": "Dokumentasi penciptaan karya dapat membantu pembuktian kepemilikan.",
            "answer": true
          },
          {
            "text": "Semua ide bisnis otomatis dilindungi sebagai paten tanpa syarat.",
            "answer": false
          }
        ],
        "explanation": "Jenis dan syarat perlindungan HaKI berbeda. Penggunaan tanda yang membingungkan dapat bermasalah, sedangkan paten tidak otomatis diberikan pada semua ide."
      },
      {
        "type": "tf",
        "topic": "Laporan Keuangan",
        "level": "Applying",
        "question": "Nilailah pernyataan berikut tentang laporan keuangan.",
        "statements": [
          {
            "text": "Pencatatan transaksi yang konsisten membantu penyusunan laporan.",
            "answer": true
          },
          {
            "text": "Laba selalu sama dengan jumlah kas yang tersedia.",
            "answer": false
          },
          {
            "text": "Laporan arus kas membantu melihat kemampuan usaha memenuhi pembayaran jangka pendek.",
            "answer": true
          }
        ],
        "explanation": "Laba dan kas adalah konsep berbeda. Arus kas menunjukkan pergerakan kas, sedangkan laba merupakan selisih pendapatan dan beban."
      },
      {
        "type": "single",
        "topic": "Laporan Keuangan",
        "level": "Applying",
        "question": "Saldo kas awal Rp4.000.000. Dalam bulan berjalan kas masuk Rp9.500.000 dan kas keluar Rp7.250.000. Saldo kas akhir adalah ...",
        "options": [
          "Rp2.250.000",
          "Rp6.250.000",
          "Rp6.750.000",
          "Rp11.250.000",
          "Rp20.750.000"
        ],
        "answer": 1,
        "explanation": "Saldo akhir = saldo awal + kas masuk - kas keluar = Rp4.000.000 + Rp9.500.000 - Rp7.250.000 = Rp6.250.000."
      },
      {
        "type": "single",
        "topic": "Distribusi",
        "level": "Applying",
        "question": "Usaha memiliki produk yang disukai konsumen, tetapi pengiriman ke luar kota sering terlambat. Prioritas evaluasi adalah ...",
        "options": [
          "Desain logo",
          "Saluran distribusi, mitra logistik, dan waktu pemrosesan pesanan",
          "Jenis font label",
          "Nama pemilik",
          "Jumlah posting lama"
        ],
        "answer": 1,
        "explanation": "Masalah terjadi pada pemenuhan dan distribusi, sehingga aspek logistik dan alur pemrosesan harus dianalisis."
      },
      {
        "type": "single",
        "topic": "HaKI",
        "level": "Applying",
        "question": "Sebuah tim memiliki ide alat otomatis dengan mekanisme teknis baru. Jika memenuhi syarat kebaruan dan ketentuan lain, perlindungan yang dapat dipertimbangkan adalah ...",
        "options": [
          "Merek",
          "Paten",
          "Nota pembelian",
          "Surat jalan",
          "Izin lokasi"
        ],
        "answer": 1,
        "explanation": "Paten berkaitan dengan invensi di bidang teknologi yang memenuhi persyaratan hukum seperti kebaruan dan langkah inventif."
      },
      {
        "type": "single",
        "topic": "Pemasaran",
        "level": "Reasoning",
        "question": "Produk baru laris ketika diskon, tetapi pembelian turun drastis setelah diskon berhenti. Data tambahan paling penting untuk dianalisis adalah ...",
        "options": [
          "Preferensi dan kesediaan membayar target konsumen",
          "Warna ruang kantor",
          "Nama anggota tim",
          "Jumlah kursi gudang",
          "Merek laptop karyawan"
        ],
        "answer": 0,
        "explanation": "Untuk memahami ketergantungan pada diskon, usaha perlu menganalisis nilai yang dirasakan konsumen dan kesediaan membayar pada harga normal."
      }
    ]
  },
  {
    "id": "tka",
    "title": "Tahap 3 - Model TKA",
    "subtitle": "Model TKA Berbasis Stimulus",
    "description": "35 soal dengan stimulus kontekstual, data/tabel, dan beberapa butir yang menggunakan stimulus yang sama. Bentuk PG, PGK kategori Benar–Salah, dan PGK jawaban lebih dari satu.",
    "duration": 65,
    "questions": [
      {
        "type": "single",
        "topic": "Kemasan & Label",
        "level": "Reasoning",
        "stimulusId": "M1",
        "stimulusRange": "Soal 1–3",
        "stimulus": "UMKM “Rasa Rempah” menjual minuman kunyit-asam 250 ml kepada konsumen muda. Pada rancangan label tercantum nama produk, komposisi kunyit, asam jawa, gula aren, isi bersih 250 ml, nama produsen, tanggal kedaluwarsa, dan nomor izin yang relevan. Tim desain ingin menambahkan klaim “pasti menyembuhkan nyeri sendi” karena dianggap menarik perhatian.",
        "question": "Unsur yang paling perlu diperbaiki sebelum label digunakan adalah ...",
        "options": [
          "nama produk",
          "informasi isi bersih",
          "klaim penyembuhan yang tidak didukung dasar yang sesuai",
          "nama produsen",
          "tanggal kedaluwarsa"
        ],
        "answer": 2,
        "explanation": "Label harus informatif dan tidak menyesatkan. Klaim kesehatan absolut tanpa dasar yang sesuai sebaiknya tidak digunakan."
      },
      {
        "type": "tf",
        "topic": "Kemasan & Label",
        "level": "Reasoning",
        "stimulusId": "M1",
        "stimulusRange": "Soal 1–3",
        "stimulus": "UMKM “Rasa Rempah” menjual minuman kunyit-asam 250 ml kepada konsumen muda. Pada rancangan label tercantum nama produk, komposisi kunyit, asam jawa, gula aren, isi bersih 250 ml, nama produsen, tanggal kedaluwarsa, dan nomor izin yang relevan. Tim desain ingin menambahkan klaim “pasti menyembuhkan nyeri sendi” karena dianggap menarik perhatian.",
        "question": "Tentukan Benar atau Salah untuk setiap pernyataan berikut.",
        "statements": [
          {
            "text": "Komposisi dan isi bersih merupakan informasi yang membantu konsumen memahami produk.",
            "answer": true
          },
          {
            "text": "Klaim promosi boleh dibuat tanpa dasar selama meningkatkan penjualan.",
            "answer": false
          },
          {
            "text": "Identitas produsen dan tanggal kedaluwarsa relevan dicantumkan pada label.",
            "answer": true
          }
        ],
        "explanation": "Evaluasi label mempertimbangkan kejelasan informasi, kebenaran klaim, serta informasi penting tentang produk."
      },
      {
        "type": "single",
        "topic": "Kemasan & Label",
        "level": "Reasoning",
        "stimulusId": "M1",
        "stimulusRange": "Soal 1–3",
        "stimulus": "UMKM “Rasa Rempah” menjual minuman kunyit-asam 250 ml kepada konsumen muda. Pada rancangan label tercantum nama produk, komposisi kunyit, asam jawa, gula aren, isi bersih 250 ml, nama produsen, tanggal kedaluwarsa, dan nomor izin yang relevan. Tim desain ingin menambahkan klaim “pasti menyembuhkan nyeri sendi” karena dianggap menarik perhatian.",
        "question": "Jika sasaran utama adalah konsumen muda yang peduli kesehatan, pendekatan desain yang paling tepat adalah ...",
        "options": [
          "menghilangkan komposisi agar kemasan terlihat kosong",
          "menonjolkan identitas produk dan informasi utama dengan hierarki visual yang jelas",
          "menggunakan tulisan sangat kecil agar seluruh promosi muat",
          "mengganti seluruh informasi dengan testimoni",
          "menambahkan sebanyak mungkin ornamen"
        ],
        "answer": 1,
        "explanation": "Desain kemasan perlu menarik sekaligus menjaga keterbacaan dan informasi utama."
      },
      {
        "type": "single",
        "topic": "Prototipe",
        "level": "Reasoning",
        "stimulusId": "M2",
        "stimulusRange": "Soal 4–6",
        "stimulus": "Tim siswa mengembangkan aplikasi laundry online. Hasil survei menunjukkan pengguna membutuhkan penjadwalan penjemputan, pelacakan status cucian, pilihan pembayaran digital, dan estimasi biaya. Tim telah membuat sketsa alur layar. Pada uji awal prototipe, 7 dari 10 pengguna gagal menemukan tombol untuk menjadwalkan penjemputan.",
        "question": "Tindakan berikutnya yang paling tepat berdasarkan hasil uji tersebut adalah ...",
        "options": [
          "langsung merilis aplikasi",
          "memperbaiki letak/hierarki tombol penjemputan lalu menguji ulang",
          "menghapus fitur penjemputan",
          "menambah iklan sebelum memperbaiki prototipe",
          "menaikkan harga layanan"
        ],
        "answer": 1,
        "explanation": "Prototipe digunakan untuk menemukan masalah usability. Temuan uji menjadi dasar iterasi dan pengujian ulang."
      },
      {
        "type": "tf",
        "topic": "Prototipe",
        "level": "Reasoning",
        "stimulusId": "M2",
        "stimulusRange": "Soal 4–6",
        "stimulus": "Tim siswa mengembangkan aplikasi laundry online. Hasil survei menunjukkan pengguna membutuhkan penjadwalan penjemputan, pelacakan status cucian, pilihan pembayaran digital, dan estimasi biaya. Tim telah membuat sketsa alur layar. Pada uji awal prototipe, 7 dari 10 pengguna gagal menemukan tombol untuk menjadwalkan penjemputan.",
        "question": "Nilailah pernyataan berikut.",
        "statements": [
          {
            "text": "Kegagalan 7 dari 10 pengguna menemukan tombol merupakan data yang relevan untuk mengevaluasi antarmuka.",
            "answer": true
          },
          {
            "text": "Karena fitur sudah lengkap, hasil uji pengguna dapat diabaikan.",
            "answer": false
          },
          {
            "text": "Pengujian ulang setelah revisi dapat membantu memastikan masalah telah berkurang.",
            "answer": true
          }
        ],
        "explanation": "Pengembangan prototipe bersifat iteratif: rancang, uji, temukan masalah, perbaiki, dan uji kembali."
      },
      {
        "type": "single",
        "topic": "Pengembangan Desain Produk",
        "level": "Reasoning",
        "stimulusId": "M2",
        "stimulusRange": "Soal 4–6",
        "stimulus": "Tim siswa mengembangkan aplikasi laundry online. Hasil survei menunjukkan pengguna membutuhkan penjadwalan penjemputan, pelacakan status cucian, pilihan pembayaran digital, dan estimasi biaya. Tim telah membuat sketsa alur layar. Pada uji awal prototipe, 7 dari 10 pengguna gagal menemukan tombol untuk menjadwalkan penjemputan.",
        "question": "Data yang paling kuat untuk mendukung keputusan perubahan desain tombol adalah ...",
        "options": [
          "warna favorit anggota tim",
          "hasil observasi dan keberhasilan pengguna menyelesaikan tugas",
          "jumlah pengikut akun media sosial",
          "harga aplikasi pesaing",
          "nama aplikasi"
        ],
        "answer": 1,
        "explanation": "Keputusan desain antarmuka sebaiknya didasarkan pada bukti penggunaan dan kebutuhan pengguna."
      },
      {
        "type": "single",
        "topic": "Biaya Produksi",
        "level": "Reasoning",
        "stimulusId": "M3",
        "stimulusRange": "Soal 7–9",
        "stimulus": "Kelompok usaha “NASI GO” menerima pesanan 300 boks per minggu. Biaya bahan baku Rp1.200.000, tenaga kerja langsung Rp600.000, dan overhead produksi Rp450.000. Dalam satu minggu terdapat 15 boks yang tidak layak jual akibat kesalahan pengemasan.",
        "question": "Jika seluruh biaya dibebankan pada produk yang layak jual, biaya produksi per boks yang layak jual paling dekat adalah ...",
        "options": [
          "Rp7.500",
          "Rp7.895",
          "Rp8.000",
          "Rp8.250",
          "Rp8.500"
        ],
        "answer": 1,
        "explanation": "Total biaya Rp2.250.000. Produk layak jual 285 boks. Rp2.250.000 ÷ 285 ≈ Rp7.895.",
        "table": {
          "headers": [
            "Komponen",
            "Jumlah"
          ],
          "rows": [
            [
              "Bahan baku",
              "Rp1.200.000"
            ],
            [
              "Tenaga kerja langsung",
              "Rp600.000"
            ],
            [
              "Overhead produksi",
              "Rp450.000"
            ],
            [
              "Produksi",
              "300 boks"
            ],
            [
              "Tidak layak jual",
              "15 boks"
            ]
          ]
        }
      },
      {
        "type": "tf",
        "topic": "Perencanaan Produksi",
        "level": "Reasoning",
        "stimulusId": "M3",
        "stimulusRange": "Soal 7–9",
        "stimulus": "Kelompok usaha “NASI GO” menerima pesanan 300 boks per minggu. Biaya bahan baku Rp1.200.000, tenaga kerja langsung Rp600.000, dan overhead produksi Rp450.000. Dalam satu minggu terdapat 15 boks yang tidak layak jual akibat kesalahan pengemasan.",
        "question": "Nilailah pernyataan berikut.",
        "statements": [
          {
            "text": "Jumlah produk rusak memengaruhi biaya per unit layak jual jika seluruh biaya produksi tetap dibebankan.",
            "answer": true
          },
          {
            "text": "Mengurangi cacat dapat meningkatkan efisiensi penggunaan biaya produksi.",
            "answer": true
          },
          {
            "text": "Perencanaan produksi tidak perlu memperhitungkan target output layak jual.",
            "answer": false
          }
        ],
        "explanation": "Produk rusak menurunkan jumlah unit yang dapat menyerap biaya dan karena itu perlu diperhitungkan dalam perencanaan.",
        "table": {
          "headers": [
            "Komponen",
            "Jumlah"
          ],
          "rows": [
            [
              "Bahan baku",
              "Rp1.200.000"
            ],
            [
              "Tenaga kerja langsung",
              "Rp600.000"
            ],
            [
              "Overhead produksi",
              "Rp450.000"
            ],
            [
              "Produksi",
              "300 boks"
            ],
            [
              "Tidak layak jual",
              "15 boks"
            ]
          ]
        }
      },
      {
        "type": "single",
        "topic": "Pengendalian Mutu",
        "level": "Reasoning",
        "stimulusId": "M3",
        "stimulusRange": "Soal 7–9",
        "stimulus": "Kelompok usaha “NASI GO” menerima pesanan 300 boks per minggu. Biaya bahan baku Rp1.200.000, tenaga kerja langsung Rp600.000, dan overhead produksi Rp450.000. Dalam satu minggu terdapat 15 boks yang tidak layak jual akibat kesalahan pengemasan.",
        "question": "Jika kerusakan terutama terjadi karena seal kemasan tidak rapat, tindakan korektif pertama yang paling tepat adalah ...",
        "options": [
          "menaikkan harga",
          "memeriksa parameter proses sealing dan penyebab ketidaksesuaian",
          "mengurangi promosi",
          "mengganti nama produk",
          "menambah jumlah pesanan"
        ],
        "answer": 1,
        "explanation": "Pengendalian mutu dimulai dari identifikasi penyebab cacat pada proses dan parameter yang terkait.",
        "table": {
          "headers": [
            "Komponen",
            "Jumlah"
          ],
          "rows": [
            [
              "Bahan baku",
              "Rp1.200.000"
            ],
            [
              "Tenaga kerja langsung",
              "Rp600.000"
            ],
            [
              "Overhead produksi",
              "Rp450.000"
            ],
            [
              "Produksi",
              "300 boks"
            ],
            [
              "Tidak layak jual",
              "15 boks"
            ]
          ]
        }
      },
      {
        "type": "single",
        "topic": "Pemasaran",
        "level": "Reasoning",
        "stimulusId": "M4",
        "stimulusRange": "Soal 10–12",
        "stimulus": "Usaha “Kopi Saku” menjual kopi serbuk praktis. Selama dua bulan terakhir penjualan turun. Survei pelanggan menunjukkan harga dianggap sedikit tinggi, informasi pada kemasan kurang lengkap, dan banyak calon pembeli belum mengetahui tempat pembelian. Data digital menunjukkan iklan video memperoleh 12.000 tayangan, 720 klik, dan 36 pembelian.",
        "question": "Conversion rate dari klik menjadi pembelian pada iklan tersebut adalah ...",
        "options": [
          "3%",
          "4%",
          "5%",
          "6%",
          "8%"
        ],
        "answer": 2,
        "explanation": "Conversion rate = 36 ÷ 720 × 100% = 5%."
      },
      {
        "type": "tf",
        "topic": "Pemasaran",
        "level": "Reasoning",
        "stimulusId": "M4",
        "stimulusRange": "Soal 10–12",
        "stimulus": "Usaha “Kopi Saku” menjual kopi serbuk praktis. Selama dua bulan terakhir penjualan turun. Survei pelanggan menunjukkan harga dianggap sedikit tinggi, informasi pada kemasan kurang lengkap, dan banyak calon pembeli belum mengetahui tempat pembelian. Data digital menunjukkan iklan video memperoleh 12.000 tayangan, 720 klik, dan 36 pembelian.",
        "question": "Nilailah pernyataan berikut.",
        "statements": [
          {
            "text": "Melengkapi informasi kemasan dapat membantu mengurangi ketidakpastian konsumen.",
            "answer": true
          },
          {
            "text": "Masalah akses pembelian dapat ditangani dengan memperluas kanal distribusi.",
            "answer": true
          },
          {
            "text": "Satu-satunya solusi penurunan penjualan adalah menurunkan mutu bahan agar harga lebih murah.",
            "answer": false
          }
        ],
        "explanation": "Masalah penjualan perlu dilihat dari kombinasi nilai produk, informasi, harga, promosi, dan distribusi."
      },
      {
        "type": "single",
        "topic": "Distribusi",
        "level": "Reasoning",
        "stimulusId": "M4",
        "stimulusRange": "Soal 10–12",
        "stimulus": "Usaha “Kopi Saku” menjual kopi serbuk praktis. Selama dua bulan terakhir penjualan turun. Survei pelanggan menunjukkan harga dianggap sedikit tinggi, informasi pada kemasan kurang lengkap, dan banyak calon pembeli belum mengetahui tempat pembelian. Data digital menunjukkan iklan video memperoleh 12.000 tayangan, 720 klik, dan 36 pembelian.",
        "question": "Tindakan yang paling langsung menjawab keluhan konsumen tentang sulitnya menemukan tempat pembelian adalah ...",
        "options": [
          "mengubah logo",
          "menambah kanal penjualan yang relevan seperti marketplace/koperasi/kafe lokal",
          "mengurangi isi kemasan",
          "menghapus informasi komposisi",
          "menghentikan promosi digital"
        ],
        "answer": 1,
        "explanation": "Perluasan titik atau kanal penjualan memperbaiki ketersediaan produk bagi konsumen."
      },
      {
        "type": "single",
        "topic": "Distribusi",
        "level": "Reasoning",
        "stimulusId": "M5",
        "stimulusRange": "Soal 13–15",
        "stimulus": "Sebuah usaha sabun ramah lingkungan menjual langsung kepada siswa, guru, dan warga sekitar. Pesanan juga diterima melalui media sosial. Dalam rencana ekspansi, usaha mempertimbangkan menitipkan produk di koperasi sekolah dan toko lokal serta menggunakan jasa pengiriman untuk pesanan daring.",
        "question": "Pola penjualan awal sebelum ekspansi termasuk ...",
        "options": [
          "distribusi langsung",
          "distribusi dua tingkat",
          "distribusi melalui grosir",
          "distribusi melalui agen eksklusif",
          "distribusi ekspor"
        ],
        "answer": 0,
        "explanation": "Produsen menjual langsung kepada konsumen tanpa perantara."
      },
      {
        "type": "multi",
        "topic": "Distribusi",
        "level": "Reasoning",
        "stimulusId": "M5",
        "stimulusRange": "Soal 13–15",
        "stimulus": "Sebuah usaha sabun ramah lingkungan menjual langsung kepada siswa, guru, dan warga sekitar. Pesanan juga diterima melalui media sosial. Dalam rencana ekspansi, usaha mempertimbangkan menitipkan produk di koperasi sekolah dan toko lokal serta menggunakan jasa pengiriman untuk pesanan daring.",
        "question": "Manakah keputusan yang dapat mendukung perluasan distribusi? Pilih semua jawaban yang benar.",
        "options": [
          "Menentukan titik titip jual yang sesuai target pasar",
          "Mengatur stok dan jadwal pengiriman",
          "Mengevaluasi biaya logistik",
          "Menghilangkan pencatatan pesanan",
          "Memantau tingkat kerusakan selama pengiriman"
        ],
        "answer": [
          0,
          1,
          2,
          4
        ],
        "explanation": "Distribusi yang baik perlu mengelola kanal, stok, biaya, pengiriman, dan risiko kerusakan."
      },
      {
        "type": "tf",
        "topic": "Distribusi",
        "level": "Reasoning",
        "stimulusId": "M5",
        "stimulusRange": "Soal 13–15",
        "stimulus": "Sebuah usaha sabun ramah lingkungan menjual langsung kepada siswa, guru, dan warga sekitar. Pesanan juga diterima melalui media sosial. Dalam rencana ekspansi, usaha mempertimbangkan menitipkan produk di koperasi sekolah dan toko lokal serta menggunakan jasa pengiriman untuk pesanan daring.",
        "question": "Nilailah pernyataan berikut.",
        "statements": [
          {
            "text": "Penitipan produk di toko lokal menambah perantara dibanding penjualan langsung.",
            "answer": true
          },
          {
            "text": "Jasa pengiriman tidak perlu dievaluasi karena tidak berpengaruh pada pengalaman pelanggan.",
            "answer": false
          },
          {
            "text": "Pilihan saluran distribusi dapat disesuaikan dengan karakter produk dan target pasar.",
            "answer": true
          }
        ],
        "explanation": "Pemilihan kanal distribusi memengaruhi jangkauan, biaya, kontrol, dan pengalaman konsumen."
      },
      {
        "type": "single",
        "topic": "Proposal Usaha",
        "level": "Reasoning",
        "stimulusId": "M6",
        "stimulusRange": "Soal 16–18",
        "stimulus": "Empat siswa merancang usaha tas dari limbah plastik. Targetnya konsumen usia 15–30 tahun yang peduli lingkungan. Produk dijual di sekolah, komunitas lokal, dan media sosial. Keunggulan yang ditawarkan adalah desain unik, pemanfaatan limbah, dan harga yang terjangkau. Kapasitas awal direncanakan 80 tas per bulan.",
        "question": "Informasi tentang target konsumen, kanal penjualan, dan keunggulan produk terutama digunakan dalam bagian ...",
        "options": [
          "strategi pemasaran",
          "daftar aset pribadi",
          "riwayat pendidikan anggota",
          "jadwal piket",
          "surat izin tidak terkait"
        ],
        "answer": 0,
        "explanation": "Target pasar, cara menjangkau konsumen, dan positioning merupakan bagian penting rencana pemasaran."
      },
      {
        "type": "multi",
        "topic": "Analisis Peluang Usaha",
        "level": "Reasoning",
        "stimulusId": "M6",
        "stimulusRange": "Soal 16–18",
        "stimulus": "Empat siswa merancang usaha tas dari limbah plastik. Targetnya konsumen usia 15–30 tahun yang peduli lingkungan. Produk dijual di sekolah, komunitas lokal, dan media sosial. Keunggulan yang ditawarkan adalah desain unik, pemanfaatan limbah, dan harga yang terjangkau. Kapasitas awal direncanakan 80 tas per bulan.",
        "question": "Data tambahan apa yang paling membantu menilai peluang usaha? Pilih semua jawaban yang benar.",
        "options": [
          "Ukuran/minat pasar terhadap produk ramah lingkungan",
          "Ketersediaan bahan limbah yang layak",
          "Harga dan produk pesaing",
          "Warna favorit anggota tim",
          "Kesediaan konsumen membayar"
        ],
        "answer": [
          0,
          1,
          2,
          4
        ],
        "explanation": "Peluang usaha dinilai dengan kebutuhan pasar, sumber daya, pesaing, dan kemampuan pelanggan membayar."
      },
      {
        "type": "tf",
        "topic": "Proposal Usaha",
        "level": "Reasoning",
        "stimulusId": "M6",
        "stimulusRange": "Soal 16–18",
        "stimulus": "Empat siswa merancang usaha tas dari limbah plastik. Targetnya konsumen usia 15–30 tahun yang peduli lingkungan. Produk dijual di sekolah, komunitas lokal, dan media sosial. Keunggulan yang ditawarkan adalah desain unik, pemanfaatan limbah, dan harga yang terjangkau. Kapasitas awal direncanakan 80 tas per bulan.",
        "question": "Nilailah pernyataan berikut.",
        "statements": [
          {
            "text": "Kapasitas awal 80 tas per bulan perlu disesuaikan dengan kemampuan alat dan tenaga kerja.",
            "answer": true
          },
          {
            "text": "Proposal yang baik cukup menjelaskan ide produk tanpa rencana pemasaran dan keuangan.",
            "answer": false
          },
          {
            "text": "Keunggulan produk perlu dijelaskan secara relevan terhadap kebutuhan target konsumen.",
            "answer": true
          }
        ],
        "explanation": "Proposal yang layak menghubungkan ide, pasar, operasi, dan keuangan."
      },
      {
        "type": "single",
        "topic": "Pelaporan Keuangan",
        "level": "Reasoning",
        "stimulusId": "M7",
        "stimulusRange": "Soal 19–21",
        "stimulus": "Usaha “PrintKita” mencatat penjualan Rp36.000.000. Harga pokok penjualan Rp21.000.000. Beban gaji Rp5.000.000, sewa Rp3.000.000, pemasaran Rp2.000.000, dan beban lain Rp1.000.000. Sebagian penjualan senilai Rp6.000.000 masih berupa piutang dan belum diterima tunai.",
        "question": "Laba bersih sederhana berdasarkan data pendapatan dan beban tersebut adalah ...",
        "options": [
          "Rp2.000.000",
          "Rp3.000.000",
          "Rp4.000.000",
          "Rp5.000.000",
          "Rp6.000.000"
        ],
        "answer": 2,
        "explanation": "Laba kotor Rp15.000.000. Total beban Rp11.000.000. Laba bersih Rp4.000.000.",
        "table": {
          "headers": [
            "Komponen",
            "Nilai"
          ],
          "rows": [
            [
              "Penjualan",
              "Rp36.000.000"
            ],
            [
              "HPP",
              "Rp21.000.000"
            ],
            [
              "Gaji",
              "Rp5.000.000"
            ],
            [
              "Sewa",
              "Rp3.000.000"
            ],
            [
              "Pemasaran",
              "Rp2.000.000"
            ],
            [
              "Beban lain",
              "Rp1.000.000"
            ],
            [
              "Piutang dari penjualan",
              "Rp6.000.000"
            ]
          ]
        }
      },
      {
        "type": "multi",
        "topic": "Pelaporan Keuangan",
        "level": "Reasoning",
        "stimulusId": "M7",
        "stimulusRange": "Soal 19–21",
        "stimulus": "Usaha “PrintKita” mencatat penjualan Rp36.000.000. Harga pokok penjualan Rp21.000.000. Beban gaji Rp5.000.000, sewa Rp3.000.000, pemasaran Rp2.000.000, dan beban lain Rp1.000.000. Sebagian penjualan senilai Rp6.000.000 masih berupa piutang dan belum diterima tunai.",
        "question": "Pernyataan mana yang tepat? Pilih semua jawaban yang benar.",
        "options": [
          "Laba dan perubahan kas dapat berbeda",
          "Piutang menunjukkan pendapatan yang belum seluruhnya diterima dalam kas",
          "Nilai piutang relevan saat menganalisis likuiditas",
          "Jika laba positif maka kas pasti bertambah dengan jumlah yang sama",
          "Beban perlu dipertimbangkan untuk menghitung laba bersih"
        ],
        "answer": [
          0,
          1,
          2,
          4
        ],
        "explanation": "Laporan laba rugi dan arus kas mengukur hal berbeda. Piutang dapat menyebabkan laba tidak sama dengan perubahan kas.",
        "table": {
          "headers": [
            "Komponen",
            "Nilai"
          ],
          "rows": [
            [
              "Penjualan",
              "Rp36.000.000"
            ],
            [
              "HPP",
              "Rp21.000.000"
            ],
            [
              "Gaji",
              "Rp5.000.000"
            ],
            [
              "Sewa",
              "Rp3.000.000"
            ],
            [
              "Pemasaran",
              "Rp2.000.000"
            ],
            [
              "Beban lain",
              "Rp1.000.000"
            ],
            [
              "Piutang dari penjualan",
              "Rp6.000.000"
            ]
          ]
        }
      },
      {
        "type": "tf",
        "topic": "Pelaporan Keuangan",
        "level": "Reasoning",
        "stimulusId": "M7",
        "stimulusRange": "Soal 19–21",
        "stimulus": "Usaha “PrintKita” mencatat penjualan Rp36.000.000. Harga pokok penjualan Rp21.000.000. Beban gaji Rp5.000.000, sewa Rp3.000.000, pemasaran Rp2.000.000, dan beban lain Rp1.000.000. Sebagian penjualan senilai Rp6.000.000 masih berupa piutang dan belum diterima tunai.",
        "question": "Nilailah pernyataan berikut.",
        "statements": [
          {
            "text": "HPP digunakan dalam menghitung laba kotor.",
            "answer": true
          },
          {
            "text": "Piutang Rp6.000.000 otomatis merupakan beban usaha.",
            "answer": false
          },
          {
            "text": "Beban pemasaran mengurangi laba dalam perhitungan sederhana ini.",
            "answer": true
          }
        ],
        "explanation": "HPP dan beban mengurangi hasil usaha, sedangkan piutang adalah hak tagih, bukan beban.",
        "table": {
          "headers": [
            "Komponen",
            "Nilai"
          ],
          "rows": [
            [
              "Penjualan",
              "Rp36.000.000"
            ],
            [
              "HPP",
              "Rp21.000.000"
            ],
            [
              "Gaji",
              "Rp5.000.000"
            ],
            [
              "Sewa",
              "Rp3.000.000"
            ],
            [
              "Pemasaran",
              "Rp2.000.000"
            ],
            [
              "Beban lain",
              "Rp1.000.000"
            ],
            [
              "Piutang dari penjualan",
              "Rp6.000.000"
            ]
          ]
        }
      },
      {
        "type": "single",
        "topic": "HaKI",
        "level": "Reasoning",
        "stimulusId": "M8",
        "stimulusRange": "Soal 22–24",
        "stimulus": "Sebuah usaha pakaian menggunakan nama dan logo yang sangat menyerupai merek terkenal untuk produk sejenis. Di sisi lain, desainer usaha tersebut membuat motif ilustrasi orisinal sendiri dan tim teknis mengembangkan alat pengunci tas dengan mekanisme baru. Pemilik ingin mengelola aset kekayaan intelektual secara lebih tepat.",
        "question": "Tindakan paling tepat terkait nama dan logo yang menyerupai merek terkenal adalah ...",
        "options": [
          "mempertahankannya karena sudah dikenal konsumen",
          "menghentikan penggunaan unsur bermasalah dan mengembangkan identitas orisinal sambil melakukan pemeriksaan yang diperlukan",
          "hanya mengubah warna logo",
          "menambahkan kata kecil pada logo tanpa menilai potensi kebingungan",
          "menghapus nama produsen"
        ],
        "answer": 1,
        "explanation": "Identitas usaha sebaiknya orisinal dan tidak menimbulkan kebingungan dengan pihak lain."
      },
      {
        "type": "multi",
        "topic": "HaKI",
        "level": "Reasoning",
        "stimulusId": "M8",
        "stimulusRange": "Soal 22–24",
        "stimulus": "Sebuah usaha pakaian menggunakan nama dan logo yang sangat menyerupai merek terkenal untuk produk sejenis. Di sisi lain, desainer usaha tersebut membuat motif ilustrasi orisinal sendiri dan tim teknis mengembangkan alat pengunci tas dengan mekanisme baru. Pemilik ingin mengelola aset kekayaan intelektual secara lebih tepat.",
        "question": "Secara konseptual, aset mana yang dapat berkaitan dengan bentuk perlindungan HaKI yang berbeda? Pilih semua jawaban yang benar.",
        "options": [
          "Nama/logo pembeda barang atau jasa dapat berkaitan dengan merek",
          "Ilustrasi orisinal dapat berkaitan dengan hak cipta",
          "Mekanisme teknis baru dapat berkaitan dengan paten apabila memenuhi syarat",
          "Semua ide otomatis memperoleh paten tanpa syarat",
          "Jenis perlindungan bergantung pada objek dan persyaratan masing-masing"
        ],
        "answer": [
          0,
          1,
          2,
          4
        ],
        "explanation": "Objek HaKI berbeda-beda. Merek, hak cipta, dan paten memiliki objek serta persyaratan masing-masing."
      },
      {
        "type": "multi",
        "topic": "HaKI",
        "level": "Reasoning",
        "stimulusId": "M8",
        "stimulusRange": "Soal 22–24",
        "stimulus": "Sebuah usaha pakaian menggunakan nama dan logo yang sangat menyerupai merek terkenal untuk produk sejenis. Di sisi lain, desainer usaha tersebut membuat motif ilustrasi orisinal sendiri dan tim teknis mengembangkan alat pengunci tas dengan mekanisme baru. Pemilik ingin mengelola aset kekayaan intelektual secara lebih tepat.",
        "question": "Langkah pencegahan yang relevan sebelum memakai identitas merek baru adalah ...",
        "options": [
          "membuat identitas yang orisinal",
          "melakukan penelusuran merek/identitas yang relevan",
          "menyimpan dokumentasi proses pembuatan",
          "meniru logo populer lalu mengubah sedikit",
          "mempertimbangkan konsultasi/pendampingan jika diperlukan"
        ],
        "answer": [
          0,
          1,
          2,
          4
        ],
        "explanation": "Upaya pencegahan dapat mencakup orisinalitas, penelusuran, dokumentasi, dan pendampingan sesuai kebutuhan."
      },
      {
        "type": "single",
        "topic": "Prototipe",
        "level": "Reasoning",
        "question": "Sebuah kelompok siswa mengembangkan botol minum lipat untuk pekerja komuter. Survei menunjukkan pengguna menginginkan produk ringan, tidak bocor, mudah dibersihkan, dan dapat masuk tas kecil. Prototipe pertama ringan tetapi sulit dibersihkan. Keputusan pengembangan paling tepat adalah ...",
        "options": [
          "Menambah promosi sebelum desain diperbaiki",
          "Memodifikasi struktur prototipe agar mudah dibersihkan lalu melakukan uji ulang",
          "Langsung memproduksi massal",
          "Menghapus kebutuhan mudah dibersihkan",
          "Mengganti target pasar tanpa riset"
        ],
        "answer": 1,
        "explanation": "Keputusan pengembangan harus kembali pada kebutuhan pengguna. Kekurangan prototipe perlu diperbaiki dan diuji kembali sebelum produksi."
      },
      {
        "type": "single",
        "topic": "HPP",
        "level": "Applying",
        "question": "Usaha keripik memiliki biaya bahan Rp2.400.000, tenaga kerja langsung Rp1.200.000, dan overhead produksi Rp900.000 untuk 300 kemasan. HPP produksi per kemasan adalah ...",
        "options": [
          "Rp10.000",
          "Rp12.000",
          "Rp15.000",
          "Rp18.000",
          "Rp21.000"
        ],
        "answer": 2,
        "explanation": "Total biaya produksi = Rp4.500.000. HPP per kemasan = Rp4.500.000 ÷ 300 = Rp15.000."
      },
      {
        "type": "single",
        "topic": "Pemasaran",
        "level": "Reasoning",
        "question": "Sebuah toko daring mencatat 10.000 pengunjung, 800 memasukkan produk ke keranjang, tetapi hanya 120 menyelesaikan pembayaran. Tindakan analitis paling tepat adalah ...",
        "options": [
          "Mengganti logo",
          "Menganalisis hambatan pada checkout, biaya tambahan, metode bayar, dan kepercayaan pengguna",
          "Mengurangi variasi produk tanpa data",
          "Menghentikan iklan seluruhnya",
          "Menaikkan harga"
        ],
        "answer": 1,
        "explanation": "Penurunan terbesar terjadi menjelang transaksi selesai, sehingga funnel checkout perlu dievaluasi untuk menemukan hambatan."
      },
      {
        "type": "single",
        "topic": "Laporan Keuangan",
        "level": "Applying",
        "question": "Sebuah usaha memiliki penjualan Rp25.000.000, HPP Rp14.000.000, dan beban operasional Rp7.000.000. Laba bersih sederhana adalah ...",
        "options": [
          "Rp4.000.000",
          "Rp7.000.000",
          "Rp11.000.000",
          "Rp18.000.000",
          "Rp32.000.000"
        ],
        "answer": 0,
        "explanation": "Laba kotor = Rp25.000.000 - Rp14.000.000 = Rp11.000.000. Laba bersih = Rp11.000.000 - Rp7.000.000 = Rp4.000.000."
      },
      {
        "type": "multi",
        "topic": "Kemasan",
        "level": "Reasoning",
        "question": "Sebuah usaha kopi ingin mengevaluasi desain kemasan baru. Pilih indikator yang relevan.",
        "options": [
          "Kemampuan kemasan menjaga produk",
          "Keterbacaan label",
          "Kesesuaian ukuran dengan kebutuhan distribusi",
          "Jumlah teman pemilik usaha",
          "Kesan visual terhadap target pasar"
        ],
        "answer": [
          0,
          1,
          2,
          4
        ],
        "explanation": "Evaluasi kemasan mencakup fungsi perlindungan, informasi, efisiensi distribusi, dan daya tarik terhadap target pasar."
      },
      {
        "type": "multi",
        "topic": "Perencanaan Produksi",
        "level": "Reasoning",
        "question": "Permintaan sebuah produk meningkat tiga kali lipat menjelang hari raya. Pilih data yang perlu diperiksa sebelum menaikkan target produksi.",
        "options": [
          "Kapasitas mesin",
          "Ketersediaan bahan baku",
          "Kemampuan tenaga kerja",
          "Kapasitas penyimpanan dan distribusi",
          "Warna logo perusahaan"
        ],
        "answer": [
          0,
          1,
          2,
          3
        ],
        "explanation": "Kenaikan produksi harus mempertimbangkan kapasitas nyata proses, pasokan, SDM, penyimpanan, dan kemampuan distribusi."
      },
      {
        "type": "multi",
        "topic": "Peluang Usaha",
        "level": "Reasoning",
        "question": "Sebuah usaha baru ingin memilih peluang bisnis berbasis lingkungan sekolah. Data mana yang paling berguna?",
        "options": [
          "Keluhan atau kebutuhan berulang warga sekolah",
          "Jumlah calon pengguna",
          "Kemampuan tim memenuhi kebutuhan tersebut",
          "Tren penggunaan solusi sejenis",
          "Hobi acak pemilik yang tidak terkait pasar"
        ],
        "answer": [
          0,
          1,
          2,
          3
        ],
        "explanation": "Peluang yang baik didukung kebutuhan nyata, ukuran pasar, kemampuan internal, dan tren atau kondisi eksternal."
      },
      {
        "type": "multi",
        "topic": "Pengendalian Mutu",
        "level": "Applying",
        "question": "Pilih tindakan yang dapat memperkuat pengendalian mutu produksi.",
        "options": [
          "Menetapkan standar spesifikasi produk",
          "Mencatat produk cacat dan penyebabnya",
          "Melakukan inspeksi pada titik kritis",
          "Mengabaikan keluhan konsumen",
          "Menindaklanjuti akar penyebab cacat"
        ],
        "answer": [
          0,
          1,
          2,
          4
        ],
        "explanation": "Pengendalian mutu memerlukan standar, pemeriksaan, data cacat, serta tindakan korektif berbasis akar masalah."
      },
      {
        "type": "multi",
        "topic": "Distribusi",
        "level": "Reasoning",
        "question": "Sebuah bisnis ingin memperbaiki distribusi produk dingin. Pilih aspek penting yang perlu dianalisis.",
        "options": [
          "Suhu penyimpanan selama pengiriman",
          "Waktu tempuh",
          "Keandalan mitra logistik",
          "Kemampuan pelacakan pesanan",
          "Jenis font pada laporan internal"
        ],
        "answer": [
          0,
          1,
          2,
          3
        ],
        "explanation": "Produk yang memerlukan kondisi khusus membutuhkan pengendalian suhu, waktu, mitra yang andal, dan visibilitas pengiriman."
      },
      {
        "type": "tf",
        "topic": "HaKI",
        "level": "Reasoning",
        "question": "Sebuah usaha fesyen menemukan merek pesaing sudah terdaftar dengan nama sangat mirip. Nilailah tindakan berikut.",
        "statements": [
          {
            "text": "Melakukan penelusuran merek dan mempertimbangkan nama yang lebih berbeda.",
            "answer": true
          },
          {
            "text": "Tetap menggunakan nama yang membingungkan karena desain logonya berbeda sedikit.",
            "answer": false
          },
          {
            "text": "Mendokumentasikan proses pengembangan identitas merek dan berkonsultasi sebelum pendaftaran.",
            "answer": true
          }
        ],
        "explanation": "Penggunaan tanda yang sangat mirip dapat menimbulkan konflik. Penelusuran, diferensiasi, dokumentasi, dan konsultasi merupakan langkah lebih tepat."
      },
      {
        "type": "tf",
        "topic": "Laporan Keuangan",
        "level": "Reasoning",
        "question": "Sebuah perusahaan mengalami kenaikan penjualan tetapi kas sering tidak cukup membayar pemasok. Nilailah pernyataan berikut.",
        "statements": [
          {
            "text": "Usaha perlu memeriksa jadwal penerimaan piutang dan pembayaran utang.",
            "answer": true
          },
          {
            "text": "Kenaikan laba selalu menjamin kas tersedia tepat waktu.",
            "answer": false
          },
          {
            "text": "Laporan arus kas relevan untuk menganalisis kondisi tersebut.",
            "answer": true
          }
        ],
        "explanation": "Masalah dapat muncul karena perbedaan waktu penerimaan dan pembayaran. Laba tidak selalu sama dengan ketersediaan kas."
      }
    ]
  },
  {
    "id": "tryout",
    "title": "Tahap 4 - Try Out",
    "subtitle": "Simulasi Try Out Berbasis Stimulus",
    "description": "55 soal komprehensif dengan pola soal cerita dan analisis yang diselaraskan dengan matriks serta contoh publik TKA PKK Pusmendik.",
    "duration": 100,
    "questions": [
      {
        "type": "single",
        "topic": "Kemasan & Label",
        "level": "Reasoning",
        "stimulusId": "T1",
        "stimulusRange": "Soal 1–3",
        "stimulus": "Perhatikan informasi pada kemasan cairan pembersih peralatan makan “Jernih”.\nDiproduksi: PT Nusantara Bersih\nIsi bersih: 1.000 ml\nTanggal kedaluwarsa: 15 September 2028\nManfaat: membantu mengangkat lemak dan sisa makanan.\nCara penggunaan: tuangkan 1/2 sendok cairan ke dalam mangkuk berisi 1 gelas air bersih, masukkan spons, remas sampai berbusa, lalu gunakan untuk mencuci.\nPeringatan: jauhkan dari jangkauan anak-anak; jika terkena mata, bilas dengan air bersih.",
        "question": "Berdasarkan petunjuk penggunaan, pernyataan yang paling tepat adalah ...",
        "options": [
          "produk digunakan tanpa air",
          "1/2 sendok cairan dicampurkan dengan 1 gelas air",
          "satu botol harus dicampur dengan satu mangkuk air",
          "produk hanya digunakan setelah tanggal kedaluwarsa",
          "produk harus mengenai mata agar efektif"
        ],
        "answer": 1,
        "explanation": "Petunjuk menyatakan 1/2 sendok cairan dicampurkan dengan satu gelas air."
      },
      {
        "type": "tf",
        "topic": "Kemasan & Label",
        "level": "Reasoning",
        "stimulusId": "T1",
        "stimulusRange": "Soal 1–3",
        "stimulus": "Perhatikan informasi pada kemasan cairan pembersih peralatan makan “Jernih”.\nDiproduksi: PT Nusantara Bersih\nIsi bersih: 1.000 ml\nTanggal kedaluwarsa: 15 September 2028\nManfaat: membantu mengangkat lemak dan sisa makanan.\nCara penggunaan: tuangkan 1/2 sendok cairan ke dalam mangkuk berisi 1 gelas air bersih, masukkan spons, remas sampai berbusa, lalu gunakan untuk mencuci.\nPeringatan: jauhkan dari jangkauan anak-anak; jika terkena mata, bilas dengan air bersih.",
        "question": "Tentukan Benar atau Salah berdasarkan informasi pada label.",
        "statements": [
          {
            "text": "Produk perlu digunakan sesuai petunjuk pengenceran yang tertulis.",
            "answer": true
          },
          {
            "text": "Jika terkena mata, label menyarankan membilas dengan air bersih.",
            "answer": true
          },
          {
            "text": "Produk dianjurkan diletakkan dalam jangkauan anak agar mudah digunakan.",
            "answer": false
          }
        ],
        "explanation": "Jawaban diperoleh dari informasi eksplisit pada petunjuk dan peringatan label."
      },
      {
        "type": "single",
        "topic": "Kemasan & Label",
        "level": "Reasoning",
        "stimulusId": "T1",
        "stimulusRange": "Soal 1–3",
        "stimulus": "Perhatikan informasi pada kemasan cairan pembersih peralatan makan “Jernih”.\nDiproduksi: PT Nusantara Bersih\nIsi bersih: 1.000 ml\nTanggal kedaluwarsa: 15 September 2028\nManfaat: membantu mengangkat lemak dan sisa makanan.\nCara penggunaan: tuangkan 1/2 sendok cairan ke dalam mangkuk berisi 1 gelas air bersih, masukkan spons, remas sampai berbusa, lalu gunakan untuk mencuci.\nPeringatan: jauhkan dari jangkauan anak-anak; jika terkena mata, bilas dengan air bersih.",
        "question": "Informasi yang berfungsi terutama sebagai peringatan keselamatan adalah ...",
        "options": [
          "isi bersih 1.000 ml",
          "nama produsen",
          "jauhkan dari jangkauan anak-anak",
          "manfaat membersihkan lemak",
          "nama produk"
        ],
        "answer": 2,
        "explanation": "Pernyataan tersebut secara langsung berkaitan dengan keselamatan penggunaan produk."
      },
      {
        "type": "single",
        "topic": "Perencanaan Produksi",
        "level": "Reasoning",
        "stimulusId": "T2",
        "stimulusRange": "Soal 4–6",
        "stimulus": "Sebuah usaha roti menerima pesanan 1.200 roti untuk satu hari. Satu oven dapat memanggang 100 roti per siklus dan satu siklus berlangsung 30 menit. Waktu produksi efektif 5 jam. Biaya bahan Rp3.000.000, tenaga kerja Rp1.200.000, dan overhead Rp800.000 untuk produksi hari tersebut.",
        "question": "Tanpa menambah waktu atau oven, kapasitas maksimum yang dapat dipanggang adalah ...",
        "options": [
          "800",
          "900",
          "1.000",
          "1.100",
          "1.200"
        ],
        "answer": 2,
        "explanation": "5 jam=300 menit, sehingga 10 siklus ×100 =1.000 roti.",
        "table": {
          "headers": [
            "Data",
            "Nilai"
          ],
          "rows": [
            [
              "Pesanan",
              "1.200 roti"
            ],
            [
              "Kapasitas oven",
              "100 roti/siklus"
            ],
            [
              "Durasi siklus",
              "30 menit"
            ],
            [
              "Waktu efektif",
              "5 jam"
            ],
            [
              "Bahan",
              "Rp3.000.000"
            ],
            [
              "Tenaga kerja",
              "Rp1.200.000"
            ],
            [
              "Overhead",
              "Rp800.000"
            ]
          ]
        }
      },
      {
        "type": "tf",
        "topic": "Perencanaan Produksi",
        "level": "Reasoning",
        "stimulusId": "T2",
        "stimulusRange": "Soal 4–6",
        "stimulus": "Sebuah usaha roti menerima pesanan 1.200 roti untuk satu hari. Satu oven dapat memanggang 100 roti per siklus dan satu siklus berlangsung 30 menit. Waktu produksi efektif 5 jam. Biaya bahan Rp3.000.000, tenaga kerja Rp1.200.000, dan overhead Rp800.000 untuk produksi hari tersebut.",
        "question": "Nilailah pernyataan berikut.",
        "statements": [
          {
            "text": "Kapasitas yang tersedia lebih kecil daripada jumlah pesanan.",
            "answer": true
          },
          {
            "text": "Untuk memenuhi 1.200 roti, usaha perlu meninjau tambahan waktu, kapasitas, atau alternatif proses.",
            "answer": true
          },
          {
            "text": "Jumlah pesanan dapat dipenuhi tepat waktu tanpa perubahan apa pun pada kondisi yang diberikan.",
            "answer": false
          }
        ],
        "explanation": "Kapasitas normal hanya 1.000 roti, sehingga terdapat kekurangan 200 roti.",
        "table": {
          "headers": [
            "Data",
            "Nilai"
          ],
          "rows": [
            [
              "Pesanan",
              "1.200 roti"
            ],
            [
              "Kapasitas oven",
              "100 roti/siklus"
            ],
            [
              "Durasi siklus",
              "30 menit"
            ],
            [
              "Waktu efektif",
              "5 jam"
            ],
            [
              "Bahan",
              "Rp3.000.000"
            ],
            [
              "Tenaga kerja",
              "Rp1.200.000"
            ],
            [
              "Overhead",
              "Rp800.000"
            ]
          ]
        }
      },
      {
        "type": "single",
        "topic": "Biaya Produksi",
        "level": "Reasoning",
        "stimulusId": "T2",
        "stimulusRange": "Soal 4–6",
        "stimulus": "Sebuah usaha roti menerima pesanan 1.200 roti untuk satu hari. Satu oven dapat memanggang 100 roti per siklus dan satu siklus berlangsung 30 menit. Waktu produksi efektif 5 jam. Biaya bahan Rp3.000.000, tenaga kerja Rp1.200.000, dan overhead Rp800.000 untuk produksi hari tersebut.",
        "question": "Jika 1.000 roti berhasil diproduksi dan seluruh biaya dibebankan pada hasil tersebut, biaya produksi per roti adalah ...",
        "options": [
          "Rp4.000",
          "Rp4.500",
          "Rp5.000",
          "Rp5.500",
          "Rp6.000"
        ],
        "answer": 2,
        "explanation": "Total biaya Rp5.000.000 ÷1.000 = Rp5.000 per roti.",
        "table": {
          "headers": [
            "Data",
            "Nilai"
          ],
          "rows": [
            [
              "Pesanan",
              "1.200 roti"
            ],
            [
              "Kapasitas oven",
              "100 roti/siklus"
            ],
            [
              "Durasi siklus",
              "30 menit"
            ],
            [
              "Waktu efektif",
              "5 jam"
            ],
            [
              "Bahan",
              "Rp3.000.000"
            ],
            [
              "Tenaga kerja",
              "Rp1.200.000"
            ],
            [
              "Overhead",
              "Rp800.000"
            ]
          ]
        }
      },
      {
        "type": "single",
        "topic": "Pengendalian Mutu",
        "level": "Reasoning",
        "stimulusId": "T3",
        "stimulusRange": "Soal 7–9",
        "stimulus": "Produsen saus botol menemukan 24 botol bocor dari 800 botol pada minggu pertama. Setelah standardisasi suhu mesin penutup dan pemeriksaan tutup dari pemasok, jumlah botol bocor turun menjadi 8 dari 800 botol pada minggu berikutnya. Tim mencatat setiap hasil pemeriksaan per batch.",
        "question": "Tingkat cacat pada minggu pertama adalah ...",
        "options": [
          "1%",
          "2%",
          "3%",
          "4%",
          "5%"
        ],
        "answer": 2,
        "explanation": "24 ÷800 ×100% = 3%."
      },
      {
        "type": "tf",
        "topic": "Pengendalian Mutu",
        "level": "Reasoning",
        "stimulusId": "T3",
        "stimulusRange": "Soal 7–9",
        "stimulus": "Produsen saus botol menemukan 24 botol bocor dari 800 botol pada minggu pertama. Setelah standardisasi suhu mesin penutup dan pemeriksaan tutup dari pemasok, jumlah botol bocor turun menjadi 8 dari 800 botol pada minggu berikutnya. Tim mencatat setiap hasil pemeriksaan per batch.",
        "question": "Nilailah pernyataan berikut.",
        "statements": [
          {
            "text": "Tingkat cacat setelah perbaikan adalah 1%.",
            "answer": true
          },
          {
            "text": "Penurunan cacat menunjukkan tindakan korektif layak dievaluasi sebagai bagian perbaikan proses.",
            "answer": true
          },
          {
            "text": "Pencatatan per batch tidak berguna untuk pengendalian mutu.",
            "answer": false
          }
        ],
        "explanation": "8/800=1%. Data per batch penting untuk pemantauan mutu."
      },
      {
        "type": "single",
        "topic": "Pengendalian Mutu",
        "level": "Reasoning",
        "stimulusId": "T3",
        "stimulusRange": "Soal 7–9",
        "stimulus": "Produsen saus botol menemukan 24 botol bocor dari 800 botol pada minggu pertama. Setelah standardisasi suhu mesin penutup dan pemeriksaan tutup dari pemasok, jumlah botol bocor turun menjadi 8 dari 800 botol pada minggu berikutnya. Tim mencatat setiap hasil pemeriksaan per batch.",
        "question": "Langkah yang paling tepat jika cacat kembali meningkat adalah ...",
        "options": [
          "menghapus catatan lama",
          "melakukan analisis penyebab berdasarkan data proses dan material",
          "langsung mengganti merek produk",
          "menambah promosi",
          "mengurangi pemeriksaan"
        ],
        "answer": 1,
        "explanation": "Pengendalian mutu membutuhkan analisis akar penyebab berbasis data."
      },
      {
        "type": "single",
        "topic": "Pemasaran",
        "level": "Reasoning",
        "stimulusId": "T4",
        "stimulusRange": "Soal 10–12",
        "stimulus": "Kedai “Kopi Pagi” menjalankan dua kampanye digital selama satu minggu.\nKampanye A: 20.000 tayangan, 1.000 klik, 50 pembelian.\nKampanye B: 12.000 tayangan, 720 klik, 72 pembelian.\nBiaya iklan A Rp1.000.000 dan B Rp900.000. Pemilik ingin fokus pada efektivitas konversi dan biaya per pembelian.",
        "question": "Jika ukuran utama adalah conversion rate klik menjadi pembelian, kampanye yang lebih efektif adalah ...",
        "options": [
          "A karena tayangan lebih tinggi",
          "A karena klik lebih tinggi",
          "B karena conversion rate 10%",
          "keduanya sama",
          "tidak dapat dihitung"
        ],
        "answer": 2,
        "explanation": "A=50/1000=5%; B=72/720=10%.",
        "table": {
          "headers": [
            "Kampanye",
            "Tayangan",
            "Klik",
            "Pembelian",
            "Biaya"
          ],
          "rows": [
            [
              "A",
              "20.000",
              "1.000",
              "50",
              "Rp1.000.000"
            ],
            [
              "B",
              "12.000",
              "720",
              "72",
              "Rp900.000"
            ]
          ]
        }
      },
      {
        "type": "tf",
        "topic": "Pemasaran",
        "level": "Reasoning",
        "stimulusId": "T4",
        "stimulusRange": "Soal 10–12",
        "stimulus": "Kedai “Kopi Pagi” menjalankan dua kampanye digital selama satu minggu.\nKampanye A: 20.000 tayangan, 1.000 klik, 50 pembelian.\nKampanye B: 12.000 tayangan, 720 klik, 72 pembelian.\nBiaya iklan A Rp1.000.000 dan B Rp900.000. Pemilik ingin fokus pada efektivitas konversi dan biaya per pembelian.",
        "question": "Nilailah pernyataan berikut.",
        "statements": [
          {
            "text": "Biaya per pembelian A adalah Rp20.000.",
            "answer": true
          },
          {
            "text": "Biaya per pembelian B adalah Rp12.500.",
            "answer": true
          },
          {
            "text": "B lebih baik pada kedua indikator yang disebut dalam stimulus.",
            "answer": true
          }
        ],
        "explanation": "A: 1.000.000/50=20.000; B:900.000/72=12.500; B juga memiliki conversion rate lebih tinggi.",
        "table": {
          "headers": [
            "Kampanye",
            "Tayangan",
            "Klik",
            "Pembelian",
            "Biaya"
          ],
          "rows": [
            [
              "A",
              "20.000",
              "1.000",
              "50",
              "Rp1.000.000"
            ],
            [
              "B",
              "12.000",
              "720",
              "72",
              "Rp900.000"
            ]
          ]
        }
      },
      {
        "type": "single",
        "topic": "Pemasaran",
        "level": "Reasoning",
        "stimulusId": "T4",
        "stimulusRange": "Soal 10–12",
        "stimulus": "Kedai “Kopi Pagi” menjalankan dua kampanye digital selama satu minggu.\nKampanye A: 20.000 tayangan, 1.000 klik, 50 pembelian.\nKampanye B: 12.000 tayangan, 720 klik, 72 pembelian.\nBiaya iklan A Rp1.000.000 dan B Rp900.000. Pemilik ingin fokus pada efektivitas konversi dan biaya per pembelian.",
        "question": "Keputusan yang paling logis berdasarkan dua indikator tersebut adalah ...",
        "options": [
          "menghentikan semua promosi",
          "mempertimbangkan peningkatan porsi kampanye B sambil terus menguji kualitas traffic dan hasil penjualan",
          "memilih A hanya karena tayangannya lebih banyak",
          "mengabaikan biaya",
          "menyamakan anggaran tanpa evaluasi"
        ],
        "answer": 1,
        "explanation": "Keputusan pemasaran sebaiknya menggunakan metrik yang relevan dan tetap diuji.",
        "table": {
          "headers": [
            "Kampanye",
            "Tayangan",
            "Klik",
            "Pembelian",
            "Biaya"
          ],
          "rows": [
            [
              "A",
              "20.000",
              "1.000",
              "50",
              "Rp1.000.000"
            ],
            [
              "B",
              "12.000",
              "720",
              "72",
              "Rp900.000"
            ]
          ]
        }
      },
      {
        "type": "single",
        "topic": "Analisis Peluang Usaha",
        "level": "Reasoning",
        "stimulusId": "T5",
        "stimulusRange": "Soal 13–15",
        "stimulus": "Kelompok siswa membuat tas dari spanduk bekas. Survei 120 responden menunjukkan 78 orang tertarik pada produk ramah lingkungan, 64 orang bersedia membayar Rp75.000–Rp100.000, dan 25 orang menyatakan desain contoh terlalu sederhana. Bahan baku mudah diperoleh dari mitra percetakan lokal. Di kota yang sama sudah ada dua merek sejenis.",
        "question": "Kesimpulan awal yang paling didukung data adalah ...",
        "options": [
          "tidak ada peluang karena sudah ada pesaing",
          "terdapat indikasi pasar, tetapi desain dan posisi terhadap pesaing tetap perlu diperbaiki",
          "harga harus ditetapkan di atas Rp200.000",
          "bahan baku tidak tersedia",
          "survei tidak berguna"
        ],
        "answer": 1,
        "explanation": "Data menunjukkan minat dan willingness-to-pay, namun ada masukan desain dan kompetisi yang perlu dianalisis."
      },
      {
        "type": "multi",
        "topic": "SWOT",
        "level": "Reasoning",
        "stimulusId": "T5",
        "stimulusRange": "Soal 13–15",
        "stimulus": "Kelompok siswa membuat tas dari spanduk bekas. Survei 120 responden menunjukkan 78 orang tertarik pada produk ramah lingkungan, 64 orang bersedia membayar Rp75.000–Rp100.000, dan 25 orang menyatakan desain contoh terlalu sederhana. Bahan baku mudah diperoleh dari mitra percetakan lokal. Di kota yang sama sudah ada dua merek sejenis.",
        "question": "Manakah klasifikasi SWOT yang tepat? Pilih semua jawaban yang benar.",
        "options": [
          "Kemudahan bahan baku dari mitra lokal dapat menjadi Strength",
          "Dua merek sejenis di kota merupakan Threat",
          "Masukan bahwa desain terlalu sederhana dapat menunjukkan Weakness produk saat ini",
          "Minat konsumen pada produk ramah lingkungan dapat menjadi Opportunity",
          "Semua faktor tersebut merupakan faktor internal"
        ],
        "answer": [
          0,
          1,
          2,
          3
        ],
        "explanation": "SWOT membedakan kondisi internal dan eksternal. Bahan/kapabilitas serta kelemahan desain bersifat internal; tren/minat dan pesaing bersifat eksternal."
      },
      {
        "type": "tf",
        "topic": "Proposal Usaha",
        "level": "Reasoning",
        "stimulusId": "T5",
        "stimulusRange": "Soal 13–15",
        "stimulus": "Kelompok siswa membuat tas dari spanduk bekas. Survei 120 responden menunjukkan 78 orang tertarik pada produk ramah lingkungan, 64 orang bersedia membayar Rp75.000–Rp100.000, dan 25 orang menyatakan desain contoh terlalu sederhana. Bahan baku mudah diperoleh dari mitra percetakan lokal. Di kota yang sama sudah ada dua merek sejenis.",
        "question": "Nilailah pernyataan berikut.",
        "statements": [
          {
            "text": "Data survei dapat digunakan untuk mendukung analisis pasar dalam proposal.",
            "answer": true
          },
          {
            "text": "Proposal tidak perlu menjelaskan pesaing karena produk sudah ramah lingkungan.",
            "answer": false
          },
          {
            "text": "Rencana perbaikan desain dapat dihubungkan dengan masukan responden.",
            "answer": true
          }
        ],
        "explanation": "Proposal yang kuat menggunakan bukti pasar dan menghubungkannya dengan strategi."
      },
      {
        "type": "single",
        "topic": "Prototipe",
        "level": "Reasoning",
        "stimulusId": "T6",
        "stimulusRange": "Soal 16–18",
        "stimulus": "Tim PPLG membuat aplikasi kasir untuk kedai kecil. Hasil wawancara: pemilik ingin input transaksi maksimal 20 detik, pencarian produk cepat, laporan penjualan harian, dan koreksi transaksi yang mudah. Prototipe pertama mencatat waktu rata-rata input 38 detik. Lima dari delapan penguji juga gagal menemukan menu koreksi.",
        "question": "Kesimpulan yang paling tepat dari hasil pengujian adalah ...",
        "options": [
          "prototipe sudah memenuhi kebutuhan utama",
          "prototipe perlu iterasi karena target kecepatan dan kemudahan koreksi belum tercapai",
          "fitur laporan harus dihapus",
          "aplikasi harus langsung dipasarkan",
          "wawancara pengguna tidak relevan"
        ],
        "answer": 1,
        "explanation": "Dua indikator kebutuhan utama belum terpenuhi sehingga iterasi diperlukan."
      },
      {
        "type": "multi",
        "topic": "Pengembangan Desain Produk",
        "level": "Reasoning",
        "stimulusId": "T6",
        "stimulusRange": "Soal 16–18",
        "stimulus": "Tim PPLG membuat aplikasi kasir untuk kedai kecil. Hasil wawancara: pemilik ingin input transaksi maksimal 20 detik, pencarian produk cepat, laporan penjualan harian, dan koreksi transaksi yang mudah. Prototipe pertama mencatat waktu rata-rata input 38 detik. Lima dari delapan penguji juga gagal menemukan menu koreksi.",
        "question": "Tindakan desain mana yang relevan? Pilih semua jawaban yang benar.",
        "options": [
          "Menyederhanakan langkah input transaksi",
          "Membuat menu koreksi lebih mudah ditemukan",
          "Mengukur ulang waktu penyelesaian setelah revisi",
          "Mengabaikan penguji yang gagal karena jumlahnya sedikit",
          "Menguji alur pada pengguna sasaran"
        ],
        "answer": [
          0,
          1,
          2,
          4
        ],
        "explanation": "Perbaikan harus diarahkan pada masalah yang terukur dan kemudian diuji kembali."
      },
      {
        "type": "tf",
        "topic": "Prototipe",
        "level": "Reasoning",
        "stimulusId": "T6",
        "stimulusRange": "Soal 16–18",
        "stimulus": "Tim PPLG membuat aplikasi kasir untuk kedai kecil. Hasil wawancara: pemilik ingin input transaksi maksimal 20 detik, pencarian produk cepat, laporan penjualan harian, dan koreksi transaksi yang mudah. Prototipe pertama mencatat waktu rata-rata input 38 detik. Lima dari delapan penguji juga gagal menemukan menu koreksi.",
        "question": "Nilailah pernyataan berikut.",
        "statements": [
          {
            "text": "Target maksimal 20 detik dapat dipakai sebagai kriteria evaluasi prototipe.",
            "answer": true
          },
          {
            "text": "Prototipe hanya berguna untuk menilai warna dan tidak dapat menguji alur penggunaan.",
            "answer": false
          },
          {
            "text": "Hasil pengujian dapat menjadi dasar prioritas perbaikan.",
            "answer": true
          }
        ],
        "explanation": "Prototipe dapat digunakan untuk menguji fungsi, alur, dan usability berdasarkan kriteria kebutuhan."
      },
      {
        "type": "single",
        "topic": "Pelaporan Keuangan",
        "level": "Reasoning",
        "stimulusId": "T7",
        "stimulusRange": "Soal 19–21",
        "stimulus": "Toko “Sinar Digital” mencatat data bulan Juni: penjualan tunai Rp28.000.000, penjualan kredit Rp12.000.000, HPP Rp22.000.000, beban gaji Rp6.000.000, sewa Rp3.000.000, dan listrik Rp1.000.000. Dari penjualan kredit, Rp5.000.000 telah diterima sebelum akhir bulan.",
        "question": "Dengan menganggap seluruh penjualan diakui sebagai pendapatan, laba bersih sederhana adalah ...",
        "options": [
          "Rp6.000.000",
          "Rp7.000.000",
          "Rp8.000.000",
          "Rp9.000.000",
          "Rp10.000.000"
        ],
        "answer": 2,
        "explanation": "Pendapatan Rp40.000.000. HPP+be ban =22+6+3+1=32 juta. Laba bersih Rp8.000.000.",
        "table": {
          "headers": [
            "Komponen",
            "Nilai"
          ],
          "rows": [
            [
              "Penjualan tunai",
              "Rp28.000.000"
            ],
            [
              "Penjualan kredit",
              "Rp12.000.000"
            ],
            [
              "HPP",
              "Rp22.000.000"
            ],
            [
              "Gaji",
              "Rp6.000.000"
            ],
            [
              "Sewa",
              "Rp3.000.000"
            ],
            [
              "Listrik",
              "Rp1.000.000"
            ],
            [
              "Kas diterima dari penjualan kredit",
              "Rp5.000.000"
            ]
          ]
        }
      },
      {
        "type": "multi",
        "topic": "Pelaporan Keuangan",
        "level": "Reasoning",
        "stimulusId": "T7",
        "stimulusRange": "Soal 19–21",
        "stimulus": "Toko “Sinar Digital” mencatat data bulan Juni: penjualan tunai Rp28.000.000, penjualan kredit Rp12.000.000, HPP Rp22.000.000, beban gaji Rp6.000.000, sewa Rp3.000.000, dan listrik Rp1.000.000. Dari penjualan kredit, Rp5.000.000 telah diterima sebelum akhir bulan.",
        "question": "Pilih pernyataan yang benar.",
        "options": [
          "Total penjualan adalah Rp40.000.000",
          "Sisa piutang dari penjualan kredit adalah Rp7.000.000",
          "Laba bersih tidak selalu sama dengan kenaikan kas",
          "HPP tidak memengaruhi laba kotor",
          "Penjualan kredit dapat menyebabkan selisih antara pendapatan dan kas diterima"
        ],
        "answer": [
          0,
          1,
          2,
          4
        ],
        "explanation": "Total penjualan 40 juta; dari 12 juta kredit, 5 juta diterima sehingga sisa piutang 7 juta. Laba dan kas berbeda konsep.",
        "table": {
          "headers": [
            "Komponen",
            "Nilai"
          ],
          "rows": [
            [
              "Penjualan tunai",
              "Rp28.000.000"
            ],
            [
              "Penjualan kredit",
              "Rp12.000.000"
            ],
            [
              "HPP",
              "Rp22.000.000"
            ],
            [
              "Gaji",
              "Rp6.000.000"
            ],
            [
              "Sewa",
              "Rp3.000.000"
            ],
            [
              "Listrik",
              "Rp1.000.000"
            ],
            [
              "Kas diterima dari penjualan kredit",
              "Rp5.000.000"
            ]
          ]
        }
      },
      {
        "type": "tf",
        "topic": "Pelaporan Keuangan",
        "level": "Reasoning",
        "stimulusId": "T7",
        "stimulusRange": "Soal 19–21",
        "stimulus": "Toko “Sinar Digital” mencatat data bulan Juni: penjualan tunai Rp28.000.000, penjualan kredit Rp12.000.000, HPP Rp22.000.000, beban gaji Rp6.000.000, sewa Rp3.000.000, dan listrik Rp1.000.000. Dari penjualan kredit, Rp5.000.000 telah diterima sebelum akhir bulan.",
        "question": "Nilailah pernyataan berikut.",
        "statements": [
          {
            "text": "Penjualan kredit tetap dapat menjadi bagian pendapatan sesuai asumsi soal.",
            "answer": true
          },
          {
            "text": "Sisa piutang Rp7.000.000 merupakan beban listrik.",
            "answer": false
          },
          {
            "text": "Analisis arus kas membutuhkan informasi penerimaan dan pengeluaran kas.",
            "answer": true
          }
        ],
        "explanation": "Piutang adalah hak tagih, bukan beban. Arus kas fokus pada pergerakan kas.",
        "table": {
          "headers": [
            "Komponen",
            "Nilai"
          ],
          "rows": [
            [
              "Penjualan tunai",
              "Rp28.000.000"
            ],
            [
              "Penjualan kredit",
              "Rp12.000.000"
            ],
            [
              "HPP",
              "Rp22.000.000"
            ],
            [
              "Gaji",
              "Rp6.000.000"
            ],
            [
              "Sewa",
              "Rp3.000.000"
            ],
            [
              "Listrik",
              "Rp1.000.000"
            ],
            [
              "Kas diterima dari penjualan kredit",
              "Rp5.000.000"
            ]
          ]
        }
      },
      {
        "type": "single",
        "topic": "HaKI",
        "level": "Reasoning",
        "stimulusId": "T8",
        "stimulusRange": "Soal 22–24",
        "stimulus": "Usaha kaos “UrbanLeaf” menggunakan logo yang bentuk dan susunan visualnya sangat mirip dengan merek terkenal pada kategori pakaian yang sama. Mereka juga membuat ilustrasi karakter orisinal untuk kaos dan mengembangkan teknik pengunci kemasan yang menurut tim memiliki fungsi teknis baru.",
        "question": "Masalah utama pada penggunaan logo tersebut adalah ...",
        "options": [
          "logo terlalu sederhana",
          "potensi menimbulkan kebingungan dengan identitas pihak lain",
          "warna logo terlalu sedikit",
          "harga kaos terlalu murah",
          "kemasan tidak transparan"
        ],
        "answer": 1,
        "explanation": "Kemiripan pada barang sejenis dapat menimbulkan risiko kebingungan dan masalah merek."
      },
      {
        "type": "multi",
        "topic": "HaKI",
        "level": "Reasoning",
        "stimulusId": "T8",
        "stimulusRange": "Soal 22–24",
        "stimulus": "Usaha kaos “UrbanLeaf” menggunakan logo yang bentuk dan susunan visualnya sangat mirip dengan merek terkenal pada kategori pakaian yang sama. Mereka juga membuat ilustrasi karakter orisinal untuk kaos dan mengembangkan teknik pengunci kemasan yang menurut tim memiliki fungsi teknis baru.",
        "question": "Pernyataan konseptual mana yang tepat? Pilih semua jawaban yang benar.",
        "options": [
          "Identitas pembeda barang/jasa dapat berkaitan dengan merek",
          "Ilustrasi orisinal dapat berkaitan dengan hak cipta",
          "Solusi teknis baru dapat dipertimbangkan dalam konteks paten jika memenuhi persyaratan",
          "Semua ide otomatis dilindungi sebagai paten tanpa syarat",
          "Objek perlindungan perlu diidentifikasi sebelum menentukan jenis HaKI"
        ],
        "answer": [
          0,
          1,
          2,
          4
        ],
        "explanation": "Jenis HaKI bergantung pada objek serta syarat masing-masing."
      },
      {
        "type": "tf",
        "topic": "HaKI",
        "level": "Reasoning",
        "stimulusId": "T8",
        "stimulusRange": "Soal 22–24",
        "stimulus": "Usaha kaos “UrbanLeaf” menggunakan logo yang bentuk dan susunan visualnya sangat mirip dengan merek terkenal pada kategori pakaian yang sama. Mereka juga membuat ilustrasi karakter orisinal untuk kaos dan mengembangkan teknik pengunci kemasan yang menurut tim memiliki fungsi teknis baru.",
        "question": "Nilailah tindakan berikut.",
        "statements": [
          {
            "text": "Mengembangkan logo orisinal dan melakukan penelusuran yang relevan merupakan langkah pencegahan.",
            "answer": true
          },
          {
            "text": "Cukup mengubah satu detail kecil walaupun keseluruhan identitas masih membingungkan konsumen.",
            "answer": false
          },
          {
            "text": "Menyimpan dokumentasi penciptaan karya orisinal merupakan praktik yang berguna.",
            "answer": true
          }
        ],
        "explanation": "Pencegahan menekankan orisinalitas, pemeriksaan yang relevan, dan dokumentasi."
      },
      {
        "type": "single",
        "topic": "Pengemasan Produk",
        "level": "Reasoning",
        "stimulusId": "T9",
        "stimulusRange": "Soal 25–27",
        "stimulus": "Produsen meja lipat mengirim produk ke luar kota. Dalam tiga minggu, 9% meja tiba dengan sudut tergores. Kemasan saat ini hanya menggunakan kardus tipis tanpa pelindung sudut. Produk memiliki bentuk lipat yang ringkas dan ditujukan untuk penghuni apartemen berukuran kecil.",
        "question": "Perbaikan yang paling langsung menurunkan risiko sudut tergores adalah ...",
        "options": [
          "mengurangi ketebalan kardus",
          "menambah pelindung sudut dan menguji rancangan kemasan",
          "menghapus label",
          "menurunkan harga",
          "mengurangi informasi produk"
        ],
        "answer": 1,
        "explanation": "Kerusakan fisik pada sudut perlu ditangani melalui perlindungan dan pengujian kemasan."
      },
      {
        "type": "multi",
        "topic": "Distribusi",
        "level": "Reasoning",
        "stimulusId": "T9",
        "stimulusRange": "Soal 25–27",
        "stimulus": "Produsen meja lipat mengirim produk ke luar kota. Dalam tiga minggu, 9% meja tiba dengan sudut tergores. Kemasan saat ini hanya menggunakan kardus tipis tanpa pelindung sudut. Produk memiliki bentuk lipat yang ringkas dan ditujukan untuk penghuni apartemen berukuran kecil.",
        "question": "Data apa yang relevan untuk mengevaluasi masalah distribusi? Pilih semua jawaban yang benar.",
        "options": [
          "Tingkat kerusakan per mitra logistik",
          "Jenis dan ketebalan kemasan",
          "Jarak/jenis rute pengiriman",
          "Warna favorit kurir",
          "Hasil uji jatuh atau simulasi penanganan"
        ],
        "answer": [
          0,
          1,
          2,
          4
        ],
        "explanation": "Evaluasi distribusi perlu menghubungkan kerusakan dengan kemasan, rute, penanganan, dan mitra."
      },
      {
        "type": "tf",
        "topic": "Pengembangan Desain Produk",
        "level": "Reasoning",
        "stimulusId": "T9",
        "stimulusRange": "Soal 25–27",
        "stimulus": "Produsen meja lipat mengirim produk ke luar kota. Dalam tiga minggu, 9% meja tiba dengan sudut tergores. Kemasan saat ini hanya menggunakan kardus tipis tanpa pelindung sudut. Produk memiliki bentuk lipat yang ringkas dan ditujukan untuk penghuni apartemen berukuran kecil.",
        "question": "Nilailah pernyataan berikut.",
        "statements": [
          {
            "text": "Bentuk lipat yang ringkas merupakan fitur yang relevan dengan kebutuhan penghuni ruang kecil.",
            "answer": true
          },
          {
            "text": "Keluhan kerusakan pengiriman tidak perlu memengaruhi evaluasi pengalaman produk.",
            "answer": false
          },
          {
            "text": "Desain produk dan desain kemasan perlu dipertimbangkan sebagai sistem yang saling berkaitan.",
            "answer": true
          }
        ],
        "explanation": "Nilai produk tidak hanya pada fungsi saat digunakan, tetapi juga keberhasilan produk sampai dalam kondisi baik."
      },
      {
        "type": "single",
        "topic": "Perencanaan Produksi",
        "level": "Reasoning",
        "stimulusId": "T10",
        "stimulusRange": "Soal 28–30",
        "stimulus": "PT Beku Sejahtera memproduksi makanan beku. Menjelang akhir tahun permintaan naik tiga kali lipat. Gudang bahan baku hanya cukup untuk enam hari produksi normal, sementara pemasok membutuhkan dua hari untuk tambahan pengiriman. Kapasitas lini pengemasan menjadi titik paling lambat. Perusahaan mempertimbangkan lembur dan penambahan shift.",
        "question": "Faktor yang paling perlu diselaraskan dalam rencana produksi jangka pendek adalah ...",
        "options": [
          "hanya target penjualan",
          "permintaan, bahan baku, kapasitas proses, tenaga kerja, jadwal, dan mutu",
          "warna seragam",
          "nama produk",
          "jumlah unggahan media sosial"
        ],
        "answer": 1,
        "explanation": "Perencanaan produksi menghubungkan permintaan dengan sumber daya dan kapasitas."
      },
      {
        "type": "multi",
        "topic": "Proses Produksi",
        "level": "Reasoning",
        "stimulusId": "T10",
        "stimulusRange": "Soal 28–30",
        "stimulus": "PT Beku Sejahtera memproduksi makanan beku. Menjelang akhir tahun permintaan naik tiga kali lipat. Gudang bahan baku hanya cukup untuk enam hari produksi normal, sementara pemasok membutuhkan dua hari untuk tambahan pengiriman. Kapasitas lini pengemasan menjadi titik paling lambat. Perusahaan mempertimbangkan lembur dan penambahan shift.",
        "question": "Tindakan yang relevan untuk menangani bottleneck pengemasan adalah ...",
        "options": [
          "mengukur kapasitas aktual lini pengemasan",
          "menilai kelayakan tambahan shift pada proses yang membatasi",
          "memastikan tambahan output tetap memenuhi standar mutu",
          "menambah produksi proses awal tanpa mempertimbangkan kapasitas pengemasan",
          "mengevaluasi kebutuhan tenaga/peralatan pada titik bottleneck"
        ],
        "answer": [
          0,
          1,
          2,
          4
        ],
        "explanation": "Perbaikan harus difokuskan pada proses pembatas dan tetap menjaga mutu."
      },
      {
        "type": "tf",
        "topic": "Perencanaan Produksi",
        "level": "Reasoning",
        "stimulusId": "T10",
        "stimulusRange": "Soal 28–30",
        "stimulus": "PT Beku Sejahtera memproduksi makanan beku. Menjelang akhir tahun permintaan naik tiga kali lipat. Gudang bahan baku hanya cukup untuk enam hari produksi normal, sementara pemasok membutuhkan dua hari untuk tambahan pengiriman. Kapasitas lini pengemasan menjadi titik paling lambat. Perusahaan mempertimbangkan lembur dan penambahan shift.",
        "question": "Nilailah pernyataan berikut.",
        "statements": [
          {
            "text": "Lead time pemasok perlu diperhitungkan agar bahan tersedia sebelum dibutuhkan.",
            "answer": true
          },
          {
            "text": "Target produksi sebaiknya ditetapkan tanpa melihat kapasitas proses.",
            "answer": false
          },
          {
            "text": "Lembur dapat dipertimbangkan setelah menilai biaya, tenaga, kapasitas, dan mutu.",
            "answer": true
          }
        ],
        "explanation": "Perencanaan yang baik mempertimbangkan material, kapasitas, waktu, biaya, dan mutu."
      },
      {
        "type": "single",
        "topic": "Kemasan & Label",
        "level": "Reasoning",
        "stimulusId": "T11",
        "stimulusRange": "Soal 31–33",
        "stimulus": "Produk keripik “RenyahKu” ditujukan untuk mahasiswa. Survei menunjukkan konsumen menyukai rasa produk, tetapi 40% responden mengatakan kemasan sulit ditutup kembali dan informasi nilai/komposisi sulit dibaca. Penjualan paling banyak berasal dari marketplace, sedangkan promosi video pendek menghasilkan kunjungan tinggi tetapi tingkat pembelian rendah.",
        "question": "Prioritas perbaikan kemasan yang paling didukung data adalah ...",
        "options": [
          "mengurangi keterbacaan",
          "memperbaiki mekanisme tutup ulang dan hierarki informasi",
          "menghapus komposisi",
          "mengganti rasa yang disukai konsumen",
          "mengurangi kualitas bahan"
        ],
        "answer": 1,
        "explanation": "Keluhan terbanyak terkait fungsi tutup ulang dan keterbacaan informasi."
      },
      {
        "type": "multi",
        "topic": "Pemasaran",
        "level": "Reasoning",
        "stimulusId": "T11",
        "stimulusRange": "Soal 31–33",
        "stimulus": "Produk keripik “RenyahKu” ditujukan untuk mahasiswa. Survei menunjukkan konsumen menyukai rasa produk, tetapi 40% responden mengatakan kemasan sulit ditutup kembali dan informasi nilai/komposisi sulit dibaca. Penjualan paling banyak berasal dari marketplace, sedangkan promosi video pendek menghasilkan kunjungan tinggi tetapi tingkat pembelian rendah.",
        "question": "Analisis lanjutan yang relevan untuk kunjungan tinggi tetapi pembelian rendah adalah ...",
        "options": [
          "memeriksa halaman produk dan checkout",
          "menilai kesesuaian pesan iklan dengan produk",
          "menganalisis harga/ongkir dan ulasan",
          "mengabaikan data karena kunjungan sudah tinggi",
          "membandingkan conversion rate antar kampanye"
        ],
        "answer": [
          0,
          1,
          2,
          4
        ],
        "explanation": "Traffic tinggi tidak otomatis berarti penjualan tinggi; perlu melihat kualitas traffic dan hambatan konversi."
      },
      {
        "type": "tf",
        "topic": "Pemasaran",
        "level": "Reasoning",
        "stimulusId": "T11",
        "stimulusRange": "Soal 31–33",
        "stimulus": "Produk keripik “RenyahKu” ditujukan untuk mahasiswa. Survei menunjukkan konsumen menyukai rasa produk, tetapi 40% responden mengatakan kemasan sulit ditutup kembali dan informasi nilai/komposisi sulit dibaca. Penjualan paling banyak berasal dari marketplace, sedangkan promosi video pendek menghasilkan kunjungan tinggi tetapi tingkat pembelian rendah.",
        "question": "Nilailah pernyataan berikut.",
        "statements": [
          {
            "text": "Marketplace merupakan kanal penting berdasarkan data penjualan yang diberikan.",
            "answer": true
          },
          {
            "text": "Kunjungan tinggi selalu berarti kampanye sudah optimal.",
            "answer": false
          },
          {
            "text": "Data keluhan kemasan dapat digunakan sebagai bahan pengembangan produk.",
            "answer": true
          }
        ],
        "explanation": "Keputusan pemasaran dan produk sebaiknya berbasis data hasil penjualan dan umpan balik."
      },
      {
        "type": "single",
        "topic": "Proposal Usaha",
        "level": "Reasoning",
        "stimulusId": "T12",
        "stimulusRange": "Soal 34–36",
        "stimulus": "Usaha percetakan digital “CetakCepat” menargetkan UMKM lokal. Proposal awal memuat paket layanan, kebutuhan mesin, target 150 pesanan per bulan, harga rata-rata Rp80.000 per pesanan, biaya variabel rata-rata Rp35.000 per pesanan, dan biaya tetap bulanan Rp4.500.000. Tim juga merencanakan promosi melalui komunitas bisnis lokal.",
        "question": "Pendapatan penjualan pada target 150 pesanan adalah ...",
        "options": [
          "Rp8.000.000",
          "Rp10.500.000",
          "Rp12.000.000",
          "Rp13.500.000",
          "Rp15.000.000"
        ],
        "answer": 2,
        "explanation": "150 × Rp80.000 = Rp12.000.000.",
        "table": {
          "headers": [
            "Data",
            "Nilai"
          ],
          "rows": [
            [
              "Target pesanan",
              "150/bulan"
            ],
            [
              "Harga rata-rata",
              "Rp80.000"
            ],
            [
              "Biaya variabel rata-rata",
              "Rp35.000"
            ],
            [
              "Biaya tetap",
              "Rp4.500.000/bulan"
            ]
          ]
        }
      },
      {
        "type": "multi",
        "topic": "Proposal Usaha",
        "level": "Reasoning",
        "stimulusId": "T12",
        "stimulusRange": "Soal 34–36",
        "stimulus": "Usaha percetakan digital “CetakCepat” menargetkan UMKM lokal. Proposal awal memuat paket layanan, kebutuhan mesin, target 150 pesanan per bulan, harga rata-rata Rp80.000 per pesanan, biaya variabel rata-rata Rp35.000 per pesanan, dan biaya tetap bulanan Rp4.500.000. Tim juga merencanakan promosi melalui komunitas bisnis lokal.",
        "question": "Hal apa yang perlu dianalisis untuk menilai kelayakan target 150 pesanan? Pilih semua jawaban yang benar.",
        "options": [
          "Kapasitas mesin dan tenaga kerja",
          "Ukuran serta kebutuhan pasar UMKM lokal",
          "Kemampuan promosi menghasilkan prospek/pesanan",
          "Warna kesukaan pemilik mesin",
          "Waktu penyelesaian pesanan"
        ],
        "answer": [
          0,
          1,
          2,
          4
        ],
        "explanation": "Target penjualan harus didukung kapasitas operasi dan bukti pasar.",
        "table": {
          "headers": [
            "Data",
            "Nilai"
          ],
          "rows": [
            [
              "Target pesanan",
              "150/bulan"
            ],
            [
              "Harga rata-rata",
              "Rp80.000"
            ],
            [
              "Biaya variabel rata-rata",
              "Rp35.000"
            ],
            [
              "Biaya tetap",
              "Rp4.500.000/bulan"
            ]
          ]
        }
      },
      {
        "type": "multi",
        "topic": "Pelaporan Keuangan",
        "level": "Reasoning",
        "stimulusId": "T12",
        "stimulusRange": "Soal 34–36",
        "stimulus": "Usaha percetakan digital “CetakCepat” menargetkan UMKM lokal. Proposal awal memuat paket layanan, kebutuhan mesin, target 150 pesanan per bulan, harga rata-rata Rp80.000 per pesanan, biaya variabel rata-rata Rp35.000 per pesanan, dan biaya tetap bulanan Rp4.500.000. Tim juga merencanakan promosi melalui komunitas bisnis lokal.",
        "question": "Berdasarkan target, pilih pernyataan yang benar.",
        "options": [
          "Total biaya variabel = Rp5.250.000",
          "Margin kontribusi total sebelum biaya tetap = Rp6.750.000",
          "Setelah biaya tetap, sisa sederhana = Rp2.250.000",
          "Biaya tetap berubah menjadi Rp0 jika pesanan berkurang",
          "Harga rata-rata lebih kecil daripada biaya variabel per pesanan"
        ],
        "answer": [
          0,
          1,
          2
        ],
        "explanation": "Variabel=150×35.000=5,25 juta; kontribusi=12-5,25=6,75 juta; setelah biaya tetap=2,25 juta.",
        "table": {
          "headers": [
            "Data",
            "Nilai"
          ],
          "rows": [
            [
              "Target pesanan",
              "150/bulan"
            ],
            [
              "Harga rata-rata",
              "Rp80.000"
            ],
            [
              "Biaya variabel rata-rata",
              "Rp35.000"
            ],
            [
              "Biaya tetap",
              "Rp4.500.000/bulan"
            ]
          ]
        }
      },
      {
        "type": "single",
        "topic": "HPP",
        "level": "Applying",
        "question": "Sebuah usaha memproduksi 500 unit. Biaya bahan Rp4.000.000, tenaga kerja langsung Rp2.000.000, dan overhead produksi Rp1.500.000. HPP per unit adalah ...",
        "options": [
          "Rp10.000",
          "Rp12.000",
          "Rp15.000",
          "Rp18.000",
          "Rp20.000"
        ],
        "answer": 2,
        "explanation": "Total biaya produksi Rp7.500.000. HPP per unit = Rp7.500.000 ÷ 500 = Rp15.000."
      },
      {
        "type": "single",
        "topic": "HPP",
        "level": "Applying",
        "question": "Produk dengan HPP Rp45.000 dijual Rp60.000. Laba kotor per unit adalah ...",
        "options": [
          "Rp10.000",
          "Rp15.000",
          "Rp20.000",
          "Rp25.000",
          "Rp105.000"
        ],
        "answer": 1,
        "explanation": "Laba kotor per unit = harga jual - HPP = Rp60.000 - Rp45.000 = Rp15.000."
      },
      {
        "type": "single",
        "topic": "Laporan Keuangan",
        "level": "Applying",
        "question": "Pendapatan usaha Rp40.000.000, HPP Rp23.000.000, dan beban operasional Rp9.500.000. Laba bersih sederhana adalah ...",
        "options": [
          "Rp7.500.000",
          "Rp9.500.000",
          "Rp17.000.000",
          "Rp30.500.000",
          "Rp49.500.000"
        ],
        "answer": 0,
        "explanation": "Laba bersih = Rp40.000.000 - Rp23.000.000 - Rp9.500.000 = Rp7.500.000."
      },
      {
        "type": "single",
        "topic": "Laporan Keuangan",
        "level": "Applying",
        "question": "Saldo kas awal Rp3.500.000, kas masuk Rp16.000.000, kas keluar Rp14.250.000. Saldo kas akhir adalah ...",
        "options": [
          "Rp1.750.000",
          "Rp5.250.000",
          "Rp5.750.000",
          "Rp17.750.000",
          "Rp33.750.000"
        ],
        "answer": 1,
        "explanation": "Saldo akhir = Rp3.500.000 + Rp16.000.000 - Rp14.250.000 = Rp5.250.000."
      },
      {
        "type": "single",
        "topic": "Laporan Keuangan",
        "level": "Applying",
        "question": "Aset usaha Rp95.000.000 dan ekuitas Rp57.000.000. Kewajiban adalah ...",
        "options": [
          "Rp38.000.000",
          "Rp57.000.000",
          "Rp95.000.000",
          "Rp152.000.000",
          "Rp2.000.000"
        ],
        "answer": 0,
        "explanation": "Kewajiban = Aset - Ekuitas = Rp95.000.000 - Rp57.000.000 = Rp38.000.000."
      },
      {
        "type": "single",
        "topic": "Prototipe",
        "level": "Reasoning",
        "question": "Sebuah prototipe alat penyiram tanaman otomatis bekerja baik di laboratorium tetapi gagal ketika terkena hujan. Tahap paling tepat adalah ...",
        "options": [
          "Menguji ulang pada kondisi penggunaan nyata dan memperbaiki desain perlindungan komponen",
          "Langsung memasarkan",
          "Menghapus fitur otomatis",
          "Menaikkan harga",
          "Mengganti nama produk"
        ],
        "answer": 0,
        "explanation": "Prototipe perlu diuji pada kondisi representatif. Kegagalan akibat lingkungan harus menjadi dasar iterasi desain."
      },
      {
        "type": "single",
        "topic": "Kemasan",
        "level": "Reasoning",
        "question": "Konsumen sering salah memahami ukuran produk karena informasi pada kemasan tidak menonjol. Evaluasi desain sebaiknya memprioritaskan ...",
        "options": [
          "Hierarki informasi dan keterbacaan label",
          "Jumlah karyawan",
          "Luas gudang",
          "Nama pemasok",
          "Warna seragam"
        ],
        "answer": 0,
        "explanation": "Masalah berasal dari komunikasi informasi pada kemasan sehingga hierarki visual dan keterbacaan perlu diperbaiki."
      },
      {
        "type": "single",
        "topic": "Perencanaan Produksi",
        "level": "Reasoning",
        "question": "Usaha makanan beku menambah kapasitas produksi tetapi freezer penyimpanan tetap. Risiko paling langsung adalah ...",
        "options": [
          "Kapasitas penyimpanan menjadi bottleneck",
          "Merek otomatis batal",
          "Biaya pemasaran menjadi nol",
          "Permintaan pasti turun",
          "Tidak ada risiko"
        ],
        "answer": 0,
        "explanation": "Kapasitas produksi harus seimbang dengan penyimpanan. Jika tidak, stok bisa melebihi kemampuan penyimpanan yang aman."
      },
      {
        "type": "single",
        "topic": "Pengendalian Mutu",
        "level": "Reasoning",
        "question": "Produk memiliki tingkat cacat 8%. Setelah standar pemasangan diperjelas dan operator dilatih, cacat turun menjadi 2%. Data ini paling mendukung kesimpulan bahwa ...",
        "options": [
          "Perbaikan prosedur dan kompetensi operator berkaitan dengan peningkatan mutu",
          "Promosi menjadi lebih efektif",
          "Distribusi pasti lebih cepat",
          "Harga harus dinaikkan",
          "Label tidak diperlukan"
        ],
        "answer": 0,
        "explanation": "Penurunan cacat terjadi setelah intervensi pada proses, sehingga data mendukung efektivitas perbaikan standar dan pelatihan."
      },
      {
        "type": "single",
        "topic": "Pemasaran",
        "level": "Knowing",
        "question": "Usaha baru menargetkan pekerja kantoran yang membutuhkan makan siang sehat cepat. Pernyataan tersebut terutama menggambarkan ...",
        "options": [
          "Target pasar dan kebutuhan konsumen",
          "Beban produksi",
          "Hak cipta",
          "Arus kas",
          "Paten"
        ],
        "answer": 0,
        "explanation": "Pernyataan mengidentifikasi kelompok konsumen dan masalah/kebutuhan yang ingin dilayani."
      },
      {
        "type": "multi",
        "topic": "HPP",
        "level": "Applying",
        "question": "Pilih informasi yang dibutuhkan untuk menghitung HPP produksi secara wajar.",
        "options": [
          "Biaya bahan baku langsung",
          "Biaya tenaga kerja langsung",
          "Overhead produksi",
          "Biaya pribadi pemilik yang tidak terkait usaha",
          "Jumlah unit yang dihasilkan"
        ],
        "answer": [
          0,
          1,
          2,
          4
        ],
        "explanation": "Perhitungan HPP memerlukan biaya produksi dan jumlah unit sebagai dasar biaya per unit."
      },
      {
        "type": "multi",
        "topic": "Prototipe",
        "level": "Applying",
        "question": "Pilih langkah yang tepat dalam pengembangan prototipe.",
        "options": [
          "Mengidentifikasi kebutuhan pengguna",
          "Membuat model awal",
          "Melakukan pengujian",
          "Melakukan iterasi berdasarkan hasil uji",
          "Memproduksi massal sebelum pengujian"
        ],
        "answer": [
          0,
          1,
          2,
          3
        ],
        "explanation": "Alur prototipe bersifat iteratif: kebutuhan → model awal → uji → perbaikan. Produksi massal sebelum validasi meningkatkan risiko."
      },
      {
        "type": "multi",
        "topic": "Pemasaran",
        "level": "Reasoning",
        "question": "Pilih indikator yang relevan untuk mengevaluasi kampanye penjualan digital.",
        "options": [
          "Conversion rate",
          "Cost per acquisition",
          "Pendapatan dari kampanye",
          "Jumlah kursi kantor",
          "Return on ad spend jika data tersedia"
        ],
        "answer": [
          0,
          1,
          2,
          4
        ],
        "explanation": "Indikator evaluasi penjualan sebaiknya berkaitan dengan konversi, biaya akuisisi, pendapatan, dan efektivitas belanja iklan."
      },
      {
        "type": "multi",
        "topic": "Distribusi",
        "level": "Applying",
        "question": "Pilih tindakan untuk mengurangi risiko distribusi produk rapuh.",
        "options": [
          "Menggunakan kemasan pelindung sesuai karakter produk",
          "Memberi instruksi penanganan",
          "Memilih jasa logistik yang sesuai",
          "Melacak tingkat kerusakan pengiriman",
          "Menghapus pemeriksaan kemasan"
        ],
        "answer": [
          0,
          1,
          2,
          3
        ],
        "explanation": "Produk rapuh memerlukan perlindungan, handling, mitra logistik yang sesuai, dan evaluasi data kerusakan."
      },
      {
        "type": "tf",
        "topic": "HPP",
        "level": "Reasoning",
        "question": "Nilailah pernyataan berikut tentang HPP dan harga jual.",
        "statements": [
          {
            "text": "HPP membantu menjadi dasar pertimbangan harga jual.",
            "answer": true
          },
          {
            "text": "Harga jual harus selalu sama dengan HPP.",
            "answer": false
          },
          {
            "text": "Penetapan harga juga dapat mempertimbangkan nilai bagi konsumen dan kondisi pasar.",
            "answer": true
          }
        ],
        "explanation": "HPP merupakan dasar biaya, tetapi harga jual perlu mempertimbangkan laba, nilai, pasar, dan strategi."
      },
      {
        "type": "tf",
        "topic": "SWOT",
        "level": "Knowing",
        "question": "Nilailah pernyataan berikut tentang SWOT.",
        "statements": [
          {
            "text": "Strength dan Weakness merupakan faktor internal.",
            "answer": true
          },
          {
            "text": "Opportunity dan Threat merupakan faktor eksternal.",
            "answer": true
          },
          {
            "text": "SWOT menjamin keputusan usaha pasti berhasil.",
            "answer": false
          }
        ],
        "explanation": "SWOT adalah alat analisis, bukan jaminan keberhasilan."
      },
      {
        "type": "tf",
        "topic": "Perencanaan Produksi",
        "level": "Applying",
        "question": "Nilailah pernyataan berikut tentang produksi.",
        "statements": [
          {
            "text": "Rencana produksi perlu mempertimbangkan target permintaan.",
            "answer": true
          },
          {
            "text": "Kapasitas alat dapat diabaikan bila permintaan tinggi.",
            "answer": false
          },
          {
            "text": "Ketersediaan bahan baku perlu disinkronkan dengan jadwal produksi.",
            "answer": true
          }
        ],
        "explanation": "Perencanaan produksi membutuhkan keseimbangan permintaan, kapasitas, bahan baku, tenaga kerja, dan jadwal."
      },
      {
        "type": "tf",
        "topic": "Pengendalian Mutu",
        "level": "Applying",
        "question": "Nilailah pernyataan berikut tentang mutu.",
        "statements": [
          {
            "text": "Standar mutu harus dapat dipahami pihak yang melaksanakan proses.",
            "answer": true
          },
          {
            "text": "Data cacat dapat digunakan untuk perbaikan proses.",
            "answer": true
          },
          {
            "text": "Keluhan pelanggan tidak relevan untuk evaluasi mutu.",
            "answer": false
          }
        ],
        "explanation": "Mutu membutuhkan standar yang jelas dan data dari proses maupun pelanggan."
      },
      {
        "type": "tf",
        "topic": "Laporan Keuangan",
        "level": "Reasoning",
        "question": "Nilailah pernyataan berikut tentang laporan keuangan.",
        "statements": [
          {
            "text": "Transaksi usaha sebaiknya dipisahkan dari transaksi pribadi.",
            "answer": true
          },
          {
            "text": "Arus kas positif selalu berarti usaha memperoleh laba besar.",
            "answer": false
          },
          {
            "text": "Pencatatan yang konsisten meningkatkan kualitas analisis keuangan.",
            "answer": true
          }
        ],
        "explanation": "Kas dan laba tidak identik. Pemisahan transaksi serta pencatatan konsisten penting untuk informasi keuangan yang andal."
      }
    ]
  }
];
