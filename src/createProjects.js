import DOMInterface from './DOMInterface.js';
import deleteProject from './deleteProject.js';

document.addEventListener('load', DOMInterface);
document.addEventListener('load', deleteProject);



function createProjects() {

	newProjectForm.addEventListener('submit', addProject);

	//create add projects fxn

	function addProject(e) {
		e.preventDefault();
		const projectName = newProjectInput.value;
		if (projectName === null || projectName === '') return;
		createProject(projectName);
		newProjectInput.value = null;
	}

	function createProject(names) {
		let project = document.createElement('li');
		project.classList.add('list-name');
		project.setAttribute('data-project', names);
		
		let projectImg = document.createElement('img');
		projectImg.classList.add('list-img');
		projectImg.src = '../src/images/svg/list.svg';
		projectImg.alt = 'list';

		let deleteProjectButton = document.createElement('button');
		deleteProjectButton.classList.add('deleteProjectBtn');
		deleteProjectButton.innerText = 'X';

		project.append(projectImg, names, deleteProjectButton);

		projectsContainer.append(project);
		addMarginToTasks();
	}

	//add margin to tasks when a new project is added
	function addMarginToTasks() {
		let getHeight = getComputedStyle(taskList).marginTop;
		let newHeight = parseInt(getHeight) + 60;
		let heightInStr = newHeight.toString();
		taskList.style.marginTop = heightInStr + 'px';
	}
}

export default createProjects;