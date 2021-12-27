const books = [
  {
    author: "Dan Brown",
    books: [
      {
        id: "1",
        article: "1",
        title: "Inferno",
        description:
          "Оказавшись в самом загадочном городе Италии – Флоренции, профессор Лэнгдон, специалист по кодам, символам и истории искусства, неожиданно попадает в водоворот событий, которые способны привести к гибели все человечество… И помешать этому может только разгадка тайны, некогда зашифрованной Данте в...",
        age: "16+",
        genre: "History, Secrets",
        author: "Dan Brown",
        img: "https://i2.mybook.io/p/x378/book_covers/fd/ed/fded228d-e9a7-4c1d-a0a9-ad0ce41a92c9.jpg",
        price: 15,
        isAddedToCart: false,
      },
      {
        id: "2",
        article: "2",
        title: "The Lost Symbol",
        description:
          "«Утраченный символ» — это роман культового писателя Дэна Брауна, мастера запутанных детективных историй, переплетающих в себе исторические факты и авторские идеи. Книга входит в цикл произведений, где главным героем является профессор Роберт Лэнгдон. События книги происходят в Вашингтоне, уже пос...",
        age: "16+",
        genre: "Roman",
        author: "Dan Brown",
        img: "https://i2.mybook.io/p/x378/book_covers/c8/73/c87355a6-bacc-490b-89d0-68ded673bd46.jpg",
        price: 25,
        isAddedToCart: false,
      },
      {
        id: "3",
        article: "3",
        title: "Da vinci code",
        description:
          "Убийство Жака Соньера наделало в Париже много шума – не только благодаря тому, что он был хорошо известен в узких кругах, но и потому, что расположение трупа в точности повторяло картину Да Винчи «Ветрувианский человек». Кто и зачем мог это сделать? Почему полиция подозревает в убийстве известног...",
        age: "16+",
        genre: "Detective, History",
        author: "Dan Brown",
        img: "https://i1.mybook.io/p/x378/book_covers/5a/58/5a58e489-fe53-44e9-a28e-64f52e544d85.jpg",
        price: 20,
        isAddedToCart: false,
      },
      {
        id: "4",
        article: "4",
        title: "Digital Fortress",
        description:
          "Динамичный детективный триллер Дэна Брауна («Код да Винчи», «Ангелы и демоны») приглашает читателя в святая святых Агентства национальной безопасности Америки. Здесь происходит немыслимое: суперкомпьютер не может расшифровать код, который, предположительно, был создан посредством программы «Цифро...",
        age: "16+",
        genre: "Detective, Triller",
        author: "Dan Brown",
        img: "https://i1.mybook.io/p/x378/book_covers/0d/f4/0df4241a-b5cc-4621-9512-95d62cd248e2.jpg",
        price: 35,
        isAddedToCart: false,
      },
      {
        id: "5",
        article: "5",
        title: "Deception Point",
        description:
          "Встречайте остросюжетный триллер Дэна Брауна, автора культовых романов «Код Да Винчи» и «Ангелы и Демоны», с успехом экранизированных Голливудом. В книге «Точка обмана» Дэн Браун попытался обличить деятельность НАСА. Популярный американский писатель рассказывает об артефакте, который был найден в...",
        age: "16+",
        genre: "Detective, Triller, Dystopia",
        author: "Dan Brown",
        img: "https://i3.mybook.io/p/x378/book_covers/3c/7f/3c7ff2f6-7a58-4424-a4dd-22974e70f01b.jpg",
        price: 27,
        isAddedToCart: false,
      },
      {
        id: "6",
        article: "6",
        title: "Angels and Demons",
        description:
          "Дэна Брауна по праву можно назвать одним из самых загадочных авторов нашего времени. Автор приоткрывает завесу тайны древнего, прославленного средневекового ордена иллюминатов, который вел ожесточенную борьбу с официальной церковью. И, казалось бы, это уже давно часть человеческой истории, но все...",
        age: "16+",
        genre: "History",
        author: "Dan Brown",
        img: "https://i2.mybook.io/p/x378/book_covers/ca/e4/cae4448a-d496-4bd4-985e-25646d03c78d.jpg",
        price: 31,
        isAddedToCart: false,
      },
    ],
  },
  {
    author: "George Oruell",
    books: [
      {
        id: "7",
        article: "7",
        title: "1984",
        description:
          "Первые полвека после публикации антиутопия Оруэлла «1984» воспринималась как злая сатира на коммунистические режимы.Но, увы, пророческие детали мира «1984» всё больше и больше становятся реальностью современного декоммунизированного мира.Фантастические реалии, придуманные Джорджем Оруэллом для Бр...",
        age: "16+",
        genre: "Dystopia",
        author: "George Oruell",
        img: "https://i1.mybook.io/p/x378/book_covers/64/3d/643db419-747b-4f81-9408-f447a6b1283a.jpg",
        price: 42,
        isAddedToCart: false,
      },
    ],
  },
  {
    author: "Oldos Hecksley",
    books: [
      {
        id: "8",
        article: "8",
        title: "Brawe New World",
        description:
          "«О дивный новый мир» – антиутопия об «обществе потребления», в основах которого лежат генетическое программирование и строгий контроль над размножением, и об одном человеке, для которого это общество становится чужим. Текст произведения снабжен грамматическим комментарием и словарем, в который во...",
        age: "16+",
        genre: "Dystopia",
        author: "Oldos Hecksley",
        img: "https://i1.mybook.io/p/x378/book_covers/81/47/81476327-6e79-451d-a7cc-22c74d47a552.jpg",
        price: 45,
        isAddedToCart: false,
      },
    ],
  },
  {
    author: "Michael Bulgakov",
    books: [
      {
        id: "9",
        article: "9",
        title: "Master and Margarett",
        description:
          "«Мастер и Маргарита» — это роман, который стоит особняком от остальных книг, изданных в советский период. Параллельно в книге развиваются несколько сюжетных линий, а реальное смешивается с фантастическим и мистическим. Книга предлагает нам исследовать разные временные периоды, а также забраться в...",
        age: "16+",
        genre: "Roman",
        author: "Michael Bulgakov",
        img: "https://i2.mybook.io/p/x378/book_covers/50/f4/50f4dae2-6cdc-45ee-a744-0ca4c8aafe7d.jpg",
        price: 38,
        isAddedToCart: false,
      },
    ],
  },
  {
    author: "Ray Bradbury",
    books: [
      {
        id: "10",
        article: "10",
        title: "Fahrenheit 451",
        description:
          "«451 градус по Фаренгейту» – научно-фантастический роман Рэя Брэдбери, который входит в популярную серию «Классика для ленивых». Действие романа происходит в тоталитарном обществе, которое запрещает своим членам читать книги, содержащие философский смысл. Такие издания должны быть сожжены, а те, ...",
        age: "16+",
        genre: "History, Dystopia, Future",
        author: "Ray Bradbury",
        img: "https://i1.mybook.io/p/x378/book_covers/e1/0d/e10d0537-cb15-4243-948c-06c4db775606.jpg",
        price: 38,
        isAddedToCart: false,
      },
    ],
  },
];

export default books;
