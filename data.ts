import { Service, SiteContent, Testimonial, RetreatContent } from './types';

export const WHATSAPP_URL = "https://wa.me/972546691999?text=%D7%94%D7%99%D7%99%20%D7%98%D7%9C,%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%A0%D7%AA%20%D7%91%D7%A4%D7%A8%D7%98%D7%99%D7%99%D7%9D%20%D7%A2%D7%9C%20%D7%94%D7%A8%D7%99%D7%98%D7%A8%D7%99%D7%98%D7%99%D7%9D";
export const SPOTIFY_URL = "https://open.spotify.com/show/4b1ib8HH9n33GhLT6gvcnK?si=9xb9bKy-RoWcSy22ENVYjg";
export const YOUTUBE_URL = "https://youtube.com/channel/UCPUSUiAcYqzUC-VZPlFFSJQ?si=gRWsyy-qhazgWpWs";

export const IMAGES = {
  logoDark: "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/LogoNoTitle_no-bg_dark.png",
  logoLight: "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/LogoWithTitle(bg-color=%23f0f0f0).png",
  hero: "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/onleOwner1.jpg",
  about: "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/onlyOwner0.jpg",
  contact: "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/onlyOwner2.jpg",
  numerolisty: "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/numerolisti.jpg",
  reflexology: "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/reflexology.jpg",
  rebirthing: "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/reversing.jpg",
  bach: "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/Bah.jpg",
  reiki: "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/session4.jpg",
  nia: "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/nia.jpg",
  session0: "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/session0.jpg",
  session1: "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/session1.jpg",
  session2: "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/session2.jpg",
  session5_all: "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/session5_all.jpg",
  session6: "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/session6.jpg",
  session7: "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/session7.jpg",
  session8_all: "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/session8_all.jpg",
  session10_all: "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/session10_all.jpg",
  session11: "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/session11.jpg",
  session12_all: "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/session12_all.jpg",
  atmosphere: [
    "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/g1.jpeg",
    "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/g2.jpeg",
    "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/g3.jpeg",
    "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/g4.jpeg",
    "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/g5.jpeg",
    "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/g6.jpeg",
    "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/g7.jpeg",
    "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/g8.jpeg",
    "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/g9.jpeg",
    "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/g10.jpeg",
    "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/g11.jpeg",
    "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/g12.jpeg",
    "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/g13.jpeg"
  ],
  get gallery() {
    return [
      this.session0, this.session1, this.session2, this.session5_all,
      this.session6, this.session7, this.session8_all, this.session10_all,
      this.session11, this.session12_all
    ];
  }
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    title: "נקודת הפלא",
    subtitle: "גוף • נשימה • תודעה",
    quote: "כֹּל הַנְּשָׁימָה תְּהַלֵּל יָהּ, הַלְלוּיָהּ"
  },
  about: {
    title: "אודות המסע שלי",
    paragraphs: [
      "נעים להכיר, אני טל, זכיתי להיות אמא לאור ומילה. בעשור האחרון אני מלווה אנשים לחיות חיים מאוזנים, מסופקים ובריאים, ונותנת כלים שיעזרו להם להתמודד עם אתגרים וקשיים, פיזיים ורגשיים.",
      "אני עושה זאת דרך כלים שונים, מריברסינג ועד רפלקסולוגיה, מפרחי באך דרך רייקי ועד ניה. את כל אלו אני משלבת עם תורת המספרים – הנומרולוגיה וחקר והאותיות, ודרכם יצרתי שיטה –'נומרוליסטי'.",
      "מאז ומתמיד אהבתי ללמוד ולחקור את העולם בו אנו חיים, להקשיב, להסתכל על החיים ועל הסיפור שכל אחד מאיתנו מספר דרך זוויות שונות. המכנה המשותף הברור של כל מה שאני עושה הוא אחד: לתת למטופלים שלי כלים ממוקדים להתגבר על קשיים, משברים ואתגרים פיזיים ורגשיים בחייהם."
    ],
    specialties: [
      "טיפול בסרטן ותמיכה בהחלמה",
      "ייעוץ והכוונה לפריצת דרך בחיים",
      "זוגיות נשים ופוריות",
      "טיפול בילדים ונוער",
      "הכשרת מטפלים בגישת נומרוליסטי"
    ]
  },
  contact: {
    title: "בואו נדבר",
    subtitle: "אשמח לשמוע מכם, לענות על שאלות, ולעזור לכם למצוא את הדרך המתאימה לכם להתחיל בתהליך.",
    phone: "054-669-1999",
    email: "talsharabi25@gmail.com"
  }
};

