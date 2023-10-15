import "server-only";

const dictionaries: any = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  bn: () => import("@/dictionaries/bn.json").then((module) => module.default),
};

export const getDictionary: any = async (locale: any) => dictionaries[locale]();
