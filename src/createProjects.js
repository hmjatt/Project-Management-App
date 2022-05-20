import DOMInterface from './DOMInterface.js';
document.addEventListener('DOMContentLoaded', DOMInterface);
import projectImgIcon from './images/svg/list.svg';

function createProjects() {

	const project = (() => {

		//create new Project
		const createProject = (a) => {

			const project = document.createElement('li');
			project.classList.add('list-name');
			project.setAttribute('data-project', a);
			project.id = a;
			const projectImg = document.createElement('img');
			projectImg.classList.add('list-img');
			// projectImg.src = '../src/images/svg/list.svg';
			projectImg.src = projectImgIcon;
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
				projectInput.value = '';
				loadProjects();
			}
		}

		//load projects from localStorage when page loads
		const loadProjects = () => {
			let projects = Object.keys(localStorage);
			// remove tasks key from projects variable
			function deleteByVal(val) {
				for (let key in projects) {
					if (projects[key] == val) delete projects[key];
				}
			}
			deleteByVal('tasks');

			projects.forEach(function(project) {
				//if project already exists, don't add it again
				if (document.getElementById(project)) {
					return;
				} else {
					createProject(project);
					tasksContainer.style.display = 'block';
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
		return projectName;
	}

	//load projects from localStorage when page loads
	project.loadProjects();
}

export default createProjects;