export const LANDING_CONTENT = {
  whoIsItFor: {
    title: "האם זה מדבר אליך?",
    subtitle: "הטיפול בקליניקה מתאים במיוחד אם את/ה חווה אחד או יותר מהמצבים הבאים:",
    points: [
      { title: "עומס רגשי ומתח", description: "תחושת כובד, חרדה, מחשבות טורדניות או לחץ מתמשך שמלווה את היומיום ומקשה על התפקוד והשמחה." },
      { title: "כאבים פיזיים לא מוסברים", description: "כאבי גב, מיגרנות, בעיות עיכול או עייפות כרונית שאין להן הסבר רפואי ברור, אך משבשות את שגרת החיים." },
      { title: "תחושת תקיעות בחיים", description: "צומת דרכים בקריירה, בזוגיות או בהורות, המלווה בבלבול, חוסר ביטחון או תחושה שהפוטנציאל לא ממומש." },
      { title: "חיפוש אחר משמעות ושקט", description: "כמיהה עמוקה לחיבור פנימי, להבנת הייעוד האישי, ולמציאת עוגן של יציבות ושלווה בתוך מרוץ החיים." }
    ]
  },
  process: {
    title: "איך מתרחש השינוי?",
    subtitle: "שיטת 'נומרוליסטי' מאפשרת לנו להגיע לשורש הדברים ולטפל בהם מהיסוד בשלושה שלבים:",
    steps: [
      { number: "01", title: "אבחון ומיפוי עומק", description: "במפגש הראשון נצלול אל מפת הלידה שלך (נומרולוגיה). נזהה את החוזקות, החולשות, והשיעורים שהנשמה בחרה לעבור, כדי להבין את שורש האתגר הנוכחי." },
      { number: "02", title: "שחרור חסימות דרך הגוף", description: "לאחר ההבנה השכלית, נעבור לעבודת גוף. נשתמש בריברסינג (נשימה), רפלקסולוגיה או רייקי כדי לשחרר את הרגשות הכלואים בתאים ולאפשר לאנרגיה לזרום מחדש." },
      { number: "03", title: "איזון וצמיחה מחודשת", description: "בשלב זה נטמיע את השינוי. בעזרת תמציות פרחי באך וכלים מעשיים ליומיום, נבסס את האיזון החדש ונצא לדרך של הגשמה, בריאות ושקט נפשי." }
    ]
  }
};

const commonMethods = [
  {
    id: "rebirthing",
    title: "ריברסינג – להיוולד מחדש",
    description: "תהליך נשימה מודעת, עדינה ובטוחה, לשחרור מטענים רגשיים ותבניות ישנות שנצברו לאורך החיים. הנשימה המעגלית מגיעה לשורש הרגשי של הכאב ומוססת חסימות."
  },
  {
    id: "crystal-eye",
    title: "👁️ עין הבדולח – ניקוי הנפש",
    description: "שיטה מעולם הקבלה לניקוי רעלים רגשיים ומנטליים: כעסים, פחדים וסטרס. זיהוי שורשי הכאב והבנת הדפוסים שנוצרו בילדות כדי לאפשר סליחה והתחדשות."
  },
  {
    id: "numerolisty",
    title: "🔢 סדנת נומרוליסטי – מפת הנשמה",
    description: "שיטה בלעדית המחברת בין מפת תאריך הלידה לבין כלים הוליסטיים. נלמד מה אומר תאריך הלידה על הכוחות והאתגרים שלך ומה מגלה עלינו השם הפרטי."
  },
  {
    id: "chakra",
    title: "🔥 צ'אקרה ברידינג – התחדשות",
    description: "תהליך נשימה אנרגטי אל שבעת מרכזי האנרגיה בגוף. כל צ’אקרה מקבלת את האנרגיה והאהבה שהיא זקוקה להן, לטובת איזון, חיות והתחדשות."
  }
];

