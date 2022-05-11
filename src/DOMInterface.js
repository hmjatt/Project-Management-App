import gitImage from './images/git-logo.png';

function DOMInterface() {

	//catching DOM
	let gitLogoDiv = document.getElementById('gitLogoDiv');

	// let inputMenu = document.getElementById('inputMenu');

	// let taskList = document.getElementById('taskList');

	//projects
	let projectSubmitButton = document.getElementById('submitBtn');
	let addProjectButton = document.getElementById('addProjectButton');
	let newProjectForm = document.getElementById('[newProjectForm]');
	let deleteProjectBtn = document.querySelectorAll('.deleteProjectBtn');
	let projectsContainer = document.getElementById('projectsContainer');
	let projectInput = document.getElementById('projectInput');
	// let listOfProjects = document.querySelectorAll('.list-name');

	
	//tasks
	let addTaskButton = document.getElementById('addTaskButton');
	let taskSubmitButton = document.getElementById('taskSubmitButton');

	
	//git logo img
	let gitLogo = document.createElement('img');
	gitLogo.src = gitImage;
	gitLogo.classList.add('gitLogo');
	gitLogoDiv.appendChild(gitLogo);

	// DOM click events
	// inputMenu.addEventListener('click', addMargin);
	// inputMenu.addEventListener('click', hideH1);
	addTaskButton.addEventListener('click', addTask);
	addProjectButton.addEventListener('click', openForm);
	projectSubmitButton.addEventListener('click', closeForm);
	taskSubmitButton.addEventListener('click', closeTaskForm);


	//Functions for buttons and adding margin
	function openForm() {
		document.getElementById("myForm").style.display = "block";
		addProjectButton.style.display = "none";
	}

	function closeForm() {
		document.getElementById("myForm").style.display = "none";
		addProjectButton.style.display = "block";
	}

	
	//event delegation for adding margin to tasks
	document.body.addEventListener( 'click', function ( event ) {
		if( event.target.id == 'inputMenu') {
			document.body.addEventListener( 'click', function ( event ) {
				console.log(event);
				// if( event.target.id == 'taskList') {
				// 	console.log(event);
				// 	// addMargin();
				// 	// hideH1();
				// };
			});
			// addMargin();
			hideH1();
		};
	});

	// function addMargin() {
	// 	document.body.addEventListener( 'click', function ( event ) {
	// 		console.log(event);
	// 		// if( event.target.id == 'taskList') {
	// 		// 	console.log(event);
	// 		// 	// addMargin();
	// 		// 	// hideH1();
	// 		// };
	// 	});
		
		// taskList.classList.toggle('addmarginAfterClick');
	// }

	function hideH1() {
		console.log("h1 works");
		let h1Ele = document.getElementsByTagName('h1')[0];
		h1Ele.classList.toggle('hideH1');
	}

	function addTask() {
		document.getElementById("myTasks").style.display = "block";
		addTaskButton.style.display = "none";
	}

	function closeTaskForm() {
		document.getElementById("myTasks").style.display = "none";
	}


}


export default DOMInterface;