import DOMInterface from './DOMInterface.js';
// import createProjects from './createProjects.js';
// import deleteProjects from './deleteProjects.js';

document.addEventListener('DOMContentLoaded', DOMInterface);
// document.addEventListener('DOMContentLoaded', createProjects);
// document.addEventListener('DOMContentLoaded', deleteProjects);


function createTasks() {

	//create new task
	newTaskForm.addEventListener('submit', addTask);

	//add new task to local storage
	function addTask(event) {
		event.preventDefault();
		let newTask = taskInput.value;
		let newTaskObj = {
			taskName: newTask
		};
		let newTaskString = JSON.stringify(newTaskObj);
		localStorage.setItem(newTask, newTaskString);
		console.log(localStorage);
		taskInput.value = '';

		loadTasks();
	}

	//load tasks when new task is added
	function loadTasks() {
		let tasks = Object.keys(localStorage);
		tasks.forEach(function(task) {
			//if task already exists, don't add it again
			if (document.getElementById(task)) {
				return;
			} else {
				createTask(task);
			}
		});
	}

	function createTask(taskName) {

		// <div class="task">
		// 	<input id="task-3" type="checkbox" name="task-3" value="task">
		// 	<label class="youtube-task-label" for="task-3" data-content="Like Video">Like Video</label>
		// </div>
		
		let task = document.createElement('div');
		task.classList.add('task');
		let taskInput = document.createElement('input');
		taskInput.id = taskName;
		taskInput.type = 'checkbox';
		taskInput.name = taskName;
		taskInput.value = taskName;

		let taskLabel = document.createElement('label');
		// taskLabel.classList.add('youtube-task-label');
		taskLabel.setAttribute('for', taskName);
		taskLabel.setAttribute('data-content', taskName);
		taskLabel.innerText = taskName;

		task.append(taskInput, taskLabel);









		// task.setAttribute('data-task', taskName);
		// task.id = taskName;

		// let taskImg = document.createElement('img');
		// taskImg.classList.add('list-img');
		// taskImg.src = '../src/images/svg/list.svg';
		// taskImg.alt = 'list';

		// let deleteTaskButton = document.createElement('button');
		// deleteTaskButton.classList.add('deleteTaskBtn');

		// let taskList = document.getElementById('taskList');
		// taskList.appendChild(task);
		// task.appendChild(taskImg);
		// task.appendChild(deleteTaskButton);
	}

	


}

export default createTasks;