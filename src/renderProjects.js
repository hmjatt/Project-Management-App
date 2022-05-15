import DOMInterface from './DOMInterface.js';
import renderTasks from './renderTasks.js';
// import createProjects from './createProjects.js';
// import deleteProjects from './deleteProjects.js';

document.addEventListener('DOMContentLoaded', DOMInterface);
// document.addEventListener('DOMContentLoaded', createProjects);
// document.addEventListener('DOMContentLoaded', deleteProjects);



function renderProjects() {

	tasksContainer.innerHTML = '';


	// create default projects

	let youtubeProject = document.createElement('li');
	youtubeProject.classList.add('list-name', 'active-list');
	youtubeProject.id = 'youtube';
	youtubeProject.setAttribute('data-project', 'Youtube');
	youtubeProject.innerHTML = `<img class="list-img" src="../src/images/svg/list.svg" alt="list">` + `Youtube` + `<button class="deleteProjectBtn">X</button>`;

	let workProject = document.createElement('li');
	workProject.classList.add('list-name');
	workProject.id = 'work';
	workProject.setAttribute('data-project', 'Work');
	workProject.innerHTML = `<img class="list-img" src="../src/images/svg/list.svg" alt="list">` + `Work` + `<button class="deleteProjectBtn">X</button>`;

	let groceryProject = document.createElement('li');
	groceryProject.classList.add('list-name');
	groceryProject.id = 'grocery';
	groceryProject.setAttribute('data-project', 'Grocery');
	groceryProject.innerHTML = `<img class="list-img" src="../src/images/svg/list.svg" alt="list">` + `Grocery` + `<button class="deleteProjectBtn">X</button>`;

	projectsContainer.append(youtubeProject, workProject, groceryProject);


	// create default tasks

	// Youtube
	let youtubeProjectTask1 = document.createElement('div');
	youtubeProjectTask1.classList.add('task');
	let youtubeProjectTask1Input = document.createElement('input');
	youtubeProjectTask1Input.id = 'task-1';
	youtubeProjectTask1Input.setAttribute('type', 'checkbox');
	youtubeProjectTask1Input.setAttribute('name', 'task-1');
	youtubeProjectTask1Input.setAttribute('value', 'task');

	let youtubeProjectTask1Label = document.createElement('label');
	youtubeProjectTask1Label.classList.add('youtube-task-label');
	youtubeProjectTask1Label.setAttribute('for', 'task-1');
	youtubeProjectTask1Label.setAttribute('data-content', 'Record todo list video that is long');
	youtubeProjectTask1Label.innerText = 'Record todo list video that is long';

	youtubeProjectTask1.append(youtubeProjectTask1Input, youtubeProjectTask1Label);


	let youtubeProjectTask2 = document.createElement('div');
	youtubeProjectTask2.classList.add('task');
	let youtubeProjectTask2Input = document.createElement('input');
	youtubeProjectTask2Input.id = 'task-2';
	youtubeProjectTask2Input.setAttribute('type', 'checkbox');
	youtubeProjectTask2Input.setAttribute('name', 'task-2');
	youtubeProjectTask2Input.setAttribute('value', 'task');

	let youtubeProjectTask2Label = document.createElement('label');
	youtubeProjectTask2Label.classList.add('youtube-task-label');
	youtubeProjectTask2Label.setAttribute('for', 'task-2');
	youtubeProjectTask2Label.setAttribute('data-content', 'Subscribe to youtube channel');
	youtubeProjectTask2Label.innerText = 'Subscribe to youtube channel';

	youtubeProjectTask2.append(youtubeProjectTask2Input, youtubeProjectTask2Label);


	let youtubeProjectTask3 = document.createElement('div');
	youtubeProjectTask3.classList.add('task');
	let youtubeProjectTask3Input = document.createElement('input');
	youtubeProjectTask3Input.id = 'task-3';
	youtubeProjectTask3Input.setAttribute('type', 'checkbox');
	youtubeProjectTask3Input.setAttribute('name', 'task-3');
	youtubeProjectTask3Input.setAttribute('value', 'task');

	let youtubeProjectTask3Label = document.createElement('label');
	youtubeProjectTask3Label.classList.add('youtube-task-label');
	youtubeProjectTask3Label.setAttribute('for', 'task-3');
	youtubeProjectTask3Label.setAttribute('data-content', 'Like Video');
	youtubeProjectTask3Label.innerText = 'Like Video';

	youtubeProjectTask3.append(youtubeProjectTask3Input, youtubeProjectTask3Label);



	// Work
	let workProjectTask1 = document.createElement('div');
	workProjectTask1.classList.add('task');
	let workProjectTask1Input = document.createElement('input');
	workProjectTask1Input.id = 'task-4';
	workProjectTask1Input.setAttribute('type', 'checkbox');
	workProjectTask1Input.setAttribute('name', 'task-4');
	workProjectTask1Input.setAttribute('value', 'task');

	let workProjectTask1Label = document.createElement('label');
	workProjectTask1Label.classList.add('work-task-label');
	workProjectTask1Label.setAttribute('for', 'task-4');
	workProjectTask1Label.setAttribute('data-content', 'Create a new project');
	workProjectTask1Label.innerText = 'Create a new project';

	workProjectTask1.append(workProjectTask1Input, workProjectTask1Label);


	let workProjectTask2 = document.createElement('div');
	workProjectTask2.classList.add('task');
	let workProjectTask2Input = document.createElement('input');
	workProjectTask2Input.id = 'task-5';
	workProjectTask2Input.setAttribute('type', 'checkbox');
	workProjectTask2Input.setAttribute('name', 'task-5');
	workProjectTask2Input.setAttribute('value', 'task');

	let workProjectTask2Label = document.createElement('label');
	workProjectTask2Label.classList.add('work-task-label');
	workProjectTask2Label.setAttribute('for', 'task-5');
	workProjectTask2Label.setAttribute('data-content', 'Check Email');
	workProjectTask2Label.innerText = 'Check Email';

	workProjectTask2.append(workProjectTask2Input, workProjectTask2Label);


	let workProjectTask3 = document.createElement('div');
	workProjectTask3.classList.add('task');
	let workProjectTask3Input = document.createElement('input');
	workProjectTask3Input.id = 'task-6';
	workProjectTask3Input.setAttribute('type', 'checkbox');
	workProjectTask3Input.setAttribute('name', 'task-6');
	workProjectTask3Input.setAttribute('value', 'task');

	let workProjectTask3Label = document.createElement('label');
	workProjectTask3Label.classList.add('work-task-label');
	workProjectTask3Label.setAttribute('for', 'task-6');
	workProjectTask3Label.setAttribute('data-content', 'Call John Doe');
	workProjectTask3Label.innerText = 'Call John Doe';

	workProjectTask3.append(workProjectTask3Input, workProjectTask3Label);


	// Grocery
	let groceryProjectTask1 = document.createElement('div');
	groceryProjectTask1.classList.add('task');
	let groceryProjectTask1Input = document.createElement('input');
	groceryProjectTask1Input.id = 'task-7';
	groceryProjectTask1Input.setAttribute('type', 'checkbox');
	groceryProjectTask1Input.setAttribute('name', 'task-7');
	groceryProjectTask1Input.setAttribute('value', 'task');

	let groceryProjectTask1Label = document.createElement('label');
	groceryProjectTask1Label.classList.add('grocery-task-label');
	groceryProjectTask1Label.setAttribute('for', 'task-7');
	groceryProjectTask1Label.setAttribute('data-content', 'Buy milk');
	groceryProjectTask1Label.innerText = 'Buy milk';

	groceryProjectTask1.append(groceryProjectTask1Input, groceryProjectTask1Label);


	let groceryProjectTask2 = document.createElement('div');
	groceryProjectTask2.classList.add('task');
	let groceryProjectTask2Input = document.createElement('input');
	groceryProjectTask2Input.id = 'task-8';
	groceryProjectTask2Input.setAttribute('type', 'checkbox');
	groceryProjectTask2Input.setAttribute('name', 'task-8');
	groceryProjectTask2Input.setAttribute('value', 'task');

	let groceryProjectTask2Label = document.createElement('label');
	groceryProjectTask2Label.classList.add('grocery-task-label');
	groceryProjectTask2Label.setAttribute('for', 'task-8');
	groceryProjectTask2Label.setAttribute('data-content', 'Buy bread');
	groceryProjectTask2Label.innerText = 'Buy bread';

	groceryProjectTask2.append(groceryProjectTask2Input, groceryProjectTask2Label);


	let groceryProjectTask3 = document.createElement('div');
	groceryProjectTask3.classList.add('task');
	let groceryProjectTask3Input = document.createElement('input');
	groceryProjectTask3Input.id = 'task-9';
	groceryProjectTask3Input.setAttribute('type', 'checkbox');
	groceryProjectTask3Input.setAttribute('name', 'task-9');
	groceryProjectTask3Input.setAttribute('value', 'task');

	let groceryProjectTask3Label = document.createElement('label');
	groceryProjectTask3Label.classList.add('grocery-task-label');
	groceryProjectTask3Label.setAttribute('for', 'task-9');
	groceryProjectTask3Label.setAttribute('data-content', 'Buy eggs');
	groceryProjectTask3Label.innerText = 'Buy eggs';

	groceryProjectTask3.append(groceryProjectTask3Input, groceryProjectTask3Label);


	tasksContainer.append(youtubeProjectTask1, youtubeProjectTask2, youtubeProjectTask3);
	projectTitle.append(youtubeProject.getAttribute('data-project'));


	//select project and render its tasks
	document.body.addEventListener( 'click', function ( event ) {
		if( event.target.className == 'list-name' || event.target.className == 'list-name active-list' ) {
			let allProjects = projectsContainer.children;
			for (let project of allProjects) {
				project.classList.remove('active-list');
			}
			event.target.classList.toggle('active-list');
			let projectName = event.target.getAttribute('data-project');
			// console.log(event.target.getAttribute('data-project'));

			
			// //render tasks of selected project
			// if(projectName == 'Youtube') {
			// 	tasksContainer.innerHTML = '';
			// 	projectTitle.innerHTML = '';
			// 	tasksContainer.append(youtubeProjectTask1, youtubeProjectTask2, youtubeProjectTask3);
			// 	projectTitle.append(youtubeProject.getAttribute('data-project'));
			// } else if(projectName == 'Work') {
			// 	tasksContainer.innerHTML = '';
			// 	projectTitle.innerHTML = '';
			// 	tasksContainer.append(workProjectTask1, workProjectTask2, workProjectTask3);
			// 	projectTitle.append(workProject.getAttribute('data-project'));
			// } else if(projectName == 'Grocery') {
			// 	tasksContainer.innerHTML = '';
			// 	projectTitle.innerHTML = '';
			// 	tasksContainer.append(groceryProjectTask1, groceryProjectTask2, groceryProjectTask3);
			// 	projectTitle.append(groceryProject.getAttribute('data-project'));

			// } else if (){
			// 	// //if a project has no tasks	
			// 	// tasksContainer.innerHTML = '';
			// 	// projectTitle.innerHTML = '';
			// 	// projectTitle.append(projectName);



			// 	// projectTitle.innerHTML = `${projectName}`;
			// 	// tasksContainer.innerHTML = `<div id="noTasks" class="task">` + `No tasks for this project` + `</div>`;
			// }

			// render tasks of selected project
			if(projectName == 'Youtube') {
				tasksContainer.innerHTML = '';
				projectTitle.innerHTML = '';
				tasksContainer.append(youtubeProjectTask1, youtubeProjectTask2, youtubeProjectTask3);
				projectTitle.append(youtubeProject.getAttribute('data-project'));
			} else if(projectName == 'Work') {
				tasksContainer.innerHTML = '';
				projectTitle.innerHTML = '';
				tasksContainer.append(workProjectTask1, workProjectTask2, workProjectTask3);
				projectTitle.append(workProject.getAttribute('data-project'));
			} else if(projectName == 'Grocery') {
				tasksContainer.innerHTML = '';
				projectTitle.innerHTML = '';
				tasksContainer.append(groceryProjectTask1, groceryProjectTask2, groceryProjectTask3);
				projectTitle.append(groceryProject.getAttribute('data-project'));

			} else {
				
				tasksContainer.innerHTML = '';
				projectTitle.innerHTML = '';
				projectTitle.append(projectName);
				//if a project has no tasks
				// tasksContainer.innerHTML = `<div id="noTasks" class="task">` + `No tasks for this project` + `</div>`;
				//if a project has tasks render them

			}
				


		};
	});


	



	
}

export default renderProjects;