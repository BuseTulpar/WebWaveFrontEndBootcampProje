// Hamburger menü ve mobil navigasyon kontrolü
// Hamburger menüye tıklanınca mobil menüyü açar
document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.mobile-menu').classList.add('active');
    this.style.display = 'none'; // Hamburger menüyü gizler
});

// Kapatma butonuna tıklanınca mobil menüyü kapatır
document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.mobile-menu').classList.remove('active');
    document.querySelector('.hamburger-menu').style.display = 'flex'; // Hamburger menüyü tekrar gösterir
});

// Sayfa yüklendiğinde veya pencere boyutu değiştiğinde hamburger menüyü ve mobil menüyü kontrol eder
function handleResize() {
    if (window.innerWidth > 768) { // 768px ve üstü için
        document.querySelector('.hamburger-menu').style.display = 'none'; // Hamburger menüyü gizle
        document.querySelector('.mobile-menu').classList.remove('active'); // Mobil menüyü kapat
    } else {
        document.querySelector('.hamburger-menu').style.display = 'flex'; // Küçük ekranlarda hamburger menüyü göster
    }
}

// Sayfa yüklendiğinde ve pencere boyutu değiştiğinde fonksiyonu çağır
window.addEventListener('load', handleResize);
window.addEventListener('resize', handleResize);

//header ın dropdown işlevselliigi

document.querySelectorAll('.mobile-menu .dropdown > a').forEach(function(dropdownToggle) {
    dropdownToggle.addEventListener('click', function(event) {
        event.preventDefault();
        
        const dropdown = this.parentElement;
        const isActive = dropdown.classList.contains('active');

        // Önceki açık dropdownları kapat
        document.querySelectorAll('.mobile-menu .dropdown').forEach(function(d) {
            if (d !== dropdown) {
                d.classList.remove('active');
            }
        });

        // Tıklanan dropdown'u aç veya kapat
        dropdown.classList.toggle('active', !isActive);
    });
});



//Slides kısmı
document.addEventListener('DOMContentLoaded', () => {
    const slidesData = [
        { imageUrl: 'img/slides/10ekim_hiringday_1112_412_1_8815d62502.webp', alt: 'Slide 1' },
        { imageUrl: 'img/slides/TR_1112_412_de17b90249.webp', alt: 'Slide 2' },
        { imageUrl: 'img/slides/senior_aday_tecrubeli_yazilimci_2630787120.webp', alt: 'Slide 3' },
        { imageUrl: 'img/slides/Banner_TR_1112_412_6c2ce3564b.webp', alt: 'Slide 4' },
        { imageUrl: 'img/slides/Twitch_1112_412_1_de33d89d8e.webp', alt: 'Slide 5' },
        {imageUrl: 'img/slides/1112_412_2_cd52574011.webp', alt: 'Slide 6' },
        {imageUrl: 'img/slides/1112_412_47abc9d7c5.webp', alt: 'Slide 7' },
        {imageUrl: 'img/slides/1112_412_11289c189f.webp', alt: 'Slide 8' },
    ];

    const sliderContainer = document.getElementById('slider-container');
    const sliderControls = document.getElementById('slider-controls');

    slidesData.forEach((slide, index) => {
        // Slayt HTML'sini oluştur
        const slideHtml = `
            <div class="slide">
                <img src="${slide.imageUrl}" alt="${slide.alt}">
            </div>
        `;
        sliderContainer.innerHTML += slideHtml;

        // Dot HTML'sini oluştur
        const dotHtml = `
            <span class="dot" onclick="currentSlide(${index + 1})"></span>
        `;
        sliderControls.innerHTML += dotHtml;
    });

    showSlides(slideIndex);
});

let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.classList.remove('active'));

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
}



// Partner Slides Logo kısmı

