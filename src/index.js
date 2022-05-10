import './style/styles.css';
import DOMInterface from './DOMInterface.js';
import ui_ux from './ui-ux.js';
import deleteProject from './deleteProject.js';
import createProjects from './createProjects.js';

document.addEventListener('load', DOMInterface);
document.addEventListener('load', ui_ux);
document.addEventListener('load', deleteProject);
document.addEventListener('load', createProjects);



