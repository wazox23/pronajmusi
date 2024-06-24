import { ReadonlyURLSearchParams } from "next/navigation"

export enum Categories {
  ALL = "ALL",
  HOME = "HOME",
  AUTO = "AUTO",
  TOOLS = "TOOLS",
  LAND = "LAND",
  ELECTRO = "ELECTRO",
  SPORT = "SPORT",
  HOME_APPL = "HOME_APPL",
  MUSIC = "MUSIC",
  OTHER = "OTHER",
}

export enum CategoryNames {
  ALL = "Všechny kategorie",
  HOME = "Bydlení",
  AUTO = "Auta",
  TOOLS = "Nářadí",
  LAND = "Pozemky",
  ELECTRO = "Elektronika",
  SPORT = "Sport",
  HOME_APPL = "Domácnost",
  MUSIC = "Hudba",
  OTHER = "Ostatní",
  ALL_SHORT = "Vše"
}

export const MainCategories = [
  {
    name: CategoryNames.ALL_SHORT,
    key: Categories.ALL
  },
  {
    name: CategoryNames.HOME,
    key: Categories.HOME
  },
  {
    name: CategoryNames.AUTO,
    key: Categories.AUTO
  },
  {
    name: CategoryNames.TOOLS,
    key: Categories.TOOLS
  },
  {
    name: CategoryNames.LAND,
    key: Categories.LAND
  },
  {
    name: CategoryNames.ELECTRO,
    key: Categories.ELECTRO
  },
  {
    name: CategoryNames.SPORT,
    key: Categories.SPORT
  },
  {
    name: CategoryNames.HOME_APPL,
    key: Categories.HOME_APPL
  },
  {
    name: CategoryNames.MUSIC,
    key: Categories.MUSIC
  },
  {
    name: CategoryNames.OTHER,
    key: Categories.OTHER
  },
]

export const MainCategoriesSelect = [
  {
    name: CategoryNames.ALL,
    key: Categories.ALL
  },
  {
    name: CategoryNames.HOME,
    key: Categories.HOME
  },
  {
    name: CategoryNames.AUTO,
    key: Categories.AUTO
  },
  {
    name: CategoryNames.TOOLS,
    key: Categories.TOOLS
  },
  {
    name: CategoryNames.LAND,
    key: Categories.LAND
  },
  {
    name: CategoryNames.ELECTRO,
    key: Categories.ELECTRO
  },
  {
    name: CategoryNames.SPORT,
    key: Categories.SPORT
  },
  {
    name: CategoryNames.HOME_APPL,
    key: Categories.HOME_APPL
  },
  {
    name: CategoryNames.MUSIC,
    key: Categories.MUSIC
  },
  {
    name: CategoryNames.OTHER,
    key: Categories.OTHER
  },
]

export enum LocationKeys {
  ALL = "ALL",
  JC = "JC",
  JM = "JM",
  KV = "KV",
  KVH = "KVH",
  LIB = "LIB",
  MSLZ = "MSLZ",
  OL = "OL",
  PAR = "PAR",
  PLZ = "PLZ",
  PRH = "PRH",
  SC = "SC",
  UST = "UST",
  VYS = "VYS",
  ZL = "ZL",
}

export enum LocationNames {
  ALL = "Celá ČR",
  JC = "Jihočeský",
  JM = "Jihomoravský",
  KV = "Karlovarský",
  KVH = "Královéhradecký",
  LIB = "Liberecký",
  MSLZ = "Moravskoslezský",
  OL = "Olomoucký",
  PAR = "Pardubický",
  PLZ = "Plzeňský",
  PRH = "Praha",
  SC = "Středočeský",
  UST = "Ústecký",
  VYS = "Vysočina",
  ZL = "Zlínský",
}

export const Locations = [
  { name: LocationNames.ALL, value: LocationKeys.ALL },
  { name: LocationNames.JC, value: LocationKeys.JC },
  { name: LocationNames.JM, value: LocationKeys.JM },
  { name: LocationNames.KV, value: LocationKeys.KV },
  { name: LocationNames.KVH, value: LocationKeys.KVH },
  { name: LocationNames.LIB, value: LocationKeys.LIB },
  { name: LocationNames.MSLZ, value: LocationKeys.MSLZ },
  { name: LocationNames.OL, value: LocationKeys.OL },
  { name: LocationNames.PAR, value: LocationKeys.PAR },
  { name: LocationNames.PLZ, value: LocationKeys.PLZ },
  { name: LocationNames.PRH, value: LocationKeys.PRH },
  { name: LocationNames.SC, value: LocationKeys.SC },
  { name: LocationNames.UST, value: LocationKeys.UST },
  { name: LocationNames.VYS, value: LocationKeys.VYS },
  { name: LocationNames.ZL, value: LocationKeys.ZL },
]