//const imageUrls = ['img/partners/1.webp','img/partners/2.webp','img/par.... tek tek ekleme yerine;
// 1. Görsel URL'lerini dinamik olarak oluşturma fonksiyonu
function generateImageUrls(basePath, count) {
    const urls = [];
    for (let i = 1; i <= count; i++) {
        urls.push(`${basePath}${i}.webp`);
    }
    return urls;
}

// 2. Görsel URL'lerini oluşturma 
const imageUrls = generateImageUrls('img/partners/', 27);

// Slider container'ı seç
const sliderContainer = document.querySelector('.partner-slider-container');

// Resimleri slider container'ına ekle
imageUrls.forEach((url, index) => {
    const slide = document.createElement('div');
    slide.classList.add('partner-slide');

    const img = document.createElement('img');
    img.src = url;
    img.alt = `Partner ${index + 1}`;

    slide.appendChild(img);
    sliderContainer.appendChild(slide);
});

let partnerSlideIndex = 0;
const partnerSlides = document.querySelectorAll('.partner-slide');
const totalPartnerSlides = partnerSlides.length;
const slideInterval = 3000; // Otomatik geçiş süresi (ms)

// Slider genişliği 
const sliderWidth = document.querySelector('.partner-slider').clientWidth;

// Her bir slaytın genişliği hesapla
const slideWidth = partnerSlides[0].clientWidth + parseFloat(getComputedStyle(partnerSlides[0]).paddingLeft) + parseFloat(getComputedStyle(partnerSlides[0]).paddingRight);

function showPartnerSlides(index) {
    if (index >= totalPartnerSlides) {
        partnerSlideIndex = 0;
    } else if (index < 0) {
        partnerSlideIndex = totalPartnerSlides - 1;
    } else {
        partnerSlideIndex = index;
    }

    const offset = -partnerSlideIndex * slideWidth;
    document.querySelector('.partner-slider-container').style.transform = `translateX(${offset}px)`;
}

function plusPartnerSlides(n) {
    showPartnerSlides(partnerSlideIndex + n);
}

// Otomatik geçiş fonksiyonu
function autoSlide() {
    plusPartnerSlides(1);
}

// Başlangıçta ilk slaytı göster
showPartnerSlides(partnerSlideIndex);

// Okları tıklama olayları
document.querySelector('.partner-prev').addEventListener('click', () => {
    plusPartnerSlides(-1);
    resetAutoSlide(); // Ok tıklaması sonrası otomatik geçişi sıfırla
});

document.querySelector('.partner-next').addEventListener('click', () => {
    plusPartnerSlides(1);
    resetAutoSlide(); // Ok tıklaması sonrası otomatik geçişi sıfırla
});

// Otomatik geçişi başlat
let slideTimer = setInterval(autoSlide, slideInterval);

// Otomatik geçiş zamanlayıcısını sıfırlayan fonksiyon
function resetAutoSlide() {
    clearInterval(slideTimer); // Mevcut zamanlayıcıyı temizle
    slideTimer = setInterval(autoSlide, slideInterval); // Yeni zamanlayıcı başlat
}

// Slider içeriğinde yeniden boyutlandırma durumunda güncellemeyi sağlayın
window.addEventListener('resize', () => {
    showPartnerSlides(partnerSlideIndex); // Yeniden boyutlandırıldığında doğru kaydırmayı yap
});



//Başvurunu Bekleyen Etkinlikler Kısmı

