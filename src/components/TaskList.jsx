import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import Task from "./Task";
import TaskModel from "./TaskModel";
export default function TaskList() {
  const ctx = useContext(AuthContext);
  const [isModelShown, setIsModelShown] = useState(true);
  const toggleModelFunc = function () {
    setIsModelShown(prev => !prev);
  };
  return (
    <div className="container mx-auto my-12">
      <div className="flex flex-col items-center">
        <h1
          className={`${
            ctx.isDark ? "text-tertiary" : "text-secondary"
          } text-3xl font-semibold mb-5`}
        >
          TASK LIST
        </h1>
        <div className="flex relative">
          <input
            type="text"
            className={`${
              ctx.isDark
                ? "bg-custom-secondary-300 text-tertiary border-none outline-none focus:outline-custom-primary-800 outline-custom-primary-300 "
                : "border-gray-300 bg-tertiary  border-none outline-none focus:outline-custom-secondary-500 outline-custom-secondary-200"
            } p-4 border  rounded-full w-96 font-extralight`}
            placeholder="Search note ..."
          />
          <button className="absolute right-3 top-3 hover:scale-105">
            <img
              src="/search.png"
              alt="search button for tasks"
              className=""
              width={30}
            />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 mt-10 divide-custom-secondary-400">
        <Task />
        <Task />
      </div>
      {isModelShown && <TaskModel toggleModelFunc={toggleModelFunc} />}
      <button onClick={toggleModelFunc}>
        <img
          src="/plus-light.png"
          alt="plus icon to add task to task list"
          className="bg-primary p-2 rounded-full absolute right-20 bottom-20 hover:bg-primary hover:shadow-custom-primary-500 shadow-md"
          width={50}
        />
      </button>
    </div>
  );
}
