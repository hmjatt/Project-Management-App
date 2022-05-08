
function DOMInterface() {

	//catching DOM
	let gitLogoDiv = document.getElementById('gitLogoDiv');
	let addProjectButton = document.getElementById('addProjectButton');
	// let projectSubmitButton = document.getElementById('submitBtn');
	let inputMenu = document.getElementById('inputMenu');
	let taskList = document.getElementById('taskList');
	let addTaskButton = document.getElementById('addTaskButton');
	let taskSubmitButton = document.getElementById('taskSubmitButton');

	//grab projectsContainer
	let projectsContainer = document.querySelector('[data-projects]');
	//grab projects 
	let projects = document.querySelectorAll('[data-project]');
	// let deleteProjectBtn = document.querySelectorAll('.deleteProjectBtn');

	
}


export default DOMInterface;