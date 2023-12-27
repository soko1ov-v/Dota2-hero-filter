import { heroAttrs } from "@/utils/filterHeroes";
import { HeroListProps } from "@/utils/interfaces";
import Image from "next/image";
import { CSSTransition, TransitionGroup } from "react-transition-group";



export function HeroList({ heroes }: HeroListProps) {
  return (
    <TransitionGroup className="hero-list">
      {heroes.map((hero) => (
        <CSSTransition key={hero.name} timeout={350} classNames="hero-item">
          <li className="hero-item-container" key={hero.name}>
            <a
              className="hero-list__link"
              href="#"
              key={hero.name}
              style={{
                backgroundImage: `url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${hero.name.replace(
                  "npc_dota_hero_",
                  ""
                )}.png)`,
                left: "calc(122px + 0%)",
                top: "calc(142px)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></a>
            <div className="hero-info">
              {hero.primary_attr !== undefined && (
                <div className="attr-icon-container">
                  <Image
                    className="hero-attr-img"
                    src={heroAttrs[hero.primary_attr]}
                    alt="hero-attr"
                    width={45}
                    height={45}
                  />
                </div>
              )}
              <p className="hero-name">{hero.name_loc}</p>
            </div>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
