import React from 'react'
import { Accordion, AccordionItem } from '@nextui-org/react'
import './Accordion.css'
import { useState } from 'react'
export default function App() {
    const mainLang = localStorage.getItem('i18nextLng')

    const [expandedIndex, setExpandedIndex] = useState(null)

    const handleAccordionChange = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index)
    }
    let accordionData = [
        {
            title: 'Fan va texnologiyalar universitetining litsenziyasi bormi?',
            content: `Ha, universitetda grant o'rinlari mavjud va har yili munosib talabalarga ajratiladi. - <a style='color: rgba(33, 70, 109, 1)' target="_blank" href="https://license.gov.uz/registry?filter%5Bnumber%5D=331658">Litsenziyani ko'rish</a>`,
        },
        {
            title: 'Universitetni tamomlagan talabalarga haqiqiy diplom beriladimi?',
            content:
                'Ha, universitetni tamomlagan talabalarga butun O’zbekistonda tan olinadigan davlat namunasidagi bakalavr diplomi beriladi. Ushbu diplom bilan istalgan hususiy korxonaga yoki davlat idorasiga ishga joylashishingiz mumkin.',
        },
        {
            title: "Fan va texnologiyalar universitetida grant o'rinlari bormi?",
            content:
                "Universitetda grant o'rinlari bor. Avgust oyining oxirida “Fan javohirlari” olimpiadasi tashkil etiladi. Unda ishtirok etib, g'olib bo'lganlar uchun grant o’rinlari ajratiladi.",
        },
        {
            title: 'Fan va texnologiyalar universitetida talabalarga stipendiya beriladimi?',
            content:
                "Ha, universitetda har semestrda “Rektor stipendiyasi” uchun tanlov bo'lib o'tadi. Unda g'olib bo'lganlarga stipendiya to'lab beriladi.",
        },
        {
            title: 'Universitetda yotoqxona bormi?',
            content:
                "Hozircha yo'q. Ammo universitetda “Ijara xonadonlari bo'yicha ma'lumotlar markazi” tashkil etilgan. Ushbu markaz orqali talabalar universitetga yaqin bo'lgan hududda mavjud ijara xonadonlari to‘g‘risida batafsil ma’lumotlarni va maslahatlarni olishlari mumkin bo‘ladi. Ijara xonadonlari yoki vaqtincha turar joy topish uchun talabalar universitetimizda joylashgan ushbu markazga yoki <a style='color: rgba(33, 70, 109, 1)' target='_blank' href='tel:+99899-750-8642'>+99899-750-86-42</a>, <a style='color: rgba(33, 70, 109, 1)' target='_blank' href='tel:+998940385577'>+99894-038-55-77</a>, <a style='color: rgba(33, 70, 109, 1)' target='_blank' href='tel:+998997475965'>+99899-747-59-65</a> telefon raqamlariga murojaat qilishlari mumkin.",
        },
        {
            title: 'Universitetda qanday qulaylik va afzalliklar bor?',
            content: `<ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} >
                    <li> - 18 ta bakalavr va 6 ta magistratura yo'nalishlari</li>
                    <li> - Kontrakt narxlari 11,4 mln so'mdan boshlanadi</li>
                    <li> - Kontrakt bo'yicha 100% to'lov qilganda 10% chegirma beriladi</li>
                    <li> - Kontraktni yil davomida bo’lib to’lash imkoniyati</li>
                    <li> - Сhet tilini bilish bo'yicha malaka sertifikatiga ega bo‘lganlarga kontrakt narxidan chegirma (B1 uchun 5%, B2 uchun 10%)</li>            
                    <li> - DTM ball bilan imtihonsiz qabul qilinish imkoniyati</li>
                    <li> - Xalqaro universitetlar bilan hamkorlik aloqalari</li>
                    <li> - Qulay joylashuv: metroning “Olmazor” bekatidan uzoq emas</li>
                    <li> - Shaharning istalgan nuqtasidan avtobusda yetib kelish imkoniyati</li>
                    <li> - Keng, shinam va eng yangi texnika bilan jihozlangan o’quv xonalari</li>
                    <li> - 100 dan ortiq kompyuterga ega elektron kutubxona va “co-working” markazi</li>
                    <li> - Butun universitet bo’ylab bepul Wi-Fi</li>
                    <li> - Talabalarga birinchi kursdan amaliyot o'tash imkoniyati</li>
                    <li> - Qat’iy forma talab qilinmaydi</li>
                    </ul>`,
        },
        {
            title: "Universitetni tamomlagach, talabalar ish bilan ta'minlanadimi?",
            content:
                'Universitet barcha talabalarni ish bilan ta’minlashda amaliy yordam ko‘rsatadi.',
        },
        {
            title: "Universitet qayerda joylashgan, uning manzili haqida ma'lumot bera olasizmi?",
            content: `<ul  style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li> - Manzil: Toshkent shahri, Chilonzor tumani, Algoritm dahasi, Diydor ko’chasi, 71-uy</li>
            <li> - Lokatsiya: <a style='color: rgba(33, 70, 109, 1)' target='_blank' href="https://yandex.uz/maps/10335/tashkent/?ll=69.163080%2C41.261028&mode=whatshere&whatshere%5Bpoint%5D=69.163055%2C41.261021&whatshere%5Bzoom%5D=19.98&z=19">Yandex xaritada</a>  | <a style='color: rgba(33, 70, 109, 1)' target='_blank' href="https://www.google.com/maps/search/41.261005,+69.163074?entry=tts">Google xaritada</a></li>
            <li> - Biz bilan aloqa: <a style='color: rgba(33, 70, 109, 1)' href="tel:+99878-888-38-88">+99878-888-38-88</a></li>
            </ul>`,
        },
        {
            title: "Universitet faoliyatini ijtimoiy tarmoqlarda kuzatib borsa bo'ladimi?",
            content: `<ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            Albatta, quyida Fan va texnologiyalar universitetining ijtimoiy tarmoqlardagi sahifalarini e'tiboringizga havola etamiz:
            <li> - <a style='color: rgba(33, 70, 109, 1)' target='_blank' href="https://instagram.com/usatuz">Instagram</a></li>
            <li> - <a style='color: rgba(33, 70, 109, 1)' target='_blank' href="https://t.me/usatuzb">Telegram</a></li>
            <li> - <a style='color: rgba(33, 70, 109, 1)' target='_blank' href="https://facebook.com/usatuz">Facebook</a></li>
            <li> - <a style='color: rgba(33, 70, 109, 1)' target='_blank' href="https://youtube.com/@usatuz">YouTube</a></li>

            </ul>`,
        },
        {
            title: 'Universitet talabalari qanday yutuqlarga erishgan?',
            content:
                '2023-yil dekabr oyida talabalarimiz 135 ta OTM jamoalari, shu jumladan 1080 nafar talaba ishtirok etgan “Zakovat” intellektual olimpiadasining respublika bosqichida 1-o’rinni qo’lga kiritdi va 2 mlrd so’m miqdoridagi Prezident sovg’asi bilan taqdirlandi.',
        },
        {
            title: 'Qabul jarayoni qachongacha davom etadi?',
            content: 'Qabul jarayoni sentyabr oyining oxirigacha davom etadi.',
        },
        {
            title: 'Fan va texnologiyalar universitetida imtihon topshirish pullikmi?',
            content:
                "Yo'q, universitetimizda imtihon topshirish mutlaqo bepul.",
        },
        {
            title: "Abituriyent UZBMB (DTM) natijasi bilan oq'ishga imtihonsiz qabul qilinadimi?",
            content:
                "Ha, davlat oliy ta'lim muassasiga test topshirgan bo'lsangiz va kontraktga ballingiz yetmagan bo'lsa, shu ball bilan universitetimizga imtihonsiz qabul qilinishingiz mumkin. Hujjatlaringizni <a style='color: rgba(33, 70, 109, 1)' target='_blank' href='https://qabul.usat.uz/?utm_source=online&utm_medium=web&utm_campaign=usatuz'>qabul.usat.uz</a> sayti orqali topshirishingiz mumkin.",
        },
        {
            title: "Chet tilini bilish sertifikatiga ega bo'lganlarga qandaydir imtiyozlar bormi?",
            content:
                "Bor, chet tilini bilish darajasi to‘g‘risidagi B1 va undan yuqori darajadagi malaka sertifikatga ega bo‘lgan abituriyentlar ushbu holatni tasdiqlovchi hujjatni qabul jarayonida taqdim etganda, kirish test imtihonlaridan ozod etiladi. Shu bilan birga chet tilini bilish bo'yicha malaka sertifikatiga ega bo‘lganlarga kontrakt narxidan 5%dan 10%gacha chegirma beriladi. Bunda B1 uchun 5%, B2 uchun 10%. Bunda nafaqat ingliz tili bo'yicha, balki boshqa tillarda ham shunga tenglashtirilgan sertifikat bo'lsa, qabul qilinadi.",
        },
        {
            title: "Shartnomani qayerdan olsam bo'ladi?",
            content:
                "Shartnomani <a style='color: rgba(33, 70, 109, 1)' target='_blank' href='https://qabul.usat.uz/?utm_source=online&utm_medium=web&utm_campaign=usatuz'>qabul.usat.uz</a> saytidagi shaxsiy kabinetda yoki <a style='color: rgba(33, 70, 109, 1)' target='_blank' href='https://t.me/usat_bot?start=qabul_usat_uz'>Telegram boti</a> orqali yuklab olishingiz mumkin.",
        },
        {
            title: "Shartnoma bo'yicha birinchi to'lovni qanchon amalga oshirishim kerak?",
            content:
                "Abituriyent shartnoma bo’yicha birinchi to’lovni amalga oshirgandan keyingina talabalikka qabul qilinadi. Birinchi to’lov 1-oktyabrgacha qilinishi kerak. To'lov shartlari bo'yicha batafsil ma'lumot shartnomaning 3-bandida ko'rsatilgan.",
        },
        {
            title: "Shartnoma pulining birinchi to'lovini 50% emas kamroq to'lash imkoniyati bormi?",
            content:
                "Bor, abituriyentlarning imkoniyatidan kelib chiqib, birinchi to'lovni 25% gacha kamaytiriladi. Bunday imkoniyat albatta summaning qolgan qismini yil davomida bo'lib to'lab berish sharti bilan beriladi. 4 ga bo'lib to'lasangiz, avgust, oktyabr, yanvar va mart oylarida to'lashingiz mumkin bo'ladi.",
        },
        {
            title: 'Universitetingiz uchun ta’lim krediti ajratiladimi?',
            content:
                'Albatta, ta’lim krediti talabalarimizga beriladi. Ta’lim krediti haqidagi batafsil ma’lumotlarni ixtiyoriy bank filiallaridan olishingiz mumkin.',
        },
    ]
    let accordionDataRU = [
        {
            title: 'Есть ли у Университета науки и технологий лицензия?',
            content: `Да, университет имеет государственную лицензию. <a style='color: rgba(33, 70, 109, 1)' target="_blank" href="https://license.gov.uz/registry?filter%5Bnumber%5D=331658">Посмотреть лицензию</a>`,
        },
        {
            title: 'Выпускникам университета выдается действительный диплом?',
            content:
                'Да, выпускники университета получают диплом бакалавра государственного образца, который признается по всей территории Узбекистана. С этим дипломом можно трудоустроиться в любые частные и государственные учреждения.',
        },
        {
            title: 'Есть ли грантовые места в университете?',
            content:
                'Да, в университете предусмотрены грантовые места. В конце августа проводится олимпиада “Fan javohirlari”, победители которой получают гранты.',
        },
        {
            title: 'Студентам предоставляются стипендии?',
            content:
                'Да, каждый семестр проводится конкурс на «Стипендию ректора». Победителям выплачивается стипендия.',
        },
        {
            title: 'Есть ли в университете общежитие?',
            content:
                "Пока нет. Однако действует Центр информации по аренде жилья. Студенты могут получить информацию об аренде у сотрудников центра или по телефонам: <a style='color: rgba(33, 70, 109, 1)' target='_blank' href='tel:+99899-750-8642'>+99899-750-86-42</a>, <a style='color: rgba(33, 70, 109, 1)' target='_blank' href='tel:+998940385577'>+99894-038-55-77</a>, <a style='color: rgba(33, 70, 109, 1)' target='_blank' href='tel:+998997475965'>+99899-747-59-65</a>.",
        },
        {
            title: 'Какие преимущества и удобства есть в университете?',
            content: `<ul style='list-style-type: disc; padding-left: 20px;'>
            <li> - 18 бакалаврских и 6 магистерских направлений</li>
            <li> - Контракт от 11,4 млн сумов</li>
            <li> - Скидка 10% при 100% оплате</li>
            <li> - Рассрочка оплаты в течение года</li>
            <li> - Скидки за сертификат иностранного языка (B1 — 5%, B2 — 10%)</li>
            <li> - Поступление без экзаменов по баллам DTM</li>
            <li> - Международное сотрудничество</li>
            <li> - Удобное расположение рядом с метро “Olmazor”</li>
            <li> - Бесплатный Wi-Fi по всему кампусу</li>
            <li> - Более 100 компьютеров и электронная библиотека</li>
            <li> - Современные аудитории и коворкинг</li>
            <li> - Возможность практики с первого курса</li>
            <li> - Отсутствие строгого дресс-кода</li>
          </ul>`,
        },
        {
            title: 'Гарантируется ли трудоустройство выпускников?',
            content:
                'Да, университет оказывает практическую помощь в трудоустройстве студентов.',
        },
        {
            title: 'Где находится университет?',
            content: `<ul style='list-style-type: disc; padding-left: 20px;'>
            <li> - Адрес: г. Ташкент, Чиланзарский р-н, массив Алгоритм, ул. Дийдор, 71</li>
            <li> - <a style='color: rgba(33, 70, 109, 1)' target='_blank' href="https://yandex.uz/maps/10335/tashkent/?ll=69.163080%2C41.261028&mode=whatshere&whatshere%5Bpoint%5D=69.163055%2C41.261021&whatshere%5Bzoom%5D=19.98&z=19">Яндекс Карта</a> | <a style='color: rgba(33, 70, 109, 1)' target='_blank' href="https://www.google.com/maps/search/41.261005,+69.163074?entry=tts">Google Карта</a></li>
            <li> - Телефон: <a style='color: rgba(33, 70, 109, 1)' href="tel:+99878-888-38-88">+99878-888-38-88</a></li>
          </ul>`,
        },
        {
            title: 'Где можно следить за университетом?',
            content: `<ul style='list-style-type: disc; padding-left: 20px;'>
            <li><a style='color: rgba(33, 70, 109, 1)' target='_blank' href="https://instagram.com/usatuz">Instagram</a></li>
            <li><a style='color: rgba(33, 70, 109, 1)' target='_blank' href="https://t.me/usatuzb">Telegram</a></li>
            <li><a style='color: rgba(33, 70, 109, 1)' target='_blank' href="https://facebook.com/usatuz">Facebook</a></li>
            <li><a style='color: rgba(33, 70, 109, 1)' target='_blank' href="https://youtube.com/@usatuz">YouTube</a></li>
          </ul>`,
        },
        {
            title: 'Какие достижения есть у студентов?',
            content:
                'В декабре 2023 года наши студенты заняли 1 место в республиканском этапе олимпиады “Zakovat” и получили приз Президента в размере 2 млрд сумов.',
        },
        {
            title: 'До какого числа идет прием документов?',
            content: 'Прием документов длится до конца сентября.',
        },
        {
            title: 'Платно ли сдавать экзамены?',
            content: 'Нет, сдача экзаменов абсолютно бесплатная.',
        },
        {
            title: 'Можно ли поступить по баллам UZBMB без экзаменов?',
            content:
                "Да, если ваши баллы по DTM не прошли в госВУЗ, можно поступить без экзаменов. Документы подаются через <a style='color: rgba(33, 70, 109, 1)' target='_blank' href='https://qabul.usat.uz'>qabul.usat.uz</a>.",
        },
        {
            title: 'Есть ли льготы за сертификаты иностранных языков?',
            content:
                'Да, сертификаты уровня B1 и B2 дают возможность скидок: B1 — 5%, B2 — 10%.',
        },
        {
            title: 'Где получить договор?',
            content:
                "Договор можно скачать в личном кабинете на сайте <a style='color: rgba(33, 70, 109, 1)' target='_blank' href='https://qabul.usat.uz'>qabul.usat.uz</a> или через <a style='color: rgba(33, 70, 109, 1)' target='_blank' href='https://t.me/usat_bot?start=qabul_usat_uz'>Telegram-бота</a>.",
        },
        {
            title: 'Когда нужно оплатить первую часть договора?',
            content:
                'Оплата первой части производится до 1 октября. Подробнее — в пункте 3 договора.',
        },
        {
            title: 'Можно ли заплатить меньше 50% первой оплаты?',
            content:
                'Да, минимальный первый взнос можно уменьшить до 25% с последующей рассрочкой.',
        },
        {
            title: 'Можно ли оформить образовательный кредит?',
            content:
                'Да, образовательный кредит предоставляется банками. Подробности можно узнать в отделениях банков.',
        },
    ]

    let accordionDataEN = [
        {
            title: 'Does the University have a license?',
            content: `Yes, the University of Science and Technology has a government license. <a style='color: rgba(33, 70, 109, 1)' target="_blank" href="https://license.gov.uz/registry?filter%5Bnumber%5D=331658">View the license</a>`,
        },
        {
            title: 'Do graduates receive an official diploma?',
            content:
                "Yes, graduates receive a state-recognized bachelor's diploma accepted across Uzbekistan. This diploma allows employment in both private and government institutions.",
        },
        {
            title: 'Are there scholarship positions at the university?',
            content:
                'Yes, there are scholarship positions. In August, the “Fan javohirlari” Olympiad is held, and winners receive scholarships.',
        },
        {
            title: 'Are scholarships provided to students?',
            content:
                'Yes, each semester there is a competition for the Rector’s Scholarship. Winners receive financial support.',
        },
        {
            title: 'Does the university have dormitories?',
            content:
                "Currently, no. However, there is a Housing Information Center. For more info, contact: <a style='color: rgba(33, 70, 109, 1)' href='tel:+99899-750-8642'>+99899-750-86-42</a>, <a style='color: rgba(33, 70, 109, 1)' href='tel:+998940385577'>+99894-038-55-77</a>, <a style='color: rgba(33, 70, 109, 1)' href='tel:+998997475965'>+99899-747-59-65</a>.",
        },
        {
            title: 'What are the benefits and facilities of the university?',
            content: `<ul style='list-style-type: disc; padding-left: 20px;'>
            <li> - 18 bachelor's and 6 master's programs</li>
            <li> - Tuition starts from 11.4 million UZS</li>
            <li> - 10% discount for full payment</li>
            <li> - Installment payment during the year</li>
            <li> - Language certificates discounts (B1 — 5%, B2 — 10%)</li>
            <li> - Admission without exams by DTM scores</li>
            <li> - International partnerships</li>
            <li> - Convenient location near “Olmazor” metro</li>
            <li> - Free Wi-Fi throughout the campus</li>
            <li> - Over 100 computers and an electronic library</li>
            <li> - Modern classrooms and coworking spaces</li>
            <li> - Practice from the first year</li>
            <li> - No strict dress code</li>
          </ul>`,
        },
        {
            title: 'Are students supported in finding jobs after graduation?',
            content: 'Yes, the university provides assistance with employment.',
        },
        {
            title: 'Where is the university located?',
            content: `<ul style='list-style-type: disc; padding-left: 20px;'>
            <li> - Address: Tashkent city, Chilanzar district, Algoritm area, Diydor street, 71</li>
            <li> - <a style='color: rgba(33, 70, 109, 1)' href="https://yandex.uz/maps/10335/tashkent/?ll=69.163080%2C41.261028&mode=whatshere&whatshere%5Bpoint%5D=69.163055%2C41.261021&whatshere%5Bzoom%5D=19.98&z=19">Yandex Map</a> | <a style='color: rgba(33, 70, 109, 1)' href="https://www.google.com/maps/search/41.261005,+69.163074?entry=tts">Google Map</a></li>
            <li> - Phone: <a style='color: rgba(33, 70, 109, 1)' href="tel:+99878-888-38-88">+99878-888-38-88</a></li>
          </ul>`,
        },
        {
            title: 'How can I follow the university online?',
            content: `<ul style='list-style-type: disc; padding-left: 20px;'>
            <li><a style='color: rgba(33, 70, 109, 1)' href="https://instagram.com/usatuz">Instagram</a></li>
            <li><a style='color: rgba(33, 70, 109, 1)' href="https://t.me/usatuzb">Telegram</a></li>
            <li><a style='color: rgba(33, 70, 109, 1)' href="https://facebook.com/usatuz">Facebook</a></li>
            <li><a style='color: rgba(33, 70, 109, 1)' href="https://youtube.com/@usatuz">YouTube</a></li>
          </ul>`,
        },
        {
            title: 'What achievements have students earned?',
            content:
                'In December 2023, students won 1st place at the Republican stage of “Zakovat” Olympiad and received a 2 billion UZS prize.',
        },
        {
            title: 'When does admission end?',
            content: 'Admission is open until the end of September.',
        },
        {
            title: 'Is taking exams paid?',
            content: 'No, exams are completely free.',
        },
        {
            title: 'Can I enroll without exams using UZBMB (DTM) scores?',
            content:
                "Yes, if your scores did not pass for state universities, you can enroll without exams. Apply via <a style='color: rgba(33, 70, 109, 1)' href='https://qabul.usat.uz'>qabul.usat.uz</a>.",
        },
        {
            title: 'Are there any discounts for language certificates?',
            content:
                'Yes, B1 certificates get 5% discount, B2 certificates get 10% discount.',
        },
        {
            title: 'Where can I get the contract?',
            content:
                "You can download the contract from your personal account at <a style='color: rgba(33, 70, 109, 1)' href='https://qabul.usat.uz'>qabul.usat.uz</a> or via <a style='color: rgba(33, 70, 109, 1)' href='https://t.me/usat_bot?start=qabul_usat_uz'>Telegram bot</a>.",
        },
        {
            title: 'When do I need to pay the first installment?',
            content:
                'The first payment is due by October 1. More details in the contract.',
        },
        {
            title: 'Can the first payment be less than 50%?',
            content:
                'Yes, the first payment can be reduced to 25% with installment payments.',
        },
        {
            title: 'Can I get an education loan?',
            content:
                'Yes, education loans are available from banks. For details, contact your bank branch.',
        },
    ]

    return (
        <Accordion
            className="px-4 rounded-xl"
            motionProps={{
                variants: {
                    enter: {
                        y: 0,
                        opacity: 1,
                        height: 'auto',
                        transition: {
                            height: {
                                type: 'spring',
                                stiffness: 500,
                                damping: 30,
                                duration: 1,
                            },
                            opacity: {
                                easings: 'ease',
                                duration: 1,
                            },
                        },
                    },
                    exit: {
                        y: -10,
                        opacity: 0,
                        height: 0,
                        transition: {
                            height: {
                                easings: 'ease',
                                duration: 0.25,
                            },
                            opacity: {
                                easings: 'ease',
                                duration: 0.3,
                            },
                        },
                    },
                },
            }}
        >
            {mainLang === 'uz'
                ? accordionData.map((item, index) => (
                      <AccordionItem
                          key={index + 1}
                          aria-label={`Accordion ${index + 1}`}
                          isExpanded={expandedIndex === index}
                          className="AccordionItem"
                          onClick={() => handleAccordionChange(index)}
                          title={
                              <div
                                  className={`accordion_item_title ${expandedIndex === index ? 'expanded' : ''}`}
                              >
                                  {item.title}
                                  <span style={{ marginLeft: 'auto' }}>
                                      {expandedIndex === index ? '▼' : '◀'}
                                  </span>
                              </div>
                          }
                          icon={null}
                      >
                          <div className="accordionItemContent">
                              <div
                                  dangerouslySetInnerHTML={{
                                      __html: item.content,
                                  }}
                              ></div>
                          </div>
                      </AccordionItem>
                  ))
                : mainLang === 'ru'
                  ? accordionDataRU.map((item, index) => (
                        <AccordionItem
                            key={index + 1}
                            aria-label={`Accordion ${index + 1}`}
                            isExpanded={expandedIndex === index}
                            className="AccordionItem"
                            onClick={() => handleAccordionChange(index)}
                            title={
                                <div
                                    className={`accordion_item_title ${expandedIndex === index ? 'expanded' : ''}`}
                                >
                                    {item.title}
                                    <span style={{ marginLeft: 'auto' }}>
                                        {expandedIndex === index ? '▼' : '◀'}
                                    </span>
                                </div>
                            }
                            icon={null}
                        >
                            <div className="accordionItemContent">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: item.content,
                                    }}
                                ></div>
                            </div>
                        </AccordionItem>
                    ))
                  : accordionDataEN.map((item, index) => (
                        <AccordionItem
                            key={index + 1}
                            aria-label={`Accordion ${index + 1}`}
                            isExpanded={expandedIndex === index}
                            className="AccordionItem"
                            onClick={() => handleAccordionChange(index)}
                            title={
                                <div
                                    className={`accordion_item_title ${expandedIndex === index ? 'expanded' : ''}`}
                                >
                                    {item.title}
                                    <span style={{ marginLeft: 'auto' }}>
                                        {expandedIndex === index ? '▼' : '◀'}
                                    </span>
                                </div>
                            }
                            icon={null}
                        >
                            <div className="accordionItemContent">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: item.content,
                                    }}
                                ></div>
                            </div>
                        </AccordionItem>
                    ))}
        </Accordion>
    )
}
