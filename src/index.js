export * from "./elementCreation.js";
import "./style.css";
import { newProject, newTodo, renderBody } from "./elementCreation.js";

renderBody();

const nav = document.querySelector(".nav");
const content = document.querySelector(".content");

nav.append(newProject(), newProject(), newProject());
content.append(
  newTodo("yes", "this is a bunch of content or whatever"),
  newTodo(),
  newTodo(),
  newTodo()
);
