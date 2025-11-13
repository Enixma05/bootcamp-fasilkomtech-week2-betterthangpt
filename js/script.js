// Variables - menggunakan const dan let
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const quickSuggestions = document.getElementById('quickSuggestions');
const themeToggle = document.getElementById('themeToggle');
let messageCount = 0;

// Knowledge base - Lebih dari 3 varian jawaban untuk berbagai topik
const knowledgeBase = {
    socrates: [
        "Socrates (470-399 SM) adalah filosof Yunani yang dianggap sebagai bapak filsafat Barat. Dia terkenal dengan metode Sokrates - teknik bertanya yang mendalam untuk menemukan kebenaran. Menariknya, Socrates tidak pernah menulis apapun; semua yang kita tahu tentangnya berasal dari muridnya, terutama Plato.",
        "Socrates adalah seorang filosof Athena yang mengabdikan hidupnya untuk mencari kebenaran dan kebijaksanaan. Dia percaya bahwa 'kehidupan yang tidak dipertanyakan tidak layak untuk dijalani'. Sayangnya, dia dihukum mati dengan minum racun hemlock karena dianggap merusak pemuda Athena.",
        "Filosof legendaris ini dikenal karena kerendahan hatinya. Kutipan terkenalnya 'Saya tahu bahwa saya tidak tahu apa-apa' menunjukkan kebijaksanaannya. Socrates percaya bahwa kebajikan adalah bentuk pengetahuan tertinggi dan orang yang benar-benar bijaksana akan selalu berbuat baik.",
        "Socrates hidup di masa keemasan Athena dan sering berkeliling di pasar (Agora) untuk berdiskusi dengan warga. Metodenya yang kritis terhadap kepercayaan umum membuat banyak orang tidak nyaman. Dia dituduh 'merusak pemuda' dan 'tidak percaya pada dewa-dewa kota', lalu dihukum mati pada usia 70 tahun.",
        "Yang unik dari Socrates adalah dia tidak pernah menulis satu buku pun! Semua ajarannya kita ketahui dari tulisan murid-muridnya seperti Plato dan Xenophon. Dia percaya bahwa dialog langsung dan pertanyaan-pertanyaan mendalam lebih efektif daripada teks tertulis untuk mencapai pemahaman sejati.",
        "Socrates menikah dengan Xanthippe dan punya tiga anak. Dia sangat sederhana dalam kehidupan sehari-hari, sering berjalan tanpa alas kaki. Ketika dihukum mati, dia dengan tenang minum racun hemlock sambil berfilsafat dengan murid-muridnya, menunjukkan bahwa seorang filosof sejati tidak takut mati."
    ],
    plato: [
        "Plato (428-348 SM) adalah murid Socrates dan guru Aristoteles. Dia mendirikan Akademi di Athena, yang dianggap sebagai universitas pertama di dunia Barat. Karya terkenalnya 'Republik' membahas tentang keadilan dan negara ideal.",
        "Plato terkenal dengan Teori Bentuk atau Teori Ide. Dia percaya bahwa dunia yang kita lihat hanyalah bayangan dari dunia ide yang sempurna. Alegori Guanya yang terkenal menjelaskan bagaimana manusia hidup dalam ketidaktahuan seperti orang yang terkurung di gua.",
        "Sebagai seorang aristokrat Athena, Plato sangat dipengaruhi oleh kematian gurunya Socrates. Filosofinya mencakup etika, politik, metafisika, dan epistemologi. Dia percaya pada jiwa yang abadi dan pentingnya pendidikan dalam membentuk masyarakat yang adil.",
        "Nama asli Plato adalah Aristocles. 'Plato' adalah julukan yang berarti 'lebar' - mungkin karena dahi atau bahunya yang lebar. Dia berasal dari keluarga bangsawan Athena dan sempat bercita-cita menjadi politisi sebelum akhirnya mengabdikan diri pada filsafat setelah bertemu Socrates.",
        "Akademi yang didirikan Plato bertahan selama hampir 900 tahun hingga ditutup pada tahun 529 M oleh Kaisar Justinian. Di Akademi inilah para pemikir terbaik Yunani berkumpul dan belajar. Di pintu masuknya tertulis: 'Jangan ada yang masuk jika tidak tahu geometri!'",
        "Dalam buku 'Republik', Plato menggambarkan negara ideal yang dipimpin oleh 'philosopher-kings' - raja-raja yang juga filosof. Dia percaya bahwa hanya orang yang memahami kebenaran sejati yang layak memimpin. Plato juga menulis tentang Atlantis, peradaban maju yang hilang, dalam dialog 'Timaeus' dan 'Critias'.",
        "Plato punya konsep cinta yang unik yang kita kenal sebagai 'Cinta Platonis' - cinta yang melampaui hasrat fisik dan mencapai keindahan ide murni. Dalam 'Symposium', dia menjelaskan bahwa cinta sejati adalah tangga menuju pemahaman tentang Keindahan absolut dan Kebaikan tertinggi."
    ],
    aristoteles: [
        "Aristoteles (384-322 SM) adalah murid Plato yang kemudian menjadi guru Alexander Agung. Tidak seperti gurunya, Aristoteles lebih fokus pada dunia nyata dan observasi empiris. Dia menulis tentang hampir semua bidang pengetahuan: logika, biologi, fisika, etika, politik, dan puisi.",
        "Aristoteles mendirikan Lyceum di Athena dan mengembangkan metode ilmiah yang sistematis. Dia percaya bahwa kebahagiaan (eudaimonia) adalah tujuan tertinggi manusia, yang dicapai melalui kehidupan yang penuh kebajikan. Konsep 'golden mean' (jalan tengah) adalah salah satu kontribusinya yang terkenal.",
        "Berbeda dengan Plato yang idealis, Aristoteles adalah seorang realis. Dia percaya bahwa pengetahuan dimulai dari pengalaman indrawi. Karyanya dalam logika, terutama silogisme, menjadi dasar pemikiran logis selama berabad-abad. Dia juga mempelajari biologi dengan mengklasifikasikan ratusan spesies hewan.",
        "Aristoteles lahir di Stagira, Makedonia. Ayahnya adalah dokter istana Raja Makedonia. Pada usia 17 tahun, dia pergi ke Athena untuk belajar di Akademi Plato dan tinggal di sana selama 20 tahun. Setelah Plato meninggal, Aristoteles meninggalkan Athena dan berkeliling berbagai tempat.",
        "Alexander Agung, penakluk terbesar dalam sejarah, adalah murid Aristoteles! Dia mengajar Alexander dari usia 13 hingga 16 tahun. Alexander sangat menghormati gurunya dan bahkan mengirimkan spesimen-spesimen biologis dari penaklukkannya untuk penelitian Aristoteles. Namun, hubungan mereka menjadi renggang setelah Alexander mengeksekusi keponakan Aristoteles.",
        "Aristoteles menulis lebih dari 200 karya, tapi yang tersisa hanya sekitar 31 buku. Karyanya mencakup: 'Nicomachean Ethics' (tentang etika), 'Politics' (tentang pemerintahan), 'Poetics' (tentang drama dan puisi), 'Metaphysics' (tentang hakikat realitas), dan banyak buku tentang biologi dan fisika.",
        "Di Lyceum, Aristoteles mengajar sambil berjalan-jalan di taman, makanya murid-muridnya disebut 'Peripatetics' (dari kata Yunani 'peripatein' = berjalan-jalan). Dia mengumpulkan perpustakaan besar dan koleksi spesimen biologis. Aristoteles mengklasifikasi lebih dari 500 spesies hewan!"
    ],
    filosofi: [
        "Filosofi berasal dari bahasa Yunani 'philosophia' yang berarti 'cinta akan kebijaksanaan' (philo = cinta, sophia = kebijaksanaan). Filosofi adalah usaha manusia untuk memahami pertanyaan-pertanyaan fundamental tentang eksistensi, pengetahuan, nilai, akal, pikiran, dan bahasa.",
        "Di Yunani kuno, filosofi mencakup semua bidang pengetahuan - dari matematika hingga fisika, dari etika hingga politik. Para filosof Yunani berusaha menjelaskan dunia tidak melalui mitos, tetapi melalui penalaran rasional dan observasi. Ini adalah revolusi intelektual yang mengubah peradaban manusia.",
        "Filosofi Yunani dibagi menjadi beberapa cabang utama: Metafisika (tentang realitas), Epistemologi (tentang pengetahuan), Etika (tentang moralitas), Logika (tentang penalaran), dan Estetika (tentang keindahan). Setiap filosof Yunani memberikan kontribusi unik pada bidang-bidang ini.",
        "Para filosof Yunani pertama disebut 'Pre-Socratic' karena hidup sebelum Socrates. Mereka termasuk Thales (yang bilang segala sesuatu terbuat dari air), Pythagoras (matematikawan dan mistikus), Heraclitus (yang bilang 'semua mengalir'), dan Democritus (yang mencetuskan teori atom).",
        "Filosofi Yunani mempertanyakan hal-hal fundamental: Apa itu keadilan? Apa arti kehidupan yang baik? Bagaimana kita tahu bahwa sesuatu itu benar? Apakah jiwa itu abadi? Pertanyaan-pertanyaan ini masih relevan hingga 2500 tahun kemudian dan terus diperdebatkan hingga sekarang!",
        "Ada berbagai aliran filosofi Yunani: Stoikisme (mengajarkan ketabahan menghadapi takdir), Epikureanisme (mencari kesenangan bijaksana), Skeptisisme (meragukan semua klaim pengetahuan), dan Cynisme (hidup sederhana sesuai alam). Masing-masing punya cara unik memandang kehidupan yang baik."
    ],
    athena: [
        "Athena adalah pusat intelektual dan budaya Yunani kuno. Kota ini dinamai dari dewi kebijaksanaan, Athena. Di sinilah demokrasi pertama lahir, para filosof berkumpul di Agora untuk berdebat, dan seni serta arsitektur mencapai puncaknya dengan pembangunan Parthenon.",
        "Pada masa kejayaannya di abad ke-5 SM (Zaman Keemasan Pericles), Athena adalah rumah bagi para pemikir terbesar: Socrates mengajar di pasar, Plato mendirikan Akademinya, dan Aristoteles membangun Lyceum. Kota ini menjadi mercusuar pengetahuan bagi seluruh dunia kuno.",
        "Athena tidak hanya pusat filosofi, tetapi juga tempat berkembangnya drama, sejarah, dan ilmu pengetahuan. Gedung-gedung seperti Parthenon, Erechtheion, dan Kuil Hephaestus masih berdiri hingga kini sebagai saksi bisu kejayaan peradaban Yunani.",
        "Parthenon, kuil megah untuk dewi Athena, dibangun antara 447-432 SM. Struktur marmer putih ini adalah karya arsitektur terhebat Yunani kuno. Di dalamnya dulu berdiri patung Athena setinggi 12 meter yang ditutupi emas dan gading. Sayangnya, patung ini sudah hilang dalam sejarah.",
        "Demokrasi Athena adalah yang pertama di dunia! Warga negara laki-laki (bukan budak atau wanita, sayangnya) berkumpul di Pnyx untuk membahas dan memilih kebijakan. Sistem ini melahirkan seni retorika dan debat publik yang menjadi fondasi demokrasi modern.",
        "Agora Athena adalah jantung kehidupan kota - pasar, tempat pertemuan, dan forum politik. Di sinilah Socrates berkeliling bertanya-tanya kepada orang, sophists menawarkan pelajaran, dan pedagang menjual barang dari seluruh Mediterania. Agora adalah tempat ide-ide bertemu dan berbenturan!",
        "Festival Panathenaic adalah perayaan terbesar Athena untuk menghormati dewi Athena. Ada kompetisi atletik, pertunjukan musik, dan prosesi besar membawa peplos (pakaian) baru untuk patung Athena. Festival ini juga menampilkan pertunjukan drama di Teater Dionysus yang bisa menampung 17.000 penonton!"
    ],
    olympus: [
        "Gunung Olympus adalah gunung tertinggi di Yunani dengan ketinggian 2.917 meter! Dalam mitologi Yunani, puncak Olympus adalah tempat tinggal 12 dewa utama (Dodekatheoi) yang dipimpin oleh Zeus. Orang Yunani kuno percaya bahwa para dewa hidup dalam istana emas di atas awan.",
        "Dua belas dewa Olympus adalah: Zeus (raja dewa, dewa petir), Hera (ratu dewa, dewa pernikahan), Poseidon (dewa laut), Demeter (dewi panen), Athena (dewi kebijaksanaan), Apollo (dewa matahari dan musik), Artemis (dewi berburu), Ares (dewa perang), Aphrodite (dewi cinta), Hephaestus (dewa pandai besi), Hermes (dewa pembawa pesan), dan Hestia atau Dionysus.",
        "Zeus, penguasa Olympus, terkenal dengan petirnya yang dahsyat. Dia bisa melontarkan sambaran petir untuk menghukum yang durhaka atau menunjukkan kemarahannya. Dalam banyak mitos, ketika Zeus marah, langit menjadi gelap dan petir menyambar-nyambar!",
        "Kata 'Olimpiade' atau 'Olympic Games' berasal dari Gunung Olympus! Pertandingan atletik kuno diadakan di Olympia untuk menghormati Zeus. Tradisi ini dimulai tahun 776 SM dan dihidupkan kembali sebagai Olimpiade Modern tahun 1896."
    ],
    zeus: [
        "Zeus adalah raja para dewa dalam mitologi Yunani, penguasa langit dan petir. Dia adalah anak termuda dari Titan Kronos dan Rhea. Konon, Zeus dijaga di Gua Psychro di Kreta untuk menghindari dimakan oleh ayahnya sendiri!",
        "Senjata Zeus yang paling terkenal adalah petir (keraunos) yang dibuat oleh Cyclops. Dengan petir ini, Zeus mengalahkan para Titan dalam perang besar Titanomachy dan menjadi penguasa kosmos. Burung rajawali adalah hewan suci Zeus dan simbolnya yang terkenal.",
        "Zeus terkenal dengan... banyaknya percintaan! Dia punya banyak istri dan kekasih, baik dewi maupun manusia. Dari hubungan-hubungan ini lahir banyak pahlawan dan dewa terkenal seperti Athena, Apollo, Artemis, Hermes, Perseus, dan Heracles (Hercules).",
        "Kuil Zeus di Olympia dahulu memiliki salah satu Keajaiban Dunia Kuno: Patung Zeus setinggi 13 meter yang terbuat dari emas dan gading! Patung karya pematung Phidias ini sayangnya sudah hilang, tapi konon begitu megahnya sampai membuat orang yang melihatnya terkagum-kagum."
    ],
    dewa: [
        "Para dewa Yunani sangat menarik karena mereka punya sifat manusiawi - bisa cemburu, marah, jatuh cinta, bahkan buat kesalahan! Berbeda dengan dewa di agama lain, dewa-dewa Yunani tidak sempurna dan tidak maha kuasa. Mereka terikat oleh takdir (Moira) yang bahkan Zeus pun tidak bisa ubah.",
        "Setiap dewa punya domain dan simbol khusus. Poseidon menguasai laut dengan trisula-nya, Hades menguasai dunia bawah, Demeter mengatur panen dan musim, Apollo membawa matahari dan musik, sementara Artemis adalah dewi bulan dan berburu.",
        "Hubungan antar dewa penuh drama! Zeus dan Hera sering bertengkar karena perselingkuhan Zeus. Athena dan Poseidon pernah bersaing untuk menjadi pelindung Athena. Aphrodite menikah dengan Hephaestus tapi berselingkuh dengan Ares. Drama keluarga mereka lebih seru dari sinetron!",
        "Dewa-dewa Yunani sangat terlibat dalam urusan manusia. Mereka membantu pahlawan favorit, menghukum yang sombong, dan bahkan turun ke bumi menyamar sebagai manusia. Perang Troya dimulai karena pertengkaran tiga dewi tentang siapa yang tercantik!"
    ],
    default: [
        "Pertanyaan yang menarik! Dalam tradisi filosofi Yunani, pertanyaan adalah awal dari kebijaksanaan. Seperti kata Socrates, 'Saya tahu bahwa saya tidak tahu apa-apa.' Mungkin Anda bisa bertanya tentang Socrates, Plato, Aristoteles, atau tentang filosofi dan Athena?",
        "Hmm, saya belum memiliki jawaban yang memuaskan untuk itu. Dalam semangat Aporia (keraguan filosofis), mari kita eksplorasi topik lain! Cobalah tanyakan tentang filosof-filosof besar Yunani atau konsep-konsep filosofis mereka.",
        "Seperti para filosof Yunani yang selalu mencari kebenaran melalui dialog, saya mengajak Anda untuk bertanya hal-hal tentang dunia Yunani kuno. Saya dapat membantu Anda mempelajari Socrates, Plato, Aristoteles, filosofi, atau kota Athena!",
        "Wah, pertanyaan yang filosofis! Saya bisa membantu Anda belajar tentang berbagai topik Yunani kuno: para filosof legendaris (Socrates, Plato, Aristoteles), mitologi (Zeus, para dewa Olympus), atau peradaban Yunani (Athena, Sparta). Apa yang paling menarik bagi Anda?",
        "Dalam semangat pencarian pengetahuan ala Yunani, mari kita eksplorasi bersama! Saya bisa ceritakan tentang para filosof, dewa-dewa Olympus, atau kehidupan di Athena kuno. Atau mungkin Anda ingin tahu tentang Gunung Olympus yang legendaris?"
    ]
};

