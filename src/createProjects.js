import DOMInterface from './DOMInterface.js';
import deleteProjects from './deleteProjects.js';

document.addEventListener('DOMContentLoaded', DOMInterface);
document.addEventListener('DOMContentLoaded', deleteProjects);




function createProjects() {


	newProjectForm.addEventListener('submit', addProject);
	newProjectForm.addEventListener('submit', saveProjects);

	//create add projects fxn

	function addProject(e) {
		e.preventDefault();
		const projectName = projectInput.value;
		if (projectName === null || projectName === '') return;
		createProject(projectName);
		projectInput.value = null;
		// saveProjects();
	}
	let arr = ["task1", "task2", "task3", "task4", "task5"];

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

		
		
		localStorage.setItem(projectInput.value, arr);
		
		// saveProjects();
		

	}

	//local storage
	const LOCAL_STORAGE_LIST_KEY = 'task.lists';
	const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId';
	// let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
	// let selectedProjectId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);
	let projects = localStorage.getItem(projectInput.value);
	let selectedProjectId = localStorage.getItem(arr);

	//save projects
	function saveProjects() {
		localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(projects));
		localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedProjectId);
		console.log(localStorage);
	}

}

export default createProjects;