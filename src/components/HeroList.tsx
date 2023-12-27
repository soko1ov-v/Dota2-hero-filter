import { HeroListProps } from "@/utils/interfaces";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export function HeroList({ heroes }: HeroListProps) {

    return (
        <TransitionGroup className="hero-list">
            {heroes.map((hero) => (
                <CSSTransition
                    key={hero.name}
                    timeout={350}
                    classNames="hero-item"
                >
                    <li className="hero-item-container" key={hero.name}>
                        <a className="hero-list__link" href="#" key={hero.name}
                            style={{
                                backgroundImage: `url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${hero.name.replace("npc_dota_hero_", "")}.png)`,
                                left: "calc(122px + 0%)", top: "calc(142px)", backgroundRepeat: "no-repeat", backgroundSize: "cover"
                            }}>
                        </a>
                        <div className="hero-info">
                            <div className="attr-icon-container">
                                {hero.primary_attr === 0 ? (<img className="hero-attr-img" src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png" />) : null}
                                {hero.primary_attr === 1 ? (<img className="hero-attr-img" src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" />) : null}
                                {hero.primary_attr === 2 ? (<img className="hero-attr-img" src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png" />) : null}
                                {hero.primary_attr === 3 ? (<img className="hero-attr-img" src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png" />) : null}
                            </div>
                            <p className="hero-name">{hero.name_loc}</p>
                        </div>
                    </li>
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
}