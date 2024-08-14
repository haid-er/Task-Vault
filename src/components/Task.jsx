import { useContext, useRef } from "react";
import AuthContext from "../context/AuthContext";

export default function Task() {
  const checkButton = useRef();
  const ctx = useContext(AuthContext);
  const toggleCheck = function () {
    checkButton.current.checked = !checkButton.current.checked;
    console.log(checkButton.current.check);
  };
  const checkBoxFunc = function () {
    checkButton.current.checked = !checkButton.current.checked;
  };

  return (
    <div
      className={`${
        ctx.isDark
          ? "text-tertiary bg-custom-secondary-300"
          : "text-secondary bg-custom-primary-300"
      } flex items-center justify-start w-[40rem] max-h-16 overflow-hidden  gap-2 pe-5 rounded-full cursor-pointer select-none`}
    >
      <div
        className="flex items-center gap-5 w-full h-full p-5"
        onClick={toggleCheck}
      >
        <input
          type="checkbox"
          name="taskcheck"
          id="taskcheck"
          className="size-7 accent-custom-z-300 hover:accent-custom-primary-200"
          ref={checkButton}
          onClick={checkBoxFunc}
        />
        <h1 className="text-lg line-clamp-1 w-[30%]">
          Tadlskajskdljsadkljasldjask name
        </h1>
        <p className="text-sm font-light line-clamp-1 w-[70%]">
          Task Lorem ipsum dolor sit amet r adipisicing elit
        </p>
      </div>
      <div className="p-2 rounded-full bg-custom-primary-800 hover:scale-110  transition-all duration-200">
        <img
          src="/edit.png"
          alt="icon to edit the task in task list"
          width={17}
          className=""
        />
      </div>
      <div className="p-2 rounded-full bg-custom-primary-800 hover:scale-110  transition-all duration-200">
        <img
          src="/trash.png"
          alt="icon to delete the task in task list"
          width={17}
        />
      </div>
    </div>
  );
}
