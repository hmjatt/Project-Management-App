import DOMInterface from './DOMInterface.js';
document.addEventListener('DOMContentLoaded', DOMInterface);
let deleteProjectBtn = document.querySelectorAll('.deleteProjectBtn');

// create delete projects fxn

function deleteProject() {

	//on pressing button delete project
	deleteProjectBtn.forEach(element => {
		element.addEventListener('click', deleteProject);
	});

	function deleteProject(project) {
		project.composedPath()[1].remove();
	}
}

export default deleteProject;