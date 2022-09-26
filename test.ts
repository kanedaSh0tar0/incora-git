import { App, Project, Task, User} from "./app"

// CREATE APP
const app = new App('testApp')


// CREATE PROJECTS
const projectFirst = new Project()
const projectSecond = new Project()
const projectThird = new Project()


// CREATE DEVELOPERS
const charles = new User('Charles')
const henry = new User('Henry')


// CREATE TASKS
const taskFirst = new Task(10, charles, 'taskFirst')
const taskSecond = new Task(5, charles, 'taskSecond')
const taskThird = new Task(15, charles, 'taskThird')
const taskFourth = new Task(120, charles, 'taskFourth')
const taskFifth = new Task(25, henry, 'taskFifth')
const taskSixth = new Task(30, henry, 'taskSixth')


// USE PROJECTS
projectFirst.addTask(taskFirst)
projectFirst.addTask(taskFifth)
projectFirst.addTask(taskThird)
projectFirst.addTask(taskSixth)

projectSecond.addTask(taskFourth)
projectSecond.addTask(taskFifth)
projectSecond.addTask(taskSixth)

projectThird.addTask(taskFirst)
projectThird.addTask(taskThird)
projectThird.addTask(taskFifth)

projectThird.deleteTask(taskFirst.id)
projectThird.editTask(taskFourth)
console.log(projectThird)

console.log(projectFirst.getTotalTime())
console.log(projectFirst.getAllTasksByDeveloper(henry.id))


// USE TASK
console.log(taskFirst.getInfo())
console.log(taskSecond.getInfo())
console.log(taskFourth.getInfo())


// USE APP
app.setName('testAppNew')

app.addProject(projectFirst)
app.addProject(projectSecond)
app.addProject(projectThird)

console.log(app)