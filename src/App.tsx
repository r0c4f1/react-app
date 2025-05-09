import { useState, useEffect } from "react";
import { Card } from "./components/Card";
import { NavBar } from "./components/NavBar";
import { Skeleton } from "./components/Skeleton";
import { Modal } from "./components/Modal";
import type {
  Pokemon,
  Resultado,
  Move,
  Sprite,
} from "./interface/pokemon.types";

function App() {
  const [pokemones, getDataPokemon] = useState<Pokemon[]>([]);
  const [base_experience, setBaseExperience] = useState(0);
  const [moves, setMoves] = useState<Move[]>([]);
  const [sprite, setSprites] = useState<Sprite>();
  const [name, setName] = useState("");

  const getPokemon = async () => {
    let query = await fetch("https://pokeapi.co/api/v2/pokemon/");
    let dataPokemon: Pokemon[] = [];
    if (query.status) {
      let data = await query.json();
      let pokemon: Resultado[] = data.results;

      for (const item of pokemon) {
        let query = await fetch(item.url);

        if (query.status) {
          let data = await query.json();
          dataPokemon.push(data);
        }
      }

      getDataPokemon(dataPokemon);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const openModal = (
    base_experience: number,
    moves: Move[],
    name: string,
    sprite: Sprite
  ) => {
    const modal = document.querySelector(".modal") as HTMLDialogElement;
    modal?.showModal();

    setBaseExperience(base_experience);
    setMoves(moves);
    setSprites(sprite);
    setName(name);
  };

  const contenido =
    pokemones.length === 0 ? (
      <>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </>
    ) : (
      pokemones.map(({ sprites, name, base_experience, moves }, i) => (
        <Card
          openModal={() => openModal(base_experience, moves, name, sprites)}
          sprite={sprites}
          name={name}
          base_experience={base_experience}
          move={moves}
          key={i}
        />
      ))
    );

  return (
    <>
      <header className="mb-10 mt-5">
        <NavBar />
      </header>
      <main className="container mx-auto flex flex-wrap">{contenido}</main>
      <Modal
        base_experience={base_experience}
        moves={moves}
        name={name}
        sprite={sprite}
      />
    </>
  );
}

export default App;
