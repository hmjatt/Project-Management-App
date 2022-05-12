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


	// create default tasks
	tasksContainer.innerHTML = 
							`
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

	// div class="task">
	// 					<input type="checkbox" id="task-1" name="task-1" value="task"/>
	// 					<label for="task-1" data-content="Record todo list video that is long">
	// 						Record todo list video that is long
	// 					</label>
	// 				</div>

	// 				<div class="task">
	// 					<input type="checkbox" id="task-2" name="task-2" value="task"/>
	// 					<label for="task-2" data-content="Another Task">
	// 						Another Task
	// 					</label>
	// 				</div>

	// 				<div class="task">
	// 					<input type="checkbox" id="task-3" name="task-3" value="task"/>
	// 					<label for="task-3" data-content="Third Task">
	// 						Third Task
	// 					</label>
	// 				</div>


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

		localStorage.setItem(youtubeProject.getAttribute('data-project'), JSON.stringify(youtubeProject));
		localStorage.setItem(workProject.getAttribute('data-project'), JSON.stringify(workProject));
		localStorage.setItem(groceryProject.getAttribute('data-project'), JSON.stringify(groceryProject));

	}



	
}

export default renderProjects;