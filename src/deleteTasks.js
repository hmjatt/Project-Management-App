import DOMInterface from './DOMInterface.js';
document.addEventListener('DOMContentLoaded', DOMInterface);


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