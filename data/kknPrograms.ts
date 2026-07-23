import { existsSync, readdirSync } from "fs";
import path from "path";

export type KknProgram = {
  slug: string;
  folder: string;
  title: string;
  category: string;
  personInCharge: string;
  date: string;
  location: string;
  description: string;
  objectives: string;
  implementation: string;
  impact: string;
  coverImage: string;
  coverImagePosition?: string;
  documentationImages: KknProgramImage[];
};

export type KknProgramImage = {
  src: string;
  alt?: string;
  width: number;
  height: number;
  orientation?: "portrait" | "landscape";
  fit?: "contain" | "cover";
  objectPosition?: string;
};

type KknProgramBase = Omit<
  KknProgram,
  "coverImage" | "coverImagePosition" | "documentationImages"
> & {
  coverImage?: string;
  coverImagePosition?: string;
  documentationImages?: KknProgramImage[];
};

const PROKER_ROOT = path.join(process.cwd(), "public", "images", "Proker");
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const PLACEHOLDER_IMAGE = "/images/placeholder.jpg";

const kknProgramBases: KknProgramBase[] = [
  {
    slug: "administrasi-padukuhan",
    folder: "Ambro",
    title: "Administrasi Padukuhan",
    category: "Administrasi",
    personInCharge: "Ambrosius Berotcylin Ari",
    date: "12 Juli 2026",
    location: "Sumberjo",
    description:
      "Program Administrasi Padukuhan disusun untuk membantu penataan dokumen dan informasi dasar yang dibutuhkan dalam pelayanan masyarakat di tingkat padukuhan. Kegiatan ini berfokus pada penyusunan arsip yang lebih mudah ditelusuri, pembaruan data administratif, dan pendampingan sederhana bagi perangkat setempat dalam pengelolaan berkas. Selain memperhatikan kerapian dokumen, program ini juga menekankan pentingnya konsistensi pencatatan agar informasi yang tersimpan tidak tercecer. Dengan pendekatan yang praktis, kegiatan ini diharapkan mendukung pelayanan yang lebih tertib, cepat, dan akurat bagi warga.",
    objectives:
      "Tujuan utama kegiatan ini adalah membantu padukuhan memiliki tata kelola administrasi yang lebih terstruktur dan mudah digunakan. Program ini juga bertujuan memperkuat kebiasaan pencatatan yang rapi sehingga data dasar warga dan kebutuhan layanan dapat dipantau dengan lebih baik. Selain itu, kegiatan ini dirancang untuk mengurangi kendala saat pencarian dokumen yang sebelumnya tersebar atau belum tertata. Melalui pendampingan ini, perangkat padukuhan diharapkan memiliki sistem kerja administrasi yang lebih efisien dan berkelanjutan.",
    implementation:
      "Pelaksanaan kegiatan dimulai dengan identifikasi kebutuhan administrasi yang paling sering digunakan dalam pelayanan warga. Setelah itu dilakukan peninjauan dokumen yang tersedia, pengelompokan arsip berdasarkan fungsi, serta penyusunan format penyimpanan yang lebih sistematis. Pendampingan juga dilakukan melalui diskusi langsung dengan pihak terkait agar penataan yang dibuat tetap sesuai dengan kebiasaan kerja di lapangan. Seluruh proses dirancang sederhana agar mudah dilanjutkan dan dirawat setelah kegiatan KKN selesai.",
    impact:
      "Dampak yang diharapkan dari kegiatan ini adalah meningkatnya kerapian dokumen dan kemudahan akses terhadap data administrasi padukuhan. Pelayanan dasar dapat berjalan lebih tertib karena informasi yang dibutuhkan lebih cepat ditemukan ketika warga mengajukan keperluan. Program ini juga membantu membangun budaya kerja yang lebih teliti dalam pencatatan dan penyimpanan berkas. Dalam jangka lebih panjang, administrasi yang baik dapat mendukung pengambilan keputusan yang lebih tepat di tingkat padukuhan.",
  },
  {
    slug: "pelatihan-canva-untuk-pemula",
    folder: "Andy",
    title: "Pelatihan Canva untuk Pemula",
    category: "Pendidikan Digital",
    personInCharge: "Andy Nathanael Reynaldi",
    date: "15 Juli 2026",
    location: "SD Sumberjo",
    description:
      "Pelatihan Canva untuk Pemula merupakan kegiatan pengenalan desain digital dasar yang ditujukan bagi peserta yang belum terbiasa menggunakan aplikasi desain. Materi dirancang agar mudah dipahami, mulai dari pengenalan antarmuka, pemilihan template, penggunaan elemen visual, hingga penyusunan desain sederhana yang komunikatif. Kegiatan ini tidak hanya mengajarkan aspek teknis, tetapi juga mendorong peserta untuk berani menuangkan ide dalam bentuk visual. Dengan suasana belajar yang interaktif, program ini diharapkan membuat literasi digital terasa lebih dekat dan aplikatif.",
    objectives:
      "Kegiatan ini bertujuan meningkatkan kemampuan dasar peserta dalam memanfaatkan Canva sebagai alat bantu desain yang praktis. Selain itu, pelatihan ini diarahkan agar peserta memahami bahwa desain sederhana dapat mendukung kebutuhan belajar, dokumentasi, maupun promosi kegiatan. Program ini juga ingin menumbuhkan kepercayaan diri peserta dalam menggunakan teknologi secara kreatif. Pada akhirnya, peserta diharapkan mampu membuat karya visual yang rapi dan fungsional secara mandiri.",
    implementation:
      "Pelaksanaan kegiatan dimulai dengan pengenalan fitur utama Canva dan contoh penerapannya dalam kehidupan sehari-hari. Peserta kemudian diajak mempraktikkan langsung pembuatan desain sederhana, seperti poster, kartu informasi, atau konten visual bertema kegiatan sekolah dan desa. Selama praktik, pendampingan dilakukan secara bertahap agar peserta dapat mengikuti alur kerja tanpa merasa terburu-buru. Kegiatan ditutup dengan sesi umpan balik dan diskusi hasil karya untuk memperkuat pemahaman peserta.",
    impact:
      "Program ini memberikan dampak berupa meningkatnya keberanian peserta untuk menggunakan platform desain digital dalam aktivitas mereka. Peserta memperoleh pengalaman langsung yang membuat proses belajar teknologi terasa lebih mudah dan menyenangkan. Hasil pelatihan juga dapat dimanfaatkan untuk kebutuhan publikasi sederhana di lingkungan sekolah maupun kegiatan warga. Secara lebih luas, kegiatan ini membantu membangun fondasi kreativitas digital yang relevan dengan perkembangan zaman.",
  },
  {
    slug: "penguatan-interaksi-sosial-dan-karakter-positif",
    folder: "Armon",
    title: "Penguatan Interaksi Sosial dan Karakter Positif",
    category: "Pendidikan",
    personInCharge: "Armon Sitepu",
    date: "07 Juli 2026",
    location: "Balai Desa",
    description:
      "Program ini berfokus pada penguatan interaksi sosial yang sehat serta pembentukan karakter positif melalui pendekatan edukatif yang dekat dengan keseharian peserta. Materi dirancang untuk mengenalkan pentingnya kerja sama, empati, tanggung jawab, serta sikap saling menghargai dalam lingkungan sekolah dan masyarakat. Kegiatan dilaksanakan dengan suasana yang komunikatif agar peserta tidak hanya mendengar materi, tetapi juga merasakan manfaatnya dalam interaksi langsung. Dengan pola belajar yang aktif, nilai-nilai sosial dapat diterima dengan lebih alami dan bermakna.",
    objectives:
      "Tujuan kegiatan ini adalah menumbuhkan kesadaran peserta tentang pentingnya membangun hubungan sosial yang positif sejak dini. Program ini juga bertujuan menguatkan karakter baik seperti disiplin, saling menghormati, tanggung jawab, dan kebiasaan berperilaku santun. Selain itu, kegiatan ini diharapkan membantu peserta memahami bagaimana sikap positif memengaruhi suasana belajar dan kehidupan bersama. Dengan demikian, peserta dapat memiliki bekal karakter yang lebih baik dalam lingkungan sekolah maupun masyarakat.",
    implementation:
      "Kegiatan dilaksanakan melalui kombinasi penyampaian materi, diskusi ringan, permainan kelompok, dan refleksi bersama. Setiap sesi diarahkan untuk mendorong partisipasi aktif sehingga peserta dapat belajar melalui pengalaman langsung, bukan sekadar mendengar penjelasan. Pendamping juga memberikan contoh situasi sosial yang dekat dengan kehidupan sehari-hari untuk memudahkan pemahaman peserta. Di akhir kegiatan, peserta diajak menyimpulkan sikap-sikap positif yang dapat diterapkan dalam keseharian mereka.",
    impact:
      "Dampak dari kegiatan ini terlihat pada meningkatnya kesadaran peserta terhadap pentingnya sikap saling menghargai dan bekerja sama. Program ini membantu menciptakan pengalaman belajar yang menekankan perilaku positif sebagai bagian dari kehidupan bersama. Peserta juga mendapatkan ruang untuk melatih komunikasi dan empati dalam suasana yang aman dan suportif. Dalam jangka panjang, kegiatan seperti ini mendukung terbentuknya lingkungan sosial yang lebih harmonis di sekolah dan masyarakat.",
  },
  {
    slug: "pengembangan-kepercayaan-diri-dan-public-speaking",
    folder: "Bunga",
    title: "Pengembangan Kepercayaan Diri dan Public Speaking",
    category: "Pendidikan",
    personInCharge: "Bunga Ayu Trinita",
     date: "07 Juli 2026",
    location: "Balai Desa",
    description:
      "Kegiatan ini dirancang untuk membantu peserta mengembangkan rasa percaya diri dan kemampuan berbicara di depan umum secara bertahap. Public speaking diperkenalkan sebagai keterampilan yang dapat dilatih melalui kebiasaan menyampaikan gagasan dengan jelas, tenang, dan terstruktur. Materi disusun agar tidak terasa menegangkan, sehingga peserta dapat belajar dalam suasana yang nyaman dan mendukung. Melalui program ini, peserta diharapkan memahami bahwa keberanian berbicara tumbuh dari latihan yang konsisten dan apresiasi terhadap proses belajar.",
    objectives:
      "Tujuan utama kegiatan ini adalah menumbuhkan keberanian peserta untuk berbicara di depan orang lain dengan lebih percaya diri. Program ini juga bertujuan mengenalkan teknik dasar berbicara yang jelas, sopan, dan mudah dipahami oleh pendengar. Selain itu, kegiatan ini diarahkan agar peserta terbiasa mengekspresikan ide dan pendapat mereka tanpa rasa takut berlebihan. Dengan pembiasaan tersebut, peserta diharapkan memiliki modal komunikasi yang lebih kuat dalam kegiatan belajar maupun interaksi sosial.",
    implementation:
      "Pelaksanaan kegiatan diawali dengan pengenalan sederhana tentang pentingnya komunikasi lisan dalam kehidupan sehari-hari. Setelah itu peserta diajak melakukan latihan kecil, seperti memperkenalkan diri, menyampaikan pendapat singkat, atau bercerita di depan teman-temannya. Pendamping memberikan arahan yang ringan dan umpan balik yang membangun agar peserta merasa aman saat mencoba. Seluruh sesi dirancang progresif sehingga peserta dapat berlatih sedikit demi sedikit sesuai tingkat kenyamanan mereka.",
    impact:
      "Dampak yang muncul dari kegiatan ini adalah meningkatnya keberanian peserta untuk tampil dan berbicara di hadapan kelompok. Peserta belajar bahwa berbicara di depan umum bukan hanya soal suara lantang, tetapi juga soal kejelasan, sikap, dan kepercayaan diri. Program ini juga membantu membentuk kebiasaan komunikasi yang lebih tertata dan positif. Dalam jangka panjang, keterampilan ini akan bermanfaat untuk kegiatan sekolah, organisasi, maupun kehidupan bermasyarakat.",
  },
  {
    slug: "pembuatan-website-profil-desa",
    folder: "Damai",
    title: "Pembuatan Website Profil Desa",
    category: "Teknologi",
    personInCharge: "Damai Adinda Rachel Romera",
    date: "20 Juli 2026",
    location: "Posko KKN dan wilayah Sumberjo",
    description:
      "Pembuatan Website Profil Desa merupakan program digitalisasi informasi yang bertujuan memperkenalkan potensi, profil, dan kegiatan Desa Sumberjo melalui media daring. Website ini dirancang sebagai ruang informasi yang lebih rapi, mudah diakses, dan dapat digunakan untuk mendukung komunikasi desa dengan masyarakat maupun pihak luar. Selain menampilkan data dasar desa, platform ini juga memuat dokumentasi kegiatan dan potensi yang dimiliki wilayah setempat. Dengan pendekatan website statis yang sederhana, program ini menekankan kemudahan pemeliharaan tanpa ketergantungan pada backend atau sistem yang rumit.",
    objectives:
      "Kegiatan ini bertujuan menyediakan media informasi digital yang representatif bagi Desa Sumberjo. Program ini juga diarahkan untuk membantu desa memiliki sarana publikasi yang lebih modern, tertata, dan mudah dibagikan kepada masyarakat luas. Selain itu, website diharapkan menjadi pintu masuk untuk memperkenalkan potensi desa, kegiatan warga, serta identitas wilayah secara lebih konsisten. Dengan demikian, desa memiliki aset informasi yang berguna untuk dokumentasi maupun promosi jangka panjang.",
    implementation:
      "Pelaksanaan program diawali dengan pengumpulan data profil desa, pemetaan kebutuhan konten, serta penyiapan struktur informasi yang paling relevan untuk ditampilkan. Setelah itu dilakukan perancangan tampilan, penyusunan teks, pemilihan aset gambar, dan pengembangan antarmuka website agar mudah digunakan pada berbagai perangkat. Proses pengembangan juga memperhatikan keterbacaan informasi dan konsistensi visual agar halaman terasa rapi dan informatif. Seluruh tahapan dikerjakan secara bertahap dari posko KKN dengan penyesuaian terhadap kebutuhan lapangan di wilayah Sumberjo.",
    impact:
      "Dampak dari kegiatan ini adalah tersedianya media informasi desa yang lebih mudah diakses dan lebih siap digunakan sebagai sarana publikasi. Informasi mengenai profil, potensi, dan kegiatan desa dapat disusun dalam satu tempat yang lebih terorganisasi. Program ini juga membuka peluang bagi desa untuk memperkuat citra digitalnya secara sederhana namun efektif. Dalam jangka panjang, website dapat menjadi dasar pengembangan informasi desa yang lebih luas dan berkelanjutan.",
  },
  {
    slug: "pengenalan-bahasa-inggris-dasar",
    folder: "English",
    title: "Pengenalan Bahasa Inggris Dasar",
    category: "Pendidikan",
    personInCharge: "Nicholas Abed Nego Sinay",
    date: "06 Juli 2026",
    location: "Balai Desa",
    description:
      "Program Pengenalan Bahasa Inggris Dasar dirancang untuk memperkenalkan kosakata, ungkapan sederhana, dan cara pengucapan dasar kepada peserta. Kegiatan ini mengedepankan metode belajar yang ringan, menyenangkan, dan mudah diikuti agar bahasa Inggris tidak terasa menakutkan bagi pemula. Materi dipilih dari konteks yang dekat dengan kehidupan sehari-hari sehingga peserta dapat langsung memahami manfaat praktisnya. Dengan suasana belajar yang interaktif, program ini bertujuan menumbuhkan ketertarikan awal terhadap pembelajaran bahasa asing.",
    objectives:
      "Tujuan kegiatan ini adalah membantu peserta mengenal dasar-dasar bahasa Inggris secara bertahap dan ramah bagi pemula. Program ini juga bertujuan meningkatkan keberanian peserta dalam mencoba mengucapkan kata atau kalimat sederhana tanpa takut salah. Selain itu, kegiatan ini dirancang untuk memperluas wawasan peserta mengenai pentingnya bahasa Inggris dalam pendidikan dan komunikasi global. Dengan demikian, peserta memperoleh fondasi awal yang baik untuk belajar lebih lanjut.",
    implementation:
      "Pelaksanaan kegiatan dilakukan melalui pengenalan kosakata dasar, latihan pengucapan, permainan edukatif, dan percakapan singkat. Setiap sesi dibuat sederhana agar peserta dapat fokus pada pemahaman inti tanpa merasa terbebani oleh materi yang terlalu banyak. Pendampingan diberikan secara langsung selama latihan untuk membantu peserta menirukan pengucapan dan memahami makna kata. Suasana kelas dijaga tetap aktif dan menyenangkan agar pembelajaran terasa lebih hidup.",
    impact:
      "Kegiatan ini memberikan dampak berupa meningkatnya minat peserta terhadap pembelajaran bahasa Inggris. Peserta menjadi lebih berani mengucapkan kosakata dasar dan mencoba berkomunikasi sederhana dalam bahasa asing. Program ini juga menciptakan pengalaman belajar yang positif, sehingga peserta lebih terbuka untuk melanjutkan proses belajar di kemudian hari. Dalam jangka panjang, fondasi awal ini dapat mendukung perkembangan kemampuan bahasa peserta secara lebih baik.",
  },
  {
    slug: "pembuatan-peta-wilayah-kalurahan",
    folder: "Joshua",
    title: "Pembuatan Peta Wilayah Kalurahan",
    category: "Kalurahan",
    personInCharge: "Aprillian Josua Marcelino",
    date: "26 Juli 2026",
    location: "Balai Kalurahan Ngalang",
    description:
      "Pembuatan Peta Wilayah Kalurahan merupakan kegiatan yang bertujuan mendukung visualisasi informasi wilayah secara lebih jelas dan mudah dipahami. Peta ini diharapkan menjadi media yang membantu mengenali batas, sebaran wilayah, maupun titik-titik penting yang berkaitan dengan pelayanan dan identitas kalurahan. Selain nilai informatifnya, peta juga dapat digunakan sebagai sarana pendukung komunikasi saat menjelaskan kondisi wilayah kepada masyarakat maupun pihak luar. Program ini memadukan kebutuhan informasi lapangan dengan penyajian visual yang lebih rapi dan sistematis.",
    objectives:
      "Tujuan kegiatan ini adalah menyediakan representasi visual wilayah yang dapat dimanfaatkan sebagai media informasi dasar di tingkat kalurahan. Program ini juga bertujuan mendukung kebutuhan administrasi, sosialisasi, dan pengenalan wilayah secara lebih efektif. Selain itu, kegiatan ini diarahkan agar pihak kalurahan memiliki bahan visual yang mudah dipahami oleh warga dari berbagai latar belakang. Dengan adanya peta yang rapi, informasi spasial dapat disampaikan dengan lebih jelas dan terstruktur.",
    implementation:
      "Pelaksanaan program diawali dengan pengumpulan informasi wilayah yang relevan, penyesuaian titik-titik penting, serta penyusunan konsep visual peta. Setelah itu dilakukan pengolahan materi peta agar penyajiannya tetap informatif namun mudah dibaca. Proses ini disertai koordinasi dengan pihak terkait agar hasil yang dibuat tetap sesuai dengan kebutuhan penggunaan di lapangan. Seluruh tahapan dirancang dengan pendekatan praktis agar peta dapat langsung dimanfaatkan sebagai media informasi kalurahan.",
    impact:
      "Dampak kegiatan ini adalah tersedianya media visual yang membantu memperjelas pemahaman mengenai wilayah kalurahan. Peta dapat mendukung komunikasi yang lebih efektif saat menjelaskan lokasi, pembagian wilayah, maupun titik penting tertentu. Program ini juga memberi nilai tambah dalam penataan informasi yang sebelumnya mungkin hanya tersedia dalam bentuk penjelasan lisan atau dokumen terbatas. Dalam jangka panjang, peta wilayah yang rapi dapat mendukung kebutuhan pelayanan, dokumentasi, dan pengenalan wilayah secara lebih baik.",
  },
  {
    slug: "pendampingan-pemasaran-digital-umkm",
    folder: "Mangel",
    title: "Pendampingan Pemasaran Digital UMKM",
    category: "UMKM",
    personInCharge: "Maria Angelica Wijaya",
    date: "07-10 Juli 2026",
    location: "Sumberjo",
    description:
      "Program Pendampingan Pemasaran Digital UMKM disusun untuk membantu pelaku usaha lokal memahami cara memperkenalkan produk secara lebih luas melalui media digital. Kegiatan ini menekankan pentingnya tampilan produk, konsistensi informasi, serta pemanfaatan kanal digital yang sederhana namun efektif. Pendampingan dilakukan dengan pendekatan yang mudah dipahami agar pelaku usaha dapat menyesuaikan strategi promosi dengan kondisi usaha mereka. Dengan demikian, pemasaran digital diperkenalkan sebagai langkah praktis yang dapat dijalankan secara bertahap.",
    objectives:
      "Kegiatan ini bertujuan meningkatkan pemahaman pelaku UMKM mengenai dasar-dasar pemasaran digital yang relevan dengan usaha mereka. Program ini juga diarahkan agar pelaku usaha lebih percaya diri dalam menampilkan produk dan menjangkau konsumen melalui media daring. Selain itu, kegiatan ini bertujuan menanamkan kesadaran bahwa promosi yang baik membutuhkan informasi yang jelas dan penyajian yang menarik. Dengan bekal tersebut, UMKM diharapkan lebih siap beradaptasi dengan pola pemasaran yang terus berkembang.",
    implementation:
      "Pelaksanaan kegiatan dimulai dengan diskusi mengenai kondisi usaha, cara promosi yang telah dilakukan, dan tantangan yang dihadapi pelaku UMKM. Setelah itu dilakukan pendampingan terkait penyusunan informasi produk, pengenalan konsep konten promosi sederhana, dan pemanfaatan media digital yang mudah dijangkau. Peserta juga diajak melihat contoh pendekatan promosi yang rapi dan komunikatif agar lebih mudah menerapkannya. Selama kegiatan, pendampingan diberikan secara personal dan bertahap sesuai kebutuhan masing-masing usaha.",
    impact:
      "Dampak dari kegiatan ini adalah meningkatnya wawasan pelaku UMKM dalam memanfaatkan media digital sebagai sarana promosi usaha. Pelaku usaha memperoleh gambaran yang lebih jelas tentang pentingnya identitas produk, konsistensi informasi, dan komunikasi visual. Program ini juga dapat mendorong mereka untuk mulai mengambil langkah kecil dalam memperluas jangkauan pemasaran. Dalam jangka panjang, adaptasi terhadap pemasaran digital berpotensi membantu penguatan daya saing usaha lokal.",
  },
  {
    slug: "pengolahan-pupuk-kompos",
    folder: "Mey",
    title: "Pengolahan Pupuk Kompos",
    category: "Lingkungan",
    personInCharge: "Monica Aprilia Meyrani",
    date: "12 Juli 2026",
    location: "Sumberjo",
    description:
      "Program Pengolahan Pupuk Kompos bertujuan mengenalkan pemanfaatan limbah organik menjadi bahan yang lebih berguna bagi lingkungan dan pertanian. Kegiatan ini menekankan bahwa sisa bahan organik rumah tangga maupun lingkungan sekitar dapat diolah kembali dengan proses yang relatif sederhana. Selain memberikan pemahaman teknis, program ini juga mendorong kepedulian terhadap pengurangan sampah organik yang sering kali terbuang tanpa pemanfaatan. Dengan pendekatan yang praktis, kegiatan ini diharapkan memberi nilai edukatif sekaligus manfaat langsung.",
    objectives:
      "Tujuan kegiatan ini adalah memperkenalkan cara pengolahan kompos sebagai salah satu bentuk pengelolaan sampah organik yang lebih bermanfaat. Program ini juga bertujuan mendorong masyarakat agar melihat limbah organik sebagai sumber daya yang masih dapat dimanfaatkan. Selain itu, kegiatan ini diarahkan untuk menumbuhkan kesadaran akan pentingnya praktik ramah lingkungan dalam keseharian. Melalui pemahaman tersebut, peserta diharapkan memiliki wawasan baru yang dapat diterapkan dalam skala rumah tangga maupun komunitas.",
    implementation:
      "Pelaksanaan program dilakukan melalui penyampaian materi mengenai bahan organik yang dapat digunakan, tahapan pengolahan, serta prinsip dasar pembentukan kompos. Peserta juga diajak memahami alur proses secara bertahap agar lebih mudah membayangkan penerapannya di rumah atau lingkungan sekitar. Dalam sesi pendampingan, dijelaskan pula manfaat kompos bagi tanaman dan pentingnya menjaga konsistensi proses pengolahannya. Seluruh kegiatan dirancang agar sederhana, aplikatif, dan mudah dipahami oleh peserta dari berbagai latar belakang.",
    impact:
      "Dampak dari kegiatan ini adalah bertambahnya pemahaman masyarakat tentang pengelolaan sampah organik yang lebih bernilai guna. Program ini membantu memperluas kesadaran bahwa langkah kecil dalam pengolahan limbah dapat memberi manfaat bagi lingkungan sekitar. Selain itu, peserta mendapatkan pengetahuan praktis yang dapat mendukung kegiatan pertanian maupun pemeliharaan tanaman secara lebih ramah lingkungan. Dalam jangka panjang, kebiasaan ini dapat menjadi bagian dari upaya menjaga kebersihan dan keberlanjutan lingkungan desa.",
    coverImage: "/images/Proker/Mey/Cover.jpeg",
    documentationImages: [
      {
        src: "/images/Proker/Mey/1.jpeg",
        alt: "Dokumentasi pengolahan pupuk kompos 1",
        width: 960,
        height: 1280,
      },
      {
        src: "/images/Proker/Mey/2.jpeg",
        alt: "Dokumentasi pengolahan pupuk kompos 2",
        width: 1280,
        height: 960,
      },
      {
        src: "/images/Proker/Mey/3.jpeg",
        alt: "Dokumentasi pengolahan pupuk kompos 3",
        width: 1280,
        height: 960,
      },
      {
        src: "/images/Proker/Mey/4.jpeg",
        alt: "Dokumentasi pengolahan pupuk kompos 4",
        width: 1280,
        height: 960,
      },
    ],
  },
  {
    slug: "pembuatan-reflektor-pembatas-jalan",
    folder: "Michael",
    title: "Pembuatan Reflektor Pembatas Jalan",
    category: "Infrastruktur",
    personInCharge: "Michael Julian Nugraha",
    date: "27 Juli 2026",
    location: "Sumberjo",
    description:
      "Pembuatan Reflektor Pembatas Jalan merupakan program sederhana yang berorientasi pada peningkatan keamanan pengguna jalan di wilayah desa. Reflektor berfungsi membantu memberikan tanda visual yang lebih mudah terlihat, terutama pada kondisi minim cahaya atau saat malam hari. Kegiatan ini menekankan pentingnya elemen penunjang keselamatan yang sering kali terlihat kecil, tetapi memiliki manfaat nyata bagi mobilitas warga. Dengan pendekatan yang fungsional, program ini diharapkan mendukung kenyamanan dan kewaspadaan di area jalan yang membutuhkan penanda tambahan.",
    objectives:
      "Tujuan kegiatan ini adalah menyediakan penanda jalan yang lebih mudah dikenali untuk membantu keselamatan dan kenyamanan pengguna jalan. Program ini juga bertujuan meningkatkan kesadaran mengenai pentingnya elemen infrastruktur sederhana sebagai bagian dari keamanan lingkungan. Selain itu, kegiatan ini diarahkan untuk memberi solusi praktis terhadap titik jalan yang memerlukan penegasan batas atau arah. Dengan demikian, warga dapat merasakan dukungan infrastruktur yang lebih responsif terhadap kebutuhan keseharian.",
    implementation:
      "Pelaksanaan kegiatan dimulai dengan identifikasi area yang membutuhkan penanda tambahan serta penyesuaian bentuk reflektor yang sesuai dengan kebutuhan lapangan. Setelah itu dilakukan proses persiapan bahan, perakitan, dan penempatan reflektor pada titik yang dipandang strategis. Selama proses berjalan, aspek fungsi dan keterlihatan menjadi perhatian utama agar hasilnya benar-benar bermanfaat. Kegiatan ini dilakukan secara bertahap dengan mempertimbangkan kondisi lingkungan dan kebutuhan warga setempat.",
    impact:
      "Dampak kegiatan ini adalah bertambahnya elemen keselamatan visual yang dapat membantu pengguna jalan mengenali batas atau titik tertentu dengan lebih jelas. Program ini juga menunjukkan bahwa perbaikan infrastruktur tidak selalu harus berskala besar untuk memberi manfaat nyata. Kehadiran reflektor dapat meningkatkan rasa aman, terutama pada waktu malam atau kondisi cuaca tertentu. Dalam jangka panjang, langkah kecil semacam ini dapat memperkuat kepedulian bersama terhadap keselamatan lingkungan desa.",
  },
  {
    slug: "papan-tanda-jalan",
    folder: "Padukuhan",
    title: "Papan Tanda Jalan",
    category: "Infrastruktur",
    personInCharge: "Nicholas Abed Nego Sinay",
    date: "03 Juli 2026",
    location: "Sumberjo",
    description:
      "Program Papan Tanda Jalan dibuat untuk membantu masyarakat dan pendatang mengenali arah, lokasi, atau penamaan area di lingkungan desa dengan lebih mudah. Keberadaan papan penunjuk tidak hanya mempermudah mobilitas, tetapi juga memperjelas identitas titik-titik tertentu yang penting bagi warga. Kegiatan ini memadukan kebutuhan informasi lapangan dengan tampilan visual yang sederhana namun fungsional. Dengan adanya tanda jalan yang lebih jelas, navigasi di lingkungan desa diharapkan menjadi lebih tertib dan nyaman.",
    objectives:
      "Tujuan kegiatan ini adalah menyediakan media penunjuk arah yang membantu akses dan keterbacaan lokasi di wilayah desa. Program ini juga bertujuan memperkuat identitas ruang melalui penamaan atau penandaan titik yang lebih jelas bagi warga maupun pengunjung. Selain itu, kegiatan ini diarahkan untuk mendukung keteraturan lingkungan melalui fasilitas informasi yang mudah dipahami. Dengan langkah tersebut, mobilitas dan orientasi ruang di tingkat desa diharapkan menjadi lebih baik.",
    implementation:
      "Pelaksanaan kegiatan diawali dengan identifikasi titik lokasi yang paling membutuhkan papan tanda jalan. Setelah itu dilakukan perencanaan isi informasi, penyesuaian desain, serta penyiapan bahan yang diperlukan agar papan dapat digunakan dengan baik. Proses pengerjaan menekankan kejelasan tulisan, keterbacaan, dan kesesuaian penempatan terhadap kebutuhan pengguna jalan. Kegiatan ini disusun secara praktis agar hasil akhirnya tidak hanya informatif, tetapi juga mudah dikenali di lapangan.",
    impact:
      "Dampak dari program ini adalah meningkatnya kemudahan orientasi lokasi bagi masyarakat maupun tamu yang datang ke wilayah desa. Papan tanda jalan membantu mengurangi kebingungan saat mencari arah dan mendukung keteraturan lingkungan secara visual. Program ini juga memberi nilai tambah terhadap penataan ruang yang lebih informatif dan ramah bagi pengguna jalan. Dalam jangka panjang, fasilitas sederhana seperti ini dapat memperkuat kenyamanan akses di lingkungan desa.",
  },
  {
    slug: "pendampingan-kegiatan-posyandu",
    folder: "Posyandu",
    title: "Pendampingan Kegiatan Posyandu",
    category: "Kesehatan",
    personInCharge: "Nicholas Abed Nego Sinay",
    date: "08 Juli 2026",
    location: "Sumberjo",
    description:
      "Pendampingan Kegiatan Posyandu dilakukan sebagai bentuk dukungan terhadap pelayanan kesehatan masyarakat yang rutin berlangsung di desa. Program ini membantu kelancaran kegiatan dengan menyesuaikan kebutuhan lapangan, mulai dari persiapan hingga dokumentasi pendukung. Selain membantu proses teknis, kegiatan ini juga menunjukkan pentingnya partisipasi bersama dalam menjaga keberlangsungan layanan kesehatan dasar. Dengan keterlibatan langsung di lapangan, program ini diharapkan menambah kenyamanan dan keteraturan selama kegiatan berlangsung.",
    objectives:
      "Tujuan utama kegiatan ini adalah mendukung pelaksanaan Posyandu agar berjalan lebih tertib, nyaman, dan efisien bagi warga. Program ini juga bertujuan memperkuat kepedulian terhadap layanan kesehatan dasar yang dekat dengan kebutuhan masyarakat. Selain itu, kegiatan ini diarahkan untuk membantu proses pelayanan sehingga alur kegiatan dapat berlangsung lebih lancar. Dengan begitu, Posyandu tetap menjadi ruang penting untuk mendukung kesehatan balita, lansia, dan warga secara umum.",
    implementation:
      "Pelaksanaan kegiatan dilakukan melalui bantuan persiapan sarana, pendampingan selama layanan berlangsung, serta dukungan dokumentasi kegiatan. Mahasiswa KKN menyesuaikan peran dengan kebutuhan di lapangan agar dapat membantu tanpa mengganggu alur pelayanan utama. Selain itu, koordinasi dilakukan dengan kader dan pihak terkait untuk memastikan keterlibatan yang diberikan tetap tepat guna. Kegiatan ini dijalankan dengan pendekatan kolaboratif dan penuh perhatian terhadap kenyamanan warga yang hadir.",
    impact:
      "Dampak dari kegiatan ini adalah bertambahnya dukungan operasional yang membantu Posyandu berlangsung lebih tertib dan nyaman. Kehadiran pendampingan juga memberikan nilai positif dalam membangun semangat kolaborasi pada kegiatan kesehatan masyarakat. Program ini ikut memperkuat perhatian terhadap layanan dasar yang penting bagi kesejahteraan warga. Dalam jangka panjang, dukungan semacam ini dapat mendorong partisipasi masyarakat yang lebih baik terhadap kegiatan kesehatan di desa.",
  },
  {
    slug: "pendampingan-pendaftaran-qris-umkm",
    folder: "Qris",
    title: "Pendampingan Pendaftaran QRIS UMKM",
    category: "UMKM",
    personInCharge: "Nicholas Abed Nego Sinay",
    date: "23 Juli 2026",
    location: "Sumberjo",
    description:
      "Pendampingan Pendaftaran QRIS UMKM merupakan kegiatan yang membantu pelaku usaha memahami langkah awal penggunaan sistem pembayaran digital. Program ini menekankan manfaat QRIS sebagai sarana transaksi yang praktis, lebih modern, dan sesuai dengan perkembangan pola pembayaran masyarakat. Pendampingan dilakukan dengan pendekatan yang sederhana agar pelaku usaha tidak merasa kesulitan saat mengenal proses pendaftarannya. Melalui kegiatan ini, digitalisasi pembayaran diperkenalkan sebagai peluang yang dapat mendukung kemudahan layanan usaha.",
    objectives:
      "Kegiatan ini bertujuan memperkenalkan manfaat QRIS dan mendorong pelaku UMKM agar lebih siap memanfaatkan sistem pembayaran non-tunai. Program ini juga bertujuan membantu pelaku usaha memahami proses awal pendaftaran dan penggunaan QRIS secara lebih jelas. Selain itu, kegiatan ini diarahkan untuk meningkatkan kesiapan usaha lokal dalam beradaptasi dengan kebutuhan transaksi yang semakin beragam. Dengan pemahaman tersebut, pelaku UMKM diharapkan lebih percaya diri dalam menghadirkan opsi pembayaran yang lebih fleksibel.",
    implementation:
      "Pelaksanaan kegiatan diawali dengan penjelasan mengenai fungsi QRIS, manfaatnya bagi usaha, dan gambaran umum proses pendaftarannya. Setelah itu dilakukan pendampingan awal sesuai kebutuhan pelaku usaha agar mereka memahami tahapan yang harus dipersiapkan. Sesi diskusi juga digunakan untuk membahas kendala, pertanyaan, dan pertimbangan yang sering muncul dalam proses adopsi pembayaran digital. Pendekatan yang digunakan bersifat komunikatif dan praktis agar mudah diterima oleh pelaku UMKM.",
    impact:
      "Dampak kegiatan ini adalah meningkatnya wawasan pelaku UMKM terhadap penggunaan metode pembayaran digital yang lebih praktis. Program ini membantu memperkecil jarak antara pelaku usaha tradisional dengan sistem transaksi yang kini semakin umum digunakan konsumen. Selain itu, pendampingan yang diberikan dapat mendorong pelaku usaha untuk lebih terbuka terhadap inovasi layanan. Dalam jangka panjang, kesiapan menerima pembayaran digital berpotensi mendukung peningkatan kualitas layanan usaha lokal.",
  },
  {
    slug: "dokumentasi-rasulan",
    folder: "Rasulan",
    title: "Dokumentasi Rasulan",
    category: "Sosial Budaya",
    personInCharge: "Nicholas Abed Nego Sinay",
    date: "29 Juli 2026",
    location: "Sumberjo",
    description:
      "Dokumentasi Rasulan merupakan kegiatan pengarsipan visual terhadap salah satu tradisi sosial budaya yang memiliki nilai penting bagi masyarakat desa. Program ini bertujuan merekam momen-momen utama kegiatan agar dapat menjadi catatan yang tertata dan mudah digunakan kembali pada waktu mendatang. Dokumentasi tidak hanya berfungsi sebagai kenangan, tetapi juga sebagai bahan publikasi budaya yang dapat memperkenalkan kekayaan lokal secara lebih luas. Melalui proses pencatatan visual yang rapi, kegiatan budaya dapat memiliki jejak dokumenter yang lebih baik.",
    objectives:
      "Tujuan kegiatan ini adalah mendukung pelestarian budaya melalui dokumentasi yang terarah dan informatif. Program ini juga bertujuan menyediakan arsip visual yang dapat dimanfaatkan untuk kebutuhan publikasi, pengenalan tradisi, maupun dokumentasi kelembagaan. Selain itu, kegiatan ini diarahkan agar tradisi lokal memiliki rekaman yang lebih sistematis dan mudah diakses kembali. Dengan demikian, nilai budaya yang hidup di masyarakat dapat terus dikenang dan diperkenalkan lintas generasi.",
    implementation:
      "Pelaksanaan kegiatan dilakukan dengan mengambil dokumentasi foto pada rangkaian kegiatan yang berlangsung, terutama pada momen-momen yang merepresentasikan suasana dan nilai tradisi. Proses ini melibatkan pengamatan lapangan agar dokumentasi yang dihasilkan tidak hanya banyak, tetapi juga relevan secara naratif. Hasil dokumentasi kemudian disusun sebagai arsip visual yang lebih rapi untuk memudahkan pemanfaatannya di kemudian hari. Seluruh proses dilakukan dengan tetap menghormati jalannya kegiatan budaya di lapangan.",
    impact:
      "Dampak dari kegiatan ini adalah tersedianya dokumentasi visual yang lebih tertata mengenai tradisi Rasulan di lingkungan desa. Program ini membantu menjaga memori kolektif masyarakat melalui arsip yang dapat digunakan untuk berbagai kepentingan positif. Selain itu, dokumentasi yang baik membuka peluang promosi budaya yang lebih kuat dan lebih mudah dibagikan. Dalam jangka panjang, pengarsipan visual seperti ini mendukung pelestarian identitas budaya lokal secara berkelanjutan.",
    coverImage: "/images/Proker/Rasulan/Cover.JPG",
    coverImagePosition: "object-[center_38%]",
    documentationImages: [
      {
        src: "/images/Proker/Rasulan/1.JPG",
        alt: "Peserta arak-arakan Rasulan membawa lambang Sumberjo",
        width: 3024,
        height: 4032,
        orientation: "portrait",
        fit: "contain",
      },
      {
        src: "/images/Proker/Rasulan/2.JPG",
        alt: "Rombongan arak-arakan Rasulan di jalan desa",
        width: 3024,
        height: 4032,
        orientation: "portrait",
        fit: "contain",
      },
      {
        src: "/images/Proker/Rasulan/3.JPG",
        alt: "Potret peserta kegiatan Rasulan",
        width: 6000,
        height: 4000,
        orientation: "landscape",
        fit: "cover",
        objectPosition: "object-center",
      },
      {
        src: "/images/Proker/Rasulan/4.JPG",
        alt: "Barisan musik dalam kegiatan Rasulan",
        width: 6000,
        height: 4000,
        orientation: "landscape",
        fit: "cover",
        objectPosition: "object-center",
      },
    ],
  },
  {
    slug: "edukasi-pemanfaatan-ai-secara-bijak",
    folder: "Sinay",
    title: "Edukasi Pemanfaatan AI Secara Bijak",
    category: "Pendidikan Digital",
    personInCharge: "Nicholas Abed Nego Sinay",
    date: "15 Juli 2026",
    location: "Balai Desa",
    description:
      "Program Edukasi Pemanfaatan AI Secara Bijak memperkenalkan kecerdasan buatan sebagai teknologi yang semakin dekat dengan kehidupan sehari-hari. Kegiatan ini tidak hanya menjelaskan manfaat AI, tetapi juga menekankan pentingnya penggunaan yang bertanggung jawab, kritis, dan etis. Materi disusun agar peserta memahami bahwa teknologi dapat menjadi alat bantu yang berguna bila digunakan dengan pertimbangan yang tepat. Dengan pendekatan edukatif yang sederhana, program ini membantu peserta melihat AI sebagai sarana belajar, bukan sekadar tren teknologi.",
    objectives:
      "Tujuan kegiatan ini adalah memberikan pemahaman awal tentang apa itu AI dan bagaimana teknologi tersebut dapat dimanfaatkan secara positif. Program ini juga bertujuan menanamkan sikap bijak dalam menggunakan teknologi, terutama dalam memilah informasi dan menghindari ketergantungan yang tidak sehat. Selain itu, kegiatan ini diarahkan untuk menumbuhkan rasa ingin tahu peserta terhadap inovasi digital dengan tetap menjaga tanggung jawab penggunaannya. Dengan demikian, peserta memperoleh wawasan digital yang lebih seimbang antara peluang dan kehati-hatian.",
    implementation:
      "Pelaksanaan kegiatan dilakukan melalui penyampaian materi dasar mengenai AI, contoh penggunaan dalam kehidupan sehari-hari, serta diskusi mengenai manfaat dan risikonya. Peserta diajak memahami bahwa hasil dari teknologi tetap perlu diperiksa dan tidak dapat diterima begitu saja tanpa penilaian kritis. Sesi interaktif digunakan untuk membahas situasi sederhana yang dekat dengan pengalaman belajar peserta. Dengan cara ini, materi AI dapat dipahami sebagai topik yang relevan dan tidak terlalu abstrak.",
    impact:
      "Dampak kegiatan ini adalah meningkatnya pemahaman peserta mengenai teknologi AI dalam konteks yang lebih realistis dan bertanggung jawab. Program ini membantu membentuk sikap yang tidak hanya antusias terhadap teknologi, tetapi juga sadar akan batas dan risikonya. Peserta mendapatkan bekal awal untuk memanfaatkan AI sebagai alat bantu belajar atau eksplorasi secara lebih bijak. Dalam jangka panjang, edukasi seperti ini mendukung pembentukan literasi digital yang lebih matang sejak dini.",
    coverImage: "/images/Proker/Sinay/Cover.JPG",
    documentationImages: [
      {
        src: "/images/Proker/Sinay/1.JPG",
        alt: "Dokumentasi edukasi pemanfaatan AI 1",
        width: 2976,
        height: 1984,
      },
      {
        src: "/images/Proker/Sinay/2.JPG",
        alt: "Dokumentasi edukasi pemanfaatan AI 2",
        width: 2976,
        height: 1984,
      },
      {
        src: "/images/Proker/Sinay/3.JPG",
        alt: "Dokumentasi edukasi pemanfaatan AI 3",
        width: 2976,
        height: 1984,
      },
      {
        src: "/images/Proker/Sinay/4.JPG",
        alt: "Dokumentasi edukasi pemanfaatan AI 4",
        width: 2976,
        height: 1984,
      },
    ],
  },
  {
    slug: "pembuatan-video-profil-desa",
    folder: "VideoProfil",
    title: "Pembuatan Video Profil Desa",
    category: "Teknologi",
    personInCharge: "Nicholas Abed Nego Sinay",
    date: "28 Juli 2026",
    location: "Posko KKN dan wilayah Sumberjo",
    description:
      "Pembuatan Video Profil Desa merupakan program dokumentasi dan publikasi visual yang bertujuan memperkenalkan Desa Sumberjo secara lebih menarik. Video profil dirancang untuk menampilkan gambaran umum desa, suasana wilayah, potensi yang dimiliki, serta identitas lokal yang ingin diperkenalkan kepada publik. Media video dipilih karena mampu menyampaikan informasi secara lebih hidup dan mudah diterima oleh berbagai kalangan. Dengan pengemasan yang rapi, program ini diharapkan membantu desa memiliki materi publikasi yang kuat dan representatif.",
    objectives:
      "Tujuan kegiatan ini adalah menghasilkan media visual yang dapat digunakan sebagai sarana promosi dan dokumentasi profil desa. Program ini juga bertujuan membantu desa menyampaikan identitas, potensi, dan suasana wilayah secara lebih menarik dibandingkan informasi tekstual semata. Selain itu, video profil diharapkan menjadi aset komunikasi yang dapat digunakan dalam berbagai kesempatan formal maupun informal. Dengan demikian, desa memiliki media presentasi yang lebih dinamis dan mudah dibagikan.",
    implementation:
      "Pelaksanaan kegiatan dimulai dengan penyusunan konsep video, penentuan alur cerita, dan identifikasi titik-titik pengambilan gambar yang mewakili desa. Setelah itu dilakukan proses dokumentasi visual di beberapa lokasi, seleksi materi, dan penyusunan hasil secara bertahap. Pengemasan video diarahkan agar tetap informatif namun memiliki alur yang nyaman ditonton. Seluruh proses dilakukan dengan menyesuaikan kondisi lapangan serta kebutuhan representasi visual Desa Sumberjo.",
    impact:
      "Dampak dari kegiatan ini adalah tersedianya media promosi audiovisual yang dapat memperkuat citra dan identitas Desa Sumberjo. Video profil memberi cara yang lebih menarik untuk memperkenalkan desa kepada masyarakat luas, mitra, maupun pihak yang baru mengenal wilayah ini. Program ini juga membantu mendokumentasikan suasana dan potensi desa dalam format yang mudah diputar ulang dan dibagikan. Dalam jangka panjang, video profil dapat menjadi aset komunikasi yang bermanfaat untuk berbagai keperluan publikasi desa.",
  },
];

