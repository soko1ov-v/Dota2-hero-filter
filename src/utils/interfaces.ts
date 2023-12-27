export interface ButtonProps {
    className: string;
    onClick: () => void;
}

export interface HeroProps {
    id?: number;
    name?: string;
    name_loc: string;
    primary_attr?: number;
    complexity?: number;
}

export interface HeroListProps {
    heroes: HeroProps[];
}

export interface SearchBarProps {
    onClick: (attr: string) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onComplClick: (compl: number) => void;
    heroSpecific: HeroProps;
    query: string;
    attrActive: {
        str: boolean;
        agi: boolean;
        int: boolean;
        uni: boolean;
    };
}

export interface InputProps {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    className: string
    value: string;
}