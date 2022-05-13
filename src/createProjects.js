import DOMInterface from './DOMInterface.js';
// import deleteProjects from './deleteProjects.js';

document.addEventListener('DOMContentLoaded', DOMInterface);
// document.addEventListener('DOMContentLoaded', deleteProjects);




function createProjects() {


	newProjectForm.addEventListener('submit', addProject);


	// add new project to local storage
	function addProject(event) {
		event.preventDefault();
		let newProject = projectInput.value;
		let newProjectObj = {
			projectName: newProject
		};
		let newProjectString = JSON.stringify(newProjectObj);
		localStorage.setItem(newProject, newProjectString);
		console.log(localStorage);
		projectInput.value = '';

		loadProjects();
		
	}


	
	//load projects when new project is added
	function loadProjects() {
		let projects = Object.keys(localStorage);
		projects.forEach(function(project) {
			//if project already exists, don't add it again
			if (document.getElementById(project)) {
				return;
			} else {
				createProject(project);
			}
		});
	}

	function createProject(projectName) {

		let project = document.createElement('li');
		project.classList.add('list-name');
		project.setAttribute('data-project', projectName);
		project.id = projectName;
		
		let projectImg = document.createElement('img');
		projectImg.classList.add('list-img');
		projectImg.src = '../src/images/svg/list.svg';
		projectImg.alt = 'list';

		let deleteProjectButton = document.createElement('button');
		deleteProjectButton.classList.add('deleteProjectBtn');
		deleteProjectButton.innerText = 'X';

		project.append(projectImg, projectName, deleteProjectButton);

		projectsContainer.prepend(project);

	}

	// load projects from localStorage
	loadProjects();



}

export default createProjects;