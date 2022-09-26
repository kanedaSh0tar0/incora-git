import { IApp, IProject, ITask, IUser } from "./interfaces"

export class App implements IApp {
    projects: IProject[] = []

    constructor(public name: string) {
        this.name = name
    }

    setName(newName: string): void {
        this.name = newName
    }

    addProject(project: IProject): void {
        this.projects.push(project)
    }
}

export class Project implements IProject {
    tasks: ITask[] = []

    addTask(task: ITask): void {
        this.tasks.push(task)
    }

    editTask(task: ITask): void {
        task.completed = !task.completed 
    }

    deleteTask(id: number): void {
        this.tasks = this.tasks.filter(task => task.id !== id)
    }

    getTotalTime(): number {
        return this.tasks.reduce((accum: number, task: ITask) => accum + task.durationInMin, 0)
    }

    getAllTasksByDeveloper(id: number): ITask[] {
        return this.tasks.filter((task: ITask) => task.developer.id === id)
    }
}

export class Task implements ITask {
    id: number = Math.random()
    completed: boolean = false

    constructor(
        public durationInMin: number, 
        public developer: IUser,
        public title: string
        ) {
            this.durationInMin = durationInMin
            this.developer = developer
            this.title = title
    }

    getInfo(): string {
        return `#${this.id} ${this.title} ${this.completed ? 'completed' : 'not completed'}`
    }
}

export class User implements IUser {
    id: number = Math.random()

    constructor(public name: string) {
        this.name = name
    }
}