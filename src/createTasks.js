import DOMInterface from './DOMInterface.js';
// import createProjects from './createProjects.js';
// import deleteProjects from './deleteProjects.js';
import renderTasks from './renderTasks.js';

document.addEventListener('DOMContentLoaded', DOMInterface);
document.addEventListener('DOMContentLoaded', renderTasks);
// document.addEventListener('DOMContentLoaded', createProjects);
// document.addEventListener('DOMContentLoaded', deleteProjects);


function createTasks() {

	//create new task
	
	// let projectName = event.target.getAttribute('data-project');

	//grab project name from data-project attribute
	document.body.addEventListener( 'click', function ( event ) {
		if( event.target.className == 'list-name active-list' ) {
			let projectName = event.target.getAttribute('data-project');
			// console.log(projectName, localStorage);

			newTaskForm.addEventListener('submit', addTask);

			// when i hit submit on new task form, add task to local storage with project name as key

			function addTask(event) {
				event.preventDefault();
				let newTask = taskInput.value;
				let newTaskObj = {
					taskName: newTask
				};
				let newTaskString = JSON.stringify(newTaskObj);
				localStorage.setItem(projectName, newTaskString);
				console.log(localStorage);
				taskInput.value = '';

				loadTasks();
			}

			//load tasks when new task is added
			function loadTasks() {
				let tasks = Object.keys(localStorage);
				tasks.forEach(function (task) {
					//if task already exists, don't add it again
					if (document.getElementById(task)) {
						return;
					} else {
						createTask(task);
					}
				});
			}

			function createTask(taskName) {
				
				// let task = document.createElement('li');
				// task.classList.add('list-name');
				// task.setAttribute('data-task', taskName);
				// task.id = taskName;

				// let taskImg = document.createElement('img');
				// taskImg.classList.add('list-img');
				// taskImg.src = '../src/images/svg/list.svg';
				// taskImg.alt = 'list';

				// let deleteTaskButton = document.createElement('button');
				// deleteTaskButton.classList.add('deleteTaskBtn');

				// task.appendChild(taskImg);
				// task.appendChild(deleteTaskButton);
				// taskList.appendChild(task);

				let task = document.createElement('div');
				task.classList.add('task');
				let taskInput = document.createElement('input');
				taskInput.id = taskName;
				taskInput.type = 'checkbox';
				taskInput.name = taskName;
				taskInput.value = taskName;
				taskInput.classList.add('task-input');
				
				let taskLabel = document.createElement('label');
				taskLabel.classList.add('task-label');
				taskLabel.setAttribute('for', taskName);
				taskLabel.innerText = taskName;
				taskLabel.setAttribute('data-task', taskName);

				task.append(taskInput, taskLabel);

				// 	let taskLabel = document.createElement('label');
				// 	// taskLabel.classList.add('youtube-task-label');
				// 	taskLabel.setAttribute('for', taskName);
				// 	taskLabel.setAttribute('data-content', taskName);
				// 	taskLabel.innerText = taskName;

				// 	task.append(taskInput, taskLabel);




				// deleteTaskButton.addEventListener('click', deleteTask);
			}


		}
		
	});














	// // when i hit submit on new task form, add task to local storage with project name as key

	// function addTask(event) {
	// 	event.preventDefault();
	// 	let newTask = taskInput.value;
	// 	let newTaskObj = {
	// 		taskName: newTask
	// 	};
	// 	let newTaskString = JSON.stringify(newTaskObj);
	// 	localStorage.setItem(projectName, newTaskString);
	// 	console.log(localStorage);
	// 	taskInput.value = '';

	// 	loadTasks();
	// }

	// //load tasks when new task is added
	// function loadTasks() {
	// 	let tasks = Object.keys(localStorage);
	// 	tasks.forEach(function (task) {
	// 		//if task already exists, don't add it again
	// 		if (document.getElementById(task)) {
	// 			return;
	// 		} else {
	// 			createTask(task);
	// 		}
	// 	});
	// }

	// function createTask(taskName) {
		
	// 	// let task = document.createElement('li');
	// 	// task.classList.add('list-name');
	// 	// task.setAttribute('data-task', taskName);
	// 	// task.id = taskName;

	// 	// let taskImg = document.createElement('img');
	// 	// taskImg.classList.add('list-img');
	// 	// taskImg.src = '../src/images/svg/list.svg';
	// 	// taskImg.alt = 'list';

	// 	// let deleteTaskButton = document.createElement('button');
	// 	// deleteTaskButton.classList.add('deleteTaskBtn');

	// 	// task.appendChild(taskImg);
	// 	// task.appendChild(deleteTaskButton);
	// 	// taskList.appendChild(task);

	// 		let task = document.createElement('div');
	// 		task.classList.add('task');
	// 		let taskInput = document.createElement('input');
	// 		taskInput.id = taskName;
	// 		taskInput.type = 'checkbox';
	// 		taskInput.name = taskName;
	// 		taskInput.value = taskName;
	// 		taskInput.classList.add('task-input');
			
	// 		let taskLabel = document.createElement('label');
	// 		taskLabel.classList.add('task-label');
	// 		taskLabel.setAttribute('for', taskName);
	// 		taskLabel.innerText = taskName;
	// 		taskLabel.setAttribute('data-task', taskName);

	// 		task.append(taskInput, taskLabel);

	// 	// 	let taskLabel = document.createElement('label');
	// 	// 	// taskLabel.classList.add('youtube-task-label');
	// 	// 	taskLabel.setAttribute('for', taskName);
	// 	// 	taskLabel.setAttribute('data-content', taskName);
	// 	// 	taskLabel.innerText = taskName;

	// 	// 	task.append(taskInput, taskLabel);




	// 	// deleteTaskButton.addEventListener('click', deleteTask);
	// }











	// //delete task from local storage
	// function deleteTask(event) {
	// 	let taskName = event.target.parentNode.getAttribute('data-task');
	// 	localStorage.removeItem(taskName);
	// 	event.target.parentNode.remove();
	// }






	// //add new task to local storage
	// function addTask(event) {
	// 	event.preventDefault();
	// 	let newTask = taskInput.value;
	// 	let newTaskObj = {
	// 		taskName: newTask
	// 	};
	// 	let newTaskString = JSON.stringify(newTaskObj);
	// 	localStorage.setItem(newTask, newTaskString);
	// 	console.log(localStorage);
	// 	taskInput.value = '';

	// 	loadTasks();
	// }

	// //load tasks when new task is added
	// function loadTasks() {
	// 	let tasks = Object.keys(localStorage);
	// 	tasks.forEach(function(task) {
	// 		//if task already exists, don't add it again
	// 		if (document.getElementById(task)) {
	// 			return;
	// 		} else {
	// 			createTask(task);
	// 		}
	// 	});
	// }

	// function createTask(taskName) {
		
	// 	let task = document.createElement('div');
	// 	task.classList.add('task');
	// 	let taskInput = document.createElement('input');
	// 	taskInput.id = taskName;
	// 	taskInput.type = 'checkbox';
	// 	taskInput.name = taskName;
	// 	taskInput.value = taskName;

	// 	let taskLabel = document.createElement('label');
	// 	// taskLabel.classList.add('youtube-task-label');
	// 	taskLabel.setAttribute('for', taskName);
	// 	taskLabel.setAttribute('data-content', taskName);
	// 	taskLabel.innerText = taskName;

	// 	task.append(taskInput, taskLabel);
	// }

	


}

export default createTasks;