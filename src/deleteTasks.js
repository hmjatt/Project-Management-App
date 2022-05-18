import DOMInterface from './DOMInterface.js';
// import createProjects from './createProjects.js';
// import deleteProjects from './deleteProjects.js';
// import renderProjects from './renderProjects.js';
// import createTasks from './createTasks.js';

document.addEventListener('DOMContentLoaded', DOMInterface);
// document.addEventListener('DOMContentLoaded', createProjects);
// document.addEventListener('DOMContentLoaded', deleteProjects);



function deleteTasks() {


	// create IIFE to delete tasks

	// const deleteTask = (() => {

	// 	//on pressing button delete project

	// 	const deleteProject = () => {

	// 		document.body.addEventListener( 'click', function ( event ) {
	// 			if( event.target.className == 'deleteProjectBtn' ) {

	// 				//delete project from DOM
	// 				event.target.parentElement.remove();

	// 				// delete project from local storage
	// 				localStorage.removeItem(event.target.parentElement.dataset.project);
	// 				tasksContainer.style.display = 'none';
	// 			};
	// 		});

	// 	}

	// 	return {
	// 		deleteProject,
	// 	}

	// })();

	// deleteTask.deleteProject();


	//create IIFE to delete tasks

	const deleteTask = (() => {
		
		//on pressing button delete task

		const deleteTask = () => {

			// document.body.addEventListener( 'click', function ( event ) {
			// 	if( event.target.className == 'task-input' ) {

			// 		//delete task from DOM
			// 		// event.target.parentElement.classList.add('delete-task');
			// 		// let tasksParsed = JSON.parse(localStorage.getItem('tasks'));

			// 		// //delete task from local storage
			// 		// for (let i = 0; i < tasksParsed.length; i++) {

			// 		// 	if (event.target.parentElement.dataset.taskId == tasksParsed[i].id) {
			// 		// 		tasksParsed.splice(i, 1);
			// 		// 	}
						

			// 		// }

			// 		// localStorage.setItem('tasks', JSON.stringify(tasksParsed));
			// 		// console.log(localStorage);

			// 		//delete task from DOM
			// 		// event.target.parentElement.remove();






			// 		// let arrayOfProjectNames = [];
			// 		// let arrayOfTaskNames = [];
			// 		// let arrayOfPriorities = [];
			// 		// let arrayOfDueDates = [];
			// 		// let arrayOfChecked = [];

			// 		// for (const [key, value] of Object.entries(tasksParsed)) {
			// 		// 	let taskIndex = key;
			// 		// 	let task = value;
			// 		// 	for (const [projectName, taskName] of Object.entries(task)) {
			// 		// 		let nameOfProject = projectName;
			// 		// 		arrayOfProjectNames.push(nameOfProject);
			// 		// 		let allTaskNames = taskName;
			// 		// 		// console.log(Object.values(allTaskNames)[1]);
	
			// 		// 		let taskNames = Object.values(allTaskNames)[0];
	
			// 		// 		let priority = Object.values(allTaskNames)[1];
	
			// 		// 		let dueDate = Object.values(allTaskNames)[2];
	
			// 		// 		let checked = Object.values(allTaskNames)[3];
	
	
			// 		// 		arrayOfTaskNames.push(taskNames);
			// 		// 		arrayOfPriorities.push(priority);
			// 		// 		arrayOfDueDates.push(dueDate);
			// 		// 		arrayOfChecked.push(checked);
	
			// 		// 	}
			// 		// }

			// 		// //if task is checked, change checked to true and vice versa and save to local storage
			// 		// if (event.target.parentElement.classList.contains('checked')) {
			// 		// 	event.target.parentElement.classList.remove('checked');
			// 		// 	arrayOfChecked[event.target.parentElement.dataset.task] = false;
			// 		// 	//change checked to false in tasksParsed
			// 		// 	tasksParsed[event.target.parentElement.dataset.task][event.target.parentElement.dataset.project][event.target.parentElement.dataset.taskName][3] = false;
						
			// 		// 	localStorage.setItem('tasks', JSON.stringify(tasksParsed));
			// 		// } else {
			// 		// 	event.target.parentElement.classList.add('checked');
			// 		// 	arrayOfChecked[event.target.parentElement.dataset.task] = true;
			// 		// 	//change checked to true in tasksParsed
			// 		// 	console.log(JSON.parse(localStorage.getItem('tasks')));
			// 		// 	// tasksParsed[event.target.parentElement.dataset.task][event.target.parentElement.dataset.project][event.target.parentElement.dataset.taskName][3] = true;
			// 		// 	localStorage.setItem('tasks', JSON.stringify(tasksParsed));

			// 		// }

			// 		// console.log(arrayOfChecked, localStorage);

			// 		// event.target.parentElement.remove();

			// 		//when i click on the clear completed task button
			// 		// event.target.parentElement.remove();
			// 		clearBtn.addEventListener('click', function (event) {
			// 			// event.target.parentElement.remove();
			// 			//remove all tasks with class delete-task

			// 			//delete tasks from local storage
			// 			let tasksParsed = JSON.parse(localStorage.getItem('tasks'));

			// 			//delete task from local storage
			// 			for (let i = 0; i < tasksParsed.length; i++) {
							
			// 				if (event.target.parentElement.dataset.taskId == tasksParsed[i].id) {
			// 					tasksParsed.splice(i, 1);
			// 				}

							

			// 			}

			// 			localStorage.setItem('tasks', JSON.stringify(tasksParsed));
			// 			console.log(localStorage, tasksParsed);




			// 			// let tasks = document.querySelectorAll('.delete-task');
			// 			// for (let task of tasks) {
			// 			// 	console.log(task);
			// 			// 	// task.remove();
			// 			// }


			// 			//remove all tasks from local storage
						
						
			// 			// event.target.parentElement.classList.remove('delete-task');
			// 		});
					


			// 		// delete task from local storage
			// 		// localStorage.removeItem(event.target.parentElement.dataset.task);
			// 	};
			// });


			tasksContainer.addEventListener('click', function (event) {
				if(event.target.tagName.toLowerCase() === 'input') {

					//add a class checked to the task
					event.target.parentElement.classList.toggle('checked');


					// let selectedTaskElement = event.target.parentElement;

					// let selectedTask = event.target.parentElement.getAttribute('data-task');
					// let selectedProject = selectedTaskElement.getAttribute('data-project-name');

					// console.log(selectedProject, selectedTask);

					// //get checked task from local storage using selected task and project
					// let tasksParsed = JSON.parse(localStorage.getItem('tasks'));
					// // let tasksSringified = JSON.stringify(tasksParsed);

					// let arrayOfProjectNames = [];
					// let arrayOfTaskNames = [];
					// let arrayOfPriorities = [];
					// let arrayOfDueDates = [];
					// let arrayOfChecked = [];

					// //find the task in local storage using selected task and project
					// for (const [key, value] of Object.entries(tasksParsed)) {
					// 	let task = value;
					// 	for (const [projectName, taskName] of Object.entries(task)) {
					// 		let nameOfProject = projectName;
					// 		arrayOfProjectNames.push(nameOfProject);
					// 		let allTaskNames = taskName;
					// 		// console.log(Object.values(allTaskNames)[1]);

					// 		let taskNames = Object.values(allTaskNames)[0];

					// 		let priority = Object.values(allTaskNames)[1];

					// 		let dueDate = Object.values(allTaskNames)[2];

					// 		let checked = Object.values(allTaskNames)[3];


					// 		arrayOfTaskNames.push(taskNames);
					// 		arrayOfPriorities.push(priority);
					// 		arrayOfDueDates.push(dueDate);
					// 		arrayOfChecked.push(checked);



					// 	}
					// }
					

					// console.log(arrayOfProjectNames, arrayOfTaskNames, arrayOfPriorities, arrayOfDueDates, arrayOfChecked);

					// // if task is checked change its value to true in arrayOfChecked
					// if (event.target.parentElement.classList.contains('checked')) {
					// 	arrayOfChecked[event.target.parentElement.dataset.task] = true;
					// 	// console.log(arrayOfChecked);
					// 	//change checked to true in tasksParsed
					// 	// tasksParsed[event.target.parentElement.dataset.task][event.target.parentElement.dataset.project][event.target.parentElement.dataset.taskName][3] = true;
					// 	localStorage.setItem('tasks', JSON.stringify(tasksParsed));

					// }
					
					// console.log(localStorage.getItem('tasks'));
				}
			});

			






		}

		return {
			deleteTask,
		}

	})();

	deleteTask.deleteTask();
	
	

}

export default deleteTasks;