"use strict";
exports.__esModule = true;
var app_1 = require("./app");
// CREATE APP
var app = new app_1.App('testApp');
// CREATE PROJECTS
var projectFirst = new app_1.Project();
var projectSecond = new app_1.Project();
var projectThird = new app_1.Project();
// CREATE DEVELOPERS
var charles = new app_1.User('Charles');
var henry = new app_1.User('Henry');
// CREATE TASKS
var taskFirst = new app_1.Task(10, charles, 'taskFirst');
var taskSecond = new app_1.Task(5, charles, 'taskSecond');
var taskThird = new app_1.Task(15, charles, 'taskThird');
var taskFourth = new app_1.Task(120, charles, 'taskFourth');
var taskFifth = new app_1.Task(25, henry, 'taskFifth');
var taskSixth = new app_1.Task(30, henry, 'taskSixth');
// USE PROJECTS
projectFirst.addTask(taskFirst);
projectFirst.addTask(taskFifth);
projectFirst.addTask(taskThird);
projectFirst.addTask(taskSixth);
projectSecond.addTask(taskFourth);
projectSecond.addTask(taskFifth);
projectSecond.addTask(taskSixth);
// ==== project methods
projectThird.addTask(taskFirst);
projectThird.addTask(taskThird);
projectThird.addTask(taskFifth);
projectThird.deleteTask(taskFirst.id);
projectThird.editTask(taskFourth);
console.log(projectThird);
console.log(projectFirst.getTotalTime());
console.log(projectFirst.getAllTasksByDeveloper(henry.id));
// USE TASK
console.log(taskFirst.getInfo());
console.log(taskSecond.getInfo());
console.log(taskFourth.getInfo());
// USE APP
app.setName('testAppNew');
app.addProject(projectFirst);
app.addProject(projectSecond);
app.addProject(projectThird);
console.log(app);
