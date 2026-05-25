// src/data/config.ts  — Barcha ma'lumotlarni shu yerdan o'zgartiring

export const PROFILE = {
  name:     "Nargis Collection",
  title:    "Fashion Designer",
  subtitle: "Zamonaviy va Elegantli Moda",
  bio:      "O'zbek milliy uslubi va zamonaviy Evropa modasi uyg'unlashgan eksklyuziv kolleksiyalar",
  location: "Xorazm, O'zbekiston",
  phone:    "+998907377313",
  logoSrc:  "/src/assets/logo.jpg",
};

export const SOCIAL_LINKS = [
  {
    id:        "instagram",
    label:     "Instagram",
    username:  "@nargis__collection",
    url:       "https://www.instagram.com/nargis__collection",
    icon:      "instagram",
    followers: "12.5K",
    color:     "#E1306C",
  },
  {
    id:        "telegram",
    label:     "Telegram",
    username:  "Nargiza_modelyer_dizayner",
    url:       "https://t.me/Nargiza_modelyer_dizayner",
    icon:      "telegram",
    followers: "8.2K",
    color:     "#2AABEE",
  },
  {
    id:        "youtube",
    label:     "YouTube",
    username:  "@Nargis showroom boutiqu",
    url:       "https://www.youtube.com/@Nargisshowroomboutiqu-m2n",
    icon:      "youtube",
    followers: "5.1K",
    color:     "#FF0000",
  },
];

export const QUICK_LINKS = [
  {
    id:          "catalog",
    label:       "Katalog",
    description: "Barcha kolleksiyalarni ko'rish",
    icon:        "👗",
    href:        "#catalog",
    isPrimary:   true,
  },
  {
    id:          "order",
    label:       "Buyurtma berish",
    description: "Individual tikish xizmati",
    icon:        "✂️",
    href:        "https://t.me/nargiza_dizayner",
    isPrimary:   false,
  },

];

export const CATEGORIES = [
  { id: "all",      label: "Hammasi"       },
  { id: "evening",  label: "Kechki libos"  },
  { id: "casual",   label: "Kundalik"      },
  { id: "wedding",  label: "To'y kiyimi"   },
  { id: "national", label: "Milliy uslub"  },
  { id: "business", label: "Business"      },
];

export const CATALOG_ITEMS = [
  {
    id: 1, name: "Zulfiya Ko'ylagi",   category: "evening",
    price: 850_000,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop",
    isNew: true,  isSold: false,
  },
  {
    id: 2, name: "Nilufar Seti",       category: "national",
    price: 1_200_000,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop",
    isNew: false, isSold: false,
  },
  {
    id: 3, name: "Bahor Juragi",       category: "casual",
    price: 650_000,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=800&fit=crop",
    isNew: true,  isSold: false,
  },
  {
    id: 4, name: "Dilorom To'yxona",   category: "wedding",
    price: 2_500_000,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=800&fit=crop",
    isNew: false, isSold: false,
  },
  {
    id: 5, name: "Malika Kostumi",     category: "business",
    price: 980_000,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop",
    isNew: false, isSold: true,
  },
  {
    id: 6, name: "Yulduz Ko'ylagi",    category: "evening",
    price: 1_100_000,
    image: "https://images.unsplash.com/photo-1566479178369-25e9b72ad7d0?w=600&h=800&fit=crop",
    isNew: true,  isSold: false,
  },
  {
    id: 7, name: "Gulbahor Seti",      category: "national",
    price: 1_350_000,
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?w=600&h=800&fit=crop",
    isNew: false, isSold: false,
  },
  {
    id: 8, name: "Kamola Libosi",      category: "casual",
    price: 720_000,
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&h=800&fit=crop",
    isNew: false, isSold: false,
  },
  {
    id: 9, name: "Shahlo Oqshom",      category: "evening",
    price: 1_400_000,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&h=800&fit=crop",
    isNew: true,  isSold: false,
  },
];

export const formatPrice = (price: number): string =>
  new Intl.NumberFormat("uz-UZ").format(price) + " so'm";
