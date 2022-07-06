# Project-Manager-App

## [Live Preview](https://hmjatt.github.io/Project-Management-App/)


![This is an image](https://github.com/hmjatt/hmjatt.github.io/blob/master/images/Project%20mgmt%20app.png)


An Application that let's you organize your Projects, Tasks and set their proiority, due date and save them to localstorage. This project is created to practice Object-Oriented Programming Principles in JavaScript using Webpack as a module bundler. Feel free to reach me at [Twitter](https://twitter.com/hmjatt/)


### Technologies Used

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50"/> </a>  &emsp;   <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="50" height="50"/> </a>  &emsp;   <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="50" height="50"/> </a>


<a href="https://webpack.js.org/" target="_blank" rel="noreferrer"> <img style="margin-top:40px;" src="https://raw.githubusercontent.com/webpack/media/master/logo/logo-on-dark-bg.svg" alt="webpack" width="180" height="100"/> </a>  &emsp;   <a href="https://www.npmjs.com/" target="_blank" rel="noreferrer"> <img style="margin-top:20px;" src="https://raw.githubusercontent.com/npm/logos/master/npm%20logo/npm-logo-red.svg" alt="npm" width="120" height="70"/> </a>


## Includes the following features

    - Css Loader
    - Asset Resource Loader
    - Source Maps
	- Local Storage
	- date-fns Library

## Usage

Run Dev Server (Port 5500)

    ```
    npm install

    ```

    ```
    npx webpack --watch

    ```

## Links to content that helped me with this project

1. OOP in JavaScript
    - [Guide to OOP in JS](https://betterprogramming.pub/object-oriented-programming-in-javascript-b3bda28d3e81)
    - [SOLID Principles in JS](https://thefullstack.xyz/solid-javascript/) 

2. Design Inspiration
    - [Project Management Dashboard](https://dribbble.com/shots/18048975-Project-Management-Dashboard)
    - [Todoist](https://en.todoist.com/)

3. The Odin Project
    - [Article](https://www.theodinproject.com/lessons/node-path-javascript-todo-list)
    - [OOP Principles](https://www.theodinproject.com/lessons/node-path-javascript-oop-principles)

4. YouTube 
    - [Video From Web Dev Simplified](https://www.youtube.com/watch?v=W7FaYfuwu70)
    - [Code For the Video](https://github.com/kevin-powell/todo-list-collab/tree/master/javascript-finished)

5. Date-Fns Library
	- [Date-Fns Documentation](https://date-fns.org/v2.14.0/docs/Getting-Started)
	- [Date-Fns FormatDistanceToNow](https://date-fns.org/v2.14.0/docs/formatDistanceToNow)



## Future Changes/Fixes

**Change IIFE to Factory Functions because if we need ONE of something use an IIFE. If we need multiples of something, create them with factories**

	1. When adding a new Task, Task Name should be added as a value in localStorage, where key is the Project Name.

	2. When a project is completed, it should be updated/checked in localStorage, ({Key: "isItChecked", Value: "checked"}).

	3. Find a better way to organize the the projects and tasks in localStorage, make better use of Object key value pairs.

	4. Could arrays replace objects?, or is it better to use objects? Find out.

	5. Add a feature that shows Tasks remaining in a Project(Using Numbers i.e,"3 Tasks Remaining").

	6. Add a feature that removes only the completed tasks from localStorage and Selected Project.

	7. Add a feature that automatically arrange the Tasks based on priority(Highest priority on Top).

	8. Add a feature that alerts(Using Bell Icon) the user about Tasks Due Today.



#### Quote

    “You can't cross the sea merely by standing and staring at the water.”
    — Rabindranath Tagore
>  	
> :ghost: :ocean: :love_you_gesture:
