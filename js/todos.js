const toDoForm = document.getElementById("todoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todoList");

const TODOS_KEY = "todos";

let toDos = [];

const saveTodos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

const deleteTodo = (event) => {
  const li = event.target.parentElement;
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
  li.remove();
};

const paintTodo = ({ text, id }) => {
  const li = document.createElement("li");
  li.id = id;
  const span = document.createElement("span");
  span.innerText = text;
  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);
};

const handleToDoSubmit = (event) => {
  event.preventDefault();
  const newTodo = toDoInput.value;
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  toDoInput.value = "";
  paintTodo(newTodoObj);
  saveTodos();
};

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  let parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach((el) => paintTodo(el));
}