function getImagePublicPath(folder: string, fileName: string) {
  return `/images/Proker/${folder}/${encodeURIComponent(fileName)}`;
}

function isCoverFileName(fileName: string) {
  return /^cover\./i.test(fileName);
}

function getSortedImageFileNames(folder: string) {
  const folderPath = path.join(PROKER_ROOT, folder);

  if (!existsSync(folderPath)) {
    return [];
  }

  return readdirSync(folderPath, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((fileName) =>
      IMAGE_EXTENSIONS.has(path.extname(fileName).toLowerCase()),
    )
    .sort((left, right) => {
      const leftIsCover = isCoverFileName(left);
      const rightIsCover = isCoverFileName(right);

      if (leftIsCover && !rightIsCover) {
        return -1;
      }

      if (!leftIsCover && rightIsCover) {
        return 1;
      }

      const leftNumber = Number.parseInt(left, 10);
      const rightNumber = Number.parseInt(right, 10);
      const leftHasNumber = Number.isFinite(leftNumber);
      const rightHasNumber = Number.isFinite(rightNumber);

      if (leftHasNumber && rightHasNumber) {
        return leftNumber - rightNumber;
      }

      if (leftHasNumber) {
        return -1;
      }

      if (rightHasNumber) {
        return 1;
      }

      return left.localeCompare(right, "id", { sensitivity: "base" });
    });
}

export const kknPrograms: KknProgram[] = kknProgramBases.map((program) => {
  const imageFileNames = getSortedImageFileNames(program.folder);
  const generatedCoverFileName = imageFileNames.find((fileName) =>
    isCoverFileName(fileName),
  );
  const generatedDocumentationImages = imageFileNames
    .filter((fileName) => !isCoverFileName(fileName))
    .map((fileName) => ({
      src: getImagePublicPath(program.folder, fileName),
      width: 1200,
      height: 900,
    }));
  const documentationImages =
    program.documentationImages ?? generatedDocumentationImages;
  const coverImage =
    program.coverImage ??
    (generatedCoverFileName
      ? getImagePublicPath(program.folder, generatedCoverFileName)
      : generatedDocumentationImages[0]?.src ?? PLACEHOLDER_IMAGE);

  return {
    ...program,
    coverImage,
    documentationImages,
  };
});

export function getKknProgramBySlug(slug: string) {
  return kknPrograms.find((program) => program.slug === slug);
}
