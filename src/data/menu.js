const mainPageMap = {
  type: "multiLevelItem",
  label: "Главная",
  link: "",
  items: [
    { type: "hashLink", label: "Услуги", link: "services" },
    { type: "hashLink", label: "Обо мне", link: "about_me" },
    { type: "hashLink", label: "Мое образование", link: "my_education" },
    { type: "hashLink", label: "Дипломы и сертификаты", link: "my_certificates" },
    { type: "hashLink", label: "Запись на прием", link: "book_appointment" },
  ],
};

const blogMap = {
  type: "multiLevelItem",
  label: "Блог",
  link: "blog",
  items: [
    { type: "route", label: "Коллегам", link: "for_colleagues" },
  ],
};

const accountMap = {
  type: "multiLevelItem",
  label: "Личный кабинет",
  link: "account",
  items: [
    {
      type: "hashLinks",
      items: [
        {
          type: "hashLink",
          label: "Персональные рекомендации",
          link: "recommendations",
        },
        {
          type: "hashLink",
          label: "Стоматологический профиль",
          link: "medical_profile",
        },
        { type: "hashLink", label: "История лечения", link: "records" },
        { type: "hashLink", label: "Личные данные", link: "personal_data" },
      ],
    },
  ],
};

export const menuMap = [
  {
    type: "multiLevelTopItem",
    label: "Меню",
    items: [ mainPageMap, blogMap, accountMap ],
  },
  {
    type: "hashLinks",
    items: [
      { type: "hashLink", label: "Услуги", link: "services" },
      { type: "hashLink", label: "Запись на прием", link: "book_appointment" },
      { type: "hashLink", label: "Обо мне", link: "about_me" },
    ],
  },
  { type: "route", label: "Блог", link: "blog" },
  { type: "route", label: "Коллегам", link: "for_colleagues" },
  {
    type: "multiLevelTopItem",
    label: "Личный кабинет",
    items: [
      {
        type: "hashLink",
        label: "Персональные рекомендации",
        link: "reccomendations",
      },
      {
        type: "hashLink",
        label: "Стоматологический профиль",
        link: "medical_profile",
      },
      { type: "hashLink", label: "История лечения", link: "records" },
      { type: "hashLink", label: "Личные данные", link: "personal_data" },
    ],
  },
];

/* Меню
Услуги
Запись на прием
Обо мне
Блог
Коллегам
Личный кабинет */
