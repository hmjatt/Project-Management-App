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


	
	const project = (() => {

		//create new Project
		const createProject = (a) => {

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
			addProject();

		};

		// add new project to local storage
		const addProject = () => {
			// event.preventDefault();
			//if input is empty, don't add project
			if (projectInput.value === '') {
				return;
			} else {
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
		
		}


		//load projects from localStorage when page loads


		const loadProjects = () => {
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


		return {
			addProject,
			loadProjects,
			createProject
		};

		
	})();

	//add event listener to create project when form is submitted
	newProjectForm.addEventListener('submit', getProjectName);

	//get project name from input and call createProject method
	function getProjectName(event) {
		event.preventDefault();
		let projectName = projectInput.value;
		// if project exists in local storage or project name is empty, don't add it again
		if (projectName === ''|| localStorage.getItem(projectName)) {
			return;
		} else {
			project.createProject(projectName);
		}
	
		console.log(projectName);
		return projectName;
	}

	//load projects from localStorage when page loads
	project.loadProjects();


}

export default createProjects;