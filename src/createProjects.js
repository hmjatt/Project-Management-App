import DOMInterface from './DOMInterface.js';
// import deleteProjects from './deleteProjects.js';

document.addEventListener('DOMContentLoaded', DOMInterface);
// document.addEventListener('DOMContentLoaded', deleteProjects);




function createProjects() {


	// newProjectForm.addEventListener('submit', addProject);


	// // add new project to local storage
	// function addProject(event) {
	// 	event.preventDefault();

	// 	//if input is empty, don't add project
	// 	if (projectInput.value === '') {
	// 		return;
	// 	} else {
	// 		let newProject = projectInput.value;
	// 		let newProjectObj = {
	// 			projectName: newProject
	// 		};
	// 		let newProjectString = JSON.stringify(newProjectObj);
	// 		localStorage.setItem(newProject, newProjectString);
	// 		console.log(localStorage);
	// 		projectInput.value = '';

	// 		loadProjects();
	// 	}

		
		
	// }


	
	// //load projects when new project is added
	// function loadProjects() {
	// 	let projects = Object.keys(localStorage);
	// 	projects.forEach(function(project) {
	// 		//if project already exists, don't add it again
	// 		if (document.getElementById(project)) {
	// 			return;
	// 		} else {
	// 			createProject(project);
	// 		}
	// 	});
	// }

	// function createProject(projectName) {

	// 	let project = document.createElement('li');
	// 	project.classList.add('list-name');
	// 	project.setAttribute('data-project', projectName);
	// 	project.id = projectName;
		
	// 	let projectImg = document.createElement('img');
	// 	projectImg.classList.add('list-img');
	// 	projectImg.src = '../src/images/svg/list.svg';
	// 	projectImg.alt = 'list';

	// 	let deleteProjectButton = document.createElement('button');
	// 	deleteProjectButton.classList.add('deleteProjectBtn');
	// 	deleteProjectButton.innerText = 'X';

	// 	project.append(projectImg, projectName, deleteProjectButton);

	// 	projectsContainer.prepend(project);

	// }

	// // load projects from localStorage
	// loadProjects();


	//create new Project
	const project = (() => {
		const createProject = (a) => {

			//grab project name from input
			// a = a.target.value;

			const project = document.createElement('li');
			project.classList.add('list-name');
			project.setAttribute('data-project', a);
			project.id = a;
			const projectImg = document.createElement('img');
			projectImg.classList.add('list-img');
			projectImg.src = '../src/images/svg/list.svg';
			projectImg.alt = 'list';
			const deleteProjectButton = document.createElement('button');
			deleteProjectButton.classList.add('deleteProjectBtn');
			deleteProjectButton.innerText = 'X';
			project.append(projectImg, a, deleteProjectButton);
			projectsContainer.append(project);

		};


		return {
			createProject,
		};

		
	})();

	//add event listener to create project when form is submitted
	newProjectForm.addEventListener('submit', getProjectName);

	//get project name from input and call createProject method
	function getProjectName(event) {
		event.preventDefault();
		let projectName = projectInput.value;
		project.createProject(projectName);
		console.log(projectName);
		return projectName;
	}



	// project.createProject(getProjectName());







	// console.log(project.createProject(projectInput.value));



}

export default createProjects;