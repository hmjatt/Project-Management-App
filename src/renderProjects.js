import DOMInterface from './DOMInterface.js';

document.addEventListener('DOMContentLoaded', DOMInterface);



function renderProjects() {
	document.body.addEventListener( 'click', function ( event ) {
		if( event.target.className == 'list-name' || event.target.className == 'list-name active-list' ) {
			let allProjects = projectsContainer.children;
			for (let project of allProjects) {
				project.classList.remove('active-list');
			}
			event.target.classList.toggle('active-list');

		};
	});
}

export default renderProjects;