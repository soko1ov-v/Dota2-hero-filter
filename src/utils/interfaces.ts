export interface ButtonProps {
  className: string;
  onClick: () => void;
}

export interface HeroProps {
  id: number;
  name: string;
  name_loc: string;
  primary_attr: number;
  complexity: number;
}

export interface HeroListProps {
  heroes: HeroProps[];
}

export interface SearchBarProps {
  onClick: (attr: number) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onComplClick: (compl: number) => void;
  complexity: number;
  query: string;
  attrActive: number;
}

export interface InputProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className: string;
  value: string;
}
