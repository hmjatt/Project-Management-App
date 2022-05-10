
function DOMInterface() {

	//catching DOM
	let gitLogoDiv = document.getElementById('gitLogoDiv');

	let inputMenu = document.getElementById('inputMenu');

	let taskList = document.getElementById('taskList');

	//projects
	let projectSubmitButton = document.getElementById('submitBtn');
	let addProjectButton = document.getElementById('addProjectButton');
	let deleteProjectBtn = document.querySelectorAll('.deleteProjectBtn');
	let newProjectForm = document.querySelector('[data-new-project-form]');
	let newProjectInput = document.querySelector('[data-new-project-input]');
	let projectsContainer = document.getElementById('projectsContainer');

	//tasks
	let addTaskButton = document.getElementById('addTaskButton');
	let taskSubmitButton = document.getElementById('taskSubmitButton');
}


export default DOMInterface;