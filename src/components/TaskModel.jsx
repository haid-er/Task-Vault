import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function TaskModel(props) {
  const ctx = useContext(AuthContext);
  return (
    <div>
      <div
        className={`${
          ctx.isDark
            ? "bg-custom-secondary-500 text-tertiary border-custom-primary-500 border"
            : "bg-custom-primary-300 text-secondary border-custom-secondary-500 border"
        } absolute top-1/2 backdrop-blur-md left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 rounded-xl z-30 flex flex-col items-center gap-10`}
      >
        <button
          className={`${
            ctx.isDark
              ? "bg-primary text-secondary"
              : "bg-secondary text-primary"
          } absolute right-6 px-[6px] rounded-full hover:scale-110`}
          onClick={props.toggleModelFunc}
        >
          X
        </button>
        <p className="text-xl">NEW NOTE</p>
        <input
          type="text"
          name="newNoteHeading"
          id="newNoteHeading"
          placeholder="add note heading ..."
          className={`${
            ctx.isDark
              ? "bg-custom-secondary-300 text-tertiary border-none outline-none focus:outline-custom-primary-800 outline-custom-primary-300 "
              : "border-gray-300 bg-tertiary border-none outline-none focus:outline-custom-secondary-300  "
          } p-4 border  rounded-full w-96 font-extralight`}
        />
        <textarea
          name="newNoteText"
          id="newNoteText"
          placeholder="add note body ..."
          className={`${
            ctx.isDark
              ? "bg-custom-secondary-300 text-tertiary border-none outline-none focus:outline-custom-primary-800 outline-custom-primary-300 "
              : "border-gray-300 bg-tertiary border-none outline-none focus:outline-custom-secondary-300"
          } p-4 border  rounded-lg w-96 font-extralight`}
        ></textarea>
      </div>
      <div
        aria-description="this is dark overlay in the background of model which will close model if clicked"
        className="absolute w-full h-full top-0 left-0 bg-custom-secondary-400 z-20"
        onClick={props.toggleModelFunc}
      ></div>
    </div>
  );
}
