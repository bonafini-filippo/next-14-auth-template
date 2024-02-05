

const dictionaries = {
    it: () => import('@/dictionares/it.json').then((module) => module.default),
    en: () => import('@/dictionares/en.json').then((module) => module.default),
    nl: () => import('@/dictionares/nl.json').then((module) => module.default),
}

export const getDictionary = async (locale: keyof typeof dictionaries) => dictionaries[locale]();

/* export const getDictionary = async (locale: keyof typeof dictionaries) => dictionaries["it"](); */