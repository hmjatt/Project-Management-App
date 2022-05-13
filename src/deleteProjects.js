import DOMInterface from './DOMInterface.js';
// import renderProjects from './renderProjects.js';

document.addEventListener('DOMContentLoaded', DOMInterface);
// document.addEventListener('DOMContentLoaded', renderProjects);


// create delete projects fxn

function deleteProject() {

	//on pressing button delete project
	
	document.body.addEventListener( 'click', function ( event ) {
		if( event.target.className == 'deleteProjectBtn' ) {

			//delete project from DOM
			event.target.parentElement.remove();

			// delete project from local storage
			localStorage.removeItem(event.target.parentElement.dataset.project);

			console.log(localStorage);
		};
	});


	
}

export default deleteProject;