import { filterHeroes } from "@/utils/filterHeroes";
import { HeroList } from "../HeroList";
import { SearchBar } from "../SearchBar";
import { useState, useEffect, useMemo } from "react";
import { HeroProps } from "@/utils/interfaces";
import styles from './FilterHeroesWrapper.module.scss'

const API_URL = "https://www.dota2.com/datafeed/herolist?language=russian";

const fetchHeroes = () => {
  return fetch(API_URL).then((res) => res.json());
};

export function FilterHeroesWrapper() {
  const [query, setQuery] = useState("");
  const [complexity, setComplexity] = useState(-1);
  const [attrActive, setAttrActive] = useState<number>(-1);
  const [list, setList] = useState([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setQuery(e.target.value);
  }

  useEffect(() => {
    const getHeroes = async () => {
      try {
        const heroesList = await fetchHeroes();
        setList(
          heroesList.result.data.heroes
            .slice()
            .sort((heroA: HeroProps, heroB: HeroProps) =>
              heroA.name_loc.localeCompare(heroB.name_loc)
            )
        );
      } catch {
        console.error("can't fetch");
      }
    };
    getHeroes();
  }, []);

  const filteredList = useMemo(() => {
    return filterHeroes(list, query, attrActive, complexity);
  }, [list, query, complexity, attrActive]);

  function handleAttrClick(attr: number) {
    setAttrActive((prev) => {
      if (prev === attr) {
        return -1;
      }
      return attr;
    });
  }

  function handleClickComplexity(compl: number) {
    setComplexity((prev) => {
      if (prev === compl) {
        return -1;
      }
      return compl;
    });
  }

  return (
    <div className={styles.HeroFilterWrapper}>
      <SearchBar
        onClick={handleAttrClick}
        onComplClick={handleClickComplexity}
        onChange={handleChange}
        query={query}
        attrActive={attrActive}
        complexity={complexity}
      />
      <HeroList heroes={filteredList} />
    </div>
  );
}
