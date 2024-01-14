export * from "./elementCreation.js";
export * from "./separateLogic.js";
export * from "./domRender.js";
import "./style.css";
import { newProject, newTodo, renderBody } from "./elementCreation.js";

renderBody();

const nav = document.querySelector(".nav");
const content = document.querySelector(".content");
