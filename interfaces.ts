export interface IApp {
    name: string,
    setName(newName: string): void,
    projects: IProject[],
    addProject(project: IProject): void
}

export interface IProject {
    tasks: ITask[];
    addTask(task: ITask): void;
    editTask(task: Partial<ITask>): void;
    deleteTask(id: number): void;
    getTotalTime(): number;
    getAllTasksByDeveloper(id: number): ITask[];
}

export interface ITask {
    readonly id: number
    title: string
    durationInMin: number
    completed: boolean
    developer: IUser
    getInfo(): string
}

export interface IUser {
    readonly id: number;
    name: string
}