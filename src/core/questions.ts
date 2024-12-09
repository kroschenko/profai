export enum QuestionType {
  MultiSelect = "MultiSelect",
  Select = "Select",
  TextInput = "TextInput",
}

export type Question = {
  type: QuestionType
  text: string
  options: string[] | []
}

export type Quality = {
  name: string
  shortName: string
  description: string
}

export const qualities: Quality[] = [
  { name: "Аналитическое мышление", shortName: "Анализ", description: "Способность анализировать информацию, строить логические цепочки" },
  { name: "Креативность", shortName: "Креатив", description: "Стремление к генерации идей и нестандартных решений" },
  { name: "Коммуникативные навыки", shortName: "Коммуникация", description: "Умение эффективно взаимодействовать с людьми" },
  { name: "Лидерские качества", shortName: "Лидерство", description: "Желание и готовность вести за собой" },
  { name: "Работа в команде", shortName: "Командная работа", description: "Умение адаптироваться к командной среде и сотрудничать" },
  { name: "Технические навыки", shortName: "Тех. навыки", description: "Интерес и способности к технологиям, программированию, инженерии" },
  { name: "Интерес к науке и исследованиям", shortName: "Наука и исследования", description: "Стремление к познанию и открытию нового" },
  { name: "Интерес к гуманитарным наукам", shortName: "Гуманитарные науки", description: "Тяга к гуманитарным предметам, понимание культурных аспектов" },
  { name: "Внимательность к деталям", shortName: "Внимательность", description: "Умение фокусироваться и замечать мелочи" },
  { name: "Навыки планирования и организованности", shortName: "Организованность", description: "Склонность к структурированию и порядку" },
  { name: "Реакция на стресс", shortName: "Стрессоустойчивость", description: "Способность сохранять спокойствие в сложных ситуациях" },
  { name: "Физическая выносливость", shortName: "Выносливость", description: "Готовность к физической активности" },
  { name: "Социальная активность и эмпатия", shortName: "Социальная активность", description: "Интерес к людям и способность к сочувствию" },
  { name: "Интерес к бизнесу и финансам", shortName: "Бизнес и финансы", description: "Стремление к пониманию экономических и финансовых процессов" },
  { name: "Стремление к путешествиям и изучению культур", shortName: "Путешествия", description: "Интерес к изучению мировых культур" },
  { name: "Эстетическое восприятие", shortName: "Эстетика", description: "Тяга к искусству и красоте" },
  { name: "Устойчивость к рутинной работе", shortName: "Рутина", description: "Способность выполнять повторяющиеся задачи" },
  { name: "Стремление к независимости", shortName: "Независимость", description: "Желание действовать самостоятельно" },
  { name: "Умение разрешать конфликты", shortName: "Конфликты", description: "Способность решать споры" },
  { name: "Интерес к природе и экологии", shortName: "Экология", description: "Стремление изучать природные науки" },
  { name: "Интерес к технологиям и инновациям", shortName: "Технологии", description: "Интерес к новым разработкам" },
  { name: "Способность к обучению и адаптации", shortName: "Адаптивность", description: "Стремление быстро осваивать новое" }
];


