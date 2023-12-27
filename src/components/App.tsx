"use client"

import { FilterHeroesFooter } from "./FilterHeroesFooter";
import { FilterHeroesWrapper } from "./FilterHeroesWrapper";
import { HeroesFilterHeader } from "./HeroesFilterHeader";

export function App() {



    return (
        <>
            <HeroesFilterHeader />
            <FilterHeroesWrapper />
            {/* <FilterHeroesFooter /> */}
        </>
    )
}