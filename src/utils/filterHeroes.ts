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

export function filterHeroes(sortedHeroes: HeroProps[], query: string, primary_attr: number, complexity: number) {
    
    const normalizedQuery = query.toLowerCase();

    return sortedHeroes.filter(hero =>
        hero.name_loc.toLowerCase().includes(normalizedQuery) &&
        (primary_attr === -1 || hero.primary_attr === primary_attr) &&
        (complexity === -1 || hero.complexity === complexity)
    );
}
