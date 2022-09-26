"use strict";
exports.__esModule = true;
exports.User = exports.Task = exports.Project = exports.App = void 0;
var App = /** @class */ (function () {
    function App(name) {
        this.name = name;
        this.projects = [];
        this.name = name;
    }
    App.prototype.setName = function (newName) {
        this.name = newName;
    };
    App.prototype.addProject = function (project) {
        this.projects.push(project);
    };
    return App;
}());
exports.App = App;
var Project = /** @class */ (function () {
    function Project() {
        this.tasks = [];
    }
    Project.prototype.addTask = function (task) {
        this.tasks.push(task);
    };
    Project.prototype.editTask = function (task) {
        task.completed = !task.completed;
    };
    Project.prototype.deleteTask = function (id) {
        this.tasks = this.tasks.filter(function (task) { return task.id !== id; });
    };
    Project.prototype.getTotalTime = function () {
        return this.tasks.reduce(function (accum, task) { return accum + task.durationInMin; }, 0);
    };
    Project.prototype.getAllTasksByDeveloper = function (id) {
        return this.tasks.filter(function (task) { return task.developer.id === id; });
    };
    return Project;
}());
exports.Project = Project;
var Task = /** @class */ (function () {
    function Task(durationInMin, developer, title) {
        this.durationInMin = durationInMin;
        this.developer = developer;
        this.title = title;
        this.id = Math.random();
        this.completed = false;
        this.durationInMin = durationInMin;
        this.developer = developer;
        this.title = title;
    }
    Task.prototype.getInfo = function () {
        return "#".concat(this.id, " ").concat(this.title, " ").concat(this.completed ? 'completed' : 'not completed');
    };
    return Task;
}());
exports.Task = Task;
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        this.id = Math.random();
        this.name = name;
    }
    return User;
}());
exports.User = User;
