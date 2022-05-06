import './style/styles.css';
// import gitImage from './images/git-logo.png';

let addProjectButton = document.getElementById('addProjectButton');



addProjectButton.addEventListener('click', openForm);

function openForm() {
	document.getElementById("myForm").style.display = "block";
}

function closeForm() {
	document.getElementById("myForm").style.display = "none";
}

console.log("it works");