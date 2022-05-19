import DOMInterface from './DOMInterface.js';
import { formatDistanceToNow} from 'date-fns'
import parseISO from 'date-fns/parseISO'

document.addEventListener('DOMContentLoaded', DOMInterface);

function createTasks() {

	// create an IIFe to create tasks

	const task = (() => {

		let taskArray = [];

		//create new task using taskInput and add it to the selected project and add it to local storage
		const createNewTask = (projectName, taskName, priority, dueDate, checked) => {
			const task = document.createElement('div');
			task.classList.add('task');
			task.setAttribute('data-task', taskName);
			task.setAttribute('data-project-name', projectName);
			const taskInput = document.createElement('input');
			taskInput.setAttribute('type', 'checkbox');
			taskInput.setAttribute('id', taskName);
			taskInput.setAttribute('data-task', taskName);
			taskInput.classList.add('task-input');
			taskInput.checked = checked;

			//if task has a class delete-task dont add it to the taskArray
			const taskLabel = document.createElement('label');
			taskLabel.setAttribute('for', taskName);
			taskLabel.classList.add('task-label');
			taskLabel.setAttribute('data-content', taskName);
			let dueDateConverted = parseISO(dueDate);
			let dueDateFromNow = 'Due ' + formatDistanceToNow(dueDateConverted,{addSuffix: true});
			taskLabel.innerText = taskName ;
			let taskLabelSpan = document.createElement('span');
			taskLabelSpan.classList.add('task-label-span');
			taskLabelSpan.innerText = ' ( ' + dueDateFromNow + ' )';
			taskLabel.appendChild(taskLabelSpan);

			task.append(taskInput, taskLabel);

			if(priority === 'high') {
				task.classList.add('high-priority');
			} else if(priority === 'medium') {
				task.classList.add('medium-priority');
			} else if(priority === 'low') {
				task.classList.add('low-priority');
			}

			tasksContainer.append(task);
			tasksContainer.style.display = 'block';

			//add task to local storage
			addTask(projectName, taskName, priority, dueDate, checked);
		}

		// add tasks local storage
		const addTask = (projectName, taskName, priority, dueDate, checked) => {

			let taskObj = {
				[projectName] : {taskName, priority, dueDate, checked}
			}
			//add task to selected project
			if(projectName) {
				taskArray.push(taskObj);
			} else {
				let taskArray = [];
				taskArray.push(taskObj);
			}

			localStorage.setItem('tasks', JSON.stringify(taskArray));
			taskInput.value = '';
			loadTasks();
		}

		//load tasks from local storage
		const loadTasks = () => {
		
			let tasks = localStorage.getItem('tasks');
			let tasksParsed = JSON.parse(tasks);

			let arrayOfProjectNames = [];
			let arrayOfTaskNames = [];
			let arrayOfPriorities = [];
			let arrayOfDueDates = [];
			let arrayOfChecked = [];

			//if there are no tasks in local storage return
			if(!tasksParsed) {
				return;
			} else {
				for (const [key, value] of Object.entries(tasksParsed)) {
					let taskIndex = key;
					let task = value;
					for (const [projectName, taskName] of Object.entries(task)) {
						
						let nameOfProject = projectName;
						arrayOfProjectNames.push(nameOfProject);

						let allTaskNames = taskName;

						let taskNames = Object.values(allTaskNames)[0];
						let priority = Object.values(allTaskNames)[1];
						let dueDate = Object.values(allTaskNames)[2];
						let checked = Object.values(allTaskNames)[3];

						arrayOfTaskNames.push(taskNames);
						arrayOfPriorities.push(priority);
						arrayOfDueDates.push(dueDate);
						arrayOfChecked.push(checked);

					}
				}
	
				for (let i = 0; i < arrayOfProjectNames.length; i++) {
					//if task already exists, don't create it again
					if(document.querySelector(`[data-task="${arrayOfTaskNames[i]}"]`)) {
						return;
					} else {
						createNewTask(arrayOfProjectNames[i], arrayOfTaskNames[i], arrayOfPriorities[i], arrayOfDueDates[i], arrayOfChecked[i]);
					}
				}
			}
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
		let taskPriority = priorities.value;
		let dueDateValue = dueDate.value;
		let isTaskChecked = false;

		// if project exists in local storage or project name is empty, don't add it again
		if (tasksName !== '') {
			// if project has a class of active-list then add task to that project
			if (document.querySelector('.active-list')) {
				task.createNewTask(projectsName, tasksName, taskPriority, dueDateValue, isTaskChecked);
			}
		}

		taskInput.value = '';
	});

	task.loadTasks();

}

export default createTasks;