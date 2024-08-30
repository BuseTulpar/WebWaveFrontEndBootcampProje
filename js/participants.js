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

