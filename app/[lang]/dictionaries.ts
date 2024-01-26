

const dictionaries = {
    it: () => import('@/dictionares/it.json').then((module) => module.default),
    en: () => import('@/dictionares/en.json').then((module) => module.default),
    de: () => import('@/dictionares/de.json').then((module) => module.default),
}

export const getDictionary = async (locale: keyof typeof dictionaries) => dictionaries[locale]();