export enum AddIconKeys {
  LIALIGHTBULB = "LIALIGHTBULB",
  AIOUTLINESHOP = "AIOUTLINESHOP",
  BSTAG = "BSTAG",
}

export enum TimePeriods {
  HOURLY = "HOURLY",
  DAILY = "DAILY",
  MONTHLY = "MONTHLY",
}

export enum TimePeriodNames {
  HOURLY = "Za hodinu",
  DAILY = "Za den",
  MONTHLY = "Za měsíc",
}

export const TimePeriodArray = [
  { name: TimePeriodNames.HOURLY, value: TimePeriods.HOURLY },
  { name: TimePeriodNames.DAILY, value: TimePeriods.DAILY },
  { name: TimePeriodNames.MONTHLY, value: TimePeriods.MONTHLY },
]

export enum AdTypes {
  ALL = "ALL",
  OFFER = "OFFER",
  DEMAND = "DEMAND",
  SHOP = "SHOP"
}

export enum AdTypeNames {
  ALL = "Všecny inzeráty",
  OFFER = "Nabídka",
  DEMAND = "Poptávka",
  SHOP = "Stálá nabídka"
}

export const AdTypesArray = [
  { name: AdTypeNames.ALL, value: AdTypes.ALL },
  { name: AdTypeNames.OFFER, value: AdTypes.OFFER },
  { name: AdTypeNames.DEMAND, value: AdTypes.DEMAND },
  { name: AdTypeNames.SHOP, value: AdTypes.SHOP },
]

export interface Ad {
  id: string,
  title: string,
  location: LocationKeys,
  category: Categories,
  email: string,
  phone: string,
  description: string,
  specialInstructions: string | null,
  dateFrom: number | null,
  dateTo: number | null,
  price: number | null,
  period: TimePeriods | null,
  type: AdTypes,
  userID: string,
  created: number,
  img: string | any,
  backgroundOption: BackgroundOptions | null,
}

export enum BackgroundOptions {
  COVER = "cover",
  CONTAIN = "contain",
}

export const getCategory = (cat: Categories) => {
  let foundItem = CategoryNames[cat];
  if (foundItem) {
    return foundItem;
  }

  return cat;
}

export const getLocation = (loc: LocationKeys) => {
  let foundItem = LocationNames[loc];
  if (foundItem) {
    return foundItem;
  }

  return loc;
}

export const getType = (type: AdTypes) => {
  let foundItem = AdTypeNames[type];
  if (foundItem) {
    return foundItem;
  }

  return type;
}

export interface FilterParams {
  title?: string,
  description?: string,
  location?: LocationKeys | string,
  category?: Categories | string,
}

export const getPrice = (price: number, period: TimePeriods) => {
  return `${price} Kč / ${TimePeriodNames[period]}`
}

export interface ArrayData {
  name: string,
  key: string | number
}

export const getFilterParams = (textString: string, location: LocationKeys | string, type: AdTypes | string, category: Categories | string) => {
  let params: any = {
    ORFilter: [],
    ANDFilter: []
  };

  if (textString && textString !== "") {
    params.ORFilter.push({
      title: {
        contains: textString
      }
    });

    params.ORFilter.push({
      description: {
        contains: textString
      }
    })
  }

  if (location && (location !== "" && location !== LocationKeys.ALL)) {
    params.ANDFilter.push({
      location: location
    })
  }

  if (type && type !== "" && type !== AdTypes.ALL) {
    params.ANDFilter.push({
      type: type
    })
  }

  if (category && category !== "" && category !== Categories.ALL) {
    params.ANDFilter.push({
      category: category
    })
  }
  return params;
}

export interface AdApiResult {
  ads: Ad[],
  count: number
}

export enum DisplayTypes {
  GRID = "GRID",
  LIST = "LIST"
}

export enum PageNames {
  HOME = "Domů",
  SEARCH = "Hledání",
  ADD = "Přidat inzerát",
  ABOUT = "O nás",
  CONTACT = "Kontakt",
  HOWITWORKS = "Jak to funguje ?"
}

export enum PageRoutes {
  HOME = "/",
  SEARCH = "/inzeraty",
  ADD = "/inzeraty/pridat",
  ABOUT = "/info/o-nas",
  CONTACT = "/kontakt",
  HOWITWORKS = "/info/jak-to-funguje"
}

export const PageLinks = [
  { name: PageNames.HOME, value: PageRoutes.HOME },
  { name: PageNames.SEARCH, value: PageRoutes.SEARCH },
  { name: PageNames.ADD, value: PageRoutes.ADD },
  { name: PageNames.ABOUT, value: PageRoutes.ABOUT },
  { name: PageNames.CONTACT, value: PageRoutes.CONTACT },
  { name: PageNames.HOWITWORKS, value: PageRoutes.HOWITWORKS },
]

