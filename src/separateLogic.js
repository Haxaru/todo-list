const todoArray = [];
const projectArray = [];

class Todo {
  constructor(title, content, priority) {
    this.title = title;
    this.content = content;
    this.priority = priority;
  }
}

class Project {
  constructor(title) {
    this.title = title;
  }
}

const addToDoToArray = (title, content, priority) => {
  const todo = new Todo(title, content, priority);

  todoArray.push(todo);
};

const addProjectToArray = (title) => {
  const project = new Project(title);
  projectArray.push(project);
};

export { addToDoToArray, addProjectToArray, todoArray, projectArray };
