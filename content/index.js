const items = [
  {
    id: 'stamps01',
    name: 'Оформлені марки в мінімалістичному стилі',
    text: 'stamps01.js',
    image: ['stamps01.jpg', 'stamps02.jpg'],
    tags: ['Марки', 'Мистецтво']
  },
  {
    id: 'stamps02',
    name: 'Оформлені марки в мінімалістичному стилі',
    text: 'stamps02.js',
    image: ['stamps03.jpg', 'stamps04.jpg'],
    tags: ['Марки', 'Мистецтво']
  },
  {
    id: 'stamps03',
    name: 'Оформлені марки в мінімалістичному стилі “Мрія” з конвертом',
    text: 'stamps03.js',
    image: ['stamps05.jpg', 'stamps06.jpg'],
    tags: ['Марки', 'Мистецтво']
  },
  {
    id: 'stamps04',
    name: 'Оформлені марки з конвертом подвійне скло',
    text: 'stamps04.js',
    image: ['stamps07.jpg', 'stamps08.jpg'],
    tags: ['Марки', 'Мистецтво']
  },
  {
    id: 'stamps05',
    name: 'Оформлені марки з конвертом подвійне скло',
    text: 'stamps05.js',
    image: ['stamps09.jpg', 'stamps10.jpg'],
    tags: ['Марки', 'Мистецтво']
  },
  {
    id: 'autumn-dialog',
    name: '“Осінній діалог”',
    text: 'autumn-dialog.js',
    image: ['autumn-dialog.jpg'],
    tags: ['Живопис', 'Мистецтво']
  },
  {
    id: 'thunderstorm',
    name: '“Гроза насувається. Карпати”',
    text: 'thunderstorm.js',
    image: ['thunderstorm.jpg'],
    tags: ['Живопис', 'Мистецтво']
  },
  {
    id: 'summer-etude',
    name: '“Літній етюд”',
    text: 'summer-etude.js',
    image: ['summer-etude.jpg'],
    tags: ['Живопис', 'Мистецтво']
  },
  {
    id: 'violin-girl',
    name: 'Робота вихованця Київського Палацу Дітей та Юнацтва',
    text: 'violin-girl.js',
    image: ['violin-girl.jpg'],
    tags: ['Живопис', 'Мистецтво']
  },
  {
    id: 'monuments',
    name: '“Пам\'ятки архітектури. Кам\'янець-Подільський”',
    text: 'monuments.js',
    image: ['monuments.jpg'],
    tags: ['Живопис', 'Мистецтво']
  },
  {
    id: 'gift',
    name: '“Подарунок на день народження”',
    text: 'gift.js',
    image: ['gift.jpg'],
    tags: ['Живопис', 'Мистецтво']
  },
  {
    id: 'cat-mouse',
    name: '“Кіт та Миша заблукали у лісі”',
    text: 'cat-mouse.js',
    image: ['cat-mouse.jpg'],
    tags: ['Живопис', 'Мистецтво']
  },
  {
    id: 'mystic-worlds',
    name: '“Загадкові світи”',
    text: 'mystic-worlds.js',
    image: ['mystic-worlds.jpg'],
    tags: ['Живопис', 'Мистецтво']
  },
  {
    id: 'summer-yard',
    name: '“Літо на подвір\'ї”',
    text: 'summer-yard.js',
    image: ['summer-yard.jpg'],
    tags: ['Живопис', 'Мистецтво']
  },
  {
    id: 'still-life',
    name: '“Натюрморт”',
    text: 'still-life.js',
    image: ['still-life.jpg'],
    tags: ['Живопис', 'Мистецтво']
  },
  {
    id: 'autumn-mood',
    name: '“Осінній настрій”',
    text: 'autumn-mood.js',
    image: ['autumn-mood.jpg'],
    tags: ['Живопис', 'Мистецтво']
  },
  {
    id: 'weapon',
    name: 'Автомат та кулемет',
    text: 'weapon.js',
    image: ['weapon.jpg'],
    tags: ['Трофеї']
  },
  {
    id: 'bullets',
    name: 'Короб кулеметної ленти для набоїв 7,62*51 (.308) для кулемета MG-3/52',
    text: 'bullets.js',
    image: ['bullets01.jpg', 'bullets02.jpg'],
    tags: ['Трофеї']
  },
  {
    id: 'case',
    name: 'Транспортний кейс протитанкового гранатомета одноразового використання RGW-90 “Matador”.',
    text: 'case.js',
    image: ['case01.jpg', 'case02.jpg'],
    tags: ['Трофеї']
  },
  {
    id: 'box',
    name: 'Ящик заводського пакування Детонатора М-6 82мм міни радянського виробництва.',
    text: 'box.js',
    image: ['box01.jpg', 'box02.jpg'],
    tags: ['Трофеї']
  },
  {
    id: 'tubes',
    name: 'Ящик та транспортні тубуси мін 60мм М73',
    text: 'tubes.js',
    image: ['tubes01.jpg', 'tubes02.jpg', 'tubes02.jpg'],
    tags: ['Трофеї']
  },
  {
    id: 'javelin',
    name: 'Тубус транспортний ракети ПТРК "Javelin"',
    text: 'javelin.js',
    image: ['javelin01.jpg', 'javelin02.jpg', 'javelin02.jpg'],
    tags: ['Трофеї']
  },
  {
    id: 'rpg',
    name: 'Рпг-22-(Нетто)',
    text: 'rpg.js',
    image: ['rpg.jpg'],
    tags: ['Трофеї']
  },
  {
    id: 'c90',
    name: 'C-90-CR (m3) Anti-Bunker',
    text: 'c90.js',
    image: ['c90.jpg'],
    tags: ['Трофеї']
  },
  {
    id: 'at4',
    name: 'Ат-4 протитанковий гранатомет одноразового використання',
    text: 'at4.js',
    image: ['at4.jpg'],
    tags: ['Трофеї']
  },
  {
    id: 'rgw90',
    name: 'RGW-90 (Matador)',
    text: 'rgw90.js',
    image: ['rgw90-2.jpg'],
    tags: ['Трофеї']
  },
  {
    id: 'rgw90-2',
    name: 'RGW-90 (Matador)',
    text: 'rgw90-2.js',
    image: ['rgw90-2.jpg'],
    tags: ['Трофеї']
  },
  {
    id: 'rgw90-3',
    name: 'RGW-90 (Matador)',
    text: 'rgw90-3.js',
    image: ['rgw90-3.jpg'],
    tags: ['Трофеї']
  },
  {
    id: 'metis',
    name: 'Противотанковий комплекс Метис',
    text: 'metis.js',
    image: ['metis.jpg'],
    tags: ['Трофеї']
  },
  {
    id: 'ceramic1',
    name: 'ІОНІЙСЬКИЙ КІЛИК АРХАЇЧНОЇ ДОБИ',
    text: 'ceramic1.js',
    image: ['ceramic1.jpeg'],
    tags: ['Кераміка', 'Антикваріат'],
    price: 10000
  },
  {
    id: 'ceramic2',
    name: 'КЕРАМІЧНИЙ ГУТТУС ЭЛІНІСТИЧНОЇ ДОБИ',
    text: 'ceramic2.js',
    image: ['ceramic2.jpeg'],
    tags: ['Кераміка', 'Антикваріат'],
    price: 30000
  },
  {
    id: 'ceramic3',
    name: 'АНТИЧНИЙ КУБОК ДЛЯ ВИНА З РЕЛЬЭФОМ У ВИГЛЯДІ ВИНОГРАДНИХ ГРОН',
    text: 'ceramic3.js',
    image: ['ceramic3.jpeg'],
    tags: ['Кераміка', 'Антикваріат'],
    price: 30000
  },
  {
    id: 'ceramic4',
    name: 'АНТИЧНИЙ ЧЕРВОНОЛАКОВИЙ КУВШИН',
    text: 'ceramic4.js',
    image: ['ceramic4.jpeg'],
    tags: ['Кераміка', 'Антикваріат'],
    price: 20000
  },
  {
    id: 'ceramic5',
    name: 'АНТИЧНА ПОСУДИНА-ЛАГІНОС З ОРНАМЕНТАЛЬНО ДЕКОРОВАНИМ ТУЛОВОМ',
    text: 'ceramic5.js',
    image: ['ceramic5.jpeg'],
    tags: ['Кераміка', 'Антикваріат'],
    price: 40000
  },
  {
    id: 'book1',
    name: 'Леітургіарон си есть Служебник',
    text: 'book1.js',
    image: ['book1.jpg', 'book1-1.jpg', 'book1-2.jpg'],
    tags: ['Книги'],
    price: 500,
    currency: 'у. о.'
  },
  {
    id: 'book2',
    name: 'Собор Святого князя Владимира',
    text: 'book2.js',
    image: ['book2.jpg', 'book2-1.jpg', 'book2-2.jpg'],
    tags: ['Книги'],
    price: 600,
    currency: 'у. о.'
  },
  {
    id: 'book3',
    name: 'Захарченко,  Киев теперь и прежде',
    text: 'book3.js',
    image: ['book3.jpg', 'book3-1.jpg', 'book3-2.jpg'],
    tags: ['Книги'],
    price: 1500,
    currency: 'у. о.'
  },
  {
    id: 'book4',
    name: 'Одесса. 1794–1894',
    text: 'book4.js',
    image: ['book4.jpg', 'book4-1.jpg', 'book4-2.jpg'],
    tags: ['Книги'],
    price: 700,
    currency: 'у. о.'
  },
  {
    id: 'book5',
    name: 'Украинская муза',
    text: 'book5.js',
    image: ['book5.jpg', 'book5-1.jpg'],
    tags: ['Книги'],
    price: 300,
    currency: 'у. о.'
  },
  {
    id: 'book6',
    name: 'Реестра Войска Запорожского',
    text: 'book6.js',
    image: ['book6.jpg', 'book6-1.jpg'],
    tags: ['Книги'],
    price: 600,
    currency: 'у. о.'
  },
  {
    id: 'book7',
    name: 'Шевченко, Т. Кобзарь (1931)',
    text: 'book7.js',
    image: ['book7.jpg', 'book7-1.jpg'],
    tags: ['Книги'],
    price: 600,
    currency: 'у. о.'
  },
  {
    id: 'book8',
    name: 'Скальковский А. История Новой Сечи',
    text: 'book8.js',
    image: ['book8.jpg', 'book8-1.jpg'],
    tags: ['Книги'],
    price: 700,
    currency: 'у. о.'
  },
  {
    id: 'book9',
    name: 'Рерих',
    text: 'book9.js',
    image: ['book9.jpg', 'book9-1.jpg'],
    tags: ['Книги'],
    price: 1000,
    currency: 'у. о.'
  },
  {
    id: 'book10',
    name: 'Максимович Н.И. Днепр и его бассейн',
    text: 'book10.js',
    image: ['book10.jpg', 'book10-1.jpg'],
    tags: ['Книги'],
    price: 300,
    currency: 'у. о.'
  },
  {
    id: 'book11',
    name: 'Уся Київщина',
    text: 'book11.js',
    image: ['book11.jpg', 'book11-1.jpg'],
    tags: ['Книги'],
    price: 300,
    currency: 'у. о.'
  },
  {
    id: 'book12',
    name: 'Триодіон',
    text: 'book12.js',
    image: ['book12.jpg', 'book12-1.jpg', 'book12-2.jpg'],
    tags: ['Книги'],
    price: 500,
    currency: 'у. о.'
  },
  {
    id: 'book13',
    name: 'Весь Юго-Западный край',
    text: 'book13.js',
    image: ['book11.jpg', 'book11-1.jpg'],
    tags: ['Книги'],
    price: 400,
    currency: 'у. о.'
  },
  {
    id: 'book14',
    name: 'Кельсієв, Молдавія',
    text: 'book14.js',
    image: ['book14.jpg', 'book14-1.jpg', 'book14-2.jpg'],
    tags: ['Книги'],
    price: 300,
    currency: 'у. о.'
  },
  {
    id: 'book15',
    name: 'Січинський В.  Українське дерев_яне будівництво і різьба',
    text: 'book15.js',
    image: ['book15.jpg', 'book15-1.jpg', 'book15-2.jpg'],
    tags: ['Книги'],
    price: 300,
    currency: 'у. о.'
  },
  {
    id: 'book16',
    name: 'Гуслистий, Історико-етнографічна монографія',
    text: 'book16.js',
    image: ['book16.jpg', 'book16-1.jpg', 'book16-2.jpg'],
    tags: ['Книги'],
    price: 300,
    currency: 'у. о.'
  },
  {
    id: 'book17',
    name: 'Киев и его предместья',
    text: 'book17.js',
    image: ['book17.jpg', 'book17-1.jpg', 'book17-2.jpg'],
    tags: ['Книги'],
    price: 500,
    currency: 'у. о.'
  },
  {
    id: 'book18',
    name: 'Грушевський М. Історія української літератури',
    text: 'book18.js',
    image: ['book18.jpg', 'book18-1.jpg', 'book18-2.jpg'],
    tags: ['Книги'],
    price: 500,
    currency: 'у. о.'
  },
  {
    id: 'book19',
    name: 'Мірчук, За чистоту позицій українського визвольного руху',
    text: 'book19.js',
    image: ['book19.jpg', 'book19-1.jpg', 'book19-2.jpg'],
    tags: ['Книги'],
    price: 100,
    currency: 'у. о.'
  },
  {
    id: 'book20',
    name: 'Шевченко Т.Г. Кобзарь (1884)',
    text: 'book20.js',
    image: ['book20.jpg', 'book20-1.jpg', 'book20-2.jpg'],
    tags: ['Книги']
  },
  {
    id: 'book21',
    name: 'Шевченко, Т.Г. Кобзарь (1907)',
    text: 'book21.js',
    image: ['book21.jpg', 'book21-1.jpg', 'book21-2.jpg'],
    tags: ['Книги'],
    price: 400,
    currency: 'у. о.'
  },
  {
    id: 'book22',
    name: 'Историко-статистическое описание Харьковского Кафедрального Успенского собора',
    text: 'book22.js',
    image: ['book22.jpg', 'book22-1.jpg', 'book22-2.jpg'],
    tags: ['Книги'],
    price: 400,
    currency: 'у. о.'
  },
  {
    id: 'book23',
    name: 'Городецький, В Джунглях Африки',
    text: 'book23.js',
    image: ['book23.jpg', 'book23-1.jpg', 'book23-2.jpg'],
    tags: ['Книги'],
    price: 500,
    currency: 'у. о.'
  },
  {
    id: 'book24',
    name: 'Максимович, Украинские народные песни',
    text: 'book24.js',
    image: ['book24.jpg', 'book24-1.jpg', 'book24-2.jpg'],
    tags: ['Книги'],
    price: 500,
    currency: 'у. о.'
  },
  {
    id: 'book25',
    name: 'Юбилейный акт Императорского',
    text: 'book25.js',
    image: ['book25.jpg', 'book25-1.jpg'],
    tags: ['Книги'],
    price: 400,
    currency: 'у. о.'
  },
  {
    id: 'book26',
    name: 'Святогорская Успенская пустынь',
    text: 'book26.js',
    image: ['book26.jpg', 'book26-1.jpg'],
    tags: ['Книги'],
    price: 400,
    currency: 'у. о.'
  },
  {
    id: 'book27',
    name: 'Визначне Жіноцтво',
    text: 'book27.js',
    image: ['book27.jpg', 'book27-1.jpg'],
    tags: ['Книги'],
    price: 300,
    currency: 'у. о.'
  },
  {
    id: 'book28',
    name: 'Кобзарь (1908)',
    text: 'book28.js',
    image: ['book28.jpg', 'book28-1.jpg'],
    tags: ['Книги'],
    price: 300,
    currency: 'у. о.'
  },
  {
    id: 'book29',
    name: 'Шевченко. Ілюстрований «Кобзарь»',
    text: 'book29.js',
    image: ['book29.jpg', 'book29-1.jpg', 'book29-2.jpg'],
    tags: ['Книги'],
    price: 500,
    currency: 'у. о.'
  },
  {
    id: 'book30',
    name: 'Патерик Печерскийю си есть Отечник',
    text: 'book30.js',
    image: ['book30.jpg', 'book30-1.jpg', 'book30-2.jpg'],
    tags: ['Книги'],
    price: 300,
    currency: 'у. о.'
  },
  {
    id: 'book31',
    name: 'Аскоченский. Киев с древнейшим его училищем Академией',
    text: 'book31.js',
    image: ['book31.jpg', 'book31-1.jpg', 'book31-2.jpg'],
    tags: ['Книги'],
    price: 500,
    currency: 'у. о.'
  },
  {
    id: 'book32',
    name: 'Иегер. Всеобщая история',
    text: 'book32.js',
    image: ['book32.jpg', 'book32-1.jpg', 'book32-2.jpg'],
    tags: ['Книги'],
    price: 600,
    currency: 'у. о.'
  },
  {
    id: 'book33',
    name: 'Таблица сердца человеческого',
    text: 'book33.js',
    image: ['book33.jpg', 'book33-1.jpg', 'book33-2.jpg'],
    tags: ['Книги'],
    price: 700,
    currency: 'у. о.'
  },
  {
    id: 'book34',
    name: 'Лукомский, Старинные усадьбы Харьковской губернии',
    text: 'book34.js',
    image: ['book34.jpg', 'book34-1.jpg', 'book34-2.jpg'],
    tags: ['Книги'],
    price: 300,
    currency: 'у. о.'
  },
]

const getText = async (id) => {
  return await import(`./texts/${id}`) 
}

module.exports = { items, getText }