export const getUsedParams = (searchParams: ReadonlyURLSearchParams) => {
    const queryString = searchParams.get("dotaz");
    const queryLocation = searchParams.get("kraj");
    const queryCategory = searchParams.get("kategorie");
    const queryType = searchParams.get("typ");
    const queryPage = searchParams.get("strana"); 

    let params = {
      dotaz: queryString || "",
      kraj: queryLocation || "",
      kategorie: queryCategory || "",
      typ: queryType || "",
      strana: queryPage || ""
    }

    return params
}

export enum RouteKeys {
  HOME = "HOME",
  HOWITWORKS = "HOWITWORKS",
  ADDAD = "ADDAD",
  DEMAND = "DEMAND",
  OFFER = "OFFER",
  SHOP = "SHOP",
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  ABOUT = "ABOUT"
}

export const PageMeta = {
  [RouteKeys.HOME]: {
    title: "Pronájem Snadno: Poptávky, Nabídky a Stálé Možnosti - PronajmuSi.cz",
    description: `Pro snadné a spolehlivé pronájmy využijte naší platformu. Přidejte poptávku nebo nabídku a spojte se s kvalitními poskytovateli. Pro dlouhodobé možnosti pronájmu navštivte kategorii Stálé nabídky. Na PronajmuSi.cz propojujeme poptávky a nabídky, usnadňujeme vám hledání a nabízení potřebných služeb a věcí.`
  },
  [RouteKeys.HOWITWORKS]: {
    title: "Jak To Funguje: Snadný Pronájem na PronajmuSi.cz",
    description: `Přečtěte si, jak snadno a rychle můžete pronajmout nebo nabídnout služby a věci na PronajmuSi.cz. Přidávejte poptávky a nabídky, spojujeme vás s spolehlivými poskytovateli. Pro dlouhodobé možnosti navštivte kategorii Stálé nabídky. Jednoduché propojení poptávek a nabídek pro usnadnění vašeho pronájmu.`
  },
  [RouteKeys.ADDAD]: {
    title: "Přidat Inzerát: Nová Poptávka, Nabídka nebo Stálá Nabídka",
    description: `Vytvořte snadno nový inzerát na PronajmuSi.cz. Přidávejte poptávky, nabídky nebo stálé nabídky a propojte se s lidmi, kteří hledají právě to, co nabízíte.`
  },
  [RouteKeys.OFFER]: {
    title: "Přidat Nabídku: Nová Možnost Pronájmu na PronajmuSi.cz",
    description: `Přidejte novou nabídku na PronajmuSi.cz a propojte se s lidmi, kteří hledají právě to, co nabízíte. Snadno a rychle najděte odpovídající poptávky od spolehlivých zájemců.`
  },
  [RouteKeys.DEMAND]: {
    title: "Přidat Poptávku: Hledám na PronajmuSi.cz",
    description: `Vytvořte novou poptávku na PronajmuSi.cz a najděte ideální nabídky od spolehlivých poskytovatelů. Jednoduše a rychle spojte se s lidmi, kteří nabízejí to, co potřebujete.`
  },
  [RouteKeys.SHOP]: {
    title: "Přidat Stálou Nabídku: Dlouhodobé Možnosti Pronájmu",
    description: `Nabízíte dlouhodobé možnosti pronájmu? Přidejte svou stálou nabídku na PronajmuSi.cz a propojte se s těmi, kteří hledají stabilní a dlouhodobá řešení pro pronájem.`
  },
  [RouteKeys.LOGIN]: {
    title: "Přihlášení na PronajmuSi.cz: Spravujte Své Inzeráty Snadno",
    description: `Přihlaste se na PronajmuSi.cz a získejte kontrolu nad svými inzeráty. Snadno spravujte své poptávky, nabídky a stálé nabídky pro pohodlný pronájem.`
  },
  [RouteKeys.REGISTER]: {
    title: "Registrace na PronajmuSi.cz: Získejte Přístup k Novým Pronájmům",
    description: `Zaregistrujte se na PronajmuSi.cz a získejte přístup k novým pronájmům. Přidejte své poptávky, nabídky nebo stálé nabídky a zapojte se do naší komunity pro snadný pronájem.`
  },
  [RouteKeys.ABOUT]: {
    title: "O Nás - PronajmuSi.cz: Propojení Pro Efektivní a Snadné Pronájmy",
    description: `Prozkoumejte náš příběh a cíle na stránce 'O Nás'. Jsme PronajmuSi.cz, váš partner pro spolehlivé a efektivní pronájmy. Zjistěte, jak naše platforma propojuje lidi a usnadňuje správu poptávek, nabídek a stálých možností pronájmu. Připojte se k nám a objevte nové příležitosti pro pronájem na PronajmuSi.cz.`
  },
}
