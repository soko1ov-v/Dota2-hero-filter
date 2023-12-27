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

type TFilterHero = (sortedHeroes: HeroProps[], query: string, primary_attr: number, complexity: number) => HeroProps[];

// export function filterHeroes(fn: TFilterHero) {
    
//     const {sortedHeroes, query, primary_attr, complexity} = fn;

//     const normalizedQuery = query.toLowerCase();

//     return sortedHeroes.filter(hero =>
//         hero.name_loc.toLowerCase().includes(normalizedQuery) &&
//         (primary_attr === -1 || hero.primary_attr === primary_attr) &&
//         (complexity === -1 || hero.complexity === complexity)
//     );
// }

export function filterHeroes(sortedHeroes: HeroProps[], query: string, primary_attr: number, complexity: number) {
    
    const normalizedQuery = query.toLowerCase();

    return sortedHeroes.filter(hero =>
        hero.name_loc.toLowerCase().includes(normalizedQuery) &&
        (primary_attr === -1 || hero.primary_attr === primary_attr) &&
        (complexity === -1 || hero.complexity === complexity)
    );
}
