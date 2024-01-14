import { format } from "date-fns";

const newDivElement = (className = "") => {
  const div = document.createElement("div");

  if (className !== "") {
    div.classList.add(className);
  }

  return div;
};

const newBtn = (btnName, className = "") => {
  const btn = document.createElement("button");

  btn.textContent = btnName;

  if (className !== "") {
    btn.classList.add(className);
  }

  return btn;
};

const newProject = (title = "New Project") => {
  const div = newDivElement("project-listing");

  const titleElement = document.createElement("h2");
  titleElement.textContent = title;

  const deleteBtn = newBtn("Delete", "delete");

  div.append(titleElement, deleteBtn);
  return div;
};

const newTodo = (title = "New Todo", content = "") => {
  const div = newDivElement("todo-listing");

  const sectionOne = newDivElement();

  const titleElement = document.createElement("h2");
  titleElement.textContent = title;
  const editBtn = newBtn("Edit", "edit");

  sectionOne.append(titleElement, editBtn);

  const sectionTwo = newDivElement();

  sectionTwo.textContent = content;

  const sectionThree = newDivElement();

  const dateDiv = newDivElement();

  const date = `${format(new Date(), "MMM.dd.yyy")}`;
  dateDiv.textContent = date;

  const deleteBtn = newBtn("Delete", "delete");

  sectionThree.append(dateDiv, deleteBtn);

  div.append(sectionOne, sectionTwo, sectionThree);
  return div;
};

const renderBody = () => {
  const newH1Element = (title) => {
    const titleElement = document.createElement("h1");
    titleElement.textContent = title;

    return titleElement;
  };

  const titleDiv = newDivElement("titles");
  titleDiv.append(newH1Element("Projects:"), newH1Element("Todo's:"));

  const nav = newDivElement("nav");

  const todoContent = newDivElement("content");

  const bottomNav = newDivElement("bottom-nav");
  bottomNav.append(
    newBtn("New Project +", "new-project"),
    newBtn("New Todo +", "new-todo")
  );

  document.body.append(titleDiv, nav, todoContent, bottomNav);
};
export { newProject, newTodo, renderBody };
