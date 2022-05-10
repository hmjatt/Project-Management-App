import './style/styles.css';
import DOMInterface from './DOMInterface.js';
// import ui_ux from './ui-ux.js';
import createProjects from './createProjects.js';
import deleteProjects from './deleteProjects.js';


document.addEventListener('DOMContentLoaded', DOMInterface);
// document.addEventListener('load', ui_ux);
document.addEventListener('DOMContentLoaded', createProjects);
document.addEventListener('DOMContentLoaded', deleteProjects);




