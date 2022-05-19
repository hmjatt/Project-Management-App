import DOMInterface from './DOMInterface.js';
// import createProjects from './createProjects.js';
// import deleteProjects from './deleteProjects.js';
// import renderProjects from './renderProjects.js';
// import createTasks from './createTasks.js';

document.addEventListener('DOMContentLoaded', DOMInterface);
// document.addEventListener('DOMContentLoaded', createProjects);
// document.addEventListener('DOMContentLoaded', deleteProjects);



function deleteTasks() {



	// create IIFE to delete project

	const deleteCurrentTask = (() => {

		//on pressing button delete project

		const deleteTask = () => {

		document.body.addEventListener( 'click', function ( event ) {
			if( event.target.id == 'deleteBtn' ) {

				//remove all tasks from DOM
				tasksContainer.innerHTML = '';

				// delete all tasks from local storage
				localStorage.removeItem('tasks');


			};
		});

	}

	return {
		deleteTask,
	}

	})();

	deleteCurrentTask.deleteTask();
	
	

}

export default deleteTasks;