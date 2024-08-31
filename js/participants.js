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


document.addEventListener('DOMContentLoaded', () => {
    const participants = [
        {
            img: 'img/participants/Zeynep_Ciplak_b1c26a7216.webp',
            quote: 'Web frontend kodlamayı öğrenme sürecimde, FroundedTech Surge Bootcamp\'in etkisi büyüktü. Ahmet Kaya\'nın rehberliğinde, 48 saat süren 5 haftalık bu bootcamp, benim için bir dönüm noktasıydı.İlk günden itibaren, HTML, CSS ve JavaScript gibi dilleri öğrenip, gerçek projeler üzerinde çalışarak teorik bilgileri pratiğe dönüştürdük. Ödev projeleri, teknik becerilerimi ve araştırma yeteneğimi geliştirdi. Hatalar yapmak, sorunlarla karşılaşmak ve bunları çözmek, kodlama sürecinin doğal bir parçasıydı ve bu sayede gerçek bir öğrenme yaşadık.Bootcamp sonunda, HTML ve CSS ile sayfa yapılandırma ve stil verme konularında kendime güvenim arttı. JavaScript ile etkileşimli web uygulamaları geliştirme yeteneğim de gelişti. Bu bootcamp\'i tamamladığım için şanslı hissediyorum. FroundedTech Surge Bootcamp, teknik becerilerimi geliştirdi ve kendime güvenimi artırdı. Ahmet Kaya\'nın rehberliği bu deneyimi unutulmaz kıldı. Bu bootcamp\'i herkese tavsiye ediyorum.',
            name: 'Zeynep Çıplak',
            role: 'FroundedTech Surge Bootcamp'
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
        },
        {
            img: 'img/participants/Mert_Can_SUCU_d15f70f70f.webp',
            quote: 'Benim için güzel bir süreçti, Ahmet hocamın katkılarıyla güzel bir bootcamp geçirdim. İnşallah bu sürecin devamında iş hayatıma başlamak istiyorum. ',
            name: 'Mert Can Sucu',
            role: 'Back-End CodeForge Bootcamp'
        },
        {
            img: 'img/participants/Batuhan_CAKAR_f9ab017813.webp',
            quote: 'Gerçekten çok faydalı bir eğitimdi. SQL ile alakalı en önemli kısımlar iyi bir şekilde ve uygulamalı olarak anlatıldı. Ayrıca eğitmenimiz kendisine yönelttiğim tüm soruları kısa sürede ve aklımda soru işareti kalmayacak şekilde cevaplandırdı. Emeği geçen herkese çok teşekkür ederim. 🙏',
            name: 'Batuhan Çakar',
            role: 'SQL Bootcamp'
        },
        {
            img: 'img/participants/Emirhan_Koesem_7f7e9ffa90.webp',
            quote: 'Techcareer.net\'in düzenlediği Vue.js bootcampine katıldım ve gerçekten çok verimli bir deneyim oldu. Eğitim boyunca, temel konulardan başlayarak ileri seviye uygulamalara kadar kapsamlı bir öğrenme süreci yaşadım. Eğitmenimiz son derece bilgili ve destekleyiciydi, her sorumuza detaylı yanıtlar verdi. Vue.js konusunda kendime güvenim arttı ve bu teknolojiyi projelerimde kullanabilir hale geldim. Techcareer.net\'e ve değerli eğitmenimize teşekkür ederim. Vue.js öğrenmek isteyen herkese bu bootcamp\'e katılmalarını tavsiye ederim. Bu eğitim, kariyerinizde yeni bir sayfa açmanıza yardımcı olabilir.',
            name: 'Emirhan Kösem',
            role: 'Vue.js Bootcamp - The Front-End Expedition'
        },
        {
            img: 'img/participants/Oemer_Uecer_05ef36e9f1.webp',
            quote: 'Bootcamp süreci benim için verimli ve istikrarlı bir şekilde geçti.Ders öncesi yapılacakların önceden bildirilmesi,dersin nasıl işleneceği hakkında bilgi verilmesi,ders esnasında,ders arasında, ders dışında eğitmene ulaşıp soru sorabilme imkanı beni ziyadesiyle memnun etti.Zorunlu haller dışında derslerin zamanında yapılması zorunlu haller durumunda da önceden bilgi verimesi oldukça iyiydi. Eğitmenimizin bitirme projelerini dahi yaparken bizlere her daim yardımcı olması beni ayrıca motive etti.',
            name: 'Ömer Faruk Üçer',
            role: 'SQL Bootcamp'
        },
        {
            img: 'img/participants/Buesra_Dedeoglu_b3cdd733c7.webp',
            quote: 'Bootcamp süreciyle ilgili beni en çok memnun eden taraf, eğitmen seçimiydi. Sadece teorik bilgilerle değil aynı zamanda sektörün güncel ihtiyaçlarına yönelik bilgilerle de dersi destekliyordu. Ara ara ödev verilmesinin gayet mantıklı olduğunu düşünüyorum. Sadece süreç içinde önceden belirlenen ders takviminin değişmesinin çok uygun olmadığını düşünüyorum. Seçim süresince ve eğitim sürecinde Techcareer ekibinin bizimle hep iletişimde olması ve onlara ulaşabilmemiz çok destekleyiciydi.',
            name: 'Büşra Dedeoğlu',
            role: 'Vodafone Oracle Database Administration Bootcamp'
        },
        {
            img: 'img/participants/Helin_Okay_5b05a60b5f.webp',
            quote: 'Ebelikten yazılıma...Merhabalar. Ben Helin okay Van yüzüncüyıl üniversite ebelik son sınıf öğrencisiyim. Genellikle online eğitimlere karşı biriyim. Verim alınması güç gelir bana.  Hele de alan dışıysam. Ama bu Bootcamp de öğrendiğim bilgiler ve pekiştirdiğim ödevlerle kendimi geliştirme imkanım oldu. Alan dışı olduğum için çok temelden anlatarak anlamadığım yerleri defalarca anlatmaktan üşenmeyen Caner hocamıza da emeklerinden dolayı ve bu Bootcampi gerçekleştiren emeği geçen herkese teşekkür ederim benim için güzel bir deneyim farklı network ağları oluşturmamı sağladı. CV eğitimleri, yüz yüze mülakat simülasyonu, githup eğitimleri ile sadece yazılım dersi değil bize her daim lazım olucak eğitimler düzenleyerek yazılım hikayeme katkıları oldu.',
            name: 'Helin Okay',
            role: 'DAKA - Back-End with C# Bootcamp'
        },
        {
            img: 'img/participants/Fatma_Nur_Yetim_18a565529b.webp',
            quote: 'Öncelikle eğitim sürecinin başlangıcından sonuna kadar sağladığınız destek için teşekkür etmek istiyorum. Programın içeriği oldukça zengindi ve eğitmenimizin konuları anlatma şekli oldukça verimliydi. Eğitim süresince en çok hoşuma giden şey, konuların teorik yanıyla pratik uygulamalar arasındaki dengeydi. Bu denge konuları daha iyi kavramama ve gerçek dünyadaki uygulamalarını daha iyi anlamama olanak sağladı. Ayrıca eğitim sırasında yaşadığımız etkileşimler ve grup çalışmaları da benim için oldukça değerliydi. Bu sayede farklı bakış açılarıyla konuları tartışma ve derinlemesine anlama şansına sahip oldum. Eğitim sonunda kazandığım bilgi ve becerilerle kendimi daha donanımlı hissediyorum. Bu eğitim kariyerimde yeni bir sayfa açmama ve kendimi geliştirmeme olanak sağladı. Katkılarınız ve emekleriniz için tekrar teşekkür ederim!',
            name: 'Fatma Nur Yetim',
            role: 'Vodafone Oracle Database Administration Bootcamp'
        },
        {
            img: 'img/participants/Ceyda_Gueltekin_f405e32393.webp',
            quote: 'İlk defa bir bootcamp e katıldım ve çok doğru bir yerde katılma şansı yakaladığımı düşünüyorum . Ekibin ilgisi , tavrı bootcamp kabul sürecinde oldukça titizdi . Üstelik eğitmenimizin dersi anlatışından , ilerleyişinden , herkese eşit muamele göstermesinden çok memnun kaldım . Kimsenin çekinmeden soru sorabileceği bir ortam yaratılmıştı tüm süreçte ve bunun önemli olduğunu düşünmekteyim . Bu imkanı sağladığınız için tekrar bütün ekibe çok teşekkür ediyorum .Sevgilerle ',
            name: 'Ceyda Gültekin',
            role: 'FroundedTech Surge Bootcamp'
        },


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
        }
        // Daha fazla katılımcı ekleyebilirsiniz
    ];

    const gridContainer = document.querySelector('.participants-page-grid');

    participants.forEach(participant => {
        const card = document.createElement('div');
        card.className = 'participant-page-card';
        card.innerHTML = `
            <img src="${participant.img}" alt="${participant.name}">
            <div class="participant-page-info">
                <blockquote>${participant.quote}</blockquote>
                <h3>${participant.name}</h3>
                <span>${participant.role}</span>
            </div>
        `;
        gridContainer.appendChild(card);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Masonry kütüphanesinin kullanımı
    const grid = document.querySelector('.participants-page-grid');

    // Masonry örneği oluştur
    const msnry = new Masonry(grid, {
        itemSelector: '.participant-page-card',
        columnWidth: '.participant-page-card', // Kartın genişliğiyle aynı
        percentPosition: true,
        gutter: 20 // Kartlar arasındaki boşluk
    });
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
