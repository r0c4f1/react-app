import type { Move, Sprite } from "../interface/pokemon.types";

interface PropsModal {
  base_experience?: number;
  moves?: Move[];
  name?: string;
  sprite?: Sprite;
}

export function Modal({ base_experience, moves, name, sprite }: PropsModal) {
  console.log(base_experience, moves, name, sprite);

  return (
    // <dialog id="my_modal_1" className="modal">
    //   <div className="modal-box">
    //     <h3 className="font-bold text-xl">{name}</h3>
    //     <div className="modal-action">
    //       <select defaultValue="Large" className="select select-lg">
    //         <option disabled={true}>Large</option>
    //         <option>Large Apple</option>
    //         <option>Large Orange</option>
    //         <option>Large Tomato</option>
    //       </select>
    //     </div>
    //   </div>
    // </dialog>

    <dialog id="my_modal_4" className="modal">
      <div className="modal-box w-11/12 h-[35rem] max-w-5xl">
        <h3 className="font-bold text-2xl">{name}</h3>
        <div className="modal-action grid grid-cols-2">
          <figure className="border border-gray-400  col-span-1 rounded flex flex-col items-center">
            <img src={sprite?.front_default ?? ""} alt="" className="w-[40%]" />
            <img src={sprite?.back_default ?? ""} alt="" className="w-[40%]" />
          </figure>
          <div className="col-span-1 flex justify-around">
            <div>
              <h2>Experiencia base</h2>
              <p>{base_experience}</p>
            </div>
            <div>
              <p>Movimientos</p>
              <select defaultValue="Large" className="select select-lg">
                {moves?.map((item) => (
                  <option>{item.move.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
