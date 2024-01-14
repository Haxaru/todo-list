import {
  addToDoToArray,
  addProjectToArray,
  todoArray,
  projectArray,
} from "./separateLogic";

import { newTodo, newProject } from "./elementCreation";

const displayTodo = () => {
  const lastTodo = todoArray[todoArray.length - 1];

  newTodo(lastTodo.title, lastTodo.content);

  const deleteBtn = document.querySelector(".delete");
  deleteBtn.addEventListener("click", () => {
    todoArray.splice(lastTodo);

    const todoListing = document.querySelector(".todo-listing");
    todoListing.textContent = "";
  });
};

const displayProject = () => {};
