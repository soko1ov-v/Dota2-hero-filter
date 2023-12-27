import { HeroProps } from "./interfaces";

export interface filterHeroesProps {
  query: string;
  name: string;
  name_loc: string;
  complexity: number;
  primary_attr: number;
  heroes: HeroProps[];
  hero: HeroProps;
}

export const heroAttrs: { [key: string]: string } = {
  "0": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png",
  "1": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png",
  "2": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png",
  "3": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png",
};

export function filterHeroes(
  sortedHeroes: HeroProps[],
  query: string,
  attr: number,
  complexity: number
) {
  const normalizedQuery = query.toLowerCase();

  return sortedHeroes.filter(
    (hero) =>
      hero.name_loc.toLowerCase().includes(normalizedQuery) &&
      (attr === -1 || attr === hero.primary_attr) &&
      (complexity === -1 || hero.complexity === complexity)
  );
}
