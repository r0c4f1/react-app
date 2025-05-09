import { useState, type MouseEvent } from "react";
import type { Sprite, Move } from "../interface/pokemon.types";

interface PropsCard {
  name: string;
  sprite: Sprite;
  base_experience: number;
  move: Move[];
  openModal: (
    base_experience: number,
    moves: Move[],
    name: string,
    sprite: Sprite
  ) => void;
}

export function Card({
  name,
  sprite,
  base_experience,
  move,
  openModal,
}: PropsCard) {
  let [img, setImg] = useState(sprite.front_default);

  const backFigure = (e: MouseEvent) => {
    let width = e.currentTarget.clientWidth;
    var ClientRect = e.currentTarget.getBoundingClientRect();

    if (e.clientX - ClientRect.left > width / 2) setImg(sprite.back_default);
    else setImg(sprite.front_default);
  };

  return (
    <div
      className="card bg-[#465666] m-4 grow-1 text-white w-74 shadow-sm dark:bg-[#e0e0e0] dark:text-black"
      onMouseMove={backFigure}
      onMouseLeave={() => setImg(sprite.front_default)}
    >
      <figure className="px-10 pt-10">
        <img src={img ?? ""} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions">
          <button
            onClick={() => openModal(base_experience, move, name, sprite)}
            className="btn btn-soft btn-info"
          >
            Ver info
          </button>
        </div>
      </div>
    </div>
  );
}