document.addEventListener('DOMContentLoaded', () => {
    const events = [
        { title: 'PHP Prodigy: WebApp Development Bootcamp', description: 'Ücretsiz öğren, mezun ol, iş fırsatı yakala!', imageUrl: 'img/events/1200x628_1_b56ed3b165.webp', deadline: '01.09.2024' },
        { title: 'C# Essentials Bootcamp', description: 'Ücretsiz öğren, mezun ol, iş fırsatı yakala!', imageUrl: 'img/events/1200x628_8_adf347ebfd.webp', deadline: '02.09.2024'},
        { title: 'Business Intelligence MSSQL Workshop', description: 'Ücretsiz öğren, mezun ol, iş fırsatı yakala!', imageUrl: 'img/events/1200x628_24_337419769a.webp', deadline: '02.09.2024' }
    ];

    const container = document.getElementById('event-cards-container');

    events.forEach(event => {
        const eventHtml = `
            <div class="event-card">
                <img src="${event.imageUrl}" alt="${event.title}">
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <div class="chip-container">
                    <div class="chip"><span class="chip-label">Bootcamp</span></div>
                    <div class="chip"><span class="chip-label">İş Fırsatı</span></div>
                </div>
                <div class="event-card-footer">
                    <div class="deadline">
                        <label>SON BAŞVURU:</label>
                        <span>${event.deadline}</span>
                    </div>
                    <button class="event-button">Başvur</button>
                </div>
            </div>
        `;
        container.innerHTML += eventHtml;
    });
});