// Function untuk mendapatkan waktu saat ini
function getCurrentTime() {
    const now = new Date();
    return now.getHours().toString().padStart(2, '0') + ':' + 
           now.getMinutes().toString().padStart(2, '0');
}

// Function untuk menambahkan pesan ke chat
function addMessage(text, isUser) {
    messageCount++;
    const messageDiv = document.createElement('div');
    messageDiv.className = isUser ? 'message user-message' : 'message bot-message';
    
    // DOM Manipulation - membuat struktur pesan
    if (isUser) {
        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${text}</p>
                <span class="message-time">${getCurrentTime()}</span>
            </div>
            <div class="message-avatar user-avatar">Anda</div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="message-avatar">Α</div>
            <div class="message-content">
                <p>${text}</p>
                <span class="message-time">${getCurrentTime()}</span>
            </div>
        `;
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function untuk mendapatkan respons bot dengan 3 varian jawaban
function getBotResponse(userMessage) {
    const message = userMessage.toLowerCase();
    let responses;
    
    // If-else statements untuk menentukan respons berdasarkan input user
    if (message.includes('socrates') || message.includes('sokrates')) {
        responses = knowledgeBase.socrates;
    } else if (message.includes('plato') || message.includes('platon')) {
        responses = knowledgeBase.plato;
    } else if (message.includes('aristoteles') || message.includes('aristotle')) {
        responses = knowledgeBase.aristoteles;
    } else if (message.includes('filosofi') || message.includes('filsafat') || message.includes('philosophy')) {
        responses = knowledgeBase.filosofi;
    } else if (message.includes('athena') || message.includes('athens') || message.includes('atena')) {
        responses = knowledgeBase.athena;
    } else if (message.includes('olympus') || message.includes('olimpus') || message.includes('gunung olympus')) {
        responses = knowledgeBase.olympus;
    } else if (message.includes('zeus')) {
        responses = knowledgeBase.zeus;
    } else if (message.includes('dewa') || message.includes('god') || message.includes('gods') || message.includes('deity')) {
        responses = knowledgeBase.dewa;
    } else if (message.includes('halo') || message.includes('hai') || message.includes('hello') || message.includes('hi')) {
        return "Χαίρετε! (Chairete - Salam dalam bahasa Yunani!) Senang bertemu dengan Anda. Apa yang ingin Anda pelajari tentang filosofi Yunani hari ini?";
    } else if (message.includes('terima kasih') || message.includes('thanks') || message.includes('thank you')) {
        return "Παρακαλώ! (Parakalo - Sama-sama dalam bahasa Yunani!) Senang bisa membantu Anda dalam perjalanan filosofis ini. 🏛️";
    } else {
        responses = knowledgeBase.default;
    }
    
    // Memilih salah satu dari 3 varian jawaban secara acak
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}

// Function untuk mengirim pesan
function handleSendMessage() {
    const message = chatInput.value.trim();
    
    // If-else untuk validasi input
    if (message === '') {
        return;
    }
    
    // Menambahkan pesan user
    addMessage(message, true);
    chatInput.value = '';
    
    // Quick suggestions TETAP TAMPIL (tidak dihilangkan)
    
    // Simulasi bot typing dengan delay
    setTimeout(() => {
        const response = getBotResponse(message);
        addMessage(response, false);
    }, 1000);
}

// Function untuk toggle dark mode
function toggleDarkMode() {
    // DOM Manipulation - toggle class dark-mode pada body
    document.body.classList.toggle('dark-mode');
    
    // Simpan preferensi user ke localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Event Listener untuk tombol theme toggle
themeToggle.addEventListener('click', toggleDarkMode);

// Event Listener untuk tombol kirim
sendBtn.addEventListener('click', handleSendMessage);

// Event Listener untuk tombol Enter pada input
chatInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        handleSendMessage();
    }
});

// Event Listeners untuk tombol quick suggestions
const suggestionBtns = document.querySelectorAll('.suggestion-btn');
suggestionBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const message = this.getAttribute('data-message');
        chatInput.value = message;
        handleSendMessage();
    });
});

// DOM Manipulation - Membuat efek partikel
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
    particle.style.opacity = Math.random() * 0.5 + 0.3;
    document.body.appendChild(particle);
    
    // Menghapus partikel setelah animasi selesai
    setTimeout(() => {
        particle.remove();
    }, 5000);
}

// Membuat partikel secara berkala
setInterval(createParticle, 3000);

// DOM Manipulation - Membuat efek awan
function createCloud() {
    const cloud = document.createElement('div');
    cloud.className = 'cloud';
    cloud.style.top = Math.random() * 30 + '%';
    cloud.style.animationDuration = (Math.random() * 20 + 30) + 's';
    document.body.appendChild(cloud);
    
    // Menghapus awan setelah animasi selesai
    setTimeout(() => {
        cloud.remove();
    }, 50000);
}

// Membuat awan secara berkala
setInterval(createCloud, 8000);

// Event Listener - Load theme preference dan focus input saat halaman dimuat
window.addEventListener('load', () => {
    // Cek preferensi theme dari localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    
    // Focus input
    chatInput.focus();
    
    // Membuat beberapa awan awal
    for (let i = 0; i < 3; i++) {
        setTimeout(createCloud, i * 2000);
    }
});