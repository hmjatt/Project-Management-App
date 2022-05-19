import './style/styles.css';
import DOMInterface from './DOMInterface.js';
import createProjects from './createProjects.js';
import deleteProjects from './deleteProjects.js';
import renderProjects from './renderProjects.js';
import createTasks from './createTasks.js';
import deleteTasks from './deleteTasks.js';




document.addEventListener('DOMContentLoaded', DOMInterface);
document.addEventListener('DOMContentLoaded', createProjects);
document.addEventListener('DOMContentLoaded', deleteProjects);
document.addEventListener('DOMContentLoaded', renderProjects);
document.addEventListener('DOMContentLoaded', createTasks);
document.addEventListener('DOMContentLoaded', deleteTasks);





