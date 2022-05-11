import DOMInterface from './DOMInterface.js';

document.addEventListener('DOMContentLoaded', DOMInterface);


// create delete projects fxn

function deleteProject() {

	//on pressing button delete project
	
	document.body.addEventListener( 'click', function ( event ) {
		if( event.target.className == 'deleteProjectBtn' ) {
			event.target.parentElement.remove();
		};
	});
	
}

export default deleteProject;