const commonSchedule = [
  { time: "10:00", activity: "התכנסות וארוחת בוקר קלה" },
  { time: "10:30", activity: "מעגל פתיחה (מתחילים בזמן)" },
  { time: "11:15", activity: "סדנת עין הבדולח - ניקוי רעלים רגשיים" },
  { time: "12:00", activity: "סדנת ריברסינג עוצמתית" },
  { time: "14:00", activity: "ארוחת צהריים מפנקת" },
  { time: "15:00", activity: "סדנת נומרולוגיה לפי שיטת הנומרוליסטי" },
  { time: "16:30", activity: "תהליך מרפא של צ'אקרה ברידינג" },
  { time: "18:00", activity: "מעגל מסכם" },
  { time: "19:00", activity: "נשיקות, חיבוקים וסיום" }
];

const commonObjections = [
  {
    belief: "אין לי זמן",
    reality: "שחיקה מבזבזת יותר זמן ממנוחה.",
    conclusion: "כשאת מותשת – כל דבר לוקח כפול זמן. יום אחד של עצירה מחזיר לך שליטה, חדות ושקט, וחוסך שבועות של פיזור."
  },
  {
    belief: "אני דואגת לאחרים יותר מעצמי",
    reality: "כשאת ריקה — גם הנתינה שלך כבר לא אותו דבר.",
    conclusion: "אנשים לא צריכים אותך עייפה ומרצה. הם צריכים אותך חיה. יום שמוקדש לך מאפשר לך לתת בלי להיעלם."
  },
  {
    belief: "זו השקעה גדולה מדי בשבילי",
    reality: "זה לא פינוק, זו השקעה תפעולית שמחזירה זמן ואנרגיה.",
    conclusion: "את לא מוציאה כסף כדי לצאת מהשגרה, את נכנסת כדי לחזור אליה חדה יותר."
  }
];

export const RETREATS: RetreatContent[] = [
  {
    id: "bereshit",
    slug: "bereshit-nashit",
    title: "בראשית נשית",
    subtitle: "ריטריט יום לנשים - 9 שעות של יצירה מחדש",
    tagline: "חזרה לשורש. ולידה של תודעה נשית, מחוברת ובהירה יותר.",
    heroImage: "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/session11.jpg",
    intro: [
      "בראשית נשית הוא תהליך עומק המדמה היריון ולידה.",
      "כמו היריון, אנחנו נכנסות פנימה — מאטות, מקשיבות, מתרחבות. וכמו לידה, אנחנו יוצרות מרחב לאישה חדשה שבתוכנו להיוולד.",
      "זה ריטריט של ריפוי שורשי: ניקוי זיכרונות, שחרור דפוסים ישנים, והיכרות מחודשת עם עצמנו דרך הגוף, הנשימה ותאריך הלידה."
    ],
    audience: {
      title: "למי זה מתאים?",
      points: [
        "לנשים שרוצות לעבור תהליך עמוק של טרנספורמציה.",
        "למי שמרגישה צורך לנקות זיכרונות מהעבר ולצאת לדרך חדשה.",
        "למי שרוצה להכיר את העומקים של התודעה הנשית שלה.",
        "לכל אישה שמרגישה שהגיע הזמן ל'לידה מחדש'."
      ]
    },
    methods: commonMethods,
    schedule: commonSchedule,
    objections: commonObjections,
    details: {
      location: "חוות טבע האדם, ניר צבי",
      price: "888 שקלים",
      duration: "9 שעות (היריון ולידה)"
    }
  },
  {
    id: "restart",
    slug: "restart",
    title: "ריסטארט - RESTART",
    subtitle: "יום של ניקוי, ריפוי והטענה - אני אוהבת את עצמי",
    tagline: "עצירה קטנה שמייצרת שינוי גדול — ומחזירה אותך לשגרה עם לב פתוח.",
    heroImage: "https://raw.githubusercontent.com/bunker-255/Project557/refs/heads/main/images/session5_all.jpg",
    intro: [
      "לפעמים כל מה שאישה צריכה זה רגע אחד לעצמה — לעצור, לנשום, לשחרר.",
      "ביום אחד הכי קרוב לטבע, רחוק מהרעש, את מנקה את העומס שחדר פנימה בלי ששמת לב.",
      "מתמלאת באנרגיה חדשה, חוזרת לגוף שלך, ומזכירה לעצמך כמה טוב זה מרגיש להיות קלילה."
    ],
    audience: {
      title: "למי זה מתאים?",
      points: [
        "לנשים שמרגישות בעין הסערה וצריכות יום להיטהר.",
        "למי שמרגישה תקיעות, שחיקה וצורך ביום של החזרת השמחה.",
        "למי שמעולם לא עשתה ריברסינג ורוצה להתנסות בסביבה מכילה.",
        "למי שרוצה להטעין את עצמה באנרגיה, שקט ובהירות."
      ]
    },
    methods: commonMethods,
    schedule: commonSchedule,
    objections: commonObjections,
    details: {
      location: "חוות טבע האדם, ניר צבי",
      price: "888 שקלים",
      duration: "יום מלא (10:00-19:00)"
    }
  }
];

