const btnAddTask = document.querySelector(".btn-add-task");
const task = document.querySelector(".task");
const listTask = document.querySelector(".list-task");

btnAddTask.addEventListener("click", () => {
	if (task.value) {
		const li = createLi(task.value);
		listTask.appendChild(li);
		task.value = "";
		task.focus();
		return;
	}

	alert("Campo de tarefa está vazio!");
});

const createLi = (value) => {
	const li = document.createElement("li");
	const btn = createBtnDel();
	li.setAttribute("class", "li-task");
	li.innerHTML = value;
	li.appendChild(btn);
	return li;
};

const createBtnDel = () => {
	const btn = document.createElement("button");
	btn.setAttribute("class", "btn-del");
	btn.innerHTML = "Apagar";

	btn.addEventListener("click", () => {
		btn.parentElement.remove();
	});

	return btn;
};