//Katılımcı yorumları kısmı
document.addEventListener('DOMContentLoaded', () => {
    const participants = [
        {
            img: 'img/participants/Cengiz_Ergun_551b013b1b.webp',
            quote: 'Haftanın 3 günü aynı saatte aynı hedefe odaklanmış arkadaşlarla, bilgisini elinden gelen tüm çabayla sınıfa aktarmaya çalışan hocamızla, çok güzel bir iletişimi olan techcareer ekibiyle geçen bu yaklaşık 1 aylık dopdolu maratondan dolayı çok mutluyum. Bana moral, bilgi ve disiplin sağlayan bu program için çok teşekkür ederim.',
            name: 'Cengiz Ergün',
            role: 'Hyper Company Front-End Angular Bootcamp'
        },
        {
            img: 'img/participants/Serhat_Dokumaci_16f2e4c3c6.webp',
            quote: 'Sigortam.net QA Bootcamp\'i ile dolu dolu ve çok keyifli altı hafta geçirdim. Bootcamp süreci meslek hayatımın başlangıcında bana yön veren ve istediğim alanda çalışmama vesile olan güzel bir süreç oldu. Bu süreçte çok eğlendiğim gibi yeni arkadaşlıklar da edindim ve kendimi de çok iyi bir biçimde geliştirdim. Eğitmenimiz, Sigortam.net ekibi ve Techcareer.net ekibi bana her alanda destek verip, tüm süreçlerde emin adımlarla ilerlememe yardımcı oldular. Bootcamp süreci sonunda Sigortam.net ailesine QA Specialist olarak katıldım. Bu imkânı bize sağladığı için Techcareer.net ailesine ve emeği geçen herkese çok teşekkür ederim, iyi ki katılmışım.',
            name: 'Serhat Dokumacı',
            role: 'Sigortam.net Software QA Bootcamp'
        },
        {
            img: 'img/participants/Cansel_Basak_09462f71c1.webp',
            quote: 'Herkesi tanıdığım ve böyle bir eğitimi denemediğim için çok memnunum. Süreç oldukça verimli ve eğlenceli geçti. Eğlenerek öğrenmek diyebilirim :)',
            name: 'Cansel Başak',
            role: 'Tech Recruitment Bootcamp'
        },
        {
            img: 'img/participants/Burak_Karacakaya_2ccd3613c7.webp',
            quote: 'Merhaba, Gıda Mühendisi olarak sektör değiştirmeye ve yazılımcı olmaya karar vermiştim. Kendimi interneteki kaynaklardan çalışarak ve öğrenerek geliştirdim, Techcareer.net platformunun .Net ile ilgili düzenlediği bootcamp programına katıldım ve sağladıkları destek sayesinde öğrendim..Net teknolojisi ile ilk işime başladım.',
            name: 'Burak Karacakaya',
            role: '.Net Core Back-end Bootcamp'
        },
        {
            img: 'img/participants/Hasan_Okcu_ecef2f93bb.webp',
            quote: '5 haftalık süre içerisinde .Net Core ile ilgili oldukça yoğun bir eğitim aldım. Hocamızın konular hakkındaki bilgi birikimi de oldukça yeterliydi. Süreç içerisinde gerçek hayat projeleri geliştirdik ve sektöre en iyi şekilde hazırlandım. Techcareer e bana böyle bir eğitime katılma fırsatı verdiği için teşekkür ederim.',
            name: 'Hasan Okcu',
            role: 'ASP.Net Core Bootcamp'
        },

        {
            img: 'img/participants/Beyza_Yueksel_65efa14e87.webp',
            quote: 'Yaptığımız projelerde iş hayatı için bizi hazırladı bu yüzden çok mutluyum. Çok verimli güzel bir süreçti emeği olan herkese teşekkür ederim.',
            name: 'Beyza Yüksel',
            role: 'ASP.Net Core Bootcamp'
        },
        {
            img: 'img/participants/Ibrahim_Adam_5eff5cd585.webp',
            quote: 'Bootcamp benim için çok verimli geçti diyebilirim özellikle Ahmet Kaya hocam gerçekten çok güzel bir anlatımı var tabi ki Techcareer ekibi de teknik sorunlarımız da bize hemen yardımcı oldular Techcareer\'den çok memnun kaldım.',
            name: 'İbrahim Adam',
            role: 'Back-End CodeForge Bootcamp'
        },

        {
            img: 'img/participants/Berke_Ucaker_5d716bed3e.webp',
            quote: 'Oldukça güzel bir süreçti, uzun zamandır öğrenmek isteyip doğru yeri bulamadığım için öğrenemediğimden dolayı bu bootcamp bana ilaç gibi geldi desem yeridir :) Ahmet Hoca\'m son derece güzel ve efektif bir şekilde bizlere dersi anlattı ve derste bizlerle etkileşimde bulunarak dersten kopmamamızı sağladı. ',
            name: 'Berke Uçaker',
            role: 'SQL Bootcamp'
        }
        // Daha fazla katılımcı eklenebilir
    ];

    const sliderWrapper = document.querySelector('.participants-wrapper');

    participants.forEach(participant => {
        const item = document.createElement('div');
        item.className = 'participants-item';
        item.innerHTML = `
            <img src="${participant.img}" alt="${participant.name}">
            <div class="participants-item-content">
                <p>${participant.quote}</p>
                <h4>${participant.name}</h4>
                <span>${participant.role}</span>
            </div>
        `;
        sliderWrapper.appendChild(item);
    });

    // Slider İşlevselliği
    let currentIndex = 0;
    const slides = document.querySelectorAll('.participants-item');
    const itemsPerPage = 2;
    const totalSlides = Math.ceil(slides.length / itemsPerPage);

    const updateSlider = () => {
        const offset = -currentIndex * 100;
        sliderWrapper.style.transform = `translateX(${offset}%)`;
    };

    const nextSlide = () => {
        currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
        updateSlider();
    };

    const prevSlide = () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
        updateSlider();
    };

    document.querySelector('.prev-participant-slide').addEventListener('click', prevSlide);
    document.querySelector('.next-participant-slide').addEventListener('click', nextSlide);

    // Otomatik Kaydırma
    setInterval(nextSlide, 5000); // 5 saniyede bir kaydır

    updateSlider(); // İlk durumda slider'ı güncelle
});

//Responsive için 

  // Pencere boyutu değiştiğinde slider'ı güncelle
  window.addEventListener('resize', () => {
    itemsPerPage = getItemsPerPage();
    totalSlides = Math.ceil(document.querySelectorAll('.participants-item').length / itemsPerPage);
    updateSlider();
});

//Footer 


document.addEventListener('DOMContentLoaded', function() {
    var headers = document.querySelectorAll('.toggle-header');
    headers.forEach(function(header) {
        header.addEventListener('click', function() {
            var content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
                this.querySelector('.toggle-arrow').innerHTML = '&#9660;';
            } else {
                content.style.display = 'block';
                this.querySelector('.toggle-arrow').innerHTML = '&#9650;';
            }
        });
    });
});