export const questions: Question[] = [
  {
    type: QuestionType.TextInput,
    text: "Расскажите о себе, какие у вас есть увлечения, хобби, что вам нравится?",
    options: []
  },
  {
    type: QuestionType.TextInput,
    text: "Какие у вас сильные стороны?",
    options: []
  },
  {
    type: QuestionType.TextInput,
    text: "Что вам не нравится или вызывает трудности?",
    options: []
  },
  {
    type: QuestionType.Select,
    text: "Насколько вам нравится анализировать сложные задачи и находить взаимосвязи между различными фактами?",
    options: [
      "Совсем не нравится – Я предпочитаю избегать задач, требующих глубокого анализа.",
      "Скорее не нравится – Мне редко интересно разбираться в сложных связях и деталях.",
      "Нейтрально – Иногда интересно, но предпочитаю задачи полегче.",
      "Скорее нравится – Я люблю анализировать задачи и выявлять связи между фактами.",
      "Очень нравится – Мне приносит удовольствие анализировать сложные проблемы и находить закономерности.",
    ],
  },
  {
    type: QuestionType.Select,
    text: "Насколько вам нравится придумывать новые идеи и предлагать нестандартные решения задач?",
    options: [
      "Совсем не нравится – Я предпочитаю следовать уже проверенным методам и решениям.",
      "Скорее не нравится – Иногда могу предложить что-то новое, но чаще придерживаюсь привычных подходов.",
      "Нейтрально – Генерация идей мне интересна, но не всегда уместна.",
      "Скорее нравится – Мне нравится придумывать оригинальные идеи и подходы.",
      "Очень нравится – Я обожаю разрабатывать уникальные и нестандартные решения.",
    ],
  },
  {
    type: QuestionType.Select,
    text: "Насколько вам комфортно общаться с другими людьми и эффективно доносить свои мысли?",
    options: [
      "Совсем не комфортно – Я избегаю общения, если это возможно, и часто испытываю трудности в общении.",
      "Скорее не комфортно – Общение не приносит мне удовольствия, но могу взаимодействовать при необходимости.",
      "Нейтрально – Иногда мне нравится общение, иногда нет; зависит от ситуации.",
      "Скорее комфортно – Я чувствую себя уверенно в общении и легко нахожу общий язык с другими.",
      "Очень комфортно – Я с удовольствием общаюсь с людьми и умею доносить свои мысли четко и эффективно.",
    ],
  },
  {
    type: QuestionType.Select,
    text: "Насколько вам нравится брать на себя ответственность за руководство группой и принимать решения?",
    options: [
      "Совсем не нравится – Я предпочитаю, чтобы другие брали на себя роль лидера, а я следую указаниям.",
      "Скорее не нравится – Иногда могу руководить, но предпочитаю оставаться в роли участника.",
      "Нейтрально – Могу взять на себя лидерство при необходимости, но не стремлюсь к этому.",
      "Скорее нравится – Мне комфортно вести за собой людей и принимать решения.",
      "Очень нравится – Я стремлюсь быть лидером, мне нравится направлять команду и брать на себя ответственность.",
    ],
  },
  {
    type: QuestionType.Select,
    text: "Насколько вам нравится работать в команде и сотрудничать с другими?",
    options: [
      "Совсем не нравится – Я предпочитаю работать в одиночку и избегаю командных задач.",
      "Скорее не нравится – Мне не очень комфортно работать в команде, но я могу это делать.",
      "Нейтрально – Я могу работать в команде, но мне это не всегда интересно.",
      "Скорее нравится – Мне нравится сотрудничать с другими и достигать общих целей.",
      "Очень нравится – Я люблю работать в команде, мне нравится обмениваться идеями и сотрудничать."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Насколько вас интересуют технологии, программирование и инженерия?",
    options: [
      "Совсем не интересуют – Я предпочитаю избегать технических задач и технологий.",
      "Скорее не интересуют – У меня нет особого интереса к технологиям, но иногда я их использую.",
      "Нейтрально – Иногда меня интересуют технологии, но не всегда.",
      "Скорее интересуют – Я люблю разбираться в технологиях и программировании.",
      "Очень интересуют – Я увлечен технологиями и программированием, и постоянно учусь новому."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Насколько вас интересует наука и исследование новых идей?",
    options: [
      "Совсем не интересует – Я предпочитаю практические задачи и не люблю заниматься научными исследованиями.",
      "Скорее не интересует – Наука не очень меня привлекает, хотя иногда я могу почитать что-то новое.",
      "Нейтрально – У меня есть интерес к науке, но я не всегда занимаюсь ею.",
      "Скорее интересует – Мне нравится изучать новые научные открытия и проводить исследования.",
      "Очень интересует – Я увлечен наукой и постоянно ищу новые знания и открытия."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Насколько вас интересуют гуманитарные науки и культурные аспекты?",
    options: [
      "Совсем не интересуют – Я предпочитаю точные науки и не увлекаюсь гуманитарными предметами.",
      "Скорее не интересуют – У меня нет особого интереса к гуманитарным наукам, но иногда я читаю что-то на эту тему.",
      "Нейтрально – Мне иногда интересно изучать гуманитарные науки, но я не увлекаюсь ими.",
      "Скорее интересуют – Я люблю разбираться в гуманитарных вопросах и изучать культуру.",
      "Очень интересуют – Я увлечен гуманитарными науками и стремлюсь понять культурные аспекты общества."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Насколько вам важно замечать детали и фокусироваться на мелочах?",
    options: [
      "Совсем не важно – Я обычно не обращаю внимания на мелочи и фокусируюсь на общем.",
      "Скорее не важно – Мне не всегда важно замечать детали, хотя иногда я это делаю.",
      "Нейтрально – Я могу замечать детали, но это не всегда для меня приоритет.",
      "Скорее важно – Мне нравится обращать внимание на детали и фокусироваться на мелочах.",
      "Очень важно – Я всегда замечаю детали и считаю это важным в любой работе."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Насколько вам важно планировать и организовывать свои дела?",
    options: [
      "Совсем не важно – Я предпочитаю спонтанность и не люблю планировать.",
      "Скорее не важно – Иногда я планирую, но чаще действую по обстоятельствам.",
      "Нейтрально – Я могу планировать, но не всегда считаю это необходимым.",
      "Скорее важно – Мне нравится структурировать свои задачи и организовывать время.",
      "Очень важно – Я всегда тщательно планирую и придерживаюсь порядка в своих делах."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Насколько вы способны сохранять спокойствие в стрессовых ситуациях?",
    options: [
      "Совсем не способен – Я часто теряю контроль и волнуюсь в сложных ситуациях.",
      "Скорее не способен – Я иногда нервничаю, но могу справляться с некоторыми стрессами.",
      "Нейтрально – Я иногда сохраняю спокойствие, но иногда это бывает сложно.",
      "Скорее способен – Я обычно справляюсь со стрессом и стараюсь оставаться спокойным.",
      "Очень способен – Я уверенно сохраняю спокойствие и контролирую свои эмоции даже в самых сложных ситуациях."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Насколько вы готовы к физической активности и упражнениям?",
    options: [
      "Совсем не готов – Я предпочитаю сидячий образ жизни и избегаю физической активности.",
      "Скорее не готов – Я редко занимаюсь физической активностью и не чувствую себя в этом уверенно.",
      "Нейтрально – Я могу заниматься физической активностью, но это не всегда моя приоритетная задача.",
      "Скорее готов – Мне нравится заниматься спортом и быть физически активным.",
      "Очень готов – Я активно занимаюсь спортом и люблю физическую активность в любом виде."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Насколько вас интересуют люди и насколько вы способны сопереживать им?",
    options: [
      "Совсем не интересуют – Я предпочитаю оставаться в одиночестве и редко взаимодействую с другими.",
      "Скорее не интересуют – Я не очень интересуюсь людьми и не часто проявляю сочувствие.",
      "Нейтрально – У меня есть интерес к людям, но я не всегда способен на эмпатию.",
      "Скорее интересуют – Мне нравятся общения с людьми, и я стараюсь понимать их чувства.",
      "Очень интересуют – Я увлечен общением с людьми и всегда готов проявить сочувствие и поддержку."
    ]
  }, {
    type: QuestionType.Select,
    text: "Насколько вас интересуют бизнес и финансы, а также понимание экономических процессов?",
    options: [
      "Совсем не интересуют – Я предпочитаю избегать вопросов бизнеса и финансов.",
      "Скорее не интересуют – У меня нет особого интереса к экономике, но иногда я могу об этом прочитать.",
      "Нейтрально – Иногда мне интересно узнавать о бизнесе и финансах, но не всегда.",
      "Скорее интересуют – Я люблю изучать бизнес-процессы и экономику.",
      "Очень интересуют – Я увлечен бизнесом и финансами и стремлюсь понять все аспекты экономических процессов."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Насколько вас интересует путешествие и изучение различных культур?",
    options: [
      "Совсем не интересует – Я предпочитаю оставаться дома и не интересуюсь другими культурами.",
      "Скорее не интересует – У меня нет особого желания путешествовать или изучать культуры.",
      "Нейтрально – Иногда мне интересно узнавать о других культурах, но это не всегда актуально.",
      "Скорее интересует – Мне нравится путешествовать и открывать для себя новые культуры.",
      "Очень интересует – Я увлечен путешествиями и стремлюсь изучать разные культуры по всему миру."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Насколько вас привлекает искусство и красота в окружающем мире?",
    options: [
      "Совсем не привлекает – Я не интересуюсь искусством и не замечаю красоту вокруг.",
      "Скорее не привлекает – У меня нет особого интереса к искусству, хотя иногда я могу это оценить.",
      "Нейтрально – Я могу оценить красоту, но это не всегда для меня приоритет.",
      "Скорее привлекает – Мне нравится искусство, и я часто замечаю красивое в жизни.",
      "Очень привлекает – Я увлечен искусством и красотой, и это играет важную роль в моей жизни."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Насколько вы способны справляться с рутинной работой и повторяющимися задачами?",
    options: [
      "Совсем не способен – Я не выношу повторяющиеся задачи и стараюсь их избегать.",
      "Скорее не способен – У меня возникают трудности с рутинной работой, и я часто теряю интерес.",
      "Нейтрально – Я могу выполнять рутинные задачи, но это не всегда мне нравится.",
      "Скорее способен – Мне удается справляться с рутинной работой, и я могу быть продуктивным.",
      "Очень способен – Я легко справляюсь с повторяющимися задачами и нахожу в этом свои преимущества."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Насколько вам важно действовать независимо и самостоятельно?",
    options: [
      "Совсем не важно – Я предпочитаю, чтобы другие принимали решения за меня.",
      "Скорее не важно – Я иногда действую самостоятельно, но чаще полагаюсь на других.",
      "Нейтрально – Я могу быть независимым, но это не всегда для меня приоритет.",
      "Скорее важно – Мне нравится действовать самостоятельно и принимать свои решения.",
      "Очень важно – Я стремлюсь к независимости и ценю возможность действовать на свой страх и риск."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Насколько вы умеете разрешать конфликты и споры между людьми?",
    options: [
      "Совсем не умею – Я избегаю конфликтов и не знаю, как их решать.",
      "Скорее не умею – У меня возникают трудности в разрешении споров, и я часто предпочитаю уходить от них.",
      "Нейтрально – Я могу участвовать в разрешении конфликтов, но не всегда знаю, как это сделать.",
      "Скорее умею – Я стараюсь находить компромиссы и разрешать споры мирным путем.",
      "Очень умею – Я эффективно разрешаю конфликты и умею находить решения, которые удовлетворяют обе стороны."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Насколько вас интересуют природа и экология, а также изучение природных наук?",
    options: [
      "Совсем не интересуют – Я предпочитаю другие предметы и не увлекаюсь природными науками.",
      "Скорее не интересуют – У меня нет особого интереса к экологии, хотя иногда я читаю о природе.",
      "Нейтрально – Мне иногда интересно изучать природу и экологию, но не всегда.",
      "Скорее интересуют – Я люблю изучать природные науки и заботиться об экологии.",
      "Очень интересуют – Я увлечен природой и экологией и стремлюсь узнать больше о них."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Насколько вас интересуют новые технологии и инновации?",
    options: [
      "Совсем не интересуют – Я предпочитаю традиционные методы и не увлекаюсь новыми разработками.",
      "Скорее не интересуют – У меня нет особого интереса к технологиям, хотя иногда я читаю о новинках.",
      "Нейтрально – Мне иногда интересно узнавать о новых технологиях, но не всегда.",
      "Скорее интересуют – Я люблю следить за новыми разработками и хочу быть в курсе современных технологий.",
      "Очень интересуют – Я увлечен технологиями и инновациями и стремлюсь быть на переднем крае новых разработок."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Насколько вы способны быстро осваивать новое и адаптироваться к изменениям?",
    options: [
      "Совсем не способен – Я испытываю трудности с обучением и не люблю изменения.",
      "Скорее не способен – Я медленно учусь и предпочитаю стабильность.",
      "Нейтрально – Я могу осваивать новое, но это занимает у меня время.",
      "Скорее способен – Я быстро обучаюсь и стараюсь адаптироваться к новым условиям.",
      "Очень способен – Я легко осваиваю новые навыки и быстро адаптируюсь к изменениям."
    ]
  }
]
