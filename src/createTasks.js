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
		const createNewTask = (projectName, taskName) => {
			// projectName = document.querySelector('.active-list').getAttribute('data-project');
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
			addTask(projectName, taskName);

			
		}

		// add tasks local storage
		const addTask = (projectName, taskName) => {


			let taskObj = {
				[projectName] : taskName,
			}

			//add task to selected project
			if(projectName) {
				// let taskArray = [];
				taskArray.push(taskObj);
			} else {
				let taskArray = [];
				taskArray.push(taskObj);
			}

			
			
			localStorage.setItem('tasks', JSON.stringify(taskArray));
			taskInput.value = '';
			loadTasks();
			
			// console.log(localStorage)
		}



		//load tasks from local storage
		const loadTasks = () => {
		

			let tasks = localStorage.getItem('tasks');
			let tasksParsed = JSON.parse(tasks);

			let arrayOfProjectNames = [];
			let arrayOfTaskNames = [];


			for (const [key, value] of Object.entries(tasksParsed)) {
				let taskIndex = key;
				let task = value;
				for (const [projectName, taskName] of Object.entries(task)) {
					let nameOfProject = projectName;
					let nameOfTask = taskName;
					arrayOfProjectNames.push(nameOfProject);
					arrayOfTaskNames.push(nameOfTask);

					
				
			  	}
				
				
			}
			

			for (let i = 0; i < arrayOfProjectNames.length; i++) {
				//if task already exists, don't create it again
				if(document.querySelector(`[data-task="${arrayOfTaskNames[i]}"]`)) {
					return;
				} else {
					createNewTask(arrayOfProjectNames[i], arrayOfTaskNames[i]);
				}


			}



			console.log(localStorage);


		}


	return {
		createNewTask,
		addTask,
		loadTasks,
		
	}

	})();




	
	
	//create new task using taskInput and add it to the selected project
	newTaskForm.addEventListener('submit', (e) => {
		e.preventDefault();
		let projectsName = document.querySelector('.active-list').getAttribute('data-project');
		let tasksName = taskInput.value;
		// if project exists in local storage or project name is empty, don't add it again
		if (tasksName !== '') {
			// if project has a class of active-list then add task to that project
			if (document.querySelector('.active-list')) {
				task.createNewTask(projectsName, tasksName);

			}
		}

		taskInput.value = '';
	});

	task.loadTasks();


}

export default createTasks;