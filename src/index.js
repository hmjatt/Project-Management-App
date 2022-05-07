import './style/styles.css';
// import gitImage from './images/git-logo.png';

let addProjectButton = document.getElementById('addProjectButton');
let projectSubmitButton = document.getElementById('submitBtn');



addProjectButton.addEventListener('click', openForm);
projectSubmitButton.addEventListener('click', closeForm);

function openForm() {
	document.getElementById("myForm").style.display = "block";
	addProjectButton.style.display = "none";
}

function closeForm() {
	document.getElementById("myForm").style.display = "none";
}

console.log("it works");