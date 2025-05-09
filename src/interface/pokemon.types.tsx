// src/interfaces/pokemon.interface.ts

export interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface Resultado {
  name: string;
  url: string;
}

export interface GameIndex {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

export interface Move {
  move: {
    name: string;
    url: string;
  };
  version_group_details: {
    level_learned_at: number;
    move_learn_method: {
      name: string;
      url: string;
    };
    version_group: {
      name: string;
      url: string;
    };
  }[];
}

export interface Sprite {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  front_default: string | null;
  // ... (resto de propiedades)
}

export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  sprites: Sprite;
  name: string;
  moves: Move[];
  // ... (resto de propiedades)
}
