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

	// //grab project name from data-project attribute
	// document.body.addEventListener( 'click', function ( event ) {
	// 	if( event.target.className == 'list-name active-list' ) {
	// 		let projectName = event.target.getAttribute('data-project');
	// 		// console.log(projectName, localStorage);

	// 		newTaskForm.addEventListener('submit', addTask);

	// 		// when i hit submit on new task form, add task to local storage with project name as key

	// 		function addTask(event) {
	// 			event.preventDefault();
	// 			let newTask = taskInput.value;
	// 			let newTaskObj = {
	// 				newTask: newTask
	// 			};
	// 			let newTaskString = JSON.stringify(newTaskObj);
	// 			localStorage.setItem(projectName, newTaskString);
	// 			taskInput.value = '';

	// 			loadTasks();
	// 		}

	// 		//load tasks when new task is added
	// 		function loadTasks() {
	// 			let tasks = localStorage.getItem(projectName);
	// 			console.log(typeof(tasks));
	// 			// tasks.forEach(function (task) {
	// 			// 	//if task already exists, don't add it again
	// 			// 	// if (document.getElementById(task)) {
	// 			// 	// 	return;
	// 			// 	// } else {
	// 			// 	// 	createTask(task);
	// 			// 	// }

					
	// 			// });
	// 			createTask(tasks);
				
	// 		}

	// 		function createTask(taskName) {
				
	// 			// let task = document.createElement('li');
	// 			// task.classList.add('list-name');
	// 			// task.setAttribute('data-task', taskName);
	// 			// task.id = taskName;

	// 			// let taskImg = document.createElement('img');
	// 			// taskImg.classList.add('list-img');
	// 			// taskImg.src = '../src/images/svg/list.svg';
	// 			// taskImg.alt = 'list';

	// 			// let deleteTaskButton = document.createElement('button');
	// 			// deleteTaskButton.classList.add('deleteTaskBtn');

	// 			// task.appendChild(taskImg);
	// 			// task.appendChild(deleteTaskButton);
	// 			// taskList.appendChild(task);
	// 			let task = document.createElement('div');
	// 			task.classList.add('task');
	// 			let taskInput = document.createElement('input');
	// 			taskInput.id = taskName;
	// 			taskInput.type = 'checkbox';
	// 			taskInput.name = taskName;
	// 			taskInput.value = taskName;
	// 			taskInput.classList.add('task-input');
				
	// 			let taskLabel = document.createElement('label');
	// 			taskLabel.classList.add('task-label');
	// 			taskLabel.setAttribute('for', taskName);
	// 			taskLabel.innerText = taskName;
	// 			taskLabel.setAttribute('data-task', taskName);

	// 			task.append(taskInput, taskLabel);

	// 			//add each task to array
	// 			let taskArray = [];
	// 			taskArray.push(task);



	// 		}


	// 	}
		
	// });



	//add tasks to default project

	

	// //check if task is checked change it in local storage
	// let checkboxes = document.querySelectorAll('input[type="checkbox"]');
	// checkboxes.forEach(checkbox => {
	// 	checkbox.addEventListener('click', () => {
	// 		let project = checkbox.parentElement.parentElement.parentElement.parentElement.getAttribute('data-project');
	// 		let task = checkbox.parentElement.parentElement.getAttribute('data-task');
	// 		let checked = checkbox.checked;
	// 		let projects = JSON.parse(localStorage.getItem('defaultProjects'));
	// 		projects[project][task]['checked'] = checked;
	// 		localStorage.setItem('defaultProjects', JSON.stringify(projects));
	// 		console.log(JSON.parse(localStorage.getItem('defaultProjects')));
	// 	});
	// }
	


}

export default createTasks;