export const SERVICES: Service[] = [
  {
    id: 'numerolisty',
    slug: 'numerolisty',
    title: 'נומרוליסטי',
    shortDescription: 'שיטה ייחודית המשלבת אבחון נומרולוגי עם טיפול הוליסטי מותאם אישית.',
    imageUrl: IMAGES.numerolisty,
    fullDescription: [
      "מדובר בשיטה ייחודית ובלעדית אשר פיתחתי במהלך עשור בהם חקרתי, בדקתי ולמדתי, את החיבור בין מפת תאריך הלידה (נומרולוגיה) לשיטות הטיפול בהן אני עוסקת.",
      "תאריך הלידה שלנו מספק את הבסיס לסיפור חיינו. דרך המספרים, אני מבינה איפה קיימות חולשות ונטיות לחולי, איך הגוף מתפקד, אילו מערכות בו זקוקות לחיזוק, איפה נמצא שורש הכאב.",
      "לצד המספרים, אני משלבת שאלת שאלות מכוונות, מתוך הקשבה למטופל, אני מבינה לעומק את הילדות שלו וקושרת את הסיפור שלו אל הדפוסים, האמונות וההתנהלות.",
      "אחרי האבחון באמצעות הנומרוליסטי אני ממשיכה ומשלבת בין כלים כמו ריברסינג (נשימה מודעת), רפלקסולוגיה, פרחי באך ורייקי."
    ]
  },
  {
    id: 'reflexology',
    slug: 'reflexology',
    title: 'רפלקסולוגיה',
    shortDescription: 'טיפול במגע בכפות הרגליים לשחרור חסימות וריפוי הגוף והנפש.',
    imageUrl: IMAGES.reflexology,
    fullDescription: [
      "השיטה נוגעת בעצם בחסימות האנרגיה, הקריסטלים, אותן ניתן לזהות דרך כף הרגל. במהלך הטיפול דרך המגע, אנו מניעים אזורים מסוימים, ובכך מטפלים באנרגיה החסומה ועוזרים לריפוי הגוף ולשחרור מכאבים.",
      "באמצעות השיטה הייחודית שלי, הנומרוליסטי אני מדייקת את הטיפול באמצעות שימוש בתאריך הלידה של המטופל המסייע בזיהוי שורש הבעיה ובכך הטיפול מותאם באופן ייחודי ואישי למטופל.",
      "הטיפול מתבצע על ידי מגע בכפות הרגליים והשוקיים. לעיתים בשילוב הנחייה לנשימה מעגלית, המחזקת את יעלות הטיפול, בכך שתורמת להזרמת הדם בגוף."
    ]
  },
  {
    id: 'rebirthing',
    slug: 'rebirthing',
    title: 'ריברסינג',
    shortDescription: 'נשימה מעגלית מודעת לשחרור רגשי, הפחתת מתחים וחיבור פנימי.',
    imageUrl: IMAGES.rebirthing,
    fullDescription: [
      "הריברסינג מתבצע על ידי נשימות מעגליות רציפות ובכך אנו עוקפים את המודע ומתאפשר חיבור אל תת המודע, אל אותם רגשות שורשיים מודחקים.",
      "לאחר שחרור רגשי עמוק מתרחשת רגיעה בגוף המאפשרת את צמיחתם של רגשות חיוביים של רכות ואהבה. מדובר בתהליך יעיל ורב עוצמה המביא לשחרור דפוסי חשיבה שליליים ופחדים ויוצר חיבור בין הלב, הגוף והתודעה.",
      "הטיפול בריברסינג יכול לעזור בעיבוד קשיים רגשיים בלתי פתורים, מצבי חרדה, דיכאון, אנרגיה נמוכה, התמודדות עם מצבי לחץ, בעיות שינה, חסימה רגשית, טראומה פיזית ורגשית."
    ]
  },
  {
    id: 'bach',
    slug: 'bach-flowers',
    title: 'פרחי באך',
    shortDescription: 'תמציות טבעיות לאיזון רגשי, טיפול בפחדים, חרדות ועייפות.',
    imageUrl: IMAGES.bach,
    fullDescription: [
      "ד\"ר באך האמין שמחלות פיזיות רבות נובעות ממצבים רגשיים לא מאוזנים. הוא גילה שתמציות פרחים מסוימות יכולות לסייע באיזון רגשי ולתמוך בתהליכי ריפוי טבעיים של הגוף.",
      "אני מתאימה עבור כל מטופל או מטופלת את התמציות המתאימות לסיפור שלו ואני נמצאת שם כדי ללוות את המטופל כשהוא לומד להקשיב לגוף ולבחון איך התמציות מסייעות לו להרגיש טוב יותר.",
      "התמציות בטוחות לחלוטין, ללא תופעות לוואי, ומתאימות לכל גיל - מתינוקות ועד מבוגרים."
    ]
  },
  {
    id: 'reiki',
    slug: 'reiki',
    title: 'רייקי',
    shortDescription: 'שיטת ריפוי אנרגטית עתיקה להפחתת מתח, איזון רגשי וחיזוק המערכת החיסונית.',
    imageUrl: IMAGES.reiki,
    fullDescription: [
      "רייקי היא שיטת ריפוי אנרגטית עתיקה שמקורה ביפן. הטיפול ברייקי מבוסס על העברת אנרגיה דרך כפות הידיים של המטפל אל גופו של המטופל.",
      "במהלך הטיפול, המטופל שוכב בנוחות, לבוש לחלוטין. אני מניחה את ידיי על או מעל חלקים שונים בגופו, והאנרגיה זורמת אל המקומות שבהם יש צורך.",
      "הטיפול מאוד מרגיע ונעים. רבים מתארים תחושות של חום, צמרמורת קלה או תחושת זרימה בגוף. הוא מסייע בהפחתת מתח ולחץ, שיפור איכות השינה ואיזון רגשי."
    ]
  },
  {
    id: 'nia',
    slug: 'nia',
    title: 'ניה - תנועה',
    shortDescription: 'הנאה מהריקוד מובילה לריפוי. שילוב של אמנויות לחימה, ריקוד וריפוי.',
    imageUrl: IMAGES.nia,
    fullDescription: [
      "NIA, ראשי תיבות של Now I Am, היא שיטה מדהימה לתנועה ולריקוד, שמחברת בין רעיונות שונים מעולמות היוגה, הפלדנקרייז, שיטת אלכסנדר, אמנויות הלחימה ובין מחול.",
      "העיקרון הוא פשוט: ההנאה מהריקוד מובילה לריפוי. בשיעור ניה, אנחנו רוקדים יחפים על מוזיקה שמחברת סגנונות מוזיקליים שונים מכל העולם.",
      "כל אחד רוקד בקצב שלו, מקשיב לגוף שלו ונהנה מהתנועה. זה לא תחרות, זה לא \"להצליח\" - זה להיות, לזרום, ולהרגיש טוב."
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    text: "פניתי לטלי בעקבות בעיות במערכת העיכול לטיפול רפלקסולוגיה. ממליצה בחום מטפלת מקצועית, מדהימה. הרגשתי שיפור רב כבר מהטיפול הראשון. ממליצה בחום לכל בעייה רפואית או רגשית.",
    author: "שרון, 47"
  },
  {
    id: '2',
    text: "יש לי כל כך הרבה לכתוב ולא ברור לי מאיפה להתחיל מה שכן ברור לי שאני מאושר שזה כבר התחיל... בציפיה עצומה לטיפול מחר האינטראקציה איתך מדהימה ומרוממת. תודה שוב שאת שם ופה מעניקה ועוטפת מכילה ואוהבת.",
    author: "סיגל"
  }
];