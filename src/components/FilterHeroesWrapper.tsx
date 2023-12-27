import { filterHeroes } from "@/utils/filterHeroes";
import { HeroList } from "./HeroList";
import { SearchBar } from "./SearchBar";
import { useState, useEffect, useMemo } from "react";
import { HeroProps } from "@/utils/interfaces";

const API_URL = "https://www.dota2.com/datafeed/herolist?language=russian";

const fetchHeroes = () => {
    return fetch(API_URL).then((res) => res.json());
}

export function FilterHeroesWrapper() {
    
    const [query, setQuery] = useState("");
    const [heroSpecific, setHeroSpecific] = useState({ name_loc: "", primary_attr: -1, complexity: -1 });
    const [attrActive, setAttrActive] = useState({ str: false, agi: false, int: false, uni: false });
    const [list, setList] = useState([]);
    
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        setQuery(e.target.value);
    }

    useEffect(() => {
        const getHeroes = async () => {
            try {
                const heroesList = await fetchHeroes();
                setList(heroesList.result.data.heroes.slice().sort((heroA:HeroProps, heroB:HeroProps) => heroA.name_loc.localeCompare(heroB.name_loc)));
            } catch {
                console.error("can't fetch");
            }
        };
        getHeroes();
    }, []);
    
    const filteredList = useMemo(() => {
        return filterHeroes(list, query, heroSpecific.primary_attr, heroSpecific.complexity)
    }, [list, query, heroSpecific, attrActive])

    function handleAttrClick(attr: string) {
        switch (attr) {
            case "str":
                setHeroSpecific({ ...heroSpecific, primary_attr: heroSpecific.primary_attr === 0 ? -1 : 0 });
                setAttrActive({ ...attrActive, str: !attrActive.str, agi: false, int: false, uni: false });
                break;
            case "agi":
                setHeroSpecific({ ...heroSpecific, primary_attr: heroSpecific.primary_attr === 1 ? -1 : 1 });
                setAttrActive({ ...attrActive, str: false, agi: !attrActive.agi, int: false, uni: false });
                break;
            case "int":
                setHeroSpecific({ ...heroSpecific, primary_attr: heroSpecific.primary_attr === 2 ? -1 : 2 });
                setAttrActive({ ...attrActive, str: false, agi: false, int: !attrActive.int, uni: false });
                break;
            case "uni":
                setHeroSpecific({ ...heroSpecific, primary_attr: heroSpecific.primary_attr === 3 ? -1 : 3 });
                setAttrActive({ ...attrActive, str: false, agi: false, int: false, uni: !attrActive.uni });
                break;
            default:
                break;
        }
    }

    function handleClickComplexity(compl: number) {
        switch (compl) {
            case 1:
                setHeroSpecific({ ...heroSpecific, complexity: heroSpecific.complexity === 1 ? -1 : 1 });
                break;
            case 2:
                setHeroSpecific({ ...heroSpecific, complexity: heroSpecific.complexity === 2 ? -1 : 2 });
                break;
            case 3:
                setHeroSpecific({ ...heroSpecific, complexity: heroSpecific.complexity === 3 ? -1 : 3 });
                break;
            default:
                break;
        }
    }

    return (

        <div className="hero-filter-wrapper">
            <SearchBar
                onClick={handleAttrClick}
                onComplClick={handleClickComplexity}
                onChange={handleChange}
                query={query}
                attrActive={attrActive}
                heroSpecific={heroSpecific}
            />
            <HeroList heroes={filteredList} />
        </div>
    )
}