"use client"

import { FilterHeroesWrapper } from "./FilterHeroesWrapper/FilterHeroesWrapper";
import { HeroesFilterHeader } from "./HeroesFilterHeader";

export function App() {



    return (
        <>
            <HeroesFilterHeader />
            <FilterHeroesWrapper />
        </>
    )
}