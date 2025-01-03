import { QuestionType } from "./types";

const psychologyQuestions = [
  {
    type: QuestionType.Select,
    text: "Хотелось бы вам оценивать индивидуально- и социально-психологические различия, эмоциональные состояния и их влияние на качество жизни и поведение человека?",
    options: [
      "Совсем не хотел бы – это не совсем моя область.",
      "Скорее не хотел бы – у меня есть некоторые сомнения.",
      "Нейтрально – пока не определился с мнением.",
      "Скорее хотел бы – интерес к теме присутствует.",
      "Очень хотел бы – это представляется увлекательным."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Склонны вы применять после соответствующего обучения теоретические знания и практические навыки в области социально-психологических особенностей и закономерностей поведения личности?",
    options: [
      "Совсем не склонен – не вижу себя в этой роли.",
      "Скорее не склонен – не уверен в своих силах.",
      "Нейтрально – мне нужно больше информации.",
      "Скорее склонен – мой интерес растет.",
      "Очень склонен – хотел бы попробовать."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Хотелось бы вам проводить прикладные психологические исследования и внедрять их результаты в практическую деятельность психолога?",
    options: [
      "Совсем не хотел бы – это не совсем для меня.",
      "Скорее не хотел бы – у меня есть другие интересы.",
      "Нейтрально – пока не принял решение.",
      "Скорее хотел бы – интерес к исследованиям есть.",
      "Очень хотел бы – это выглядит заманчиво."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Стремитесь вы применять в психодиагностической, психокоррекционной и консультативной работе системные знания о психическом развитии человека?",
    options: [
      "Совсем не стремлюсь – не вижу в этом большого смысла.",
      "Скорее не стремлюсь – у меня другие приоритеты.",
      "Нейтрально – пока не решил.",
      "Скорее стремлюсь – интерес к этой области есть.",
      "Очень стремлюсь – это кажется важным."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Хотелось ли вам учитывать особенности возрастного физиологического и психологического развития человека в будущем?",
    options: [
      "Совсем не хотелось бы – не считаю это особенно важным.",
      "Скорее не хотелось бы – не вижу в этом необходимости.",
      "Нейтрально – у меня нет четкого мнения.",
      "Скорее хотелось бы – это может оказаться полезным.",
      "Очень хотелось бы – это представляется интересным."
    ]
  }
];
const historyQuestions = [
  {
    type: QuestionType.Select,
    text: "Хотелось бы вам обладать способностью анализировать процессы государственного строительства в разные исторические периоды?",
    options: [
      "Совсем не хотелось бы – это не совсем мой интерес.",
      "Скорее не хотелось бы – у меня нет особого желания заниматься этим.",
      "Нейтрально – не уверен, что это для меня.",
      "Скорее хотелось бы – интерес к истории растет.",
      "Очень хотелось бы – это кажется увлекательным."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Стремитесь ли вы выделять основные археологические периоды и культуры Беларуси?",
    options: [
      "Совсем не стремлюсь – это не так важно для меня.",
      "Скорее не стремлюсь – не вижу себя в этой области.",
      "Нейтрально – не решил, что об этом думаю.",
      "Скорее стремлюсь – интерес к археологии есть.",
      "Очень стремлюсь – это представляется значимым."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Хотелось бы вам рассматривать основные периоды и закономерности развития научной мысли в исторической науке?",
    options: [
      "Совсем не хотелось бы – не вижу в этом большого смысла.",
      "Скорее не хотелось бы – у меня есть другие интересы.",
      "Нейтрально – мне нужно больше информации.",
      "Скорее хотелось бы – интерес к истории растет.",
      "Очень хотелось бы – это кажется значимым."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Склонны ли вы анализировать и интерпретировать исторические события и процессы разных уровней?",
    options: [
      "Совсем не склонен – это не совсем для меня.",
      "Скорее не склонен – не уверен в своих силах.",
      "Нейтрально – мне нужно больше информации.",
      "Скорее склонен – интерес к анализу есть.",
      "Очень склонен – хотел бы попробовать."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Стремитесь ли вы применять знания о социальной трансформации в будущем?",
    options: [
      "Совсем не стремлюсь – не вижу в этом большой необходимости.",
      "Скорее не стремлюсь – у меня другие приоритеты.",
      "Нейтрально – пока не решил.",
      "Скорее стремлюсь – это может оказаться полезным.",
      "Очень стремлюсь – это кажется интересным."
    ]
  }
];
const mathEducationQuestions = [
  {
    type: QuestionType.Select,
    text: "Склонны ли вы к овладению научно обоснованными методиками формирования математических понятий и обучения решению задач?",
    options: [
      "Совсем не склонен – не интересуюсь этой темой.",
      "Скорее не склонен – у меня есть сомнения.",
      "Нейтрально – не определился с мнением.",
      "Скорее склонен – интерес к методикам присутствует.",
      "Очень склонен – хотел бы попробовать."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Стремитесь ли вы овладеть методиками формирования понятий в области информатики и программирования?",
    options: [
      "Совсем не стремлюсь – это не для меня.",
      "Скорее не стремлюсь – у меня другие интересы.",
      "Нейтрально – не уверен в своих желаниях.",
      "Скорее стремлюсь – интерес к информатике растет.",
      "Очень стремлюсь – это кажется интересным."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Хотелось бы вам применять знания по элементарной математике для обучения алгебре и геометрии?",
    options: [
      "Совсем не хотелось бы – не вижу в этом смысла.",
      "Скорее не хотелось бы – у меня другие приоритеты.",
      "Нейтрально – не решил, что об этом думаю.",
      "Скорее хотелось бы – интерес к обучению существует.",
      "Очень хотелось бы – это кажется увлекательным."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Склонны ли вы применять методы алгоритмизации в различных средах программирования?",
    options: [
      "Совсем не склонен – не вижу в этом необходимости.",
      "Скорее не склонен – у меня нет желания заниматься этим.",
      "Нейтрально – пока не принял решение.",
      "Скорее склонен – интерес к алгоритмам есть.",
      "Очень склонен – хотел бы попробовать."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Хотелось бы вам применять методы создания и обработки информации с использованием современного программного обеспечения?",
    options: [
      "Совсем не хотелось бы – это не важно для меня.",
      "Скорее не хотелось бы – не вижу в этом необходимости.",
      "Нейтрально – у меня нет четкого мнения.",
      "Скорее хотелось бы – это может быть полезно.",
      "Очень хотелось бы – это кажется значимым."
    ]
  }
];
const socialPedagogyQuestions = [
  {
    type: QuestionType.Select,
    text: "Хотелось бы вам создавать условия для успешной социализации обучающихся и осуществлять их сопровождение?",
    options: [
      "Совсем не хотелось бы – это не мой интерес.",
      "Скорее не хотелось бы – не вижу в этом значения.",
      "Нейтрально – не уверен, что это для меня.",
      "Скорее хотелось бы – интерес к социализации есть.",
      "Очень хотелось бы – хотел бы попробовать."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Склонны ли вы осуществлять сбор и анализ результатов социально-педагогического исследования?",
    options: [
      "Совсем не склонен – не вижу в этом смысла.",
      "Скорее не склонен – у меня другие интересы.",
      "Нейтрально – мне нужно больше информации.",
      "Скорее склонен – интерес к исследовательской деятельности растет.",
      "Очень склонен – это кажется важным."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Стремитесь ли вы овладеть методами диагностики и коррекции личности обучающегося?",
    options: [
      "Совсем не стремлюсь – это не для меня.",
      "Скорее не стремлюсь – не вижу в этом необходимости.",
      "Нейтрально – пока не решил.",
      "Скорее стремлюсь – интерес к методам есть.",
      "Очень стремлюсь – это представляется значимым."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Склонны ли вы разрабатывать комплексные программы по профилактике девиантного поведения?",
    options: [
      "Совсем не склонен – не интересуюсь этой темой.",
      "Скорее не склонен – у меня нет желания заниматься этим.",
      "Нейтрально – не определился с мнением.",
      "Скорее склонен – интерес к профилактике растет.",
      "Очень склонен – хотел бы попробовать."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Хотелось бы вам адаптировать эффективные методы оказания помощи участникам образовательного процесса?",
    options: [
      "Совсем не хотелось бы – не вижу в этом смысла.",
      "Скорее не хотелось бы – у меня другие приоритеты.",
      "Нейтрально – не решил, что об этом думаю.",
      "Скорее хотелось бы – это может оказаться полезным.",
      "Очень хотелось бы – это кажется важным."
    ]
  }
];
const biologicalEducationQuestions = [
  {
    type: QuestionType.Select,
    text: "Склонны ли вы к овладению классическими разделами биологических дисциплин для учебно-исследовательской деятельности?",
    options: [
      "Совсем не склонен – это не мой интерес.",
      "Скорее не склонен – не вижу в этом необходимости.",
      "Нейтрально – не определился с мнением.",
      "Скорее склонен – интерес к биологии есть.",
      "Очень склонен – это может быть полезно."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Хотелось бы вам приобщиться к системе знаний о строении и функционировании клеток и тканей?",
    options: [
      "Совсем не хотелось бы – не считаю это важным.",
      "Скорее не хотелось бы – у меня другие интересы.",
      "Нейтрально – пока не решил.",
      "Скорее хотелось бы – интерес к клеточной биологии растет.",
      "Очень хотелось бы – это может быть полезно."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Склонны ли вы к освоению классических разделов химических дисциплин для учебно-исследовательской деятельности?",
    options: [
      "Совсем не склонен – не вижу в этом смысла.",
      "Скорее не склонен – у меня нет желания заниматься этим.",
      "Нейтрально – не определился с мнением.",
      "Скорее склонен – интерес к химии есть.",
      "Очень склонен – это может быть значимым."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Стремитесь ли вы овладеть знаниями о строении человека и законах наследственности?",
    options: [
      "Совсем не стремлюсь – это не для меня.",
      "Скорее не стремлюсь – у меня другие приоритеты.",
      "Нейтрально – пока не решил.",
      "Скорее стремлюсь – интерес к генетике растет.",
      "Очень стремлюсь – это может быть важным."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Хотелось бы вам овладеть знаниями о макро- и микроструктуре живых организмов?",
    options: [
      "Совсем не хотелось бы – не интересуюсь этой темой.",
      "Скорее не хотелось бы – не вижу в этом необходимости.",
      "Нейтрально – у меня нет четкого мнения.",
      "Скорее хотелось бы – это может быть полезно.",
      "Очень хотелось бы – это может быть интересно."
    ]
  }
];
const physicalCultureQuestions = [
  {
    type: QuestionType.Select,
    text: "Склонны ли вы использовать теоретические знания о физиологических механизмах и влиянии двигательной активности на здоровье?",
    options: [
      "Совсем не склонен – не вижу в этом смысла.",
      "Скорее не склонен – у меня другие интересы.",
      "Нейтрально – не определился с мнением.",
      "Скорее склонен – интерес к физиологии растет.",
      "Очень склонен – это может быть полезно."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Стремитесь ли вы применять анатомические знания для выбора физических нагрузок?",
    options: [
      "Совсем не стремлюсь – это не для меня.",
      "Скорее не стремлюсь – у меня нет желания заниматься этим.",
      "Нейтрально – пока не решил.",
      "Скорее стремлюсь – интерес к анатомии есть.",
      "Очень стремлюсь – это может быть полезно."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Хотелось бы вам оценивать функциональное состояние организма по биохимическим показателям?",
    options: [
      "Совсем не хотелось бы – не интересуюсь этой темой.",
      "Скорее не хотелось бы – нет желания заниматься этим.",
      "Нейтрально – пока не определился.",
      "Скорее хотелось бы – интерес к биохимии растет.",
      "Очень хотелось бы – это может быть важно."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Стремитесь ли вы овладеть технологией организации медицинского сопровождения занятий физической культурой?",
    options: [
      "Совсем не стремлюсь – не вижу в этом необходимости.",
      "Скорее не стремлюсь – у меня другие приоритеты.",
      "Нейтрально – пока не решил.",
      "Скорее стремлюсь – интерес к медицине есть.",
      "Очень стремлюсь – это может быть полезно."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Хотелось бы вам применять знания об особенностях рационального питания для адаптации к физическим нагрузкам?",
    options: [
      "Совсем не хотелось бы – это не важно для меня.",
      "Скорее не хотелось бы – не вижу в этом необходимости.",
      "Нейтрально – не определился с мнением.",
      "Скорее хотелось бы – это может быть полезно.",
      "Очень хотелось бы – это может иметь значение."
    ]
  }
];
const russianPhilologyQuestions = [
  {
    type: QuestionType.Select,
    text: "Хотелось бы вам характеризовать единицы русского языка с точки зрения их семантики, структуры и функции?",
    options: [
      "Совсем не хотелось бы – не интересуюсь этой темой.",
      "Скорее не хотелось бы – у меня другие приоритеты.",
      "Нейтрально – не определился с мнением.",
      "Скорее хотелось бы – интерес к языку присутствует.",
      "Очень хотелось бы – это может быть полезно."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Склонны ли вы ориентироваться в особенностях литературного процесса и работать с текстом художественного произведения?",
    options: [
      "Совсем не склонен – не вижу в этом смысла.",
      "Скорее не склонен – у меня нет желания заниматься этим.",
      "Нейтрально – пока не решил.",
      "Скорее склонен – интерес к литературе растет.",
      "Очень склонен – это может быть значимым."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Стремитесь ли вы осуществлять поуровневый лингвистический анализ русскоязычного текста?",
    options: [
      "Совсем не стремлюсь – не считаю это важным.",
      "Скорее не стремлюсь – у меня другие интересы.",
      "Нейтрально – не определился с мнением.",
      "Скорее стремлюсь – интерес к лингвистике есть.",
      "Очень стремлюсь – это может быть значимым."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Хотелось бы вам применять эффективные средства и методы обучения русскому языку в образовательных учреждениях?",
    options: [
      "Совсем не хотелось бы – не вижу в этом необходимости.",
      "Скорее не хотелось бы – у меня нет желания заниматься этим.",
      "Нейтрально – пока не решил.",
      "Скорее хотелось бы – интерес к педагогике существует.",
      "Очень хотелось бы – это может быть полезно."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Стремитесь ли вы осуществлять стилистическое редактирование и корректуру русскоязычных текстов?",
    options: [
      "Совсем не стремлюсь – не интересуюсь редактурой.",
      "Скорее не стремлюсь – у меня другие приоритеты.",
      "Нейтрально – пока не определился.",
      "Скорее стремлюсь – интерес к редактированию есть.",
      "Очень стремлюсь – это может быть важным."
    ]
  }
];
const modernLanguagesQuestions = [
  {
    type: QuestionType.Select,
    text: "Склонны ли вы использовать знания о лексической системе иностранного языка для решения задач?",
    options: [
      "Совсем не склонен – это не для меня.",
      "Скорее не склонен – не вижу в этом смысла.",
      "Нейтрально – не определился с мнением.",
      "Скорее склонен – интерес к языкам растет.",
      "Очень склонен – это может быть полезно."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Хотелось бы вам применять знания о фонетической и грамматической системе иностранного языка для решения задач?",
    options: [
      "Совсем не хотелось бы – не считаю это важным.",
      "Скорее не хотелось бы – у меня другие интересы.",
      "Нейтрально – пока не решил.",
      "Скорее хотелось бы – интерес к фонетике присутствует.",
      "Очень хотелось бы – это может быть полезно."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Склонны ли вы проектировать и оценивать образовательный процесс по иностранному языку?",
    options: [
      "Совсем не склонен – не вижу в этом необходимости.",
      "Скорее не склонен – у меня нет желания заниматься этим.",
      "Нейтрально – не определился с мнением.",
      "Скорее склонен – интерес к образовательным технологиям растет.",
      "Очень склонен – это может быть значимым."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Стремитесь ли вы применять стилистические средства в общении с соблюдением социокультурных норм?",
    options: [
      "Совсем не стремлюсь – не интересуюсь этой темой.",
      "Скорее не стремлюсь – у меня другие приоритеты.",
      "Нейтрально – пока не решил.",
      "Скорее стремлюсь – интерес к культурным аспектам есть.",
      "Очень стремлюсь – это может быть важным."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Хотелось бы вам осуществлять иноязычную устную и письменную коммуникацию в соответствии с нормой языка?",
    options: [
      "Совсем не хотелось бы – это не для меня.",
      "Скорее не хотелось бы – не вижу в этом смысла.",
      "Нейтрально – не определился с мнением.",
      "Скорее хотелось бы – интерес к языковым нормам есть.",
      "Очень хотелось бы – это может быть полезно."
    ]
  }
];
const lawQuestions = [
  {
    type: QuestionType.Select,
    text: "Склонны ли вы выявлять закономерности возникновения и функционирования государственно-правовых явлений?",
    options: [
      "Совсем не склонен – не интересуюсь этой темой.",
      "Скорее не склонен – у меня есть сомнения.",
      "Нейтрально – не определился с мнением.",
      "Скорее склонен – интерес к правоведению есть.",
      "Очень склонен – это может быть полезно."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Хотелось бы вам использовать знания о правоохранительных и судебных органах для защиты прав граждан?",
    options: [
      "Совсем не хотелось бы – не вижу в этом смысла.",
      "Скорее не хотелось бы – у меня другие интересы.",
      "Нейтрально – пока не решил.",
      "Скорее хотелось бы – интерес к правозащите растет.",
      "Очень хотелось бы – это может быть значимым."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Стремитесь ли вы применять административно-деликтное законодательство в профессиональной деятельности?",
    options: [
      "Совсем не стремлюсь – не интересует эта область.",
      "Скорее не стремлюсь – не вижу в этом необходимости.",
      "Нейтрально – нет четкого мнения.",
      "Скорее стремлюсь – интерес к административному праву существует.",
      "Очень стремлюсь – это может быть важным."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Склонны ли вы осуществлять поиск правовой информации в области трудового права?",
    options: [
      "Совсем не склонен – не вижу в этом смысла.",
      "Скорее не склонен – у меня нет желания заниматься этим.",
      "Нейтрально – пока не решил.",
      "Скорее склонен – интерес к трудовому праву растет.",
      "Очень склонен – это может быть полезно."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Стремитесь ли вы применять нормативные правовые акты и составлять юридические документы?",
    options: [
      "Совсем не стремлюсь – это не для меня.",
      "Скорее не стремлюсь – у меня другие приоритеты.",
      "Нейтрально – не определился с мнением.",
      "Скорее стремлюсь – интерес к юридической практике есть.",
      "Очень стремлюсь – это может быть значимым."
    ]
  }
];
const automationQuestions = [
  {
    type: QuestionType.Select,
    text: "Хотели бы вы создавать устройства, которые помогают управлять процессами на производстве без человеческого вмешательства?",
    options: [
      "Совсем не хотел бы — не интересуюсь автоматизацией.",
      "Скорее не хотел бы — у меня есть сомнения по этому поводу.",
      "Нейтрально — не определился с мнением.",
      "Скорее хотел бы — интерес к автоматизации есть.",
      "Очень хотел бы — это может быть значимым для будущего."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Интересно ли вам, как можно использовать программы для контроля и управления производственными процессами?",
    options: [
      "Совсем не интересно — не считаю это важным.",
      "Скорее не интересно — у меня нет желания заниматься этим.",
      "Нейтрально — не определился с мнением.",
      "Скорее интересно — интерес к программному обеспечению растет.",
      "Очень интересно — это может быть ключевым для эффективности."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Хотели бы вы разрабатывать решения, которые оптимизируют работу оборудования, делая его более быстрым и точным?",
    options: [
      "Совсем не хотел бы — это не для меня.",
      "Скорее не хотел бы — у меня другие интересы.",
      "Нейтрально — пока не решил.",
      "Скорее хотел бы — интерес к оптимизации процессов существует.",
      "Очень хотел бы — это может повысить производительность."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Хотели бы вы работать над созданием систем, которые собирают и анализируют данные для повышения качества продукции?",
    options: [
      "Совсем не хотел бы — не интересуюсь этой темой.",
      "Скорее не хотел бы — у меня есть сомнения.",
      "Нейтрально — не определился с мнением.",
      "Скорее хотел бы — интерес к анализу данных присутствует.",
      "Очень хотел бы — это может быть важным для улучшения качества."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Хотели бы вы разрабатывать технологии, которые позволяют следить за состоянием оборудования в реальном времени?",
    options: [
      "Совсем не хотел бы — не вижу в этом смысла.",
      "Скорее не хотел бы — у меня другие приоритеты.",
      "Нейтрально — пока не решил.",
      "Скорее хотел бы — интерес к мониторингу технологий растет.",
      "Очень хотел бы — это может быть полезным для предотвращения сбоев."
    ]
  }
];
const accountingQuestions = [
  {
    type: QuestionType.Select,
    text: "Нравится ли вам систематизировать информацию и документировать процессы?",
    options: [
      "Совсем не нравится – Я предпочитаю не заниматься этим.",
      "Скорее не нравится – Я редко систематизирую информацию.",
      "Нейтрально – Иногда мне это интересно.",
      "Скорее нравится – Мне нравится упорядочивать данные.",
      "Очень нравится – Я с удовольствием занимаюсь документацией."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Нравится ли вам решать задачи, требующие высокой точности и аккуратности?",
    options: [
      "Совсем не нравится – Я избегаю таких задач.",
      "Скорее не нравится – Я не люблю точные задания.",
      "Нейтрально – Иногда это меня не раздражает.",
      "Скорее нравится – Мне нравится решать такие задачи.",
      "Очень нравится – Я с удовольствием занимаюсь точной работой."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Следите ли вы за изменениями в законодательстве, регулирующем финансовую сферу?",
    options: [
      "Совсем не слежу – Я не интересуюсь финансовой сферой.",
      "Скорее не слежу – Я редко в этом разбираюсь.",
      "Нейтрально – Иногда мне это интересно.",
      "Скорее слежу – Я стараюсь быть в курсе изменений.",
      "Очень слежу – Я активно отслеживаю законодательные изменения в сфере экономики и финансов."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Легко ли вам ориентироваться в различных учетных системах и программах?",
    options: [
      "Совсем не легко – Я испытываю трудности с системами.",
      "Скорее не легко – Мне сложно разбираться в новых программах.",
      "Нейтрально – Иногда я осваиваю системы, но с трудом.",
      "Скорее легко – Я быстро учусь работать с программами.",
      "Очень легко – Я с легкостью осваиваю новые системы."
    ]
  },
  {
    type: QuestionType.Select,
    text: "Стремитесь ли вы минимизировать риски и обеспечить надежность учетных процессов?",
    options: [
      "Совсем не стремлюсь – Я не обращаю на это внимания.",
      "Скорее не стремлюсь – Меня это не беспокоит.",
      "Нейтрально – Иногда я стараюсь думать об этом.",
      "Скорее стремлюсь – Я прилагаю усилия для минимизации рисков.",
      "Очень стремлюсь – Я активно работаю над обеспечением надежности."
    ]
  }
];
const aiQuestions = [
  {
    type: QuestionType.Select,
    text: "Хотели бы вы разрабатывать программы для умных машин?",
    options: [
      "Совсем не хотел бы – Мне это не интересно.",
      "Скорее не хотел бы – Я не люблю программировать.",
      "Нейтрально – Иногда мне это кажется интересным.",
      "Скорее хотел бы – Мне нравится разбираться в технологиях.",
      "Очень хотел бы – Я с удовольствием занимаюсь этим!"
    ]
  },
  {
    type: QuestionType.Select,
    text: "Интересно ли вам работать с данными и их анализом?",
    options: [
      "Совсем не интересно – Я не люблю цифры и данные.",
      "Скорее не интересно – Я редко занимаюсь этим.",
      "Нейтрально – Иногда это захватывает.",
      "Скорее интересно – Мне интересно разбирать информацию.",
      "Очень интересно – Я с увлечением работаю с данными!"
    ]
  },
  {
    type: QuestionType.Select,
    text: "Хотели бы вы создавать программы для игр или приложений?",
    options: [
      "Совсем не хотел бы – Я не интересуюсь играми.",
      "Скорее не хотел бы – Я предпочитаю другие занятия.",
      "Нейтрально – Иногда мне это кажется интересным.",
      "Скорее хотел бы – Мне нравится разрабатывать идеи.",
      "Очень хотел бы – Я с удовольствием создаю игры!"
    ]
  },
  {
    type: QuestionType.Select,
    text: "Увлекаетесь ли вы новыми технологиями и гаджетами?",
    options: [
      "Совсем не увлекаюсь – Мне это не интересно.",
      "Скорее не увлекаюсь – Я редко интересуюсь новинками.",
      "Нейтрально – Иногда мне это любопытно.",
      "Скорее увлекаюсь – Мне нравится узнавать новое.",
      "Очень увлекаюсь – Я всегда в курсе последних технологий!"
    ]
  },
  {
    type: QuestionType.Select,
    text: "Интересно ли вам решать задачи о том, как обучить машину?",
    options: [
      "Совсем не интересно – Я не люблю решать такие задачи.",
      "Скорее не интересно – Я редко занимаюсь этим.",
      "Нейтрально – Иногда это меня привлекает.",
      "Скорее интересно – Мне нравится работать над задачами.",
      "Очень интересно – Я с удовольствием решаю такие задачи!"
    ]
  }
];
const constructionQuestions = [
  {
    type: QuestionType.Select,
    text: "Хотели бы вы участвовать в создании проектов для зданий?",
    options: [
      "Совсем не хотел бы – Мне это не интересно.",
      "Скорее не хотел бы – Я предпочитаю другие занятия.",
      "Нейтрально – Иногда мне это кажется интересным.",
      "Скорее хотел бы – Мне нравится проектировать что-то.",
      "Очень хотел бы – Я с удовольствием занимаюсь проектами!"
    ]
  },
  {
    type: QuestionType.Select,
    text: "Интересно ли вам смотреть на чертежи и планы зданий?",
    options: [
      "Совсем не интересно – Я не люблю чертежи.",
      "Скорее не интересно – Я редко обращаю внимание на это.",
      "Нейтрально – Иногда это меня привлекает.",
      "Скорее интересно – Мне нравится разбираться в планах.",
      "Очень интересно – Я с увлечением изучаю архитектуру!"
    ]
  },
  {
    type: QuestionType.Select,
    text: "Нравится ли вам следить за тем, как строят дома и здания?",
    options: [
      "Совсем не нравится – Мне это не интересно.",
      "Скорее не нравится – Я редко обращаю на это внимание.",
      "Нейтрально – Иногда мне это любопытно.",
      "Скорее нравится – Мне интересно наблюдать за строительством.",
      "Очень нравится – Я с удовольствием изучаю весь процесс!"
    ]
  },
  {
    type: QuestionType.Select,
    text: "Хотели бы вы работать в команде над строительными проектами?",
    options: [
      "Совсем не хотел бы – Я предпочитаю работать один.",
      "Скорее не хотел бы – Мне не нравится работать в команде.",
      "Нейтрально – Иногда мне это удобно.",
      "Скорее хотел бы – Я люблю работать с друзьями.",
      "Очень хотел бы – Я с удовольствием участвую в команде!"
    ]
  },
  {
    type: QuestionType.Select,
    text: "Интересно было бы вам использовать новые технологии в строительстве?",
    options: [
      "Совсем не интересно – Я не интересуюсь новыми технологиями.",
      "Скорее не интересно – Я редко о них слышу.",
      "Нейтрально – Иногда это меня привлекает.",
      "Скорее интересно – Мне нравится узнавать о новых методах.",
      "Очень интересно – Я с увлечением изучаю современные технологии!"
    ]
  }
];
const irrigationQuestions = [
  {
    type: QuestionType.Select,
    text: "Хотели бы вы участвовать в создании систем для орошения полей?",
    options: [
      "Совсем не хотел бы – Мне это не интересно.",
      "Скорее не хотел бы – Я предпочитаю другие занятия.",
      "Нейтрально – Иногда мне это кажется важным.",
      "Скорее хотел бы – Мне интересно работать с природой.",
      "Очень хотел бы – Я с удовольствием занимаюсь этим!"
    ]
  },
  {
    type: QuestionType.Select,
    text: "Интересно ли вам изучать, как управлять водными ресурсами?",
    options: [
      "Совсем не интересно – Я не люблю эту тему.",
      "Скорее не интересно – Я редко о ней слышу.",
      "Нейтрально – Иногда это меня привлекает.",
      "Скорее интересно – Мне нравится разбираться в водных вопросах.",
      "Очень интересно – Я с увлечением изучаю эту область!"
    ]
  },
  {
    type: QuestionType.Select,
    text: "Нравится ли вам работать на свежем воздухе, например, рядом с водоемами?",
    options: [
      "Совсем не нравится – Я предпочитаю быть в помещении.",
      "Скорее не нравится – Мне не нравится работа на улице.",
      "Нейтрально – Иногда это бывает интересно.",
      "Скорее нравится – Мне нравится работать на свежем воздухе.",
      "Очень нравится – Я с удовольствием провожу время на улице!"
    ]
  },
  {
    type: QuestionType.Select,
    text: "Хотели бы вы принимать участие в исследованиях о качестве воды?",
    options: [
      "Совсем не хотел бы – Мне это не интересно.",
      "Скорее не хотел бы – Я не люблю исследовательскую работу.",
      "Нейтрально – Иногда это кажется важным.",
      "Скорее хотел бы – Мне интересно участвовать в таких проектах.",
      "Очень хотел бы – Я с удовольствием занимаюсь исследованиями!"
    ]
  },
  {
    type: QuestionType.Select,
    text: "Интересно ли вам участвовать в проектах по устойчивому развитию сельского хозяйства?",
    options: [
      "Совсем не интересно – Я не интересуюсь сельским хозяйством.",
      "Скорее не интересно – Я редко участвую в таких проектах.",
      "Нейтрально – Иногда это меня интересует.",
      "Скорее интересно – Мне нравится заниматься устойчивым развитием.",
      "Очень интересно – Я с удовольствием бы участвовал в таких проектах!"
    ]
  }
];

export const proforientationQuestions = [
  ...psychologyQuestions,
  ...historyQuestions,
  ...mathEducationQuestions,
  ...socialPedagogyQuestions,
  ...biologicalEducationQuestions,
  ...physicalCultureQuestions,
  ...russianPhilologyQuestions,
  ...modernLanguagesQuestions,
  ...lawQuestions,
  ...automationQuestions,
  ...accountingQuestions,
  ...aiQuestions,
  ...constructionQuestions,
  ...irrigationQuestions
]