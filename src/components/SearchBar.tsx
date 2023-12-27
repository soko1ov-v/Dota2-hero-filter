import { SearchBarProps } from "@/utils/interfaces";
import { Button } from "./Button";
import { Input } from "./Input";
import { SearchIcon } from "./icons/SearchIcon";

const attributes: { [key: string]:  { image: string; text: string; value: number } } = {
  0: {
   image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-str-active.png",
   text: "str",
   value: 0
  },
  1: {
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-agi-active.png",
    text: "agi",
    value: 1
  },
  2: {
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-int-active.png",
    text: "int",
    value: 2
  },
  3: {
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-uni-active.png",
    text: "uni",
    value: 3
  },
};

const complexityMap: { [key: string]: { image: string; value: number } } = {
  1: {
    image:
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png",
    value: 1,
  },
  2: {
    image:
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png",
    value: 2,
  },
  3: {
    image:
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png",
    value: 3,
  },
};

export function SearchBar({
  complexity,
  attrActive,
  query,
  onChange,
  onClick,
  onComplClick,
}: SearchBarProps) {
  return (
    <div className="search-bar">
      <h3 className="search-bar__title">FILTER HEROES</h3>
      <div className="attr-filter-container">
        <h3 className="filter-title">ATTRIBUTE</h3>
        {Object.keys(attributes).map((attr) => {
          return (
            <Button
              key={attr}
              className={`attr-btn btn ${
                attrActive === attributes[attr].value ? "btn--active" : ""
              }`}
              text={attributes[attr].text}
              onClick={() => onClick(attributes[attr].value)}
              style={{ backgroundImage: `url(${attributes[attr].image})` }}
            />
          );
        })}
      </div>

      <div className="compl-filter-container">
        <h3 className="filter-title">COMPLEXITY</h3>
        {Object.keys(complexityMap).map((comp) => {
          return (
            <Button
              key={comp}
              className={`compl-btn btn ${
                complexity >= complexityMap[comp].value ? "btn--active" : ""
              }`}
              onClick={() => onComplClick(complexityMap[comp].value)}
              style={{
                backgroundImage: `url(${complexityMap[comp].image})`,
              }}
            />
          );
        })}
      </div>

      <div className="hero-search-container">
        <SearchIcon />
        <form>
          <Input
            onChange={onChange}
            className="hero-search-input"
            value={query}
          />
        </form>
      </div>
    </div>
  );
}
