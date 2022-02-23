const mainPage = {
  label: "Главная",
  type: "route",
  link: "/",
  items: [
    {
      label: "Услуги",
      type: "hashLink",
      link: "services"
    },
    {
      label: "Обо мне",
      type: "hashLink",
      link: "about_me"
    },
    {
      label: "Мое образование",
      type: "hashLink",
      link: "my_education"
    },
    {
      label: "Дипломы и сертификаты",
      type: "hashLink",
      link: "my_certificates"
    },
    {
      label: "Запись на прием",
      type: "hashLink",
      link: "book_appointment"
    },
  ],
  get itemsForHeader() {
    return [this.items[0], this.items[4], this.items[1]];
  }
};

const blog = {
  label: "Блог",
  type: "route",
  link: "blog",
  items: [
    {
      label: "Коллегам",
      type: "route",
      link: "for_colleagues"
    },
  ],
};

const account = [
  {
    label: "Личный кабинет",
    type: "route",
    forLoggedOn: true,
    link: "account",
    items: [
      {
        label: "Персональные рекомендации",
        type: "hashLink",
        link: "recommendations",
      },
      {
        label: "Стоматологический профиль",
        type: "hashLink",
        link: "medical_profile",
      },
      {
        label: "История лечения",
        type: "hashLink",
        link: "records"
      },
      {
        label: "Личные данные",
        type: "hashLink",
        link: "personal_data"
      },
      {
        label: "Выйти",
        type: "route",
        link: "logout"
      },
    ],
    get itemsForCover() {
      return [{ label: this.label, type: this.type, link: this.link }, this.items[this.items.length - 1]];
    }
  },
  {
    label: "Войти",
    type: "route",
    forLoggedOff: true,
    link: "login",
    items: [
      {
        label: "Регистрация",
        type: "route",
        link: "signup"
      },
    ]
  },
];

export const headerMenu = [
  {
    label: "Меню",
    type: "menu",
    items: [mainPage, blog, ...account],
  },
  ...mainPage.itemsForHeader,
  {
    // Блог
    label: blog.label,
    type: blog.type,
    link: blog.link
  },
  {
    // Коллегам
    label: blog.items[0].label,
    type: blog.items[0].type,
    link: blog.items[0].link
  },
  account[1],
];

/* Меню
Услуги
Запись на прием
Обо мне
Блог
Коллегам
Личный кабинет */
