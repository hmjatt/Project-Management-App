import DOMInterface from './DOMInterface.js';
document.addEventListener('DOMContentLoaded', DOMInterface);



function createProjects() {

	let newProjectForm = document.querySelector('[data-new-project-form]');
	let newProjectInput = document.querySelector('[data-new-project-input]');
	let projectsContainer = document.querySelector('[data-projects]');
	let dataProject = document.querySelector('[data-project]');

	

	// let projects = [{
	// 	id: 1,
	// 	names: 'Project 1'
	// }, {
	// 	id: 2,
	// 	names: 'Project 2'
	// }];

	newProjectForm.addEventListener('submit', addProject);



	//create add projects fxn

	function addProject(e) {
		e.preventDefault();
		const projectName = newProjectInput.value;
		if (projectName === null || projectName === '') return;
		const project = createProject(projectName);
		newProjectInput.value = null;
		// projects.push(project);

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


		
		// = `<img class="list-img" src="../src/images/svg/list.svg" alt="list"> 
		// 						${names} 
		// 					<button class="deleteProjectBtn">x</button>`;
			projectsContainer.append(project);
			let marginTop = '35em'
			taskList.style.marginTop = '35em';
			console.log("works", project);	

		// return{ id: Date.now().toString(), names: names, tasks: [] };
	}

	//add margin when a new project is added

}

export default createProjects;