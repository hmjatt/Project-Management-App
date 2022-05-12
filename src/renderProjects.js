import DOMInterface from './DOMInterface.js';
import createProjects from './createProjects.js';

document.addEventListener('DOMContentLoaded', DOMInterface);
document.addEventListener('DOMContentLoaded', createProjects);



function renderProjects() {


	// create default projects

	let youtubeProject = document.createElement('li');
	youtubeProject.classList.add('list-name', 'active-list');
	youtubeProject.setAttribute('data-project', 'Youtube');
	youtubeProject.innerHTML = `<img class="list-img" src="../src/images/svg/list.svg" alt="list">` + `Youtube` + `<button class="deleteProjectBtn">X</button>`;

	let workProject = document.createElement('li');
	workProject.classList.add('list-name');
	workProject.setAttribute('data-project', 'Work');
	workProject.innerHTML = `<img class="list-img" src="../src/images/svg/list.svg" alt="list">` + `Work` + `<button class="deleteProjectBtn">X</button>`;

	let groceryProject = document.createElement('li');
	groceryProject.classList.add('list-name');
	groceryProject.setAttribute('data-project', 'Grocery');
	groceryProject.innerHTML = `<img class="list-img" src="../src/images/svg/list.svg" alt="list">` + `Grocery` + `<button class="deleteProjectBtn">X</button>`;

	projectsContainer.append(youtubeProject, workProject, groceryProject);


	//select project
	document.body.addEventListener( 'click', function ( event ) {
		if( event.target.className == 'list-name' || event.target.className == 'list-name active-list' ) {
			let allProjects = projectsContainer.children;
			for (let project of allProjects) {
				project.classList.remove('active-list');
			}
			event.target.classList.toggle('active-list');

		};
	});

	//add project to local storage

	//default project

	getdefaultProjects();

	function getdefaultProjects() {
		let defaultProjects = [];
		defaultProjects.push(youtubeProject.getAttribute('data-project'));
		defaultProjects.push(workProject.getAttribute('data-project'));
		defaultProjects.push(groceryProject.getAttribute('data-project'));
		localStorage.setItem('defaultProjects', JSON.stringify(defaultProjects));
		console.log(localStorage.getItem('defaultProjects'), localStorage);

	}

	
}

export default renderProjects;