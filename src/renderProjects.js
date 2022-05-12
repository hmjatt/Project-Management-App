import DOMInterface from './DOMInterface.js';
import createProjects from './createProjects.js';
import deleteProjects from './deleteProjects.js';

document.addEventListener('DOMContentLoaded', DOMInterface);
document.addEventListener('DOMContentLoaded', createProjects);
document.addEventListener('DOMContentLoaded', deleteProjects);



function renderProjects() {


	// create default projects

	let youtubeProject = document.createElement('li');
	youtubeProject.classList.add('list-name', 'active-list');
	youtubeProject.setAttribute('data-project', 'youtubeProjectTasks');
	youtubeProject.innerHTML = `<img class="list-img" src="../src/images/svg/list.svg" alt="list">` + `Youtube` + `<button class="deleteProjectBtn">X</button>`;

	let workProject = document.createElement('li');
	workProject.classList.add('list-name');
	workProject.setAttribute('data-project', 'workProjectTasks');
	workProject.innerHTML = `<img class="list-img" src="../src/images/svg/list.svg" alt="list">` + `Work` + `<button class="deleteProjectBtn">X</button>`;

	let groceryProject = document.createElement('li');
	groceryProject.classList.add('list-name');
	groceryProject.setAttribute('data-project', 'groceryProjectTasks');
	groceryProject.innerHTML = `<img class="list-img" src="../src/images/svg/list.svg" alt="list">` + `Grocery` + `<button class="deleteProjectBtn">X</button>`;

	projectsContainer.append(youtubeProject, workProject, groceryProject);


	// create default tasks
	let youtubeProjectTasks = `
						<div class="task">
							<input type="checkbox" id="task-1" name="task-1" value="task"/>
							<label for="task-1" data-content="Record todo list video that is long">
								Record todo list video that is long
							</label>
						</div>

						<div class="task">
							<input type="checkbox" id="task-2" name="task-2" value="task"/>
							<label for="task-2" data-content="Another Task">
								Another Task
							</label>
						</div>

						<div class="task">
							<input type="checkbox" id="task-3" name="task-3" value="task"/>
							<label for="task-3" data-content="Third Task">
								Third Task
							</label>
						</div>
					`;

	let workProjectTasks = `
						<div class="task">
							<input type="checkbox" id="task-4" name="task-4" value="task"/>
							<label for="task-4" data-content="Code a new project">
								Code a new project
							</label>
						</div>

						<div class="task">
							<input type="checkbox" id="task-5" name="task-5" value="task"/>
							<label for="task-5" data-content="Check E-mail">
								Check E-mail
							</label>
						</div>

						<div class="task">
							<input type="checkbox" id="task-6" name="task-6" value="task"/>
							<label for="task-6" data-content="Call John Doe">
								Call John Doe
							</label>
						</div>
					`;

	let groceryProjectTasks = `
	
						<div class="task">
							<input type="checkbox" id="task-7" name="task-7" value="task"/>
							<label for="task-7" data-content="Buy milk">
								Buy milk
							</label>
						</div>

						<div class="task">
							<input type="checkbox" id="task-8" name="task-8" value="task"/>
							<label for="task-8" data-content="Buy eggs">
								Buy eggs
							</label>
						</div>

						<div class="task">
							<input type="checkbox" id="task-9" name="task-9" value="task"/>
							<label for="task-9" data-content="Buy bread">
								Buy bread
							</label>
						</div>
					`;

							


	// tasksContainer.innerHTML = `${youtubeTasks}`;


	//select project and render its tasks
	document.body.addEventListener( 'click', function ( event ) {
		if( event.target.className == 'list-name' || event.target.className == 'list-name active-list' ) {
			let allProjects = projectsContainer.children;
			for (let project of allProjects) {
				project.classList.remove('active-list');
			}
			event.target.classList.toggle('active-list');
			let projectName = event.target.getAttribute('data-project');
			let projectTasks = document.querySelector(`[data-project="${projectName}"]`);
			tasksContainer.innerHTML = `${projectTasks.innerHTML}`;
			// tasksContainer.append(projectName);
			// console.log(projectName);

		};
	});


	//add project to local storage

	//default project

	getdefaultProjects();

	function getdefaultProjects() {

		localStorage.setItem(youtubeProject.getAttribute('data-project'), JSON.stringify(youtubeProject));
		localStorage.setItem(workProject.getAttribute('data-project'), JSON.stringify(workProject));
		localStorage.setItem(groceryProject.getAttribute('data-project'), JSON.stringify(groceryProject));

	}



	
}

export default renderProjects;