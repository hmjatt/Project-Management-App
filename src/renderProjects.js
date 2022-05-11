import DOMInterface from './DOMInterface.js';
// import createProjects from './createProjects.js';

document.addEventListener('DOMContentLoaded', DOMInterface);
// document.addEventListener('DOMContentLoaded', createProjects);



function renderProjects() {

	

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

	// //call saveProjects function and render projects when new project is created
	// function saveAndRenderProjects() {
	// 	saveProjects();
	// 	document.addEventListener('DOMContentLoaded', createProjects);

	// }

	
}

export default renderProjects;