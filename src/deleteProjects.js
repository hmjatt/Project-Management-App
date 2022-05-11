import DOMInterface from './DOMInterface.js';

document.addEventListener('DOMContentLoaded', DOMInterface);


// create delete projects fxn

function deleteProject() {

	//on pressing button delete project
	
	document.body.addEventListener( 'click', function ( event ) {
		if( event.target.className == 'deleteProjectBtn' ) {
			event.target.parentElement.remove();
			// removeMarginFromTasks();
		};
	});

	// //remove margin from tasks when a project is deleted
	// function removeMarginFromTasks() {
	// 	let getHeight = getComputedStyle(taskList).marginTop;
	// 	let newHeight = parseInt(getHeight) - 60;
	// 	let heightInStr = newHeight.toString();
	// 	taskList.style.marginTop = heightInStr + 'px';
	// }
	
}

export default deleteProject;