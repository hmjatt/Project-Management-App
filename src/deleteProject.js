import DOMInterface from './DOMInterface.js';

document.addEventListener('DOMContentLoaded', DOMInterface);




// create delete projects fxn

function deleteProject() {

	//on pressing button delete project
	// deleteProjectBtn.forEach(element => {
	// 	element.addEventListener('click', deleteProject);
	// });

	// function deleteProject(project) {
	// 	if(project.target && project.target.className== 'deleteProjectBtn'){
	// 		//do something
	// 		console.log(project.target.className);
	//    }
		
		// project.composedPath()[1].remove();

		document.body.addEventListener( 'click', function ( event ) {
			if( event.target.className == 'deleteProjectBtn' ) {
				//   someFunc();
				console.log(event.target.className);
			};
		  
		});
	
}

export default deleteProject;