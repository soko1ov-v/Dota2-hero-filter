import { SearchBarProps } from "@/utils/interfaces";
import { Button } from "./Button";
import { Input } from "./Input";
import { SearchIcon } from "./icons/SearchIcon";


export function SearchBar({ heroSpecific, attrActive, query, onChange, onClick, onComplClick }: SearchBarProps) {
    

    return (
        <div className="search-bar">
            <h3 className="search-bar__title">FILTER HEROES</h3>
            <div className="attr-filter-container">
                <h3 className="filter-title">ATTRIBUTE</h3>
                <Button className={`attr-btn btn ${attrActive.str ? "btn--active" : ""}`} text="str" onClick={() => onClick("str")}
                    style={{ backgroundImage: "url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-str-active.png)" }} />
                <Button className={`attr-btn btn ${attrActive.agi ? "btn--active" : ""}`} text="agi" onClick={() => onClick("agi")}
                    style={{ backgroundImage: "url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-agi-active.png)" }} />
                <Button className={`attr-btn btn ${attrActive.int ? "btn--active" : ""}`} text="int" onClick={() => onClick("int")}
                    style={{ backgroundImage: "url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-int-active.png)" }} />
                <Button className={`attr-btn btn ${attrActive.uni ? "btn--active" : ""}`} text="uni" onClick={() => onClick("uni")}
                    style={{ backgroundImage: "url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-uni-active.png)" }} />
            </div>

            <div className="compl-filter-container">
                <h3 className="filter-title">COMPLEXITY</h3>
                <Button className={`compl-btn btn ${(heroSpecific.complexity === 3 || heroSpecific.complexity === 2 || heroSpecific.complexity === 1) ? "btn--active" : ""}`} onClick={() => onComplClick(1)}
                    style={{ backgroundImage: "url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png)" }} />
                <Button className={`compl-btn btn ${(heroSpecific.complexity === 3 || heroSpecific.complexity === 2) ? "btn--active" : ""}`} onClick={() => onComplClick(2)}
                    style={{ backgroundImage: "url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png)" }} />
                <Button className={`compl-btn btn ${heroSpecific.complexity === 3 ? "btn--active" : ""}`} onClick={() => onComplClick(3)}
                    style={{ backgroundImage: "url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png)" }} />
            </div>

            <div className="hero-search-container">
                <SearchIcon />
                <form>
                    <Input onChange={onChange} className="hero-search-input" value={query} />
                </form>
            </div>

        </div>
    )
}