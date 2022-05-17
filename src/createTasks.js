import DOMInterface from './DOMInterface.js';
// import createProjects from './createProjects.js';
// import deleteProjects from './deleteProjects.js';
import renderTasks from './renderTasks.js';

document.addEventListener('DOMContentLoaded', DOMInterface);
document.addEventListener('DOMContentLoaded', renderTasks);
// document.addEventListener('DOMContentLoaded', createProjects);
// document.addEventListener('DOMContentLoaded', deleteProjects);


function createTasks() {




	// create an IIFe to create tasks

	const task = (() => {

		let taskArray = [];

		//create new task using taskInput and add it to the selected project and add it to local storage
		const createNewTask = (taskName, projectName) => {
			projectName = document.querySelector('.active-list').getAttribute('data-project');
			// console.log(project);

			const task = document.createElement('div');
			task.classList.add('task');
			task.setAttribute('data-task', taskName);
			task.setAttribute('data-project-name', projectName);
			const taskInput = document.createElement('input');
			taskInput.setAttribute('type', 'checkbox');
			taskInput.setAttribute('id', taskName);
			taskInput.setAttribute('data-task', taskName);
			taskInput.classList.add('task-input');
			// taskInput.id = taskName;
			const taskLabel = document.createElement('label');
			taskLabel.setAttribute('for', taskName);
			taskLabel.classList.add('task-label');
			taskLabel.setAttribute('data-content', taskName);
			taskLabel.innerText = taskName;

			task.append(taskInput, taskLabel);
			tasksContainer.append(task);

			//add task to local storage
			addTask();

			
		}

		// add tasks local storage
		const addTask = () => {
			let project = document.querySelector('.active-list').getAttribute('data-project');
			let task = taskInput.value;

			

			

			//add task to selected project



			

			if(project) {
				
				taskArray.push(task);
			} else {
				let taskArray = [];
				taskArray.push(task);
			}
			
			
			
			localStorage.setItem(project, JSON.stringify(taskArray));
			// console.log(localStorage);
			taskInput.value = '';
			loadTasks();
			
			// console.log(localStorage)
		}



		//load tasks from local storage
		const loadTasks = () => {
			console.log(localStorage);









			// let allTasks = taskArray.values();

			// for(let task of allTasks) {
				

			// 	let projectNames = Object.keys(task);
			// 	let taskNames = Object.values(task);

				


			// 	return projectNames, taskNames;

			// }

			// if(taskArray.length > 0) {
			// 	console.log(taskArray);

			// 	createNewTask(projectNames, taskNames);
			// } else {
			// 	console.log('no tasks');
			// 	return;
			// }

			


			// Object.keys(task)

			// let projects = Object.keys(localStorage);
			// projects.forEach(function(project) {
			// 	//if project already exists, don't add it again
			// 	if (document.getElementById(project)) {
			// 		return;
			// 	} else {
			// 		createProject(project);
			// 	}
			// });




			// let project = document.querySelector('.active-list').getAttribute('data-project');
			// let tasks = JSON.parse(localStorage.getItem(project));
			// console.log(tasks);
			// let taskArray = [];
			// tasks.forEach(task => {
			// 	// console.log(task);
			// 	for(let key in task) {
			// 		// console.log(key);
			// 		// console.log(task[key]);
			// 		taskArray.push(task[key]);
			// 	}
			// });
			// console.log(taskArray);
			// return taskArray;
		}






		// // keep adding tasks to local storage
		// const addTask = () => {
		// 	let project = document.querySelector('.active-list').getAttribute('data-project');
		// 	let task = document.querySelector('.task-input').getAttribute('data-task');
		// 	let taskObj = {
		// 		task: task,
		// 	};
		// 	let taskString = JSON.stringify(taskObj);
		// 	localStorage.setItem(project, taskString);
		// 	console.log(localStorage)
		// }










		// append tasks to the selected project




		// const addTask = () => {
		// 	let project = document.querySelector('.active-list').getAttribute('data-project');
		// 	let taskName = taskInput.value;
		// 	let taskObj = {
		// 		taskName: taskName,
		// 	};
		// 	let taskString = JSON.stringify(taskObj);
		// 	localStorage.setItem(project, taskString);
		// 	document.querySelector('.task-input').value = '';
		// 	console.log(localStorage);
		// }
		



		// const addTask = () => {
		// 	let projectName = document.querySelector('.active-list').getAttribute('data-project');
		// 	let taskName = document.querySelector('.task-input').getAttribute('data-task');
		// 	let taskObj = {
		// 		taskName: taskName
		// 	};
		// 	let taskString = JSON.stringify(taskObj);
		// 	localStorage.setItem(projectName, taskString);
		// 	console.log(taskString);
		// 	console.log(localStorage);
		// }



	



	

	return {
		createNewTask,
		addTask,
		loadTasks,
	}

	})();




	
	
	//create new task using taskInput and add it to the selected project
	newTaskForm.addEventListener('submit', (e) => {
		e.preventDefault();
		let taskName = taskInput.value;
		// if project exists in local storage or project name is empty, don't add it again
		if (taskName !== '') {
			// if project has a class of active-list then add task to that project
			if (document.querySelector('.active-list')) {
				task.createNewTask(taskName);

			}
		}

		taskInput.value = '';
	});

	task.loadTasks();


}

export default createTasks;