import DOMInterface from './DOMInterface.js';
// import createProjects from './createProjects.js';

document.addEventListener('load', DOMInterface);
// document.addEventListener('DOMContentLoaded', createProjects);


// create delete projects fxn

function deleteProject() {
	
	
	//on pressing button delete project
	deleteProjectBtn.forEach(element => {
		element.addEventListener('click', deleteProject);
	});

	function deleteProject(project) {
		console.log(project);
		// project.composedPath()[1].remove();
	}
}

export default deleteProject;